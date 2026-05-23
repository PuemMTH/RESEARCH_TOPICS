#!/usr/bin/env python3
"""
fetch_paper.py — Paper ingestion script for RESEARCH_TOPICS repo.

Usage:
    python src/fetch_paper.py <arxiv_id_or_url_or_github_url> [--slug SLUG] [--year YEAR] [--force] [--dry-run]

Examples:
    python src/fetch_paper.py 2212.10505
    python src/fetch_paper.py https://arxiv.org/abs/2212.10505
    python src/fetch_paper.py https://github.com/google-research/google-research
"""

import argparse
import base64
import json
import re
import sys
import tarfile
import io
from pathlib import Path

import httpx
from bs4 import BeautifulSoup

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------

REPO_ROOT    = Path(__file__).parent.parent
PAPERS_DIR   = REPO_ROOT / "papers"
ASSETS_DIR   = REPO_ROOT / "assets" / "papers"
SRC_DIR      = REPO_ROOT / "src"

AR5IV_BASE   = "https://ar5iv.labs.arxiv.org/html/{arxiv_id}"
ARXIV_PDF    = "https://arxiv.org/pdf/{arxiv_id}.pdf"
ARXIV_EPRINT = "https://arxiv.org/e-print/{arxiv_id}"
ARXIV_ABS    = "https://arxiv.org/abs/{arxiv_id}"
GITHUB_API   = "https://api.github.com/repos/{owner}/{repo}/readme"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (research-repo-fetcher/1.0; academic use)",
}


# ---------------------------------------------------------------------------
# Utility helpers
# ---------------------------------------------------------------------------

def log(msg: str):
    print(f"[fetch_paper] {msg}", file=sys.stderr)


def normalize_arxiv_id(raw: str) -> str | None:
    """Extract bare arXiv ID (YYMM.NNNNN) from any URL or string form."""
    match = re.search(r"(\d{4}\.\d{4,5})", raw)
    if match:
        return match.group(1)
    return None


def is_github_url(raw: str) -> bool:
    return "github.com" in raw


def next_paper_number() -> int:
    """Return the next sequential paper number by scanning papers/ for any numbered file."""
    numbers = []
    for ext in ("*.html", "*.pdf", "*.json"):
        for f in PAPERS_DIR.glob(ext):
            m = re.match(r"^(\d+)-", f.stem)
            if m:
                numbers.append(int(m.group(1)))
    return max(numbers) + 1 if numbers else 1


def make_slug(title: str) -> str:
    """Short slug from title (up to the first colon/dash separator), preserving original casing."""
    base = re.split(r"[:\-–—]", title)[0].strip()
    words = re.findall(r"[A-Za-z0-9]+", base)
    stopwords = {"a", "an", "the", "of", "for", "in", "on", "at", "to", "and", "or"}
    significant = [w for w in words if w.lower() not in stopwords]
    # Preserve original casing (e.g. DePlot, SciCap, RAG)
    slug = "".join(significant[:3])
    return slug or "Paper"


def existing_arxiv_ids() -> set[str]:
    """Collect arXiv IDs already stored (from paper JSON files)."""
    ids = set()
    for f in PAPERS_DIR.glob("*.json"):
        try:
            data = json.loads(f.read_text(encoding="utf-8"))
            if aid := data.get("arxiv_id"):
                ids.add(aid)
        except Exception:
            pass
    return ids


# ---------------------------------------------------------------------------
# ar5iv / arXiv fetching
# ---------------------------------------------------------------------------

def fetch_ar5iv_html(arxiv_id: str) -> tuple[str | None, int]:
    """Fetch the ar5iv LaTeX-rendered HTML for the paper."""
    url = AR5IV_BASE.format(arxiv_id=arxiv_id)
    try:
        resp = httpx.get(url, headers=HEADERS, timeout=30, follow_redirects=True)
        if resp.status_code == 200:
            return resp.text, 200
        log(f"ar5iv returned {resp.status_code} for {arxiv_id}")
        return None, resp.status_code
    except Exception as e:
        log(f"ar5iv fetch error: {e}")
        return None, 0


def fetch_pdf(arxiv_id: str, dest: Path) -> bool:
    """Download arXiv PDF."""
    url = ARXIV_PDF.format(arxiv_id=arxiv_id)
    try:
        with httpx.stream("GET", url, headers=HEADERS, timeout=60, follow_redirects=True) as resp:
            if resp.status_code != 200:
                log(f"PDF download failed: HTTP {resp.status_code}")
                return False
            dest.parent.mkdir(parents=True, exist_ok=True)
            with open(dest, "wb") as fh:
                for chunk in resp.iter_bytes(chunk_size=65536):
                    fh.write(chunk)
        log(f"PDF saved → {dest.relative_to(REPO_ROOT)}")
        return True
    except Exception as e:
        log(f"PDF download error: {e}")
        return False


