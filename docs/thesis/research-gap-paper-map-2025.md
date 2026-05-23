# Research Gap Paper Map 2025

หัวข้อ thesis: Context-Aware Caption Generation for Figures and Charts in Academic Documents

## Keyword 1: Scientific Figure Captioning

| Paper | Year | Why It Matters | Gap for Thesis |
|---|---:|---|---|
| Multi-LLM Collaborative Caption Generation in Scientific Documents | 2025 | ใช้ multi-LLM pipeline เพื่อ filter, generate, judge และ refine scientific figure captions | คุณภาพดีแต่ cost สูง และยังเป็น pipeline ที่ต้องพึ่ง LLM หลายตัว |
| LaMP-Cap: Personalized Figure Caption Generation With Multimodal Figure Profiles | 2025 | สร้าง dataset สำหรับ target figure + profile figures จาก paper เดียวกัน | ยังใช้ profile figures เป็น context แบบจำกัด ไม่ใช่ full-document retrieval |
| Personalized Scientific Figure Caption Generation: An Empirical Study on Author-Specific Writing Style Transfer | 2025 | ทดลอง fine-tune Qwen2.5-VL ด้วย profile, paragraph, mention และ OCR | พบ trade-off ระหว่าง style matching กับ caption quality |

## Keyword 2: Context-Aware Caption Generation

| Paper | Year | Why It Matters | Gap for Thesis |
|---|---:|---|---|
| Leveraging Author-Specific Context for Scientific Figure Caption Generation: 3rd SciCap Challenge | 2025 | ใช้ context filtering, category-focused prompt optimization และ profile-informed refinement | context filtering ยังไม่เป็น layout-aware RAG จาก PDF ทั้งฉบับ |
| LaMP-Cap: Personalized Figure Caption Generation With Multimodal Figure Profiles | 2025 | profile figures ทำหน้าที่เป็น multimodal context จาก paper เดียวกัน | ยังไม่วัดว่า section-aware หรือ long-document context ช่วยมากกว่า profile figures หรือไม่ |
| Personalized Scientific Figure Caption Generation: An Empirical Study on Author-Specific Writing Style Transfer | 2025 | แสดงว่า paragraph, mention และ OCR เพิ่ม performance มากจาก image+caption baseline | ยังขาด evaluation ที่แยก visual faithfulness, context relevance และ academic informativeness |

## Strong Research Gap Candidate

งานใหม่ในปี 2025 ยืนยันว่า context ช่วย scientific figure captioning แต่ส่วนใหญ่ยังใช้ context ที่ curated แล้ว เช่น figure-mentioning paragraph, OCR, profile figures หรือ prompt templates ขณะที่ thesis สามารถเสนอระบบที่ดึง context เองจาก academic PDF แบบ end-to-end:

1. PDF parsing and layout analysis
2. Figure extraction and figure-type detection
3. Multi-level context retrieval: mention paragraph, section, abstract, nearby text, table/figure cross-reference
4. VLM/RAG-based caption generation
5. Evaluation ที่แยก faithfulness, context relevance, informativeness และ style/lexical overlap

## Recommended Next Papers to Ingest Later

| Priority | Paper | Reason |
|---:|---|---|
| 1 | FigCaps-HF: A Figure-to-Caption Generative Framework and Benchmark with Human Feedback | ใช้ human feedback/RLHF สำหรับ scientific figure captions เหมาะกับ evaluation gap |
| 2 | Chart-to-Text / chart understanding papers ปี 2024-2025 | เสริมส่วน chart-specific captioning |
| 3 | Layout-aware document understanding papers เช่น Docling, DocLayNet, DocLayout-YOLO | เสริม module PDF parsing และ context extraction |

