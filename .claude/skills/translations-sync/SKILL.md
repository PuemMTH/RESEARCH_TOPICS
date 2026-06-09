---
name: translations-sync
description: Automatically identify, translate, and sync missing technical terms/keywords from papers in the papers/ directory to the global dictionary assets/translations.js. TRIGGER when user wants to update the dictionary, find untranslated keywords, or sync vocabulary.
version: 1.0.0
---

# Translations Sync — Skill

Syncs new technical terms, model names, datasets, and domain-specific phrases from scholarly papers into the global dictionary `assets/translations.js` to enable automatic word-hover translation.

## Workflow

### Step 1 — Run the extraction script

Use the helper script `src/extract_keywords.py` to identify missing keywords. By default, it scans all papers under the `papers/` directory, extracts English terms, and compares them against `assets/translations.js`.

```bash
# Scan all papers
python src/extract_keywords.py

# Scan a specific paper (by paper number or base name)
python src/extract_keywords.py --paper 2-MLBCAP_2025

# Show the top N candidates (default is 30)
python src/extract_keywords.py --paper 2-MLBCAP_2025 --top 50
```

The script prints a list of candidate words and multi-word phrases sorted by frequency. Filter out clean-up noise (like math symbols or punctuation fragments) manually.

---

### Step 2 — Formulate Translations (Semantic Waves)

Translate the candidate keywords into high-quality, academic-level Thai. Apply these guidelines:

1. **Simple Terms** (common academic words/verbs/adjectives)
   - Map to a plain string.
   - Format: `"term": "คำแปล"`
   - Example: `"interactive": "แบบโต้ตอบ"`

2. **Significant Terms** (model names, datasets, or paper-specific concepts)
   - Map to an enriched object containing a Thai translation (`th`) and a Semantic Waves context description (`ctx`).
   - Format:
     ```js
     "TermName": { th: "คำแปลภาษาไทย", ctx: "อุปมา/ตัวอย่าง -> นิยามวิชาการ (Paper #N)" }
     ```
   - **Context (`ctx`) rule**: Unpack the concept with a concrete analogy or simple example first (อุปมา/ตัวอย่าง), then repack it with a formal academic definition. Must be <= 80 characters.
   - Example:
     ```js
     "LSTM": { th: "โมเดล LSTM (Long Short-Term Memory)", ctx: "เหมือนหน่วยความจำที่เลือกได้ว่าจะจำหรือลืมอะไร -> RNN ชนิดพิเศษที่รับมือ long-range dependency ได้ (Paper #1)" }
     ```

---

### Step 3 — Update `assets/translations.js`

1. Open `assets/translations.js`.
2. Locate the appropriate category or paper-specific section at the bottom of the dictionary object.
3. If syncing for a new paper, create a new comment header block:
   ```javascript
   // ── Paper #{N}: {ShortTitle} — new terms ──
   ```
4. Append the new translated keys. Ensure key names match case-sensitively or case-insensitively depending on how they appear in the source text (usually lowercase is preferred unless it is a specific acronym or model name like `GPT-4o` or `MLBCAP`).
5. Verify JavaScript syntax (trailing commas, closing braces, etc.).

---

### Step 4 — Commit

```bash
git add assets/translations.js
git commit -m "docs: sync translations dictionary for Paper #{N}"
```

---

## Verification Checklist

- [ ] Run `python src/extract_keywords.py` again to confirm that the newly added terms no longer appear in the top untranslated list.
- [ ] Open the corresponding `_translations.html` or `_reader.html` file in a browser and hover over the newly added terms in the English column to verify the tooltips display the correct Thai translation and context.
- [ ] Verify the Javascript file structure is valid (no trailing comma syntax errors that break parsing in old browsers).
