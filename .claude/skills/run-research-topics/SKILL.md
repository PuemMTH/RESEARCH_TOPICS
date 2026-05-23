---
name: run-research-topics
description: Run, serve, and smoke-test the RESEARCH_TOPICS content locally. Use when asked to run, start, browse, preview, or verify the paper summaries and HTML artifacts in this repo.
version: 1.0.0
---

# run-research-topics

Serves all HTML and PDF artifacts from the repo root over a local HTTP server (port 8788 by default), then verifies every file in `papers/` and `docs/` returns HTTP 200.

Driver: `.claude/skills/run-research-topics/smoke.mjs`
Runtime: Node.js v25+ (already installed — `node --version` to confirm)

---

## Prerequisites

```powershell
node --version   # must be v18+; v25.8.0 confirmed working
```

No `npm install` needed. Driver uses only Node built-ins + `npx serve` (downloaded on first run).

---

## Run (agent path)

```powershell
cd C:\Users\admin\Desktop\RESEARCH_TOPICS
node .claude/skills/run-research-topics/smoke.mjs
```

Output when everything passes:

```
Serving C:/Users/admin/Desktop/RESEARCH_TOPICS/
Local: http://localhost:8788

  ✓ 200  /papers/1-SciCap_2021.html
  ✓ 200  /papers/1-SciCap_2021.pdf
  ...
  ✓ 200  /docs/synthesis/paper-synthesis.html
  ✓ 200  /docs/synthesis/papers-summary.pdf

13 passed, 0 failed

Server running at http://localhost:8788  (Ctrl-C to stop)
```

Server stays up for manual browsing after the smoke-check passes. Exits with code 1 if any file returns non-200.

**Custom port:**

```powershell
node .claude/skills/run-research-topics/smoke.mjs --port 9000
```

---

## Run (human path)

```powershell
cd C:\Users\admin\Desktop\RESEARCH_TOPICS
npx serve -p 8788 .
```

Open `http://localhost:8788` in a browser. Ctrl-C to stop.

---

## What gets served

| Path | Content |
|------|---------|
| `/papers/*.html` | Paper HTML summaries (5 papers) |
| `/papers/*.pdf` | Paper PDFs (5 papers + 1 raw deck) |
| `/docs/synthesis/paper-synthesis.html` | Cross-paper HTML synthesis |
| `/docs/synthesis/papers-summary.pdf` | LaTeX-compiled PDF summary |
| `/assets/summary.css` | Stylesheet for synthesis HTML |

Note: `paper-synthesis.html` loads `../../assets/summary.css` — the CSS resolves correctly when served from the repo root. Opening the file directly in a browser (file://) breaks the stylesheet path.

---

## Compile LaTeX → PDF

See `/latex` skill. Short form:

```powershell
$src = Get-Content "docs/synthesis/papers-summary.tex" -Raw
$body = @{ source = $src; engine = "lualatex" } | ConvertTo-Json -Depth 2
Invoke-WebRequest -Uri "http://localhost:3001/compile" -Method POST `
  -ContentType "application/json" -Body $body `
  -OutFile "docs/synthesis/papers-summary.pdf"
```

Requires latex-server running: `docker ps --filter name=latex-server`

---

## Gotchas

- **`npx serve -s .` returns 404 for HTML files** — the `-s` flag enables SPA mode which rewrites all paths to `index.html`. Use `npx serve .` (no `-s`) for a static file repo.
- **`paper-synthesis.html` stylesheet breaks when opened directly** — the `<link href="../../assets/summary.css">` path is relative to `docs/synthesis/`. Only works correctly when served from repo root via HTTP.
- **`smoke.mjs` path on Windows** — `path.join` uses backslashes internally; the driver tracks URL paths separately using forward-slash concatenation to avoid mixing separators into HTTP URLs.
- **First run downloads `serve`** — `npx serve` fetches the package on first invocation (~1s). Subsequent runs use the npx cache.