def fetch_latex_source(arxiv_id: str, tex_dir: Path) -> bool:
    """Download arXiv e-print tarball and extract .tex files."""
    url = ARXIV_EPRINT.format(arxiv_id=arxiv_id)
    try:
        resp = httpx.get(url, headers=HEADERS, timeout=60, follow_redirects=True)
        if resp.status_code != 200:
            log(f"LaTeX source not available: HTTP {resp.status_code}")
            return False

        content = resp.content
        # arXiv e-prints are gzip-compressed tarballs (or sometimes plain .tex)
        try:
            tf = tarfile.open(fileobj=io.BytesIO(content))
            tex_dir.mkdir(parents=True, exist_ok=True)
            tex_count = 0
            for member in tf.getmembers():
                if member.name.endswith(".tex") or member.name.endswith(".bbl"):
                    f = tf.extractfile(member)
                    if f:
                        safe_name = Path(member.name).name
                        out_path = tex_dir / safe_name
                        out_path.write_bytes(f.read())
                        tex_count += 1
            log(f"LaTeX source: {tex_count} .tex/.bbl files → {tex_dir.relative_to(REPO_ROOT)}")
            return tex_count > 0
        except tarfile.TarError:
            # Plain .tex file (no tarball)
            tex_dir.mkdir(parents=True, exist_ok=True)
            out_path = tex_dir / "main.tex"
            out_path.write_bytes(content)
            log(f"LaTeX source (plain): saved → {out_path.relative_to(REPO_ROOT)}")
            return True
    except Exception as e:
        log(f"LaTeX source fetch error: {e}")
        return False


# ---------------------------------------------------------------------------
# HTML parsing & metadata extraction
# ---------------------------------------------------------------------------

def extract_metadata(soup: BeautifulSoup, arxiv_id: str) -> dict:
    """Parse ar5iv HTML and return structured metadata."""
    # Title
    title_tag = soup.find(class_="ltx_title") or soup.find("h1")
    title = title_tag.get_text(separator=" ", strip=True) if title_tag else "Unknown Title"
    # Strip arXiv ID prefix if present (ar5iv sometimes prepends "[2212.10505] ")
    title = re.sub(r"^\[\d{4}\.\d{4,5}\]\s*", "", title)

    # Authors
    authors = []
    for creator in soup.find_all(class_="ltx_creator"):
        name_tag = creator.find(class_="ltx_personname")
        if name_tag:
            authors.append(name_tag.get_text(strip=True))

    # Abstract
    abstract_div = soup.find(class_="ltx_abstract")
    abstract = ""
    if abstract_div:
        abstract = abstract_div.get_text(separator=" ", strip=True)
        abstract = re.sub(r"^Abstract\s*", "", abstract, flags=re.IGNORECASE).strip()

    # Year from arXiv ID (YYMM → 20YY)
    year_match = re.match(r"^(\d{2})\d{2}\.", arxiv_id)
    year = f"20{year_match.group(1)}" if year_match else "Unknown"

    # Figure captions
    figures = []
    for fig in soup.find_all("figure", class_=re.compile("ltx_figure")):
        img_tag = fig.find("img")
        cap_tag = fig.find("figcaption")
        if img_tag or cap_tag:
            figures.append({
                "id": fig.get("id", ""),
                "caption": cap_tag.get_text(strip=True) if cap_tag else "",
                "src": img_tag.get("src", "") if img_tag else "",
            })

    return {
        "arxiv_id": arxiv_id,
        "title": title,
        "authors": authors,
        "abstract": abstract,
        "year": year,
        "figure_count": len(figures),
        "figure_captions": figures,
    }


# ---------------------------------------------------------------------------
# Image downloading & src rewriting
# ---------------------------------------------------------------------------

def _is_paper_figure_url(src: str, arxiv_id: str) -> bool:
    """True only for paper figure images (not ar5iv UI chrome)."""
    marker = f"/html/{arxiv_id}/assets/"
    # Absolute ar5iv URL
    if f"ar5iv.labs.arxiv.org{marker}" in src:
        return True
    # Relative URL from ar5iv HTML
    if src.startswith(marker) or src.startswith(f"https://ar5iv.labs.arxiv.org{marker}"):
        return True
    return False


