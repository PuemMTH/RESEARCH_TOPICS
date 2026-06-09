import os
import re
import glob
import argparse
from collections import Counter
from bs4 import BeautifulSoup

# Common English stopwords to ignore
STOPWORDS = {
    "the", "a", "an", "and", "or", "but", "if", "then", "else", "when", "at", "by", 
    "for", "with", "about", "against", "between", "into", "through", "during", "before", 
    "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", 
    "over", "under", "again", "further", "then", "once", "here", "there", "when", 
    "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", 
    "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", 
    "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "d", "ll", 
    "m", "o", "re", "ve", "y", "ain", "aren", "couldn", "didn", "doesn", "hadn", "hasn", 
    "haven", "isn", "ma", "mightn", "mustn", "needn", "shan", "shouldn", "wasn", "weren", 
    "won", "wouldn", "this", "that", "these", "those", "am", "is", "are", "was", "were", 
    "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing",
    "we", "our", "ours", "us", "you", "your", "yours", "he", "him", "his", "she", "her", 
    "it", "its", "they", "them", "their", "i", "me", "my", "mine", "who", "whom", "which",
    "what", "this", "that", "these", "those", "also", "using", "used", "use", "show",
    "shows", "shown", "showed", "proposed", "presents", "present", "presented", "paper",
    "results", "result", "approach", "method", "methods", "model", "models", "dataset",
    "datasets", "figure", "figures", "table", "tables", "caption", "captions", "image",
    "images", "text", "texts", "information", "data", "quality", "performance", "task",
    "tasks", "study", "studies", "high", "low", "different", "similar", "various", "based",
    "well", "better", "best", "worse", "worst", "example", "examples", "one", "two", "three"
}

def load_existing_keys(dict_path):
    """Extracts all keys from assets/translations.js."""
    if not os.path.exists(dict_path):
        return set()
    
    with open(dict_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Heuristic: find anything of the form "key": or "key" :
    # This matches both plain string entries and { th, ctx } objects
    keys = re.findall(r'"([^"\n]+)"\s*:', content)
    return {k.strip().lower() for k in keys}

def clean_term(t):
    """Clean punctuation around a term."""
    t = re.sub(r"^[^A-Za-z0-9]+|[^A-Za-z0-9]+$", "", t)
    return t.strip()

def extract_candidates_from_text(text, existing_keys):
    """Extract single-word and double-word candidate terms from raw English text."""
    # Clean LaTeX notation or math symbols if possible
    text = re.sub(r"\$[^\$]+\$", "", text) # Remove inline math $...$
    
    # Extract words
    words = [clean_term(w) for w in text.split()]
    words = [w for w in words if w and not w.isdigit()]
    
    candidates = []
    
    # 1. Single Words (capitalized, acronyms, or long hyphenated terms)
    for w in words:
        wl = w.lower()
        if wl in STOPWORDS or wl in existing_keys or len(w) < 3:
            continue
        
        # Check if it is capitalized, contains hyphen, contains digit, or is uppercase
        is_acronym = w.isupper()
        is_capitalized = w[0].isupper() if w else False
        has_hyphen = "-" in w
        
        if is_acronym or is_capitalized or has_hyphen or len(w) > 8:
            candidates.append(w)
            
    # 2. Two-word phrases
    for i in range(len(words) - 1):
        w1, w2 = words[i], words[i+1]
        w1_l, w2_l = w1.lower(), w2.lower()
        
        if w1_l in STOPWORDS or w2_l in STOPWORDS:
            continue
        
        phrase = f"{w1} {w2}"
        phrase_l = phrase.lower()
        
        if phrase_l in existing_keys:
            continue
            
        # If both words are capitalized or we have a solid technical phrase
        w1_cap = w1[0].isupper() if w1 else False
        w2_cap = w2[0].isupper() if w2 else False
        
        # Keep if capitalized phrases or reasonably long english phrases
        if (w1_cap and w2_cap) or (len(w1) > 4 and len(w2) > 4):
            candidates.append(phrase)
            
    return candidates

def scan_paper(file_path, existing_keys):
    """Scan a specific translation or source HTML file for terms."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    soup = BeautifulSoup(content, "lxml")
    
    # Extract text only from English blocks if it's a translations page
    en_blocks = soup.find_all(class_="en")
    
    if en_blocks:
        texts = [b.get_text() for b in en_blocks]
    else:
        # Fallback to general paragraph text
        paras = soup.find_all(["p", "figcaption", "h1", "h2", "h3", "h4", "h5", "h6"])
        texts = [p.get_text() for p in paras]
        
    all_text = " ".join(texts)
    return extract_candidates_from_text(all_text, existing_keys)

def main():
    parser = argparse.ArgumentParser(description="Extract missing technical terms from papers.")
    parser.add_argument("--paper", type=str, help="Specific paper filename or number (e.g. 2-MLBCAP_2025_translations.html)")
    parser.add_argument("--top", type=int, default=30, help="Number of top candidates to show")
    args = parser.parse_args()
    
    dict_path = "assets/translations.js"
    existing_keys = load_existing_keys(dict_path)
    print(f"Loaded {len(existing_keys)} existing keys from {dict_path}")
    
    candidates = []
    
    if args.paper:
        # Resolve specific file
        paper_files = glob.glob(f"papers/*{args.paper}*")
        if not paper_files:
            # Maybe it's a number
            paper_files = glob.glob(f"papers/{args.paper}-*.html")
            
        if not paper_files:
            print(f"Could not find any paper matching: {args.paper}")
            return
            
        # Filter source files or translation files, prefer translations or reader
        best_file = None
        for f in paper_files:
            if "translations.html" in f or "reader.html" in f:
                best_file = f
                break
        if not best_file:
            best_file = paper_files[0]
            
        print(f"Scanning paper file: {best_file}")
        candidates = scan_paper(best_file, existing_keys)
    else:
        # Scan all translation files
        translation_files = glob.glob("papers/*_translations.html")
        if not translation_files:
            # Fallback to source files if no translations exist
            translation_files = glob.glob("papers/*_source.html")
            
        print(f"Scanning {len(translation_files)} paper files...")
        for file_path in translation_files:
            candidates.extend(scan_paper(file_path, existing_keys))
            
    # Count frequencies
    counter = Counter(candidates)
    
    # Filter case-insensitive duplicates (e.g. "few-shot" vs "Few-shot")
    unique_candidates = {}
    for term, count in counter.most_common():
        term_clean = clean_term(term)
        term_l = term_clean.lower()
        if term_l in existing_keys:
            continue
        if term_l not in unique_candidates or count > unique_candidates[term_l][1]:
            unique_candidates[term_l] = (term_clean, count)
            
    sorted_unique = sorted(unique_candidates.values(), key=lambda x: x[1], reverse=True)
    
    print("\n--- Top Untranslated Candidate Terms ---")
    for i, (term, count) in enumerate(sorted_unique[:args.top]):
        print(f"{i+1:2d}. {term:<30} (Frequency: {count})")

if __name__ == "__main__":
    main()
