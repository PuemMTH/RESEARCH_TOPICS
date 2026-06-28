#!/usr/bin/env python3
"""
Compile a multi-file LaTeX project via latex-server.

Usage:
    python src/compile_paper.py <tex_dir> [output.pdf] [--engine pdflatex]

The script reads the main .tex file (main.tex or _main.tex), bundles all
sibling .tex/.bbl/.sty/.cls files, and POSTs to http://localhost:3001/compile.
Files referenced via \\input{sections/foo} are resolved by stripping the
subdirectory prefix and looking for foo.tex in the flat directory.

Common conference style files missing from texlive are fetched automatically
from their official sources and bundled in the request.
"""

import argparse
import base64
import json
import sys
import re
import tempfile
import zipfile
import io
from pathlib import Path
import urllib.request
import urllib.error

SERVER = "http://localhost:3001"

# Conference style files not in texlive — fetched on demand
STYLE_SOURCES: dict[str, tuple[str, str | None]] = {
    # name: (url, zip_inner_path or None for direct download)
    "acl.sty": (
        "https://github.com/acl-org/acl-style-files/archive/refs/heads/master.zip",
        "acl-style-files-master/acl.sty",
    ),
    "ACL2023.sty": (
        "https://github.com/acl-org/acl-style-files/archive/refs/heads/master.zip",
        "acl-style-files-master/acl.sty",  # ACL2023 is just the same package
    ),
    "neurips_2019.sty": (
        "https://neurips.cc/Conferences/2019/PaperInformation/StyleFiles",
        None,  # will fall back to a CTAN mirror
    ),
}

_style_cache: dict[str, bytes] = {}


def _fetch_style(name: str) -> bytes | None:
    """Download a conference style file and return its bytes, or None if unavailable."""
    if name in _style_cache:
        return _style_cache[name]
    if name not in STYLE_SOURCES:
        return None
    url, inner = STYLE_SOURCES[name]
    print(f"  Downloading {name} from {url.split('/')[2]} ...")
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        if inner:
            with zipfile.ZipFile(io.BytesIO(data)) as z:
                content = z.read(inner)
        else:
            content = data
        _style_cache[name] = content
        return content
    except Exception as e:
        print(f"  Warning: could not fetch {name}: {e}")
        return None


def find_main(tex_dir: Path) -> Path:
    for name in ("main.tex", "_main.tex"):
        p = tex_dir / name
        if p.exists():
            return p
    candidates = list(tex_dir.glob("*.tex"))
    if len(candidates) == 1:
        return candidates[0]
    raise FileNotFoundError(f"No main.tex or _main.tex found in {tex_dir}")


def collect_files(tex_dir: Path, main: Path) -> list[dict]:
    """Build files[] array: all non-main .tex/.bbl/.sty/.cls in the directory."""
    files = []
    flat = {p.stem: p for p in tex_dir.glob("*.tex") if p != main}

    # Collect all non-main local files; rewrite \input paths in .tex files too
    # Build a map: stem -> rewritten b64 content (for aliases to reuse)
    rewritten_b64: dict[str, str] = {}
    for p in sorted(tex_dir.iterdir()):
        if p == main or not p.is_file():
            continue
        if p.suffix not in (".tex", ".bbl", ".sty", ".cls", ".bst"):
            continue
        if p.suffix == ".tex":
            content = rewrite_inputs(p.read_text(encoding="utf-8", errors="replace"))
            b64 = base64.b64encode(content.encode()).decode()
            rewritten_b64[p.stem] = b64
            files.append({"name": p.name, "content": b64})
        else:
            files.append({"name": p.name, "content": _b64(p)})

    # Read all .tex source (main + chapter files) to find subdir references
    all_tex_src = main.read_text(encoding="utf-8", errors="replace")
    for p in tex_dir.glob("*.tex"):
        if p != main:
            all_tex_src += p.read_text(encoding="utf-8", errors="replace")

    # Add path-aliased versions for \input{subdir/foo} — using the REWRITTEN content
    aliased: set[str] = set()
    for ref in re.findall(r'\\(?:input|include)\{([^}]+)\}', all_tex_src):
        ref_path = Path(ref)
        if len(ref_path.parts) > 1:
            stem = ref_path.stem
            b64 = rewritten_b64.get(stem)
            if b64:
                alias = str(ref_path.with_suffix(".tex")) if not ref_path.suffix else str(ref_path)
                if alias not in aliased:
                    files.append({"name": alias, "content": b64})
                    aliased.add(alias)

    # Detect missing style/class files and attempt to fetch them
    needed = set(re.findall(r'\\usepackage(?:\[[^\]]*\])?\{([^}]+)\}', all_tex_src))
    needed |= set(re.findall(r'\\documentclass(?:\[[^\]]*\])?\{([^}]+)\}', all_tex_src))
    bundled_names = {f["name"] for f in files}
    for pkg in needed:
        for ext in (".sty", ".cls"):
            fname = pkg + ext
            if fname not in bundled_names:
                content = _fetch_style(fname)
                if content:
                    files.append({"name": fname, "content": base64.b64encode(content).decode()})
                    bundled_names.add(fname)
                    # Also add under style/ alias if referenced that way
                    style_alias = f"style/{fname}"
                    if style_alias not in bundled_names:
                        files.append({"name": style_alias, "content": base64.b64encode(content).decode()})
                        bundled_names.add(style_alias)

    return files