def download_images(soup: BeautifulSoup, arxiv_id: str, img_dir: Path) -> dict[str, str]:
    """
    Download all paper figure images. Returns {original_src: local_relative_path}.
    """
    img_dir.mkdir(parents=True, exist_ok=True)
    url_to_local: dict[str, str] = {}
    downloaded = 0
    skipped = 0

    for img in soup.find_all("img"):
        src = img.get("src", "")
        if not src or not _is_paper_figure_url(src, arxiv_id):
            continue

        # Build absolute URL
        if src.startswith("/"):
            abs_url = "https://ar5iv.labs.arxiv.org" + src
        elif src.startswith("http"):
            abs_url = src
        else:
            continue

        filename = Path(abs_url.split("?")[0]).name
        dest = img_dir / filename

        if dest.exists():
            # Already downloaded (idempotent re-runs)
            url_to_local[src] = str(dest.relative_to(REPO_ROOT))
            skipped += 1
            continue

        try:
            resp = httpx.get(abs_url, headers=HEADERS, timeout=30, follow_redirects=True)
            if resp.status_code == 200:
                dest.write_bytes(resp.content)
                url_to_local[src] = str(dest.relative_to(REPO_ROOT))
                downloaded += 1
            else:
                log(f"Image download failed ({resp.status_code}): {abs_url}")
        except Exception as e:
            log(f"Image download error {abs_url}: {e}")

    log(f"Images: {downloaded} downloaded, {skipped} already cached, total {len(url_to_local)}")
    return url_to_local


def rewrite_img_srcs(soup: BeautifulSoup, url_to_local: dict[str, str], from_papers_dir: bool = True) -> BeautifulSoup:
    """
    Rewrite img src to relative local paths.
    from_papers_dir=True → path is relative from papers/ (i.e. ../assets/papers/...)
    """
    for img in soup.find_all("img"):
        src = img.get("src", "")
        if src in url_to_local:
            local_rel = url_to_local[src]  # e.g. assets/papers/7-DePlot_2023/x1.png
            if from_papers_dir:
                # papers/7-DePlot_2023.html → ../assets/papers/7-DePlot_2023/x1.png
                img["src"] = "../" + local_rel.replace("\\", "/")
            else:
                img["src"] = local_rel.replace("\\", "/")
    return soup


# ---------------------------------------------------------------------------
# GitHub handling
# ---------------------------------------------------------------------------

def fetch_github_readme(repo_url: str) -> tuple[str | None, list[str]]:
    """
    Fetch README from a GitHub repo URL.
    Returns (readme_text, [arxiv_ids_found]).
    """
    # Parse owner/repo from URL like https://github.com/owner/repo[/...]
    m = re.match(r"https?://github\.com/([^/]+)/([^/]+)", repo_url)
    if not m:
        log(f"Cannot parse GitHub URL: {repo_url}")
        return None, []

    owner, repo = m.group(1), m.group(2)
    api_url = GITHUB_API.format(owner=owner, repo=repo)

    try:
        resp = httpx.get(api_url, headers={**HEADERS, "Accept": "application/vnd.github.v3+json"}, timeout=20)
        if resp.status_code != 200:
            log(f"GitHub API returned {resp.status_code}")
            return None, []

        data = resp.json()
        readme_text = base64.b64decode(data["content"]).decode("utf-8", errors="replace")

        # Find arXiv IDs in README
        arxiv_ids = re.findall(r"arxiv\.org/(?:abs|pdf)/(\d{4}\.\d{4,5})", readme_text)
        arxiv_ids = list(dict.fromkeys(arxiv_ids))  # deduplicate, preserve order
        log(f"GitHub README fetched for {owner}/{repo}. arXiv IDs found: {arxiv_ids or 'none'}")
        return readme_text, arxiv_ids
    except Exception as e:
        log(f"GitHub fetch error: {e}")
        return None, []


# ---------------------------------------------------------------------------
# Main arxiv ingestion flow
# ---------------------------------------------------------------------------

