---
name: paper-reader
description: Generate a clean self-contained HTML reader from an existing paper analysis HTML. Adds hover-translation tooltips (English → Thai), dark/light mode, font size controls, TOC sidebar, and reading progress bar. TRIGGER when user asks to create a reader version, reading view, or clean HTML from a paper analysis file.
version: 1.0.0
---

# Paper Reader — Skill

Converts an existing `*-analysis.html` (from `docs/synthesis/`) into a clean, self-contained reader HTML with **hover translation** for English terms.

## Output

`docs/synthesis/{base_name}-reader.html` — fully self-contained, no external CSS/JS dependencies.

## Features

| Feature | Implementation |
|---------|---------------|
| Hover translation | JS wraps English words → `<span class="en-word">` with `<span class="tooltip">ภาษาไทย</span>` |
| Dark / Light mode | CSS `[data-theme="dark"]` vars toggle on button click |
| Font size control | A− / A+ buttons adjust `body` font-size (14–24px range) |
| TOC sidebar | Fixed left panel, slides in on ☰ button, auto-highlights active section |
| Reading progress | CSS `--progress` var drives a 3px top bar updated on scroll |

## How to Generate

1. Read the source analysis file: `docs/synthesis/{N}-{Slug}_{Year}-analysis.html`
2. Extract all content sections (overview, methodology, results, limitations, thesis)
3. Produce a new `{N}-{Slug}_{Year}-reader.html` using the template below
4. Save to `docs/synthesis/`

## Template Structure

```html
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{ShortTitle} — Reader</title>
<!-- Copyright 2026 · Apache-2.0 -->
<style>
/* Paste full CSS from reference file: docs/synthesis/8-LaMPCap_2025-reader.html */
/* Key design tokens: */
:root {
  --bg: #FAF8F3; --paper: #FFFFFF; --ink: #1A1917; --ink2: #4A4845;
  --ink3: #87867F; --rule: #E3DACC; --accent: #C07040; --accent-l: #F5E8DA;
  --teal: #3A7A6A; --teal-l: #D6EDEA; --amber: #C07D3A; --amber-l: #F5EDDA;
  --serif: "Georgia","Sarabun",ui-serif,serif;
  --sans: "Sarabun",system-ui,sans-serif;
  --mono: ui-monospace,"SF Mono",Consolas,monospace;
  --col: 680px; --progress: 0%;
}
[data-theme="dark"] { /* dark overrides */ }
</style>
</head>
<body>
<div id="progress-bar"></div>
<div id="toolbar">
  <!-- ☰ TOC | A− | 18px | A+ | ◐ Theme -->
</div>
<nav id="toc-sidebar">
  <!-- auto-generated links to #overview #methodology #results #limitations #thesis -->
</nav>
<main>
  <!-- hero: title, subtitle badge, meta badges -->
  <!-- content sections wrapped in <div id="..."> -->
  <footer>Analysis generated {date} · arXiv:{id} · hover hint</footer>
</main>
<script>
/* Paste full JS from reference file: docs/synthesis/8-LaMPCap_2025-reader.html */
/* Key pieces: DICT{}, walkAndWrap(), updateProgress(), TOC active, controls */
</script>
</body>
</html>
```

## Translation Philosophy — Semantic Waves (Karl Maton)

การอธิบายคำศัพท์วิชาการที่ดีต้องเดินทางระหว่าง **2 ระดับ** เสมอ ไม่ใช่แค่แปลหรือบอก source:

| ระดับ | ชื่อ | ลักษณะ |
|-------|------|--------|
| Abstract | **Repack** | ภาษาวิชาการ ไม่ผูกกับบริบท ใช้ได้กับสถานการณ์ทั่วไป |
| Concrete | **Unpack** | ตัวอย่างจริง อุปมา ผูกกับสิ่งที่รู้อยู่แล้ว |

**คลื่น (Wave)** = Unpack ก่อน (ลงสู่ concrete) → แล้ว Repack กลับ (ขึ้นสู่ abstract)  
ปัญหาที่พบบ่อย: หยุดแค่ Unpack — อ่านแล้วเข้าใจ แต่อธิบายคนอื่นหรือเขียน paper เองไม่ได้

