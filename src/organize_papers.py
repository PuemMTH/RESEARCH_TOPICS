#!/usr/bin/env python3
import os
import shutil
import glob
import json
import re

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAPERS_DIR = os.path.join(REPO_ROOT, "papers")

# Target subdirectories
AREAS = {
    "area1": os.path.join(PAPERS_DIR, "area1-accessibility"),
    "area2": os.path.join(PAPERS_DIR, "area2-understanding"),
    "area3": os.path.join(PAPERS_DIR, "area3-faithfulness"),
}

# Explicit mappings by arXiv ID or Slug
MAPPING_ARXIV = {
    # Area 1: Accessibility
    "2110.04406": "area1",
    "2209.13718": "area1",
    "2503.17517": "area1",
    "2503.13369": "area1",

    # Area 2: Figure Understanding / Captioning
    "2110.11624": "area2",
    "2306.03491": "area2",
    "2302.12324": "area2",
    "2407.11008": "area2",
    "2506.06561": "area2",
    "2203.06486": "area2",
    "2203.02628": "area2",
    "1909.00996": "area2",
    "1710.08300": "area2",
    "1801.08163": "area2",
    "1906.02850": "area2",
    "2307.10867": "area2",
    "2308.03349": "area2",
    "2301.12293": "area2",
    "2212.10505": "area2",
    "2210.03347": "area2",
    "2406.18521": "area2",

    # Area 3: Context & Faithfulness
    "2005.11401": "area3",
    "2305.14779": "area3",
    "2406.02265": "area3",
    "2211.12196": "area3",
    "2311.01477": "area3",
    "1809.01094": "area3",
    "2404.13874": "area3",
    "2510.03978": "area3",
    "2405.19094": "area3",
}

MAPPING_SLUG = {
    # Area 1: Accessibility
    "figura11y": "area1",
    "voxlens": "area1",
    "chartreader": "area1",
    "altgosling": "area1",
    "upset": "area1",
    "sightation": "area1",
    "websearchviz": "area3", # Web search visualization scatter plot

    # Area 2: Captioning / Understanding
    "scicap": "area2",
    "mlbcap": "area2",
    "deplot": "area2",
    "lampcap": "area2",
    "authorcontextscicap": "area2",
    "personalizedscifigcap": "area2",
    "chartqa": "area2",
    "unichart": "area2",
    "matcha": "area2",
    "pix2struct": "area2",
    "figcaps": "area2",
    "survey_chart_understanding_mllms": "area2",

    # Area 3: Context / Faithfulness
    "ragbeyondthebuzz": "area3",
    "llmjudge": "area3",
    "mindrag": "area3",
    "nlidbsensitive": "area3",
}

def determine_area(metadata):
    arxiv_id = metadata.get("arxiv_id")
    slug = metadata.get("slug", "").lower()
    title = metadata.get("title", "").lower()
    abstract = metadata.get("abstract", "").lower()

    # 1. Match by arXiv ID
    if arxiv_id and arxiv_id in MAPPING_ARXIV:
        return MAPPING_ARXIV[arxiv_id]

    # 2. Match by exact slug mapping
    for s_key, area in MAPPING_SLUG.items():
        if s_key in slug:
            return area

    # 3. Heuristic search
    text_to_search = f"{title} {abstract}"
    
    # Accessibility indicators
    if any(w in text_to_search for w in ["accessibility", "accessible", "blind", "low-vision", "screen reader", "alt text", "alt-text"]):
        return "area1"
    
    # Faithfulness / Context indicators
    if any(w in text_to_search for w in ["faithfulness", "hallucination", "rag", "retrieval-augmented", "robustness", "grounded"]):
        return "area3"

    # Default to Area 2
    return "area2"

def update_html_paths(file_path):
    """Rewrite relative paths from ../assets/ to ../../assets/ in moved HTML files."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace relative asset paths to account for being one level deeper
        updated = content.replace("../assets/", "../../assets/")
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(updated)
        print(f"      Updated relative paths in {os.path.basename(file_path)}")
    except Exception as e:
        print(f"      Error updating paths in {file_path}: {e}")

def main():
    # Ensure target subdirectories exist
    for dir_path in AREAS.values():
        os.makedirs(dir_path, exist_ok=True)

    # Scan for JSON files in the flat papers/ directory
    json_pattern = os.path.join(PAPERS_DIR, "*.json")
    json_files = glob.glob(json_pattern)
    
    print(f"Found {len(json_files)} paper JSON files in papers/ to process.")
    
    moved_counts = {"area1": 0, "area2": 0, "area3": 0}

    for json_file in sorted(json_files):
        base_name = os.path.basename(json_file).replace(".json", "")
        
        try:
            with open(json_file, "r", encoding="utf-8") as f:
                metadata = json.load(f)
        except Exception as e:
            print(f"Error reading JSON for {json_file}: {e}")
            continue

        area = determine_area(metadata)
        target_dir = AREAS[area]
        print(f"Paper {base_name} -> {os.path.basename(target_dir)}")

        # Find all files with the same base name prefix in papers/
        # e.g., 1-SciCap_2021.pdf, 1-SciCap_2021_source.html, 1-SciCap_2021_tex/
        pattern = os.path.join(PAPERS_DIR, f"{base_name}*")
        for filepath in glob.glob(pattern):
            # Do not move directories that aren't the LaTeX folder (just in case)
            if os.path.isdir(filepath) and not filepath.endswith("_tex"):
                continue
                
            dest_path = os.path.join(target_dir, os.path.basename(filepath))
            
            # Move file or directory
            try:
                if os.path.isdir(filepath):
                    if os.path.exists(dest_path):
                        shutil.rmtree(dest_path)
                    shutil.move(filepath, dest_path)
                else:
                    shutil.move(filepath, dest_path)
                
                # If it's an HTML file, update relative assets paths
                if dest_path.endswith(".html"):
                    update_html_paths(dest_path)
                    
            except Exception as e:
                print(f"    Error moving {filepath} to {dest_path}: {e}")
        
        moved_counts[area] += 1

    # Fallback for papers 1-5 which lack JSON metadata and all belong to Area 2
    fallback_prefixes = [
        "1-SciCap_2021",
        "2-MLBCAP_2025",
        "3-DePlot_2023",
        "4-SciCap_Plus_2023",
        "5-Survey_Chart_Understanding_MLLMs_2025"
    ]
    fallback_moved = 0
    for item in os.listdir(PAPERS_DIR):
        item_path = os.path.join(PAPERS_DIR, item)
        if item in ["area1-accessibility", "area2-understanding", "area3-faithfulness", "search.html"]:
            continue
            
        for prefix in fallback_prefixes:
            if item.startswith(prefix):
                dest_path = os.path.join(AREAS["area2"], item)
                try:
                    if os.path.isdir(item_path):
                        if os.path.exists(dest_path):
                            shutil.rmtree(dest_path)
                        shutil.move(item_path, dest_path)
                    else:
                        shutil.move(item_path, dest_path)
                    if dest_path.endswith(".html"):
                        update_html_paths(dest_path)
                    fallback_moved += 1
                except Exception as e:
                    print(f"    Error moving fallback {item} to area2: {e}")
                    
    print(f"Moved {fallback_moved} fallback files/folders for papers 1-5.")

    print("\n========================================")
    print("Paper organization complete.")
    for area_code, count in moved_counts.items():
        print(f"  {area_code} ({os.path.basename(AREAS[area_code])}): {count} papers")
    print("========================================")

if __name__ == "__main__":
    main()
