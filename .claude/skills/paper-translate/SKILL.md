---
name: paper-translate
description: Generate a full bilingual EN|TH side-by-side translation HTML from a paper source HTML or PDF. Every paragraph, figure, and table gets a Thai translation column. Hover tooltips use assets/translations.js. TRIGGER when user asks to translate a paper, create a bilingual view, or make a side-by-side EN/TH version.
version: 1.0.0
---

# Paper Translate — Skill

Reads a paper's `_source.html` (ar5iv LaTeXML) or PDF in full, then produces a **two-column bilingual HTML** where every content block (paragraph, heading, figure, table) appears as an EN | TH side-by-side row.

## Output

| Artifact | Path |
|---|---|
| Bilingual HTML | `papers/{base_name}_translations.html` |
| Image assets folder | `docs/translate/{base_name}_assets/` (create even if empty) |
| Updated dictionary | `assets/translations.js` — append new terms |

## Step-by-step

### Step A — Resolve input

Accept either:
- A paper number: `14` → scan `papers/` for `14-*_source.html`
- An explicit filename: `14-ChartQA_2022`
- A full path

Derive `base_name` (e.g. `14-ChartQA_2022`).  
Prefer `_source.html` (richer structure). Fall back to the PDF if source HTML is absent.  
Also read the `_analysis.html` or `_reader.html` if available — use it for title, authors, venue, year metadata.

### Step B — Parse content blocks from source HTML

Source HTML is LaTeXML ar5iv format. Walk the DOM in document order and collect these block types:

| Block type | LaTeXML selector | Notes |
|---|---|---|
| `section-heading` | `.ltx_title_section`, `.ltx_title_subsection`, `.ltx_title_subsubsection` | Strip extra whitespace |
| `paragraph` | `div.ltx_para > p`, `p.ltx_p` | Include inline math, inline citations |
| `figure` | `figure.ltx_figure` | Extract `<img src>`, `<figcaption>`, figure label |
| `table` | `figure.ltx_table` | Keep full `<table>` HTML |
| `abstract` | `div.ltx_abstract` | Treat as first paragraph group |

**Inline citations**: keep as `[Author Year]` plain text — do not resolve to full references.  
**Math**: keep LaTeX `$…$` notation unchanged in EN column; omit from TH (Thai prose around it is enough).  
**Skip**: navigation, bibliography `<section class="ltx_bibliography">`, footnotes.

### Step C — Prepare image assets

1. Create `docs/translate/{base_name}_assets/` (mkdir -p).
2. For each `<img src="…">` found:
   - Source path pattern: `../assets/papers/{base_name}/filename.png`
   - Absolute path on disk: `C:/Users/admin/Desktop/RESEARCH_TOPICS/assets/papers/{base_name}/filename.png`
   - **Exists on disk** → use relative path `../../assets/papers/{base_name}/filename.png` in the output HTML (no copy needed)
   - **Missing** → generate an inline SVG dummy (see template below)

**SVG dummy placeholder:**
```html
<svg class="fig-dummy" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="260" fill="#E8E4DC" rx="6"/>
  <text x="200" y="120" text-anchor="middle" fill="#9A9690" font-family="Georgia,serif" font-size="14">Figure N</text>
  <text x="200" y="144" text-anchor="middle" fill="#B0ACA4" font-family="Georgia,serif" font-size="11">[image not available]</text>
</svg>
```
Replace `Figure N` with the actual figure label (e.g. `Figure 2`).

### Step D — Translate each content block to Thai

For every block produce a Thai translation following these rules:

- **Section headings**: translate the title; keep English in parentheses. E.g. `"2. Related Work"` → `"2. งานวิจัยที่เกี่ยวข้อง (Related Work)"`
- **Paragraphs**: full natural Thai prose — not word-for-word. Preserve technical terms in English, adding Thai in parentheses on first use per section. Keep numbers, model names, dataset names unchanged.
- **Figure captions**: translate the full caption. Start with `"รูปที่ N:"`.
- **Table headers**: translate column headers to Thai, keep values (numbers, model names) unchanged.
- **Abstract**: treat as a paragraph — translate fully.

Quality bar: Thai should read as natural academic Thai, not machine-translated English. Aim for the register of a Thai university thesis.

#### Sentence-level alignment (required for hover-reveal)

For every **paragraph** (including abstract), split both the EN and TH text into individual sentences and wrap each one in a paired `<span>`:

- Each EN sentence → `<span class="en-sent" data-sent="{P}-{S}">sentence text.</span>`
- Each TH sentence → `<span class="th-sent" data-sent="{P}-{S}">คำแปลประโยค</span>`

