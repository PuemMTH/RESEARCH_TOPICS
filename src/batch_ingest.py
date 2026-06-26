#!/usr/bin/env python3
import subprocess
import sys
import time

arxiv_ids = [
    # Area 1: Accessibility
    "2110.04406",  # Lundgard & Satyanarayan, 2022 (Semantic Content)
    "2209.13718",  # Chintalapati et al., 2022 (HCI Alt Texts)
    "2503.17517",  # McNutt et al., 2025 (UpSet Plots)
    "2503.13369",  # Sightation Counts, 2025

    # Area 2: Scientific Figure Understanding / Captioning
    "2302.12324",  # Huang et al., 2023 (Summaries as Captions)
    "2407.11008",  # Cao & Liu, 2024 (Figuring out Figures)
    "2203.06486",  # Kantharaj et al., 2022 (Chart-to-Text)
    "1909.00996",  # Methani et al., 2020 (PlotQA)
    "1710.08300",  # Kahou et al., 2017 (FigureQA)
    "1801.08163",  # Kafle et al., 2018 (DVQA)
    "1906.02850",  # Chen et al., 2019/2020 (FigCAP)
    "2308.03349",  # Li & Tajbakhsh, 2023 (SciGraphQA)
    "2301.12293",  # Karishma et al., 2023 (ACL-Fig)
    "2406.18521",  # Wang et al., 2024 (CharXiv)

    # Area 3: Context Selection & Faithfulness
    "2005.11401",  # Lewis et al., 2020 (RAG)
    "2305.14779",  # Alt-Text with Context: Twitter, 2023
    "2406.02265",  # Understanding Retrieval Robustness, 2024
    "2211.12196",  # Ramos et al., 2023 (SmallCap)
    "2311.01477",  # Jing et al., 2023 (FaithScore)
    "1809.01094",  # Rohrbach et al., 2018 (CHAIR)
    "2404.13874",  # Qiu et al., 2024 (VALOR-Eval)
    "2510.03978",  # BIOMEDICA-LongCAP, 2025
    "2405.19094",  # ChaTS-Pi, 2024
]

def main():
    print(f"Starting batch download of {len(arxiv_ids)} papers...")
    success_count = 0
    fail_count = 0

    for i, arxiv_id in enumerate(arxiv_ids, 1):
        print(f"\n[{i}/{len(arxiv_ids)}] Processing arXiv:{arxiv_id}...")
        start_time = time.time()
        
        # Run fetch_paper.py using the virtual environment's python interpreter
        cmd = [sys.executable, "src/fetch_paper.py", arxiv_id]
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        elapsed = time.time() - start_time
        if result.returncode == 0:
            print(f"--> Success! Ingested in {elapsed:.2f}s")
            # Print last few lines of the output if success
            try:
                import json
                parsed = json.loads(result.stdout)
                print(f"    Title: {parsed.get('metadata', {}).get('title', 'Unknown')}")
                print(f"    Saved as: {parsed.get('base_name')}")
            except Exception:
                print(result.stdout[-200:])
            success_count += 1
        else:
            print(f"--> Failed! Return code: {result.returncode} in {elapsed:.2f}s")
            print(f"Error output:\n{result.stderr}")
            fail_count += 1
            
        # Polite delay to prevent rate-limiting by arXiv / ar5iv
        time.sleep(1.0)

    print("\n========================================")
    print(f"Batch ingestion complete.")
    print(f"Successful: {success_count}")
    print(f"Failed: {fail_count}")
    print("========================================")

if __name__ == "__main__":
    main()
