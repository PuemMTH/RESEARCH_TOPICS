import sys
from bs4 import BeautifulSoup
from pathlib import Path

def main():
    source_path = Path("papers/2-MLBCAP_2025_source.html")
    if not source_path.exists():
        print("Source file not found!")
        return
        
    soup = BeautifulSoup(source_path.read_text(encoding="utf-8"), "lxml")
    
    # Let's count headers, paragraphs, figures, tables
    headings = soup.find_all(class_=lambda c: c and ("ltx_title_section" in c or "ltx_title_subsection" in c or "ltx_title_document" in c or "ltx_title_abstract" in c))
    paras = soup.find_all(class_=lambda c: c and ("ltx_p" in c or "ltx_p" == c))
    figures = soup.find_all("figure", class_=lambda c: c and "ltx_figure" in c)
    tables = soup.find_all("figure", class_=lambda c: c and "ltx_table" in c)
    
    print(f"Document Title: {soup.find(class_='ltx_title_document').get_text(strip=True) if soup.find(class_='ltx_title_document') else 'None'}")
    print(f"Abstract title: {soup.find(class_='ltx_title_abstract').get_text(strip=True) if soup.find(class_='ltx_title_abstract') else 'None'}")
    print(f"Headings count: {len(headings)}")
    print(f"Paragraphs count: {len(paras)}")
    print(f"Figures count: {len(figures)}")
    print(f"Tables count: {len(tables)}")
    
    # Print headings
    print("\n--- Headings ---")
    for h in headings:
        print(f"- {h.get_text(strip=True)} ({h.get('class')})")

if __name__ == "__main__":
    main()
