Fetch and process a new academic paper into the RESEARCH_TOPICS repo at C:\Users\admin\Desktop\RESEARCH_TOPICS. TRIGGER when the user provides a paper title, arXiv ID/URL, or GitHub repository URL and wants it added. Downloads ar5iv HTML, LaTeX source, PDF, and all figure images locally. Use the `/paper-translate` skill afterward if a bilingual translation HTML is wanted.

$ARGUMENTS

---

# Paper Ingest — Full Workflow

## Prerequisites

```bash
pip install -r src/requirements.txt   # httpx, beautifulsoup4, lxml — Python 3.10+
```

---

## Step 1 — Run the fetch script

```bash
pythonw src/fetch_paper.py <input>
```

Where `<input>` is one of:
- Bare arXiv ID: `2212.10505`
- arXiv URL: `https://arxiv.org/abs/2212.10505`
- GitHub URL: `https://github.com/owner/repo`

**Useful flags:**
- `--slug MySlug` — override the auto-generated short title
- `--year 2024` — override the auto-detected year
- `--force` — re-process a paper that was already ingested
- `--dry-run` — fetch + parse without writing any files

**Read the JSON output** from stdout:
- `paper_number` — sequential number assigned (e.g. `7`)
- `base_name` — e.g. `7-DePlot_2022`
- `html_path` — processed HTML with local image paths
- `tex_dir` — extracted `.tex` files (if available)
- `ar5iv_available` — whether ar5iv rendered the paper
- `metadata` — title, authors, abstract, figure captions

`"duplicate"` status → use `--force`. `"github_code_only"` → see fallback section.

---

## Step 2 — Read the source material

1. **`papers/{base_name}_source.html`** — full ar5iv LaTeX-rendered HTML. Read the entire file.
2. **`papers/{base_name}_tex/`** — LaTeX source. Start with `main.tex` or the largest `.tex` file. Gives raw equations, algorithm pseudocode, and author comments not visible in rendered HTML.
3. **`papers/{base_name}.json`** — metadata (title, authors, abstract, figure captions).
4. **PDF** — fallback if `ar5iv_available: false`.

Focus on: methodology (exact architecture, training, loss functions), figure/table captions (key numbers), limitations & future work, related work.

---

## Step 3 — Commit

```bash
git add papers/{base_name}_source.html papers/{base_name}.pdf papers/{base_name}.json
git add papers/{base_name}_tex/
git add assets/papers/{base_name}/
git commit -m "feat: add {base_name} paper"
```

---

## Fallbacks

**ar5iv not available** (new paper < 2 weeks old): set `ar5iv_available: false`, download PDF only. Read PDF with the Read tool; note "ar5iv rendering not yet available" in the analysis HTML.

**GitHub code-only** (no arXiv link in README): `status: github_code_only`. Generate a code architecture summary at `papers/{repo-name}_code-arch.html`. Sections: Purpose → Directory structure → Key modules/algorithms → Usage → Thesis relevance.

---

## Verification Checklist

- [ ] `papers/{base_name}_source.html` — all `<img src>` start with `../assets/papers/`
- [ ] `assets/papers/{base_name}/` — PNG files present, count matches `image_count`
- [ ] `papers/{base_name}.pdf` — non-zero bytes
- [ ] `papers/{base_name}_tex/` — at least one `.tex` file
- [ ] `papers/{base_name}.json` — valid JSON with title, authors, abstract

---

## File Placement

```
papers/          → {N}-{Slug}_{Year}_source.html    (ar5iv source)
                   {N}-{Slug}_{Year}.pdf
                   {N}-{Slug}_{Year}.json
                   {N}-{Slug}_{Year}_tex/           (LaTeX source folder)
assets/papers/   → {N}-{Slug}_{Year}/              (figure images)
```

Naming: `<N>-<CamelCaseSlug>_<Year>` — N is the next sequential number from `papers/`.
