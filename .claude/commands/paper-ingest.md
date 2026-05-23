Fetch, process, and deeply analyse a new academic paper into the RESEARCH_TOPICS repo at C:\Users\admin\Desktop\RESEARCH_TOPICS. TRIGGER when the user provides a paper title, arXiv ID/URL, or GitHub repository URL and wants it added. Downloads ar5iv HTML, LaTeX source, PDF, and all figure images locally; then generates a bilingual Thai-English analysis HTML.

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

1. **`papers/{base_name}.html`** — full ar5iv LaTeX-rendered HTML. Read the entire file.
2. **`papers/{base_name}_tex/`** — LaTeX source. Start with `main.tex` or the largest `.tex` file. Gives raw equations, algorithm pseudocode, and author comments not visible in rendered HTML.
3. **`papers/{base_name}.json`** — metadata (title, authors, abstract, figure captions).
4. **PDF** — fallback if `ar5iv_available: false`.

Focus on: methodology (exact architecture, training, loss functions), figure/table captions (key numbers), limitations & future work, related work.

---

## Step 3 — Generate the analysis HTML

Create `docs/synthesis/{base_name}-analysis.html`.

**Language:** Thai-English mixed — Thai for narrative/commentary, English for technical terms, model names, benchmark names, metrics, and direct quotes.

**CSS:** `<link rel="stylesheet" href="../../assets/summary.css">` (relative from `docs/synthesis/`).

### HTML Template

```html
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{Title} — Paper Analysis</title>
<link rel="stylesheet" href="../../assets/summary.css">
</head>
<body>

<!-- NAV -->
<nav class="top-nav">
<div class="container">
  <a class="nav-brand" href="#">✦ <span>Research</span> Notes</a>
  <ul class="nav-links">
    <li><a href="#overview">Overview</a></li>
    <li><a href="#methodology">Methodology</a></li>
    <li><a href="#results">Results</a></li>
    <li><a href="#thesis">Thesis</a></li>
  </ul>
</div>
</nav>

<!-- HERO -->
<section class="hero">
<div class="container">
  <h1>{Full Paper Title}</h1>
  <p class="subtitle">{1-2 sentence Thai summary}</p>
  <div class="hero-meta">
    <span class="badge">{Author1}, {Author2} et al.</span>
    <span class="badge coral">{Venue} {Year}</span>
    <span class="badge"><a href="https://arxiv.org/abs/{arxiv_id}" style="color:inherit">arXiv:{arxiv_id}</a></span>
  </div>
</div>
</section>

<!-- OVERVIEW -->
<section class="section" id="overview">
<div class="container">
<div class="section-header"><span class="overline">Abstract & Contributions</span><h2>ภาพรวม</h2></div>

<div class="detail-block">
<div class="detail-header"><span class="num">!</span><h3>ปัญหาที่ Paper นี้แก้</h3></div>
<div class="detail-body">
<div class="key-box"><ul><li>...</li></ul></div>
</div>
</div>

<div class="detail-block">
<div class="detail-header"><span class="num">★</span><h3>Key Contributions</h3></div>
<div class="detail-body">
<ul>
  <li><strong>Contribution 1:</strong> ...</li>
  <li><strong>Contribution 2:</strong> ...</li>
</ul>
</div>
</div>
</div>
</section>

<!-- METHODOLOGY -->
<section class="section section-alt" id="methodology">
<div class="container">
<div class="section-header"><span class="overline">How It Works</span><h2>Methodology</h2></div>
<div class="detail-block">
<div class="detail-header"><span class="num">1</span><h3>Architecture Overview</h3></div>
<div class="detail-body">
<div class="method-box">
<span class="label">Pipeline</span>
<p>{Overall pipeline in Thai}</p>
</div>
<!-- Add one detail-block per sub-component -->
</div>
</div>
</div>
</section>

<!-- RESULTS -->
<section class="section" id="results">
<div class="container">
<div class="section-header"><span class="overline">Experiments</span><h2>Results & Benchmarks</h2></div>
<div class="detail-block">
<div class="detail-body">
<table class="comparison-table">
<thead><tr><th>Model</th><th>Dataset</th><th>Metric</th><th>Score</th></tr></thead>
<tbody><tr><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody>
</table>
<div class="key-box teal"><h5>Key Numbers</h5><ul><li>...</li></ul></div>
</div>
</div>
</div>
</section>

<!-- LIMITATIONS -->
<section class="section section-alt" id="limitations">
<div class="container">
<div class="section-header"><span class="overline">Gaps & Future Work</span><h2>ข้อจำกัดและทิศทางต่อไป</h2></div>
<div class="detail-block"><div class="detail-body">
<div class="key-box amber"><h5>Limitations</h5><ul><li>...</li></ul></div>
</div></div>
</div>
</section>

<!-- THESIS RELEVANCE -->
<section class="section section-dark" id="thesis">
<div class="container">
<div class="section-header"><span class="overline">Connection to My Research</span><h2>ความเกี่ยวข้องกับวิทยานิพนธ์</h2></div>
<div class="synthesis-grid">
  <div class="synthesis-card"><h4>What I Borrow</h4><p>...</p></div>
  <div class="synthesis-card"><h4>Where I Diverge</h4><p>...</p></div>
  <div class="synthesis-card"><h4>Open Questions</h4><p>...</p></div>
</div>
</div>
</section>

<footer class="footer">
<div class="container">
  <p>Analysis generated {date} · arXiv:{arxiv_id}</p>
</div>
</footer>
</body>
</html>
```

Fill every section with real content. Do not leave placeholder text.

---

## Step 4 — Commit

```bash
git add papers/{base_name}.html papers/{base_name}.pdf papers/{base_name}.json
git add papers/{base_name}_tex/
git add assets/papers/{base_name}/
git add docs/synthesis/{base_name}-analysis.html
git commit -m "feat: add {base_name} paper + analysis"
```

---

## Fallbacks

**ar5iv not available** (new paper < 2 weeks old): set `ar5iv_available: false`, download PDF only. Read PDF with the Read tool; note "ar5iv rendering not yet available" in the analysis HTML.

**GitHub code-only** (no arXiv link in README): `status: github_code_only`. Generate a code architecture summary at `docs/synthesis/{repo-name}-code-arch.html`. Sections: Purpose → Directory structure → Key modules/algorithms → Usage → Thesis relevance.

---

## Verification Checklist

- [ ] `papers/{base_name}.html` — all `<img src>` start with `../assets/papers/`
- [ ] `assets/papers/{base_name}/` — PNG files present, count matches `image_count`
- [ ] `papers/{base_name}.pdf` — non-zero bytes
- [ ] `papers/{base_name}_tex/` — at least one `.tex` file
- [ ] `docs/synthesis/{base_name}-analysis.html` — renders correctly in browser, all sections filled
- [ ] `papers/{base_name}.json` — valid JSON with title, authors, abstract

---

## File Placement

```
papers/          → {N}-{Slug}_{Year}.html  .pdf  .json  _tex/
assets/papers/   → {N}-{Slug}_{Year}/  (figure images)
docs/synthesis/  → {N}-{Slug}_{Year}-analysis.html
```

Naming: `<N>-<CamelCaseSlug>_<Year>` — N is the next sequential number from `papers/`.