Where `{P}` is a sequential integer for the paragraph row (starting from 0, counting only `.row.para` blocks), and `{S}` is the sentence index within that paragraph (0-based). Both spans with the same `data-sent` value are linked by JS for hover-reveal.

**Sentence splitting rules:**
- Split on `.` `?` `!` followed by a space and capital letter (standard sentence boundaries).
- Keep the terminal punctuation attached to the sentence it ends.
- If a paragraph has only one sentence, `{S}=0`.
- Never split inside parentheses, brackets, or quoted strings.
- Keep bullet list items as individual sentences (one `en-sent`/`th-sent` per item).

**Example output for one paragraph row:**
```html
<div class="row para">
  <div class="en">
    <p>
      <span class="en-sent" data-sent="3-0">First sentence in English.</span>
      <span class="en-sent" data-sent="3-1">Second sentence continues.</span>
      <span class="en-sent" data-sent="3-2">Third sentence concludes.</span>
    </p>
  </div>
  <div class="th">
    <p>
      <span class="th-sent" data-sent="3-0">ประโยคแรกเป็นภาษาไทย</span>
      <span class="th-sent" data-sent="3-1">ประโยคที่สองดำเนินต่อ</span>
      <span class="th-sent" data-sent="3-2">ประโยคที่สามสรุป</span>
    </p>
  </div>
</div>
```

### Step E — Find and add new dictionary terms

After translation:
1. Collect all technical terms in the paper that are **not already in `assets/translations.js`**: model names, dataset names, domain-specific compound phrases (e.g. "relaxed accuracy", "visual reasoning", "arithmetic reasoning").
2. For each new term, write an entry following the **Semantic Waves** principle (see paper-reader SKILL.md for full explanation):
   - Simple terms (common English academic words) → plain string: `"term": "คำแปล"`
   - Significant terms (model names, dataset names, paper-specific concepts) → enriched object:
     ```js
     "TermName": { th: "คำแปลภาษาไทย", ctx: "อุปมา → นิยามวิชาการ (Paper #N)" }
     ```
   - `ctx` rule: Unpack (อุปมา/ตัวอย่าง) ก่อน → Repack (ภาษาวิชาการ) หลัง → paper source สุดท้าย. ไม่เกิน ~80 ตัวอักษร.
3. Append new terms to `assets/translations.js` in a new comment section labeled `// ── Paper #{N}: {ShortTitle} ──`.
4. **Do NOT** duplicate these terms inside the output HTML — they are already loaded by `<script src="../assets/translations.js">`.

### Step F — Build the output HTML

Write `papers/{base_name}_translations.html`. Link external CSS via `<link href="../../assets/translation.css">` and load JS via `<script src="../../assets/translations.js">` — do **not** inline CSS.

Use this complete template:

