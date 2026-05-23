# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Research notes and papers repository. Content is primarily Markdown documents — literature reviews, paper summaries, and topic notes.

## Directory Layout

- `papers/` — academic papers and their HTML summaries (PDF + HTML pairs, numbered prefix)
- `docs/` — research notes, design decisions, contributor docs, synthesis documents
- `src/` — scripts or reusable modules (when added)
- `tests/` — tests mirroring `src/` layout
- `data/` — small sample inputs only; do not commit large datasets or generated artifacts
- `assets/` — static images, diagrams, media used by docs

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

Flat — no subfolders. Naming: `<N>-<ShortTitle>_<Year>.<ext>`, PDF and HTML as a pair.  
e.g. `6-MyPaper_2024.pdf` + `6-MyPaper_2024.html`

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

