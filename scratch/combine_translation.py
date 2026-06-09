import json
import re
from bs4 import BeautifulSoup
from pathlib import Path

def clean_text(text):
    return " ".join(text.split())

def main():
    source_path = Path("papers/2-MLBCAP_2025_source.html")
    trans_path = Path("scratch/translated.json")
    out_path = Path("papers/2-MLBCAP_2025_translations.html")
    
    if not source_path.exists():
        print("Source HTML not found!")
        return
    if not trans_path.exists():
        print("Translated JSON not found!")
        return
        
    soup = BeautifulSoup(source_path.read_text(encoding="utf-8"), "lxml")
    translations = json.loads(trans_path.read_text(encoding="utf-8"))
    
    # Let's map translation blocks by their original text or id
    trans_map = {}
    for t in translations:
        if t["type"] in ["heading", "paragraph"]:
            trans_map[t["text"]] = t.get("th", "")
        elif t["type"] in ["figure", "table"]:
            trans_map[t["id"]] = t.get("th", "")
            
    # Metadata
    title_tag = soup.find(class_="ltx_title_document") or soup.find("h1")
    title_en = title_tag.get_text(strip=True) if title_tag else "Multi-LLM Collaborative Caption Generation in Scientific Documents"
    title_th = trans_map.get(title_en, "การสร้างคำอธิบายภาพในเอกสารวิชาการด้วยความร่วมมือของโมเดลภาษาขนาดใหญ่ (Multi-LLM Collaborative Caption Generation in Scientific Documents)")
    
    authors_div = soup.find(class_="ltx_authors")
    authors = authors_div.get_text(separator=" ", strip=True) if authors_div else "Jaeyoung Kim, Jongho Lee, Hong-Jun Choi, Ting-Yao Hsu, Chieh-Yang Huang, Sungchul Kim, Ryan Rossi, Tong Yu, Clyde Lee Giles, Ting-Hao Kenneth Huang, Sungchul Choi"
    # Clean authors extra spaces/newlines
    authors = clean_text(authors)
    
    venue = "arXiv Preprint"
    year = "2025"
    arxiv_id = "2501.02552"
    
    # Start building the bilingual HTML
    html = []
    html.append(f"""<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MLBCAP — Translation</title>
<link rel="stylesheet" href="../assets/translation.css">
<script src="../assets/translations.js"></script>
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
  <h1>{title_en}</h1>
  <p class="meta">{authors} · {venue} · {year} · arXiv:{arxiv_id}</p>
</header>

<div class="hover-hint"><span>🇬🇧 EN — hover คำเพื่อแปลศัพท์ · Shift + hover เพื่อแปลประโยค · คลิกเพื่อล็อก</span></div>

<div class="translation-grid">
""")

    # Walk the DOM and generate grid rows
    # We want to match the same traversal order as extract_blocks.py
    main_div = soup.find(class_="ltx_page_main") or soup
    
    processed_headings = set()
    processed_paras = set()
    processed_figures = set()
    processed_tables = set()
    
    fig_counter = 0
    tbl_counter = 0
    
    for el in main_div.descendants:
        if el.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'figure', 'ul', 'ol', 'table']:
            # Heading
            if el.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] and 'ltx_title' in el.get('class', []):
                text = clean_text(el.get_text())
                if text in processed_headings:
                    continue
                processed_headings.add(text)
                th_text = trans_map.get(text, "")
                if not th_text:
                    th_text = text
                
                # Heading tags in bilingual: keep standard H2 or H3
                h_tag = "h2" if el.name in ["h1", "h2"] else "h3"
                html.append(f"""  <div class="row heading">
    <div class="en"><{h_tag}>{text}</{h_tag}></div>
    <div class="th"><{h_tag}>{th_text}</{h_tag}></div>
  </div>""")
                
            # Paragraph
            elif el.name == 'p' and ('ltx_p' in el.get('class', []) or 'ltx_paragraph' in el.get('class', [])):
                ancestors = [p.name for p in el.parents]
                if 'table' not in ancestors and 'figure' not in ancestors and 'span' not in ancestors:
                    text = clean_text(el.get_text())
                    if text in processed_paras:
                        continue
                    processed_paras.add(text)
                    th_text = trans_map.get(text, "")
                    
                    html.append(f"""  <div class="row para">
    <div class="en"><p>{text}</p></div>
    <div class="th"><p>{th_text}</p></div>
  </div>""")
                    
            # Figure
            elif el.name == 'figure' and 'ltx_figure' in el.get('class', []):
                fig_id = el.get('id', '')
                if fig_id in processed_figures:
                    continue
                processed_figures.add(fig_id)
                fig_counter += 1
                
                cap_tag = el.find('figcaption')
                caption_en = clean_text(cap_tag.get_text()) if cap_tag else ""
                caption_th = trans_map.get(fig_id, "")
                
                img_tag = el.find('img')
                # Rewrite absolute ar5iv image URL to raw URL or local if cached
                src = img_tag.get('src', '') if img_tag else ""
                if src.startswith('/'):
                    src = "https://ar5iv.labs.arxiv.org" + src
                
                html.append(f"""  <div class="row figure">
    <div class="en">
      <img src="{src}" alt="Figure {fig_counter}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <svg class="fig-dummy" style="display:none" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="260" fill="#E8E4DC" rx="6"/><text x="200" y="120" text-anchor="middle" fill="#9A9690" font-family="Georgia,serif" font-size="14">Figure {fig_counter}</text><text x="200" y="144" text-anchor="middle" fill="#B0ACA4" font-family="Georgia,serif" font-size="11">[image not available]</text></svg>
      <p class="fig-caption"><strong>Figure {fig_counter}:</strong> {caption_en}</p>
    </div>
    <div class="th">
      <img src="{src}" alt="รูปที่ {fig_counter}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
      <svg class="fig-dummy" style="display:none" viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="260" fill="#E8E4DC" rx="6"/><text x="200" y="120" text-anchor="middle" fill="#9A9690" font-family="Georgia,serif" font-size="14">รูปที่ {fig_counter}</text><text x="200" y="144" text-anchor="middle" fill="#B0ACA4" font-family="Georgia,serif" font-size="11">[ไม่มีรูปภาพ]</text></svg>
      <p class="fig-caption"><strong>รูปที่ {fig_counter}:</strong> {caption_th}</p>
    </div>
  </div>""")
                
            # Table
            elif el.name == 'figure' and 'ltx_table' in el.get('class', []):
                tbl_id = el.get('id', '')
                if tbl_id in processed_tables:
                    continue
                processed_tables.add(tbl_id)
                tbl_counter += 1
                
                cap_tag = el.find('figcaption')
                caption_en = clean_text(cap_tag.get_text()) if cap_tag else ""
                caption_th = trans_map.get(tbl_id, "")
                
                table_el = el.find('table')
                table_html = str(table_el) if table_el else ""
                
                # Clear classes/styles inside table for clean rendering
                if table_html:
                    table_html = re.sub(r'style="[^"]*"', '', table_html)
                    table_html = re.sub(r'class="[^"]*"', '', table_html)
                
                html.append(f"""  <div class="row table-row">
    <div class="table-full">
      <div class="table-label">Table {tbl_counter} — {caption_th or caption_en}</div>
      {table_html}
    </div>
  </div>""")

    # Close grid and add footer
    html.append(f"""
</div><!-- /translation-grid -->

<footer>
  Bilingual translation generated 2026-06-09 · arXiv:{arxiv_id} ·
  <span style="color:var(--teal)">Hover an English sentence → shows Thai · Click to lock</span>
  · <span style="color:var(--accent)">Hover underlined words for term tooltips</span>
</footer>

<script src="../assets/translation.js"></script>
</body>
</html>
""")

    out_path.write_text("\n".join(html), encoding="utf-8")
    print(f"Bilingual translations HTML generated -> {out_path}")

if __name__ == "__main__":
    main()
