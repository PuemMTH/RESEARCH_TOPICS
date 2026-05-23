---
name: html
description: This skill should be used when the user asks to create/generate HTML artifacts, visual output, slide presentations, flowcharts, status/incident reports, PR write-ups, design systems, component galleries, SVG illustrations, prototype animations, triage boards, feature flag UIs, or any rich self-contained document. Also trigger on "make a page for", "build a dashboard", "create a report", or any request for visual/interactive output. SKIP for plain text, JSON/CSV, or when user explicitly wants a framework project.
version: 1.0.0
---

# HTML Artifacts — Reference Guide

Every artifact must be **fully self-contained**: one `.html` file, zero CDN links, zero build steps. Open directly in any browser.

## Design Token System (use in every artifact)

```css
:root {
  --ivory:  #FAF9F5;   /* page background */
  --paper:  #FFFFFF;   /* card/panel background */
  --slate:  #141413;   /* primary text */
  --clay:   #D97757;   /* accent / highlight */
  --clay-d: #B85C3E;   /* accent darker (hover) */
  --oat:    #E3DACC;   /* subtle divider */
  --olive:  #788C5D;   /* secondary accent */
  --g100:   #F0EEE6;
  --g200:   #E6E3DA;
  --g300:   #D1CFC5;
  --g500:   #87867F;   /* muted text */
  --g700:   #3D3D3A;   /* secondary text */

  --serif: ui-serif, Georgia, "Times New Roman", serif;
  --sans:  system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --mono:  ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--ivory); color: var(--slate); font-family: var(--sans); -webkit-font-smoothing: antialiased; }
```

## Example Catalog

Reference files are in `examples/` (same directory as this skill file).

| # | File | Use When |
|---|------|----------|
| 01 | `01-exploration-code-approaches.html` | Comparing multiple implementation approaches side-by-side |
| 02 | `02-exploration-visual-designs.html` | Exploring visual design variants / mood boards |
| 03 | `03-code-review-pr.html` | PR diff view with inline comments and review summary |
| 04 | `04-code-understanding.html` | Annotated code walkthrough / explainer |
| 05 | `05-design-system.html` | Design system showcase — colors, typography, components |
| 06 | `06-component-variants.html` | Component state gallery (default, hover, disabled, error…) |
| 07 | `07-prototype-animation.html` | Animated UI prototype (CSS/JS transitions) |
| 08 | `08-prototype-interaction.html` | Interactive prototype with state and click handlers |
| 09 | `09-slide-deck.html` | Scroll-snap slide deck (100vh per slide, keyboard nav) |
| 10 | `10-svg-illustrations.html` | Inline SVG diagrams and illustrations |
| 11 | `11-status-report.html` | Weekly/sprint status report with metrics and progress |
| 12 | `12-incident-report.html` | Incident post-mortem with timeline and action items |
| 13 | `13-flowchart-diagram.html` | Process flowchart / decision tree (SVG-based) |
| 14 | `14-research-feature-explainer.html` | Feature deep-dive research doc with diagrams |
| 15 | `15-research-concept-explainer.html` | Concept explainer with progressive disclosure |
| 16 | `16-implementation-plan.html` | Phased implementation plan with tasks and owners |
| 17 | `17-pr-writeup.html` | PR description with context, diff summary, test plan |
| 18 | `18-editor-triage-board.html` | Interactive triage board (drag/filter/edit) |
| 19 | `19-editor-feature-flags.html` | Feature flag management UI |
| 20 | `20-editor-prompt-tuner.html` | Interactive prompt editor/tuner UI |

## How to Use Examples

When producing a new artifact:
1. **Identify** which example file matches the request (use table above)
2. **Read** that file from `.claude/skills/html/examples/<file>` to study its layout and patterns
3. **Adapt** — replace content, keep structure and design tokens
4. Always produce **one complete `.html` file** — never split into separate CSS/JS files

## Key Patterns by Type

### Slide Deck
```css
body { scroll-snap-type: y mandatory; overflow-x: hidden; }
.slide { width: 100vw; height: 100vh; scroll-snap-align: start; scroll-snap-stop: always; }
```
Add keyboard nav: `ArrowDown`/`ArrowUp` scroll to next/prev `.slide`.

### Status / Incident Reports
- Sidebar nav with `position: sticky; top: 24px`
- Section anchors (`id="..."`) for in-page links
- Colored status badges: green `--olive`, amber `#C07D3A`, red `#B04A3F`

### Interactive Editors
- Vanilla JS only — `contenteditable`, `<input>`, `<select>`, `<textarea>`
- No React/Vue/Alpine — zero dependencies
- Local state via JS variables; persist with `localStorage` if helpful

### Flowcharts / Diagrams
- Inline `<svg>` with explicit `viewBox`
- `<marker id="arrow">` for arrowheads, referenced via `marker-end="url(#arrow)"`
- `<foreignObject>` for HTML labels inside SVG

### Code Review UI
- Side-by-side or unified diff using `<pre>` blocks
- Line numbers via `::before` pseudo-elements and CSS `counter`
- Highlight added lines `background: #e6ffed`, removed `background: #ffeef0`

### Design System / Component Galleries
- Token swatches: small colored boxes + hex label
- Component states in a grid: default → hover → active → disabled → error
- Typography scale with `clamp()` font sizes

## Rules

- No `<link rel="stylesheet" href="...">` to external files
- No `<script src="https://...">` CDN imports
- Inline all icons as SVG `<symbol>` + `<use>`
- Use `clamp()` for responsive font sizes: `font-size: clamp(14px, 2vw, 18px)`
- Prefer `display: grid` and `display: flex` over absolute positioning
- Copyright line: `<!-- Copyright 2026 · Apache-2.0 -->`
- Eyebrow labels: `font-family: var(--mono); font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase`
