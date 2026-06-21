# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Research notes and papers repository. Content is primarily Markdown documents — literature reviews, paper summaries, and topic notes.

## Directory Layout

- `papers/` — all paper files in a flat structure: PDF, source HTML, JSON, analysis HTML, reader HTML
- `docs/` — research notes, design decisions, contributor docs, cross-paper synthesis
- `src/` — scripts or reusable modules (when added)
- `tests/` — tests mirroring `src/` layout
- `data/` — small sample inputs only; do not commit large datasets or generated artifacts
- `assets/` — static images, diagrams, CSS, static media

Add a short `README.md` inside any new subdirectory whose setup or usage is not obvious.

## File Placement Rules

**Before creating or saving any file, determine its purpose, then place it inside the correct subfolder — not directly in the top-level folder.**

### `docs/<subfolder>/`

| Subfolder | What goes here |
|---|---|
| `docs/thesis/` | Thesis proposal, direction, chapter drafts |
| `docs/notes/` | Reading lists, keywords, interview prep, project direction |
| `docs/synthesis/` | Cross-paper synthesis, literature reviews, summaries |
| `docs/design/` | Visual design specs, UI/UX notes |

Create a new subfolder if no existing one fits the topic.

### `papers/`

Flat — all paper-related files live here. Naming: `<N>-<ShortTitle>_<Year>_<type>.<ext>` where `_<type>` distinguishes file purpose.

| Type suffix | What it is |
|---|---|
| `_source` | ar5iv source HTML: `6-MyPaper_2024_source.html` |
| `_translations` | bilingual EN\|TH side-by-side HTML: `6-MyPaper_2024_translations.html` |
| *(none)* | PDF and JSON: `6-MyPaper_2024.pdf`, `6-MyPaper_2024.json` |
| `_tex/` | LaTeX source folder (only subfolder allowed): `6-MyPaper_2024_tex/` |

CSS path from `papers/`: `../assets/summary.css`  
Image path from `papers/`: `../assets/papers/{base_name}/`

### Other top-level folders

| Folder | What goes here |
|---|---|
| `assets/` | Images, diagrams, CSS, static media |
| `src/` | Scripts, tools, automation |
| `data/` | Small sample datasets, reference inputs |

**If the target folder/subfolder does not exist, create it before writing the file.**

Never place content files in the project root (only `CLAUDE.md`, `AGENTS.md`, `.gitignore`, `README.md` belong there).

## File Naming

Use lowercase, hyphenated names for documentation files and directories (e.g., `research-summary.md`). Keep files focused: one topic per file.

## Commit Style

Concise imperative messages: `Add topic index`, `Document dataset workflow`. Commit directly to `main`.

