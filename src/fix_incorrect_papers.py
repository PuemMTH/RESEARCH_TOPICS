#!/usr/bin/env python3
import os
import shutil
import glob
import subprocess
import sys

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAPERS_DIR = os.path.join(REPO_ROOT, "papers")
ASSETS_DIR = os.path.join(REPO_ROOT, "assets", "papers")

# List of incorrect base names to delete
INCORRECT_BASENAMES = [
    "26-WhichTopologiesinduced_2019",
    "27-Kinetictheorytwo_2017",
    "36-Quantifyingimpactsafety_2022",
    "38-outlier_2018"
]

# List of correct arXiv IDs to download
CORRECT_ARXIV_IDS = [
    "1909.00997",  # PlotQA
    "1710.07300",  # FigureQA
    "2209.15323",  # SmallCap
    "1809.02156",  # CHAIR
]

def cleanup_incorrect():
    print("Cleaning up incorrect papers...")
    for base in INCORRECT_BASENAMES:
        # Delete from papers/
        pattern = os.path.join(PAPERS_DIR, f"{base}*")
        for path in glob.glob(pattern):
            if os.path.isdir(path):
                shutil.rmtree(path)
                print(f"  Deleted dir: {os.path.relpath(path, REPO_ROOT)}")
            else:
                os.remove(path)
                print(f"  Deleted file: {os.path.relpath(path, REPO_ROOT)}")
        
        # Delete from assets/papers/
        asset_dir = os.path.join(ASSETS_DIR, base)
        if os.path.exists(asset_dir):
            shutil.rmtree(asset_dir)
            print(f"  Deleted asset dir: {os.path.relpath(asset_dir, REPO_ROOT)}")

def download_correct():
    print("\nDownloading correct papers...")
    for arxiv_id in CORRECT_ARXIV_IDS:
        print(f"Ingesting arXiv:{arxiv_id}...")
        cmd = [sys.executable, "src/fetch_paper.py", arxiv_id]
        result = subprocess.run(cmd, capture_output=True, text=True)
        if result.returncode == 0:
            print(f"  --> Success for {arxiv_id}")
            try:
                import json
                parsed = json.loads(result.stdout)
                print(f"      Title: {parsed.get('metadata', {}).get('title')}")
                print(f"      Saved as: {parsed.get('base_name')}")
            except Exception:
                pass
        else:
            print(f"  --> Failed for {arxiv_id}")
            print(f"      Error: {result.stderr}")

def main():
    cleanup_incorrect()
    download_correct()
    print("\nCorrect papers downloaded and incorrect ones removed.")

if __name__ == "__main__":
    main()
