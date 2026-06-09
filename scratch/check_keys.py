import re

dict_path = "assets/translations.js"
with open(dict_path, "r", encoding="utf-8") as f:
    content = f.read()

keys = re.findall(r'"([^"\n]+)"\s*:', content)
existing_keys = {k.strip().lower() for k in keys}

proposed_keys = [
    "MLBCAP", "GPT-4o", "LLaMA-3-8B", "Yi-1.5-9B", "MiniCPM-V", "LLaVA", "Pegasus",
    "LLMs", "high-quality", "low-quality", "descriptions", "author-written", "evaluations",
    "assessment", "generating", "judgments", "leveraging", "effectiveness", "available",
    "figure-mentioning", "arXiv papers", "figure-mentioning paragraphs", "human evaluation",
    "human evaluations", "Multi-LLM", "Collaborative", "Multi-LLM Collaborative",
    "scientific documents", "contextually", "prominent", "essential", "particularly",
    "integrates", "preferred", "demonstrating", "post-editing", "individual", "differences",
    "reasoning"
]

print("Proposed keys that already exist in DICT:")
for pk in proposed_keys:
    if pk.lower() in existing_keys:
        print(f"  {pk}")
