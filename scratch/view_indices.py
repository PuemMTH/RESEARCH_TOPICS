import json
with open('scratch/to_translate.json', encoding='utf-8') as f:
    data = json.load(f)
for i, d in enumerate(data):
    # Print index and first 60 chars of English text
    t = d.get('text', '') or d.get('caption', '')
    print(f"{i:2d} [{d['type']}]: {t[:70]}...")
