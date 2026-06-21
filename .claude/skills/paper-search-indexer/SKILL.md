---
name: paper-search-indexer
description: Automatically sweep, align, and index English-Thai sentences and technical terms from all translated papers in papers/ to assets/translations.js. TRIGGER when the user wants to update the search index, build the search database, sync translated sentences, or compile new bilingual concordance entries.
version: 1.0.0
---

# Paper Search Indexer — Skill

Aligns English and Thai sentences from all translated reader files in the `papers/` directory and compiles them into a client-side search index stored in `assets/translations.js`. This supports instant bilingual concordance searches on the search page.

## Workflow

### Step 1 — Run the indexing script

Use the helper script `src/index_sentences.py` with `uv` to process the translation HTML files, extract aligned sentences, and update `assets/translations.js`.

```bash
# Run the sentence indexing script
uv run python src/index_sentences.py
```

The script will:
1. Scan `papers/*_translations.html` files.
2. Parse the structures and align English and Thai paragraph sentences.
3. Automatically append or update `window.SENTENCES` at the bottom of `assets/translations.js`.

---

### Step 2 — Verify the Updated Index

1. Open `assets/translations.js` to ensure the `window.SENTENCES` block has been successfully populated.
2. Open `papers/search.html` in a web browser.
3. Try searching for terms like "RAG", "caption", "attention", "transformer", or "DePlot".
4. Check that keywords are highlighted correctly in both English and Thai.
5. Click on the "Open Reader" link for any matching sentence to confirm it scrolls to and highlights that exact sentence in the translation file.

---

### Step 3 — Commit the Database Update

```bash
git add assets/translations.js
git commit -m "docs: rebuild bilingual search index and update translations.js"
```