```html
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{ShortTitle} — Translation</title>
<link rel="stylesheet" href="../../assets/translation.css">
<script src="../../assets/translations.js"></script>
</head>
<body>
<div id="progress-bar"></div>
<div id="toolbar">
  <button onclick="changeFont(-1)">A−</button>
  <span id="font-size-val">16px</span>
  <button onclick="changeFont(1)">A+</button>
  <button onclick="toggleTheme()">◐ Theme</button>
</div>

<header class="paper-header">
  <h1>{TITLE}</h1>
  <p class="meta">{AUTHORS} · {VENUE} · {YEAR} · arXiv:{ARXIV_ID}</p>
</header>

<div class="hover-hint"><span>🇬🇧 EN — hover ประโยคเพื่อดูภาษาไทย · คลิกเพื่อล็อก</span></div>

<div class="translation-grid">

  <!-- ── ABSTRACT ── -->
  <div class="row heading">
    <div class="en"><h2>Abstract</h2></div>
    <div class="th"><h2>บทคัดย่อ (Abstract)</h2></div>
  </div>
  <!-- Paragraphs: JS splits sentences at runtime, stores TH in data-th attr -->
  <!-- Hover an EN sentence → EN text swaps to TH inline; click → locks (amber) -->
  <div class="row para">
    <div class="en"><p>
      <span class="en-sent" data-sent="0-0">{ABSTRACT_SENT_1_EN}</span>
      <span class="en-sent" data-sent="0-1">{ABSTRACT_SENT_2_EN}</span>
    </p></div>
    <div class="th"><p>
      <span class="th-sent" data-sent="0-0">{ABSTRACT_SENT_1_TH}</span>
      <span class="th-sent" data-sent="0-1">{ABSTRACT_SENT_2_TH}</span>
    </p></div>
  </div>

  <!-- ── SECTION: Introduction ── -->
  <div class="row heading">
    <div class="en"><h2>1. Introduction</h2></div>
    <div class="th"><h2>1. บทนำ (Introduction)</h2></div>
  </div>
  <div class="row para">
    <div class="en"><p>
      <span class="en-sent" data-sent="1-0">{PARA_SENT_1_EN}</span>
      <span class="en-sent" data-sent="1-1">{PARA_SENT_2_EN}</span>
    </p></div>
    <div class="th"><p>
      <span class="th-sent" data-sent="1-0">{PARA_SENT_1_TH}</span>
      <span class="th-sent" data-sent="1-1">{PARA_SENT_2_TH}</span>
    </p></div>
  </div>

  <!-- ── FIGURE example ── -->
  <div class="row figure">
    <div class="en">
      <img src="../../assets/papers/{BASE_NAME}/figure1.png" alt="Figure 1" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <svg class="fig-dummy" style="display:none" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="260" fill="#E8E4DC" rx="6"/><text x="200" y="120" text-anchor="middle" fill="#9A9690" font-family="Georgia,serif" font-size="14">Figure 1</text><text x="200" y="144" text-anchor="middle" fill="#B0ACA4" font-family="Georgia,serif" font-size="11">[image not available]</text></svg>
      <p class="fig-caption"><strong>Figure 1:</strong> {CAPTION_EN}</p>
    </div>
    <div class="th">
      <img src="../../assets/papers/{BASE_NAME}/figure1.png" alt="รูปที่ 1" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <svg class="fig-dummy" style="display:none" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="260" fill="#E8E4DC" rx="6"/><text x="200" y="120" text-anchor="middle" fill="#9A9690" font-family="Georgia,serif" font-size="14">รูปที่ 1</text><text x="200" y="144" text-anchor="middle" fill="#B0ACA4" font-family="Georgia,serif" font-size="11">[ไม่มีรูปภาพ]</text></svg>
      <p class="fig-caption"><strong>รูปที่ 1:</strong> {CAPTION_TH}</p>
    </div>
  </div>

  <!-- ── TABLE example ── -->
  <div class="row table-row">
    <div class="table-full">
      <div class="table-label">Table 1 — {TABLE_TITLE_TH}</div>
      <table>
        <thead><tr><th>{COL_TH_1}</th><th>{COL_TH_2}</th></tr></thead>
        <tbody>
          <tr><td>{CELL}</td><td>{CELL}</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div><!-- /translation-grid -->

<footer>
  Bilingual translation generated {DATE} · arXiv:{ARXIV_ID} ·
  <span style="color:var(--teal)">Hover an English sentence → shows Thai · Click to lock</span>
  · <span style="color:var(--accent)">Hover underlined words for term tooltips</span>
</footer>

<script>
const DICT = window.DICT;
function isEnglish(w){return /^[A-Za-z][A-Za-z0-9''-]*$/.test(w);}
function lookupTh(w){const l=w.toLowerCase().replace(/[.,;:!?'"()[\]]/g,'');const v=DICT[l]||DICT[w]||null;if(!v)return null;return(typeof v==='string')?{th:v,ctx:null}:v;}
function wrapTextNode(node){const text=node.nodeValue;if(!text.trim())return;const parts=text.split(/(\s+)/);const frag=document.createDocumentFragment();let changed=false;parts.forEach(part=>{const clean=part.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g,'');const entry=clean?lookupTh(clean):null;if(entry&&isEnglish(clean)){changed=true;const pre=part.match(/^[^A-Za-z0-9]*/)[0];const suf=part.match(/[^A-Za-z0-9]*$/)[0];if(pre)frag.appendChild(document.createTextNode(pre));const span=document.createElement('span');span.className='en-word';span.textContent=clean;const tip=document.createElement('span');tip.className=entry.ctx?'tooltip has-ctx':'tooltip';const thSpan=document.createElement('span');thSpan.className='tooltip-th';thSpan.textContent=entry.th;tip.appendChild(thSpan);if(entry.ctx){const ctxSpan=document.createElement('span');ctxSpan.className='tooltip-ctx';ctxSpan.textContent=entry.ctx;tip.appendChild(ctxSpan);}span.appendChild(tip);frag.appendChild(span);if(suf)frag.appendChild(document.createTextNode(suf));}else{frag.appendChild(document.createTextNode(part));}}); if(changed)node.parentNode.replaceChild(frag,node);}
function walkAndWrap(el){if(!el||['SCRIPT','STYLE','PRE','CODE'].includes(el.tagName))return;if(el.classList&&(el.classList.contains('tooltip')||el.classList.contains('th')))return;const children=[...el.childNodes];children.forEach(child=>{if(child.nodeType===Node.TEXT_NODE){wrapTextNode(child);}else if(child.nodeType===Node.ELEMENT_NODE){walkAndWrap(child);}});}
function updateProgress(){const s=window.scrollY;const d=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty('--progress',(d>0?(s/d*100).toFixed(1):0)+'%');}
window.addEventListener('scroll',updateProgress,{passive:true});
let fontSize=16;
function changeFont(d){fontSize=Math.min(24,Math.max(12,fontSize+d));document.body.style.fontSize=fontSize+'px';document.getElementById('font-size-val').textContent=fontSize+'px';}
let dark=false;
function toggleTheme(){dark=!dark;document.documentElement.setAttribute('data-theme',dark?'dark':'');}
document.addEventListener('DOMContentLoaded',()=>{
  initSentenceReveal();
  document.querySelectorAll('.row .en').forEach(walkAndWrap);
  updateProgress();
});
function splitSentences(text){
  return text.replace(/([.!?])\s+([A-Z\u0E00-\u0E7F"])/g,'$1\x00$2').split('\x00').map(s=>s.trim()).filter(Boolean);
}
function initSentenceReveal(){
  let pIdx=0;
  document.querySelectorAll('.row.para').forEach(row=>{
    const enP=row.querySelector('.en p');
    const thP=row.querySelector('.th p');
    if(!enP||!thP){pIdx++;return;}
    const enSents=splitSentences(enP.textContent.trim());
    const thSents=splitSentences(thP.textContent.trim());
    enP.innerHTML=enSents.map((s,i)=>{
      const th=thSents[i]||thSents[thSents.length-1]||'';
      return `<span class="en-sent" data-en="${s.replace(/"/g,'&quot;')}" data-th="${th.replace(/"/g,'&quot;')}">${s}</span>`;
    }).join(' ');
    pIdx++;
  });
  const grid=document.querySelector('.translation-grid');
  grid.addEventListener('mouseover',e=>{
    const s=e.target.closest('.en-sent');
    if(!s||s.classList.contains('locked'))return;
    if(!s._origHTML) s._origHTML=s.innerHTML;
    s.textContent=s.dataset.th;
    s.classList.add('showing-th');
  });
  grid.addEventListener('mouseout',e=>{
    const s=e.target.closest('.en-sent');
    if(!s||s.classList.contains('locked'))return;
    if(s._origHTML!==undefined){s.innerHTML=s._origHTML;}
    s.classList.remove('showing-th');
  });
  grid.addEventListener('click',e=>{
    const s=e.target.closest('.en-sent');if(!s)return;
    if(s.classList.contains('locked')){
      if(s._origHTML!==undefined) s.innerHTML=s._origHTML;
      s.classList.remove('locked','showing-th');
    } else {
      if(!s._origHTML) s._origHTML=s.innerHTML;
      s.textContent=s.dataset.th;
      s.classList.add('locked','showing-th');
    }
  });
}
</script>
</body>
</html>
```

---

## Important: `walkAndWrap` only runs on `.en` columns

The tooltip wrapping runs **only on `.en` div** contents — not on `.th` divs. Thai text should not be word-wrapped with tooltips. This is intentional.

---

## Figure handling — `onerror` fallback pattern

Every `<img>` in the output HTML must include an `onerror` handler that hides the broken image and shows the sibling SVG dummy:

```html
<img src="PATH" alt="Figure N"
  onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
<svg class="fig-dummy" style="display:none" viewBox="0 0 400 260" …>…</svg>
```

This means **no disk-existence checking is required** — just always write the correct relative path and the browser handles the fallback gracefully.

---

## How to run this skill

When invoked via `/paper-translate [input]`:

1. Ask user for the paper identifier if not provided (e.g. `"Which paper? Enter number or base_name"`)
2. Execute Steps A–F above
3. Confirm: `"✓ Created papers/{base_name}_translations.html + appended N new terms to assets/translations.js"`

---

## Rules

- Output HTML must load `../../assets/translations.js` (not inline the dict — it's maintained globally)
- Never inline-copy the full DICT into the HTML; only add paper-specific new terms via `Object.assign`
- Tables span both columns (`.table-full` with `grid-column: 1 / -1`)
- Figures show identical image in both EN and TH columns; only the caption differs
- Responsive: on mobile (`max-width: 768px`) columns stack vertically, TH below EN with a dashed accent top border
- Do not translate: author names, institution names, arXiv IDs, model names, dataset names (keep EN, add Thai in parentheses on first appearance)
- Reference file for CSS/JS patterns: `papers/14-ChartQA_2022_reader.html`
