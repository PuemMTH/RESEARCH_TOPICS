# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

Research notes and papers repository. Content is primarily Markdown documents — literature reviews, paper summaries, and topic notes.

## Directory Layout

- `src/` — scripts or reusable modules (when added)
- `tests/` — tests mirroring `src/` layout
- `docs/` — research notes, design decisions, contributor docs
- `data/` — small sample inputs only; do not commit large datasets or generated artifacts
- `assets/` — static images, diagrams, media used by docs

Add a short `README.md` inside any new subdirectory whose setup or usage is not obvious.

## File Naming

Use lowercase, hyphenated names for documentation files and directories (e.g., `research-summary.md`). Keep files focused: one topic per file.

## Build & Test

No tooling configured yet. When a language runtime is added, document commands here. Prefer `make test`, `make lint`, `make build` from the repo root.

## Commit Style

Concise imperative messages: `Add topic index`, `Document dataset workflow`. Commit directly to `main`.

## Security

Do not commit secrets, tokens, private keys, large raw datasets, or local machine paths. Use `.gitignore` for caches, virtual environments, and generated outputs.