def ingest_arxiv(arxiv_id: str, slug_override: str | None, year_override: str | None,
                 force: bool, dry_run: bool) -> dict:
    """Full ingestion pipeline for one arXiv paper."""

    # Duplicate check
    if not force:
        existing = existing_arxiv_ids()
        if arxiv_id in existing:
            return {"status": "duplicate", "arxiv_id": arxiv_id,
                    "message": f"Paper {arxiv_id} already ingested. Use --force to re-process."}

    paper_num = next_paper_number()

    # Step 1: Fetch ar5iv HTML
    html_text, status = fetch_ar5iv_html(arxiv_id)
    ar5iv_available = html_text is not None

    soup = None
    metadata: dict = {"arxiv_id": arxiv_id, "title": "Unknown", "authors": [], "abstract": "",
                       "year": "Unknown", "figure_count": 0, "figure_captions": []}

    if ar5iv_available:
        soup = BeautifulSoup(html_text, "lxml")
        metadata = extract_metadata(soup, arxiv_id)

    # Resolve slug and year
    slug = slug_override or make_slug(metadata["title"])
    year = year_override or metadata["year"]
    base_name = f"{paper_num}-{slug}_{year}"

    log(f"Paper #{paper_num}: {base_name} (arXiv:{arxiv_id})")

    if dry_run:
        return {"status": "dry_run", "paper_number": paper_num, "slug": slug, "year": year,
                "base_name": base_name, "ar5iv_available": ar5iv_available, "metadata": metadata}

    # Step 2: Download images and rewrite HTML
    images_dir = ASSETS_DIR / base_name
    url_to_local: dict[str, str] = {}
    html_path_rel = f"papers/{base_name}.html"

    if ar5iv_available and soup:
        url_to_local = download_images(soup, arxiv_id, images_dir)
        soup = rewrite_img_srcs(soup, url_to_local)
        html_dest = PAPERS_DIR / f"{base_name}.html"
        html_dest.parent.mkdir(parents=True, exist_ok=True)
        html_dest.write_bytes(soup.encode(formatter="html5"))
        log(f"HTML saved → {html_path_rel}")

    # Step 3: Fetch PDF
    pdf_dest = PAPERS_DIR / f"{base_name}.pdf"
    pdf_ok = fetch_pdf(arxiv_id, pdf_dest)

    # Step 4: Fetch LaTeX source
    tex_dir = PAPERS_DIR / f"{base_name}_tex"
    tex_ok = fetch_latex_source(arxiv_id, tex_dir)

    # Step 5: Save metadata JSON
    metadata["paper_number"] = paper_num
    metadata["slug"] = slug
    metadata["base_name"] = base_name
    json_dest = PAPERS_DIR / f"{base_name}.json"
    json_dest.write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8")
    log(f"Metadata saved → papers/{base_name}.json")

    result = {
        "status": "ok",
        "paper_number": paper_num,
        "slug": slug,
        "year": year,
        "base_name": base_name,
        "html_path": html_path_rel if ar5iv_available else None,
        "pdf_path": f"papers/{base_name}.pdf" if pdf_ok else None,
        "tex_dir": f"papers/{base_name}_tex/" if tex_ok else None,
        "images_dir": f"assets/papers/{base_name}/" if url_to_local else None,
        "image_count": len(url_to_local),
        "ar5iv_available": ar5iv_available,
        "metadata_path": f"papers/{base_name}.json",
        "metadata": metadata,
    }
    return result


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

def main():
    # Ensure UTF-8 output on Windows (avoids cp1252 UnicodeEncodeError for Thai/special chars)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    parser = argparse.ArgumentParser(
        description="Fetch and process an academic paper into the RESEARCH_TOPICS repo."
    )
    parser.add_argument("input", help="arXiv ID, arXiv URL, or GitHub URL")
    parser.add_argument("--slug", help="Override auto-generated short title slug")
    parser.add_argument("--year", help="Override auto-detected year")
    parser.add_argument("--force", action="store_true", help="Re-process even if already ingested")
    parser.add_argument("--dry-run", action="store_true", help="Fetch and parse but don't write files")
    args = parser.parse_args()

    raw = args.input.strip()

    if is_github_url(raw):
        readme_text, arxiv_ids = fetch_github_readme(raw)

        if not arxiv_ids:
            result = {
                "status": "github_code_only",
                "repo_url": raw,
                "readme_text": readme_text or "",
                "next_steps": "Generate code architecture summary — no arXiv paper found in README",
            }
        elif len(arxiv_ids) == 1:
            log(f"GitHub README links to arXiv paper: {arxiv_ids[0]}")
            result = ingest_arxiv(arxiv_ids[0], args.slug, args.year, args.force, args.dry_run)
            result["github_repo"] = raw
        else:
            log(f"Multiple arXiv papers found in README: {arxiv_ids}. Processing first: {arxiv_ids[0]}")
            result = ingest_arxiv(arxiv_ids[0], args.slug, args.year, args.force, args.dry_run)
            result["github_repo"] = raw
            result["other_arxiv_ids"] = arxiv_ids[1:]

    else:
        arxiv_id = normalize_arxiv_id(raw)
        if not arxiv_id:
            print(json.dumps({"status": "error", "message": f"Could not parse arXiv ID from: {raw}"}))
            sys.exit(1)
        result = ingest_arxiv(arxiv_id, args.slug, args.year, args.force, args.dry_run)

    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
