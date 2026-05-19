# Repository Guidelines

## Project Structure & Module Organization

This repository is currently a fresh scaffold. Keep the structure simple and predictable as content is added:

- `src/` for source code, scripts, or reusable modules.
- `tests/` for automated tests that mirror `src/` layout.
- `docs/` for research notes, design decisions, and contributor-facing documentation.
- `data/` for small sample inputs only. Do not commit large datasets or generated bulk artifacts.
- `assets/` for static images, diagrams, or other media used by documentation or demos.

When adding a new subsystem, include a short `README.md` in that directory if setup or usage is not obvious.

## Build, Test, and Development Commands

No build or test tooling is configured yet. Add commands here when the repository gains a language runtime or package manager. Prefer standard project entry points, for example:

- `make test` to run the full test suite.
- `make lint` to run formatting and lint checks.
- `make build` to create distributable outputs.
- `python -m pytest` for Python tests, if the project uses `pytest`.
- `npm test` for JavaScript or TypeScript tests, if the project uses Node tooling.

Keep commands runnable from the repository root.

## Coding Style & Naming Conventions

Use clear, descriptive names. Prefer lowercase, hyphenated names for documentation files and directories, such as `research-summary.md`. For code, follow the conventions of the selected language and formatter once tooling is introduced.

Keep files focused: one script, module, or topic per file where practical. Avoid committing editor-specific settings unless they are intentionally shared project configuration.

## Testing Guidelines

Place tests under `tests/` and name them after the behavior they verify. Examples: `test_parser.py`, `research-summary.test.ts`, or `test_data_loading.py`.

For new code, include tests for normal behavior and at least one failure or edge case. If a change is documentation-only, verify links and examples manually before submitting.

## Commit & Pull Request Guidelines

This repository has no existing commit history, so use concise, imperative commit messages such as `Add topic index` or `Document dataset workflow`.

Pull requests should include a short summary, the reason for the change, and verification steps. Link related issues when available. Include screenshots only for visual documentation, generated pages, or UI changes.

## Security & Configuration Tips

Do not commit secrets, access tokens, private keys, large raw datasets, or local machine paths. Use `.gitignore` for generated outputs, caches, virtual environments, and temporary files.
