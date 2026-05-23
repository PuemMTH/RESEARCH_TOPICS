# Repository Guidelines

## Project Structure & Module Organization

- `papers/` — academic papers and HTML summaries. Naming: `<N>-<ShortTitle>_<Year>.<ext>` (PDF + HTML pairs).
- `docs/` — research notes, design decisions, and contributor-facing documentation.
- `src/` — source code, scripts, or reusable modules.
- `tests/` — automated tests that mirror `src/` layout.
- `data/` — small sample inputs only. Do not commit large datasets or generated bulk artifacts.
- `assets/` — static images, diagrams, or other media used by documentation or demos.

When adding a new subsystem, include a short `README.md` in that directory if setup or usage is not obvious.

## File Placement Rules

Before creating or saving any file, identify its purpose and route it to the correct folder:

| Purpose | Folder |
|---|---|
| Academic paper (PDF, HTML summary) | `papers/` |
| Research notes, literature reviews, synthesis | `docs/` |
| Scripts, tools, automation | `src/` |
| Images, diagrams, static media | `assets/` |
| Sample datasets, reference inputs | `data/` |

If the target folder does not exist, create it before writing the file. Never place content files in the project root.

## Coding Style & Naming Conventions

Use clear, descriptive names. Prefer lowercase, hyphenated names for documentation files and directories, such as `research-summary.md`. For code, follow the conventions of the selected language and formatter once tooling is introduced.

Keep files focused: one script, module, or topic per file where practical. Avoid committing editor-specific settings unless they are intentionally shared project configuration.

## Available Skills

### `paper-ingest` — Fetch & analyse a new paper

Skill: `/paper-ingest` (spec lives in `~/.claude/commands/paper-ingest.md`)

Trigger this skill when the user provides a paper title, arXiv ID/URL, or GitHub repository URL and wants it added to the repo.

**What it does:**
1. Runs `python src/fetch_paper.py <input>` — fetches ar5iv HTML, LaTeX `.tex` source, PDF, and downloads all figure images to `assets/papers/`
2. Reads the processed HTML + `.tex` files for deep understanding
3. Generates `docs/synthesis/{N}-{Slug}_{Year}-analysis.html` — bilingual Thai-English deep analysis using `assets/summary.css`
4. Commits all artefacts

**Input forms accepted:**
- `2212.10505` or `https://arxiv.org/abs/2212.10505` — bare arXiv ID or URL
- `https://github.com/owner/repo` — GitHub repo (auto-detects arXiv links in README)

**Setup (first run only):**
```bash
pip install -r src/requirements.txt   # httpx, beautifulsoup4, lxml — Python 3.10+
```

---

## Commit & Pull Request Guidelines

This repository has no existing commit history, so use concise, imperative commit messages such as `Add topic index` or `Document dataset workflow`.

Pull requests should include a short summary, the reason for the change, and verification steps. Link related issues when available. Include screenshots only for visual documentation, generated pages, or UI changes.

