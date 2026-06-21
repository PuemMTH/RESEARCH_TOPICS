import os
import re
import glob
import json
import argparse
from bs4 import BeautifulSoup

def split_eng_sentences(text):
    # Regex lookbehinds must be fixed-width in standard Python re.
    # Split the lookbehind abbreviations into separate lookbehinds by character length:
    # Length 2: vs, Dr, Mr, Ms
    # Length 3: e.g, i.e, Fig, fig, Mrs, Jan, Feb, Mar, Apr, Jun, Jul, Aug, Sep, Oct, Nov, Dec
    try:
        regex_pattern = re.compile(
            r'(?<!\bvs\.)(?<!\bDr\.)(?<!\bMr\.)(?<!\bMs\.)'
            r'(?<!\be\.g\.)(?<!\bi\.e\.)(?<!\bFig\.)(?<!\bfig\.)(?<!\bMrs\.)'
            r'(?<!\bJan\.)(?<!\bFeb\.)(?<!\bMar\.)(?<!\bApr\.)(?<!\bJun\.)'
            r'(?<!\bJul\.)(?<!\bAug\.)(?<!\bSep\.)(?<!\bOct\.)(?<!\bNov\.)(?<!\bDec\.)'
            r'(?<=[.!?])\s+(?=[A-Z0-9])'
        )
        sents = regex_pattern.split(text)
    except re.error:
        # Fallback simple split if lookbehinds raise error
        sents = re.split(r'(?<=[.!?])\s+', text)
        
    return [s.strip() for s in sents if s.strip()]

def align_thai_sentences(en_sents, th_text):
    th_raw_segments = []
    current = []
    in_paren = 0
    in_quote = False
    
    for char in th_text:
        if char in ('(', '[', '{'):
            in_paren += 1
            current.append(char)
        elif char in (')', ']', '}'):
            in_paren = max(0, in_paren - 1)
            current.append(char)
        elif char in ('"', "'"):
            in_quote = not in_quote
            current.append(char)
        elif char.isspace():
            if in_paren > 0 or in_quote:
                current.append(char)
            else:
                segment = "".join(current).strip()
                if segment:
                    th_raw_segments.append(segment)
                current = []
        else:
            current.append(char)
            
    segment = "".join(current).strip()
    if segment:
        th_raw_segments.append(segment)
        
    n = len(en_sents)
    if n == 0:
        return []
        
    if len(th_raw_segments) <= n:
        result = list(th_raw_segments)
        while len(result) < n:
            result.append('')
        return result
        
    total_th_len = sum(len(s) for s in th_raw_segments)
    total_en_len = sum(len(s) for s in en_sents)
    if total_en_len == 0:
        total_en_len = 1
        
    target_lens = [(len(s) / total_en_len) * total_th_len for s in en_sents]
    result = []
    seg_idx = 0
    
    starters = ["อย่างไรก็ตาม", "ในงานนี้", "ในงานวิจัยนี้", "เพื่อจุดประสงค์นี้", "เรา", "ผลการทดลอง", "หลัง", 
                "นอกจากนี้", "ดังนั้น", "งานวิจัยนี้", "โมเดล", "ตัวจำแนก", "จากผล", "โดยสรุป", "ในอนาคต", 
                "เพื่อ", "การ", "ผู้", "นักวิจัย", "ตัวอย่างเช่น", "เช่น", "แต่", "หนึ่งใน", "ด้วย"]
                
    for i in range(n):
        if i == n - 1:
            result.append(" ".join(th_raw_segments[seg_idx:]))
            break
            
        current_sent = th_raw_segments[seg_idx]
        seg_idx += 1
        target = target_lens[i]
        
        while seg_idx < len(th_raw_segments) - (n - 1 - i):
            next_seg = th_raw_segments[seg_idx]
            starts_with_starter = any(next_seg.startswith(word) for word in starters)
            current_diff = abs(len(current_sent) - target)
            next_diff = abs(len(current_sent + ' ' + next_seg) - target)
            
            if starts_with_starter and len(current_sent) > target * 0.5:
                break
                
            if next_diff < current_diff or len(current_sent) < target * 0.7:
                current_sent += ' ' + next_seg
                seg_idx += 1
            else:
                break
        result.append(current_sent)
        
    return result

def process_pair(paper_id, title, en_text, th_text, sentences_list):
    en_sents = split_eng_sentences(en_text)
    th_sents = align_thai_sentences(en_sents, th_text)
    
    for en_s, th_s in zip(en_sents, th_sents):
        en_s_clean = en_s.strip()
        th_s_clean = th_s.strip()
        if en_s_clean and th_s_clean:
            sentences_list.append({
                "paper": paper_id,
                "title": title,
                "en": en_s_clean,
                "th": th_s_clean
            })

def main():
    parser = argparse.ArgumentParser(description="Sweep translated papers and build a bilingual search index.")
    parser.add_argument("--dict", type=str, default="assets/translations.js", help="Path to translations.js")
    args = parser.parse_args()
    
    dict_path = args.dict
    if not os.path.exists(dict_path):
        print(f"Error: Dictionary path '{dict_path}' not found.")
        return
        
    translation_files = glob.glob("papers/*_translations.html")
    if not translation_files:
        print("No translation HTML files found in papers/ directory.")
        return
        
    print(f"Found {len(translation_files)} translation papers to index.")
    
    sentences = []
    
    for file_path in sorted(translation_files):
        print(f"Indexing: {file_path}...")
        paper_id = os.path.basename(file_path).replace("_translations.html", "")
        
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        soup = BeautifulSoup(content, "lxml")
        
        # Try to find the title
        title_el = soup.find("h1")
        title = title_el.get_text(strip=True) if title_el else paper_id
        
        rows = soup.find_all(class_="row")
        for row in rows:
            en_div = row.find(class_="en")
            th_div = row.find(class_="th")
            if not en_div or not th_div:
                continue
                
            # Match paragraph tags or header tags in order
            en_tags = en_div.find_all(['p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
            th_tags = th_div.find_all(['p', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
            
            if len(en_tags) == len(th_tags) and len(en_tags) > 0:
                for et, tt in zip(en_tags, th_tags):
                    process_pair(paper_id, title, et.get_text(), tt.get_text(), sentences)
            else:
                # Fallback to complete text block
                en_text = re.sub(r'\s+', ' ', en_div.get_text()).strip()
                th_text = re.sub(r'\s+', ' ', th_div.get_text()).strip()
                if en_text and th_text:
                    process_pair(paper_id, title, en_text, th_text, sentences)
                    
    print(f"Extracted {len(sentences)} aligned sentence pairs.")
    
    # Read assets/translations.js and update
    with open(dict_path, "r", encoding="utf-8") as f:
        js_content = f.read()
        
    if "window.SENTENCES =" in js_content:
        parts = js_content.split("window.SENTENCES =")
        base_content = parts[0].rstrip()
    else:
        base_content = js_content.rstrip()
        
    sentences_json = json.dumps(sentences, ensure_ascii=False, indent=2)
    updated_content = f"{base_content}\n\n\nwindow.SENTENCES = {sentences_json};\n"
    
    with open(dict_path, "w", encoding="utf-8") as f:
        f.write(updated_content)
        
    print(f"Successfully updated search index in {dict_path}")

if __name__ == "__main__":
    main()
