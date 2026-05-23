# src — Paper Ingestion Tools

## fetch_paper.py

Fetches an academic paper from arXiv (or a GitHub repo) and processes it into the repo:

- Downloads ar5iv LaTeX-rendered HTML
- Downloads all paper figure images locally (under `assets/papers/`)
- Rewrites `<img src>` attributes to local relative paths
- Downloads PDF
- Fetches LaTeX source (`.tex` files) from arXiv e-print
- Saves metadata as JSON
- Outputs a JSON summary to stdout for Claude to read and use

### Setup

```bash
pip install -r src/requirements.txt
```

Requires Python 3.10+.

### Usage

```bash
# By arXiv ID
python src/fetch_paper.py 2212.10505

# By arXiv URL
python src/fetch_paper.py https://arxiv.org/abs/2212.10505

# By GitHub URL (auto-detects arXiv links in README)
python src/fetch_paper.py https://github.com/google-research/google-research

# Override slug or year
python src/fetch_paper.py 2212.10505 --slug DePlot --year 2023

# Dry-run (no files written)
python src/fetch_paper.py 2212.10505 --dry-run

# Re-process existing paper
python src/fetch_paper.py 2212.10505 --force
```

### Output

JSON to stdout, e.g.:

```json
{
  "status": "ok",
  "paper_number": 7,
  "slug": "DePlot",
  "year": "2023",
  "base_name": "7-DePlot_2023",
  "html_path": "papers/7-DePlot_2023.html",
  "pdf_path": "papers/7-DePlot_2023.pdf",
  "tex_dir": "papers/7-DePlot_2023_tex/",
  "images_dir": "assets/papers/7-DePlot_2023/",
  "image_count": 8,
  "ar5iv_available": true,
  "metadata_path": "papers/7-DePlot_2023.json",
  "metadata": { "title": "...", "authors": [...], "abstract": "..." }
}
```

Progress logs go to stderr; JSON result goes to stdout.

### Known Limitations

- **New papers (< 2 weeks)**: ar5iv may not have rendered the paper yet. The script falls back to PDF-only mode and sets `ar5iv_available: false`.
- **arXiv rate limits**: Avoid running the script in rapid succession. One paper per run is fine.
- **Private GitHub repos**: GitHub API requires authentication; only public repos are supported without a token.