### ตัวอย่าง

```
semantic similarity
  Unpack : เหมือนคนพูด "รถ" กับ "ยานพาหนะ" — ต่างคำแต่หมายความเดียวกัน
  Repack : ระยะห่างของความหมายใน vector space โดยไม่ขึ้นกับตัวอักษร
  ctx    : "เหมือน 'รถ' กับ 'ยานพาหนะ' — ต่างคำแต่ความหมายเดียวกัน → วัดระยะห่างใน vector space"

MT-Bench
  Unpack : เหมือนข้อสอบ 80 ข้อ แต่ LLM เป็นคนตรวจแทนมนุษย์
  Repack : ชุดทดสอบ multi-turn 8 หมวด ใช้ LLM-as-Judge ประเมินคุณภาพคำตอบ
  ctx    : "เหมือนข้อสอบให้ LLM ตรวจเอง → ชุดทดสอบ 80 ข้อ 8 หมวด (Paper #7)"
```

### กฎการเขียน `ctx`

1. **Unpack ก่อนเสมอ** — เปิดด้วยอุปมาหรือตัวอย่างที่จับต้องได้ (ไม่เกิน 1 ประโยค)
2. **Repack ปิดท้าย** — สรุปกลับเป็นภาษาวิชาการหลังเครื่องหมาย `→`
3. **ถ้ามี paper source** — ระบุท้ายสุดใน parentheses เช่น `(Paper #7)`
4. **ความยาว** — ไม่เกิน ~80 ตัวอักษร ให้พอดี tooltip ที่ max-width 320px
5. **อย่าแค่บอก definition ซ้ำ** — ถ้า `th` บอกอยู่แล้ว `ctx` ต้องให้ความเข้าใจเพิ่ม ไม่ใช่แปลซ้ำ

### Format ใน `translations.js`

```js
// Simple term — แปลอย่างเดียวพอ
"training": "การฝึกโมเดล",

// Enriched term — ต้องการ Semantic Wave
"semantic similarity": {
  th:  "ความคล้ายเชิงความหมาย",
  ctx: "เหมือน 'รถ' กับ 'ยานพาหนะ' → ระยะห่างใน vector space"
},
"MT-Bench": {
  th:  "ชุดทดสอบ MT-Bench",
  ctx: "เหมือนข้อสอบให้ LLM ตรวจเอง → 80 ข้อ 8 หมวด (Paper #7)"
},
```

## Scaffolding Principle (Vygotsky)

คนเรียนได้ดีที่สุดเมื่อ concept ใหม่ **เชื่อมกับสิ่งที่รู้อยู่แล้ว** ไม่ใช่โดดขึ้นมาลอยๆ  
"Scaffold" = นั่งร้านชั่วคราว — รองรับก่อน แล้วถอดออกเมื่อโครงสร้างมันแข็งแรงพอ

สำหรับการอ่าน paper: **ก่อนอธิบาย concept ใหม่ ให้ถามว่า "ต้องรู้อะไรมาก่อนถึงจะรับตัวนี้ได้?"**

### Dependency Chain

```
cross-attention
  └─ ต้องรู้ attention ก่อน
       └─ ต้องรู้ dot product ก่อน
            └─ รู้ multiplication แล้ว ✓  ← จุด scaffold
```

ค้นหา "จุดที่ผู้อ่านรู้แล้ว" แล้ว **ต่อยอดขึ้นมาทีละชั้น** อย่ากระโดดข้ามชั้น

### กฎการใช้ Scaffolding ใน `ctx`

1. **ระบุ prerequisite** — บอกว่า concept นี้ต้องเข้าใจอะไรก่อน (ถ้ามี)  
   ตัวอย่าง: `"ต้องเข้าใจ attention ก่อน → cross-attention คือ attention ข้ามสอง sequence"`
2. **เชื่อมกับสิ่งที่รู้** — หา anchor ที่ผู้อ่านน่าจะคุ้นเคย เช่น concept ทั่วไป, อุปมาชีวิตประจำวัน, หรือ concept ที่เคยอ่านใน paper ก่อนหน้า
3. **เลือก scaffold ให้เหมาะ** — ไม่มีสูตรตายตัว ดูว่าผู้อ่าน likely รู้อะไรมาแล้วในบริบท paper ชุดนี้

