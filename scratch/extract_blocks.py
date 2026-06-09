import json
from bs4 import BeautifulSoup
from pathlib import Path

def clean_text(text):
    return " ".join(text.split())

def main():
    source_path = Path("papers/2-MLBCAP_2025_source.html")
    if not source_path.exists():
        print("Source file not found!")
        return
        
    soup = BeautifulSoup(source_path.read_text(encoding="utf-8"), "lxml")
    
    # We want to extract content blocks in order!
    # Let's walk the DOM or find elements in the document
    blocks = []
    
    # We'll traverse the main page content
    main_div = soup.find(class_="ltx_page_main") or soup
    
    # Let's find all relevant tags: section headings, paragraphs, figure, tables
    # LaTeXML structure uses sections, subsections, paragraphs
    for el in main_div.descendants:
        if el.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'figure', 'ul', 'ol', 'table']:
            # Check if this element is a heading
            if el.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] and 'ltx_title' in el.get('class', []):
                # Avoid duplicates from nested descendants by checking parent or only collecting once
                text = clean_text(el.get_text())
                # Ignore if we already processed it
                if not any(b['type'] == 'heading' and b['text'] == text for b in blocks):
                    blocks.append({
                        "type": "heading",
                        "tag": el.name,
                        "class": el.get('class'),
                        "text": text
                    })
            # Check if this is a paragraph in the main flow (not in tables or figures)
            elif el.name == 'p' and ('ltx_p' in el.get('class', []) or 'ltx_paragraph' in el.get('class', [])):
                # Ensure it's not inside a table, figure, or footnote
                ancestors = [p.name for p in el.parents]
                if 'table' not in ancestors and 'figure' not in ancestors and 'span' not in ancestors:
                    text = clean_text(el.get_text())
                    if not any(b['type'] == 'paragraph' and b['text'] == text for b in blocks):
                        blocks.append({
                            "type": "paragraph",
                            "text": text
                        })
            # Check if this is a figure
            elif el.name == 'figure' and 'ltx_figure' in el.get('class', []):
                fig_id = el.get('id', '')
                cap_tag = el.find('figcaption')
                caption = clean_text(cap_tag.get_text()) if cap_tag else ""
                img_tag = el.find('img')
                src = img_tag.get('src', '') if img_tag else ""
                if not any(b['type'] == 'figure' and b['id'] == fig_id for b in blocks):
                    blocks.append({
                        "type": "figure",
                        "id": fig_id,
                        "caption": caption,
                        "src": src
                    })
            # Check if this is a table
            elif el.name == 'figure' and 'ltx_table' in el.get('class', []):
                tbl_id = el.get('id', '')
                cap_tag = el.find('figcaption')
                caption = clean_text(cap_tag.get_text()) if cap_tag else ""
                table_el = el.find('table')
                table_html = str(table_el) if table_el else ""
                if not any(b['type'] == 'table' and b['id'] == tbl_id for b in blocks):
                    blocks.append({
                        "type": "table",
                        "id": tbl_id,
                        "caption": caption,
                        "table_html": table_html
                    })
                    
    # Save blocks to a JSON file
    out_path = Path("scratch/to_translate.json")
    out_path.write_text(json.dumps(blocks, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Extracted {len(blocks)} blocks to translate.")

if __name__ == "__main__":
    main()