def _b64(path: Path) -> str:
    return base64.b64encode(path.read_bytes()).decode()


def rewrite_inputs(source: str) -> str:
    """Flatten \\input{subdir/foo}→\\input{foo} and inject graphicx draft mode."""
    def _strip(m: re.Match) -> str:
        cmd = m.group(1)
        ref = m.group(2)
        ref_path = Path(ref)
        if len(ref_path.parts) > 1:
            ref = ref_path.name
        return f"\\{cmd}{{{ref}}}"
    source = re.sub(r'\\(input|include)\{([^}]+)\}', _strip, source)
    # Inject draft mode for graphicx so missing figures render as placeholder boxes
    source = re.sub(
        r'(\\documentclass(?:\[[^\]]*\])?\{[^}]+\})',
        r'\1\n\\PassOptionsToPackage{draft}{graphicx}',
        source,
        count=1,
    )
    return source


def compile_dir(tex_dir: Path, output: Path, engine: str) -> None:
    main = find_main(tex_dir)
    print(f"Main file : {main.name}")

    source = rewrite_inputs(main.read_text(encoding="utf-8", errors="replace"))
    files = collect_files(tex_dir, main)
    print(f"Bundling  : {len(files)} additional files")
    for f in files:
        print(f"  + {f['name']}")

    payload = json.dumps({
        "source": source,
        "engine": engine,
        "files": files,
    }).encode()

    print(f"Engine    : {engine}")
    print(f"Sending to: {SERVER}/compile ...")

    req = urllib.request.Request(
        f"{SERVER}/compile",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            content_type = resp.headers.get("Content-Type", "")
            body = resp.read()
            if "application/pdf" in content_type:
                output.write_bytes(body)
                print(f"Success   : {output} ({len(body):,} bytes)")
            else:
                # Error response — print compile log
                try:
                    err = json.loads(body)
                    print("Compile error:")
                    print(err.get("log") or err.get("error") or body.decode())
                except Exception:
                    print("Unexpected response:", body[:500].decode(errors="replace"))
                sys.exit(1)
    except urllib.error.HTTPError as e:
        body = e.read()
        try:
            err = json.loads(body)
            print("Compile error:")
            print(err.get("log") or err.get("error") or body.decode())
        except Exception:
            print("HTTP error:", e.code, body[:500].decode(errors="replace"))
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"Cannot reach latex-server at {SERVER}: {e.reason}")
        print("Is the server running? Try: docker ps | grep latex")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(description="Compile multi-file LaTeX via latex-server")
    parser.add_argument("tex_dir", help="Directory containing main.tex / _main.tex")
    parser.add_argument("output", nargs="?", help="Output PDF path (default: <dir>.pdf)")
    parser.add_argument("--engine", default="pdflatex",
                        choices=["pdflatex", "lualatex", "xelatex"],
                        help="LaTeX engine (default: pdflatex)")
    args = parser.parse_args()

    tex_dir = Path(args.tex_dir).resolve()
    if not tex_dir.is_dir():
        print(f"Error: {tex_dir} is not a directory")
        sys.exit(1)

    output = Path(args.output) if args.output else Path(f"{tex_dir.name}.pdf")
    compile_dir(tex_dir, output, args.engine)


if __name__ == "__main__":
    main()
