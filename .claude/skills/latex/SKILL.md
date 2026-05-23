---
name: latex
description: LaTeX templates for academic writing with Thai language support. Compile via latex-server at http://localhost:3001/compile using lualatex engine.
version: 1.0.0
---

# LaTeX Templates Skill

สร้างเอกสาร LaTeX สำหรับงานวิชาการ รองรับภาษาไทยเต็มรูปแบบ
คอมไพล์ผ่าน latex-server (lualatex) ที่ `http://localhost:3001/compile`

---

## วิธีใช้

1. ดูตารางด้านล่าง เลือก template ที่ตรงกับงาน
2. อ่านไฟล์ต้นฉบับจาก `templates/<file>`
3. แก้ไขเนื้อหาส่วน placeholder ให้ตรงกับงานจริง
4. คอมไพล์ผ่าน latex-server:

```bash
# PowerShell
$src = Get-Content "path/to/file.tex" -Raw
$body = @{ source = $src; engine = "lualatex" } | ConvertTo-Json -Depth 2
Invoke-WebRequest -Uri "http://localhost:3001/compile" `
  -Method POST -ContentType "application/json" `
  -Body $body -OutFile "output.pdf"
```

```bash
# curl (Linux/Mac)
curl -s -X POST http://localhost:3001/compile \
  -H "Content-Type: application/json" \
  -d "{\"source\": $(cat file.tex | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))'), \"engine\": \"lualatex\"}" \
  -o output.pdf
```

> **หมายเหตุ:** ต้องอัปโหลด Noto Sans Thai fonts ก่อนคอมไพล์ครั้งแรก
> ```bash
> for f in NotoSansThai-Regular.ttf NotoSansThai-Bold.ttf NotoSansThai-Light.ttf; do
>   curl -X POST http://localhost:3001/fonts -F "font=@./fonts/$f"
> done
> ```
> ตรวจสอบด้วย `curl http://localhost:3001/fonts`

---

## Template Catalog

| # | ไฟล์ | ใช้สำหรับ | คลาส | จุดเด่น |
|---|------|-----------|------|---------|
| 01 | `01-research-article.tex` | บทความวิชาการ | `article` | Abstract, sections ครบ, result table |
| 02 | `02-thesis-chapter.tex` | บทใน thesis | `report` | Header/footer, 1.5 spacing, chapter structure |
| 03 | `03-paper-summary.tex` | สรุปบทความเดี่ยว | `article` | Metadata block, highlight box, strength/weakness |
| 04 | `04-comparison-table.tex` | เปรียบเทียบหลาย paper | `article` | Landscape, longtable, rowcolor, dimension matrix |
| 05 | `05-progress-report.tex` | รายงานความคืบหน้า | `article` | Progress bar, status badges, milestone table |
| 06 | `06-beamer-slides.tex` | สไลด์นำเสนอ | `beamer` | Custom coral theme, 16:9, two-column layout |

---

## Thai Preamble (ใช้ใน template ทุกตัว)

```latex
\usepackage{fontspec}
\usepackage{babel}
\babelprovide[import, onchar=ids fonts]{thai}
\babelprovide[import, onchar=ids fonts]{english}
\babelfont{rm}{Noto Sans}
\babelfont[thai]{rm}{Noto Sans Thai}
\babelfont{tt}{Noto Sans Mono}
\babelfont[thai]{tt}{Noto Sans Thai}
\directlua{
  local glyph_id = node.id("glyph")
  local penalty_id = node.id("penalty")
  local function is_thai(c) return c >= 0x0E01 and c <= 0x0E5B end
  local function is_thai_combining(c)
    return (c >= 0x0E31 and c <= 0x0E3A) or (c >= 0x0E47 and c <= 0x0E4E)
  end
  luatexbase.add_to_callback("pre_linebreak_filter", function(head)
    for n in node.traverse_id(glyph_id, head) do
      local prev = n.prev
      if prev and prev.id == glyph_id and is_thai(prev.char)
         and is_thai(n.char) and not is_thai_combining(n.char) then
        local p = node.new(penalty_id)
        p.penalty = 0
        node.insert_before(head, n, p)
      end
    end
    return head
  end, "thai_break")
}
\emergencystretch=1em
```

---

## Color Tokens (จาก `@docs/design/design.md`)

ทุก template โหลด token ชุดนี้ครบ — ใช้ชื่อ token ได้เลยใน `\textcolor{token}{...}`, `\color{token}`, `\definecolor`

### Brand / CTA
| Token | Hex | ใช้สำหรับ |
|-------|-----|----------|
| `primary` / `coral` | `#cc785c` | Primary CTA, links, rule lines, section accent |
| `primary-active` | `#a9583e` | Pressed / hover-darker variant |
| `primary-disabled` | `#e6dfd8` | Disabled state, hairline borders |

### Text
| Token | Hex | ใช้สำหรับ |
|-------|-----|----------|
| `ink` | `#141413` | Headlines, primary text |
| `body-strong` | `#252523` | Emphasized paragraphs |
| `body` | `#3d3d3a` | Default running text |
| `muted` | `#6c6a64` | Sub-heads, captions, footer |
| `muted-soft` | `#8e8b82` | Fine print, page numbers |
| `on-dark` | `#faf9f5` | Text on dark surfaces |
| `on-dark-soft` | `#a09d96` | Secondary text on dark |

### Surface
| Token | Hex | ใช้สำหรับ |
|-------|-----|----------|
| `canvas` | `#faf9f5` | Page background (cream, not white) |
| `surface-soft` | `#f5f0e8` | Section dividers, light bands |
| `surface-card` | `#efe9de` | Feature cards, content cards |
| `surface-cream-strong` | `#e8e0d2` | Selected tabs, emphasized bands |
| `hairline` | `#e6dfd8` | 1px borders on cream surfaces |
| `surface-dark` | `#181715` | Code blocks, dark cards, footer |
| `surface-dark-elevated` | `#252320` | Elevated elements inside dark |
| `surface-dark-soft` | `#1f1e1b` | Code block bg inside dark cards |

### Accent / Semantic
| Token | Hex | ใช้สำหรับ |
|-------|-----|----------|
| `accent-teal` | `#5db8a6` | Status indicators, secondary highlights |
| `accent-amber` | `#e8a55a` | Category badges, inline highlights |
| `success` | `#5db872` | Done / available status |
| `warning` | `#d4a017` | Warning callouts |
| `error` | `#c64545` | Validation errors |

---

## ตัวอย่างการใช้งาน

**สรุปบทความที่เพิ่งอ่าน:**
```
อ่าน templates/03-paper-summary.tex แล้วสรุปบทความ DePlot ลงในไฟล์ใหม่
docs/notes/deplot-summary.tex
```

**สร้าง progress report รายเดือน:**
```
อ่าน templates/05-progress-report.tex แล้วสร้าง docs/thesis/progress-may-2025.tex
อัปเดต milestone และ progress bar ตามสถานะปัจจุบัน
```

**เปรียบเทียบ paper ใหม่:**
```
อ่าน templates/04-comparison-table.tex แล้วเพิ่ม row สำหรับ paper ที่เพิ่งอ่าน
ลงใน docs/synthesis/comparison-table.tex
```