### ตัวอย่าง

```
cross-attention
  ctx: "ถ้าเข้าใจ self-attention แล้ว → cross-attention คือ attention ข้ามสอง sequence (image↔text)"

fine-tuning
  ctx: "เหมือนปรับ GPS ที่ training มาแล้ว ให้รู้จักถนนในเมืองใหม่ → update weights บน task-specific data"

RAG
  ctx: "เหมือนสอบ open-book แทนที่จะจำทุกอย่าง → ค้นข้อมูลมาก่อน แล้วค่อย generate คำตอบ"
```

---

## ใช้ Semantic Waves + Scaffolding ร่วมกัน

ทั้งสองหลักการเสริมกัน — ใช้ตามสถานการณ์:

| สถานการณ์ | กลยุทธ์ | ตัวอย่าง ctx |
|-----------|---------|-------------|
| Term มี prerequisite ชัดเจน | **Scaffold** ก่อน แล้ว Repack | `"ต้องรู้ attention ก่อน → cross-attention คือ attention ข้ามสอง sequence"` |
| Term นามธรรม ไม่มี prerequisite ชัด | **Unpack** ด้วยอุปมา แล้ว Repack | `"เหมือนสอบ open-book → ค้นข้อมูลก่อน แล้วค่อย generate"` |
| Term เฉพาะ paper (ชื่อ dataset/model) | **Scaffold** จาก concept ทั่วไป + Paper origin | `"เหมือนข้อสอบให้ LLM ตรวจเอง → 80 ข้อ 8 หมวด (Paper #7)"` |
| Term ทั่วไป แปลตรงได้ | แค่ `th` string เฉยๆ | ไม่ต้องมี ctx |

**ลำดับการเขียน ctx ที่ดี:**  
`[Scaffold — เชื่อมกับสิ่งที่รู้] → [Unpack — ตัวอย่างจริง] → [Repack — ภาษาวิชาการ]`  
(ไม่จำเป็นต้องมีครบทุกขั้น — เลือกเท่าที่ช่วยให้เข้าใจจริง)

**ถามตัวเองก่อนเขียน ctx:**
1. ผู้อ่านน่าจะรู้อะไรมาแล้ว? → ใช้เป็น scaffold anchor
2. concept นี้แตกเป็นตัวอย่างง่ายๆ ว่าอย่างไร? → Unpack
3. ถ้าจะเขียนลง paper จะนิยามว่าอย่างไร? → Repack

---

## Translation Dictionary — Global File

**All terms live in `assets/translations.js`** (sets `window.DICT`).  
Every reader HTML loads it via:

```html
<script src="../../assets/translations.js"></script>
<script>
const DICT = window.DICT;
// Paper-specific extras (optional):
// Object.assign(window.DICT, { "term": "คำแปล" });
</script>
```

**To add new terms:** edit `assets/translations.js` only — all reader files pick them up automatically. No need to touch individual HTML files.

**Paper-specific overrides** (rare): use `Object.assign(window.DICT, {...})` in the inline `<script>` block after loading the global file.

**เมื่อ add enriched term ใหม่** — ให้ถามตัวเองว่า:
- Unpack: ถ้าจะอธิบายให้คนที่ไม่รู้สาขานี้ จะเปรียบกับอะไร?
- Repack: ถ้าจะเขียนลง paper จะนิยามว่าอย่างไร?
- ถ้าตอบได้ทั้งสอง → เขียน `{ th, ctx }` โดยใส่ทั้งสองใน `ctx`

## Rules

- Output must be **100% self-contained** — no `<link href="...">` to external files
- Keep `var(--col): 680px` reading column for comfortable line length
- Always include the hover hint in the footer
- Preserve all content from the source analysis — do not summarize further
- For tables, keep `<table>` with `tr:hover` highlight (already in CSS)
- Reference file: `docs/synthesis/8-LaMPCap_2025-reader.html`
- When writing `ctx` for any term, apply the Semantic Waves principle above — Unpack → Repack, not just origin info
