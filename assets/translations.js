/**
 * Global Thai translation dictionary for paper-reader HTMLs.
 * Add new terms here — all reader files pick them up automatically.
 *
 * Format: "english-lowercase": "คำแปลภาษาไทย"
 * Keys are matched case-insensitively after stripping punctuation.
 */
window.DICT = {
  // ── Personalization / Profiling ──
  "personalization":"การปรับให้เป็นส่วนตัว","personalized":"ที่ปรับให้เป็นส่วนตัว",
  "profile":"โปรไฟล์/ข้อมูลอ้างอิง","profiles":"โปรไฟล์/ข้อมูลอ้างอิง",

  // ── Modality ──
  "multimodal":"หลายรูปแบบ (ภาพ+ข้อความ)","unimodal":"รูปแบบเดียว",
  "image":"รูปภาพ","images":"รูปภาพ",
  "text":"ข้อความ","texts":"ข้อความ","textual":"เชิงข้อความ",
  "visual":"เชิงภาพ","vision":"การมองเห็น",
  "audio":"เสียง","speech":"คำพูด",

  // ── Figure Captioning ──
  "caption":"คำอธิบายภาพ","captions":"คำอธิบายภาพ","captioning":"การสร้างคำอธิบายภาพ",
  "figure":"รูปภาพในบทความ","figures":"รูปภาพในบทความ",

  // ── Datasets & Benchmarks ──
  "dataset":"ชุดข้อมูล","datasets":"ชุดข้อมูล",
  "benchmark":"เกณฑ์มาตรฐาน","benchmarks":"เกณฑ์มาตรฐาน",
  "corpus":"คลังข้อมูล","corpora":"คลังข้อมูล",
  "split":"การแบ่งชุดข้อมูล","splits":"การแบ่งชุดข้อมูล",
  "pair":"คู่ข้อมูล","pairs":"คู่ข้อมูล",
  "curate":"คัดเลือกและจัดระเบียบ","curated":"ที่คัดเลือกแล้ว","curation":"การคัดเลือก",
  "annotation":"การติดป้ายกำกับ","annotations":"การติดป้ายกำกับ","annotate":"ติดป้ายกำกับ",
  "label":"ป้ายกำกับ","labels":"ป้ายกำกับ","labeled":"ที่ติดป้ายแล้ว",
  "ground-truth":"ค่าอ้างอิงที่ถูกต้อง",

  // ── Retrieval & RAG ──
  "retrieval":"การค้นคืนข้อมูล","retrieve":"ค้นคืน","retrieved":"ที่ค้นคืนมา",
  "RAG":"การสร้างเสริมด้วยการค้นคืน (RAG)",
  "retrieval-augmented":"การสร้างเสริมด้วยการค้นคืน",
  "query":"คำค้น/คำถาม","queries":"คำค้น",
  "index":"ดัชนี","indexing":"การสร้างดัชนี",

  // ── Generation & LLMs ──
  "generation":"การสร้าง","generate":"สร้าง","generated":"ที่สร้างขึ้น","generative":"เชิงสร้าง",
  "hallucination":"การสร้างข้อมูลผิดพลาด","hallucinations":"การสร้างข้อมูลผิดพลาด",
  "language":"ภาษา","languages":"ภาษา",
  "model":"โมเดล","models":"โมเดล",
  "LLM":"โมเดลภาษาขนาดใหญ่ (LLM)","VLM":"โมเดลภาษา-ภาพ (VLM)",
  "prompt":"พรอมต์/คำสั่ง","prompts":"พรอมต์","prompting":"การออกแบบพรอมต์",
  "instruction":"คำสั่ง","instructions":"คำสั่ง","instruction-tuned":"ที่ปรับด้วยคำสั่ง",
  "token":"โทเค็น","tokens":"โทเค็น","tokenize":"แบ่งโทเค็น","tokenization":"การแบ่งโทเค็น",
  "vocabulary":"คำศัพท์","vocab":"คำศัพท์",
  "output":"ผลลัพธ์","outputs":"ผลลัพธ์",
  "input":"ข้อมูลนำเข้า","inputs":"ข้อมูลนำเข้า",

  // ── Architecture ──
  "architecture":"สถาปัตยกรรมโมเดล",
  "transformer":"ทรานส์ฟอร์เมอร์","transformers":"ทรานส์ฟอร์เมอร์",
  "attention":"กลไกความสนใจ","self-attention":"กลไกความสนใจตนเอง",
  "cross-attention":"กลไกความสนใจข้าม",
  "encoder":"ตัวเข้ารหัส","encoders":"ตัวเข้ารหัส","encode":"เข้ารหัส","encoding":"การเข้ารหัส",
  "decoder":"ตัวถอดรหัส","decoders":"ตัวถอดรหัส","decode":"ถอดรหัส","decoding":"การถอดรหัส",
  "layer":"ชั้น","layers":"ชั้น",
  "head":"หัว (attention head)","heads":"หัว",
  "embedding":"การแปลงเป็นเวกเตอร์","embeddings":"การแปลงเป็นเวกเตอร์","embed":"ฝัง",
  "neural":"ประสาทเทียม","network":"เครือข่าย","networks":"เครือข่าย",
  "backbone":"โครงสร้างหลัก",

  // ── Training ──
  "training":"การฝึกโมเดล","train":"ฝึก","trained":"ที่ฝึกแล้ว","pretraining":"การฝึกล่วงหน้า",
  "fine-tuning":"การปรับแต่งโมเดล","fine-tune":"ปรับแต่งโมเดล","finetuning":"การปรับแต่งโมเดล",
  "fine-tuned":"ที่ปรับแต่งแล้ว",
  "parameter":"พารามิเตอร์","parameters":"พารามิเตอร์",
  "weight":"น้ำหนัก","weights":"น้ำหนัก",
  "gradient":"ความชัน (gradient)","gradients":"ความชัน",
  "loss":"ฟังก์ชันสูญเสีย",
  "batch":"ชุดย่อยข้อมูล","epoch":"รอบการฝึก","epochs":"รอบการฝึก",
  "optimizer":"ตัวเพิ่มประสิทธิภาพ","learning":"การเรียนรู้","rate":"อัตรา",
  "dropout":"ดรอปเอาต์","regularization":"การควบคุมความซับซ้อน",
  "overfitting":"การ overfit","underfitting":"การ underfit",

  // ── Evaluation & Metrics ──
  "evaluation":"การประเมินผล","evaluate":"ประเมินผล","evaluated":"ที่ประเมินแล้ว",
  "metric":"ตัวชี้วัด","metrics":"ตัวชี้วัด",
  "accuracy":"ความแม่นยำ","accurate":"แม่นยำ",
  "precision":"ความแม่นยำเฉพาะ","recall":"การเรียกคืน",
  "lexical":"เชิงคำศัพท์",
  "faithfulness":"ความซื่อสัตย์ต่อข้อมูลต้นทาง",
  "informativeness":"ความมีข้อมูลครบถ้วน",
  "score":"คะแนน","scores":"คะแนน","scoring":"การให้คะแนน",
  "ablation":"การทดสอบแบบตัดทอน",
  "baseline":"เส้นฐาน/ค่าเปรียบเทียบ","baselines":"เส้นฐาน",
  "performance":"ประสิทธิภาพ",
  "result":"ผลลัพธ์","results":"ผลลัพธ์",

  // ── Research Process ──
  "experiment":"การทดลอง","experiments":"การทดลอง","experimental":"เชิงทดลอง",
  "empirical":"เชิงประจักษ์/จากการทดลอง",
  "finding":"การค้นพบ","findings":"การค้นพบ",
  "ablation":"การทดสอบแบบตัดทอน",
  "analysis":"การวิเคราะห์","analyze":"วิเคราะห์","analyzed":"ที่วิเคราะห์แล้ว",
  "comparison":"การเปรียบเทียบ","compare":"เปรียบเทียบ","compared":"ที่เปรียบเทียบ",
  "validation":"การตรวจสอบ","validate":"ตรวจสอบ","valid":"ที่ถูกต้อง",
  "inference":"การอนุมาน","infer":"อนุมาน",

  // ── Paper Structure ──
  "abstract":"บทคัดย่อ","abstracts":"บทคัดย่อ",
  "introduction":"บทนำ",
  "methodology":"ระเบียบวิธี","method":"วิธีการ","methods":"วิธีการ",
  "conclusion":"บทสรุป",
  "contribution":"ผลงาน/การมีส่วนร่วม","contributions":"ผลงาน",
  "limitation":"ข้อจำกัด","limitations":"ข้อจำกัด",
  "related":"ที่เกี่ยวข้อง","relevant":"ที่เกี่ยวข้อง","relevance":"ความเกี่ยวข้อง",
  "reference":"การอ้างอิง","references":"การอ้างอิง",
  "cross-reference":"การอ้างอิงข้าม",
  "author":"ผู้เขียน","authors":"ผู้เขียน",
  "paper":"บทความวิชาการ","papers":"บทความวิชาการ",
  "section":"ส่วน/หัวข้อ","sections":"ส่วน",
  "table":"ตาราง","tables":"ตาราง",
  "figure":"รูปภาพในบทความ",
  "paragraph":"ย่อหน้า","paragraphs":"ย่อหน้า","paragraph-level":"ระดับย่อหน้า",
  "journal":"วารสาร","journals":"วารสาร",
  "article":"บทความ","articles":"บทความ",

  // ── General Academic ──
  "scientific":"เชิงวิทยาศาสตร์","science":"วิทยาศาสตร์",
  "research":"การวิจัย","researcher":"นักวิจัย","researchers":"นักวิจัย",
  "thesis":"วิทยานิพนธ์","concept":"แนวคิด","concepts":"แนวคิด",
  "approach":"แนวทาง","approaches":"แนวทาง","innovations":"นวัตกรรม","innovation":"นวัตกรรม",
  "framework":"กรอบการทำงาน","frameworks":"กรอบการทำงาน",
  "pipeline":"กระบวนการ (ไปป์ไลน์)","pipelines":"กระบวนการ",
  "implementation":"การนำไปใช้","implement":"นำไปใช้","implemented":"ที่นำไปใช้แล้ว",
  "domain":"โดเมน/สาขา","domains":"โดเมน","domain-specific":"เฉพาะโดเมน",
  "context":"บริบท","contextual":"เชิงบริบท","surrounding":"โดยรอบ",
  "implication":"ผลที่ตามมา","implications":"ผลที่ตามมา",
  "hierarchy":"ลำดับชั้น","hierarchical":"เชิงลำดับชั้น","category":"ประเภท","categories":"ประเภท",
  "formulation":"การกำหนดสูตร/รูปแบบ",
  "challenge":"ความท้าทาย","challenges":"ความท้าทาย","complex":"ซับซ้อน",
  "open-source":"โอเพนซอร์ส",
  "fallback":"ทางสำรอง",
  "failure":"ความล้มเหลว","failures":"ความล้มเหลว",
  "setting":"การตั้งค่า/สภาพแวดล้อม","settings":"การตั้งค่า",
  "selection":"การเลือก","select":"เลือก","selected":"ที่เลือก","capture":"จับ/เก็บ",
  "information":"ข้อมูล","content":"เนื้อหา",
  "target":"เป้าหมาย","source":"แหล่งข้อมูล/ต้นฉบับ",
  "document":"เอกสาร","documents":"เอกสาร",
  "level":"ระดับ","levels":"ระดับ",
  "style":"รูปแบบ/สไตล์","styles":"รูปแบบ",
  "generic":"ทั่วไป/ไม่เฉพาะเจาะจง","underlying":"พื้นฐาน/เบื้องหลัง","adequately":"อย่างเพียงพอ",
  "feature":"คุณลักษณะ","features":"คุณลักษณะ",
  "extraction":"การสกัด","extract":"สกัด",
  "construction":"การสร้าง","construct":"สร้าง","constructed":"ที่สร้างแล้ว",
  "format":"รูปแบบ","formats":"รูปแบบ",
  "total":"รวมทั้งหมด","fully":"อย่างสมบูรณ์","initial":"เริ่มต้น",
  "number":"จำนวน","numbers":"จำนวน",
  "set":"ชุด","sets":"ชุด",
  "show":"แสดง","shown":"ที่แสดง",

  // ── RAG / Retrieval System ──
  "reranking":"การจัดอันดับใหม่","rerank":"จัดอันดับใหม่","reranked":"ที่จัดอันดับใหม่",
  "ranking":"การจัดอันดับ","rank":"อันดับ","ranked":"ที่จัดอันดับ",
  "intent":"ความตั้งใจ/เจตนา","intents":"ความตั้งใจ",
  "intent-aware":"ที่รับรู้ความตั้งใจ","context-aware":"ที่รับรู้บริบท","awareness":"การรับรู้","aware":"ที่รับรู้",
  "summarization":"การสรุป","summarize":"สรุป","summarized":"ที่สรุปแล้ว","summary":"บทสรุป",
  "semantic":"เชิงความหมาย","semantics":"ความหมาย",
  "modality":"รูปแบบข้อมูล","modalities":"รูปแบบข้อมูล",
  "QA":"การถาม-ตอบ (QA)","MRR":"ค่าเฉลี่ยส่วนกลับของอันดับ (MRR)",
  "educational":"เชิงการศึกษา","education":"การศึกษา",
  "publication":"สิ่งพิมพ์/บทความ","publications":"สิ่งพิมพ์",
  "workshop":"เวิร์กช็อป",
  "similarity":"ความคล้ายคลึง","similar":"คล้าย",
  "dense":"หนาแน่น","sparse":"กระจาย",
  "proxy":"ตัวแทน/พร็อกซี",
  "gap":"ช่องว่าง","gaps":"ช่องว่าง",
  "off-the-shelf":"สำเร็จรูป/ทั่วไป",
  "noise":"สัญญาณรบกวน/ข้อมูลไม่เกี่ยวข้อง",
  "filter":"กรอง","filtering":"การกรอง","filtered":"ที่กรองแล้ว",
  "prioritize":"จัดลำดับความสำคัญ","priority":"ความสำคัญ",
  "classification":"การจำแนก","classify":"จำแนก","classifier":"ตัวจำแนก",
  "conditioning":"การกำหนดเงื่อนไข","condition":"เงื่อนไข","conditioned":"ที่กำหนดเงื่อนไข",
  "signal":"สัญญาณ/ข้อมูลชี้นำ","signals":"สัญญาณ",
  "cross-modal":"ข้ามรูปแบบข้อมูล",
  "heading":"หัวข้อ","headings":"หัวข้อ",
  "window":"หน้าต่าง/ช่วง","windows":"หน้าต่าง/ช่วง",
  "generalizability":"ความสามารถในการนำไปใช้ทั่วไป",
  "representation":"การแทนข้อมูล","representations":"การแทนข้อมูล","represent":"แทน",

  // ── RAG taxonomy / query levels ──
  "taxonomy":"การจำแนกประเภท","taxonomies":"การจำแนกประเภท",
  "explicit":"ที่ชัดเจน/ตรงไปตรงมา","implicit":"ที่โดยนัย/ซ่อนอยู่",
  "rationale":"เหตุผล","rationales":"เหตุผล",
  "injection":"การฉีด/การใส่","inject":"ฉีด/ใส่",
  "iterative":"แบบวนซ้ำ","iteration":"รอบการวนซ้ำ",
  "multi-hop":"หลายขั้น","multi-turn":"หลาย turn",
  "routing":"การกำหนดเส้นทาง","route":"กำหนดเส้นทาง",
  "decompose":"แยกย่อย","decomposition":"การแยกย่อย",
  "stratification":"การแบ่งชั้น","stratified":"ที่แบ่งชั้น",
  "augmented":"ที่เสริม","augment":"เสริม",

  // ── LLM evaluation / judging ──
  "judge":"ผู้ตัดสิน/ตัดสิน","judging":"การตัดสิน",
  "pairwise":"แบบคู่","pairwise-comparison":"การเปรียบเทียบแบบคู่",
  "grading":"การให้คะแนน","grade":"ให้คะแนน",
  "rubric":"เกณฑ์การให้คะแนน","rubrics":"เกณฑ์",
  "crowdsourced":"จากมวลชน","crowdsource":"รวบรวมจากมวลชน",
  "agreement":"ความสอดคล้อง","agree":"เห็นด้วย","disagree":"ไม่เห็นด้วย",
  "scalable":"ที่ขยายได้","scalability":"ความสามารถในการขยาย","scale":"ขนาด/ขยาย",
  "bias":"อคติ/ความเอนเอียง","biased":"ที่มีอคติ","unbiased":"ไม่มีอคติ",
  "verbosity":"ความยืดยาว","verbose":"ยืดยาว",
  "surrogate":"ตัวแทน","surrogates":"ตัวแทน",
  "collapse":"รวมเป็นหนึ่ง/พัง","collapsed":"ที่รวมเป็นหนึ่ง",
  "instruction-following":"การทำตามคำสั่ง","open-ended":"ปลายเปิด",
  "capability":"ความสามารถ","capabilities":"ความสามารถ",
  "preference":"ความชอบ/การเลือก","preferences":"ความชอบ",
  "helpfulness":"ความเป็นประโยชน์","harmful":"เป็นอันตราย","harmless":"ไม่เป็นอันตราย",
  "chat":"การสนทนา","chatbot":"แชทบอท","assistant":"ผู้ช่วย",
  "anonymous":"ไม่ระบุตัวตน","crowdsourcing":"การรวบรวมจากมวลชน",
  "chain-of-thought":"ห่วงโซ่ความคิด","few-shot":"ตัวอย่างน้อย","zero-shot":"ไม่มีตัวอย่าง",
  "catastrophic":"ร้ายแรง","forgetting":"การลืม",

  // ── NLP/vision methods ──
  "OCR":"การรู้จำตัวอักษร (OCR)","optical":"ออปติคัล",
  "graph":"กราฟ","graphs":"กราฟ",
  "entity":"หน่วย/ตัวตน","entities":"หน่วย",
  "relationship":"ความสัมพันธ์","relationships":"ความสัมพันธ์",
  "schema":"โครงสร้างข้อมูล (schema)","schemas":"โครงสร้างข้อมูล",
  "Cypher":"ภาษาคิวรี Cypher","SQL":"ภาษาคิวรี SQL",
  "query":"คำค้น/คำถาม",
  "privacy":"ความเป็นส่วนตัว","sensitive":"ข้อมูลละเอียดอ่อน",
  "security":"ความปลอดภัย","secure":"ปลอดภัย",
  "expose":"เปิดเผย","exposed":"ที่เปิดเผย",

  // ── Visualization ──
  "visualization":"การแสดงผลเชิงภาพ","visualize":"แสดงผลเชิงภาพ","visual":"เชิงภาพ",
  "scatter":"กระจาย","plot":"กราฟ/พล็อต",
  "temporal":"เชิงเวลา","freshness":"ความสดใหม่",
  "dimension":"มิติ","dimensions":"มิติ","dimensional":"เชิงมิติ",
  "distribution":"การกระจาย","distributions":"การกระจาย",
  "cluster":"กลุ่ม","clusters":"กลุ่ม","clustering":"การจัดกลุ่ม",
  "embedding":"การแปลงเป็นเวกเตอร์",
  "t-SNE":"การลดมิติ t-SNE","UMAP":"การลดมิติ UMAP",
  "interactive":"แบบโต้ตอบ","interaction":"การโต้ตอบ",
  "metadata":"ข้อมูลเกี่ยวกับข้อมูล","linked":"เชื่อมโยง",

  // ── Caption pipeline ──
  "two-stage":"สองขั้นตอน","staged":"เป็นขั้นตอน",
  "conciseness":"ความกระชับ","concise":"กระชับ",
  "coherence":"ความสอดคล้อง","coherent":"สอดคล้อง",
  "fluency":"ความคล่อง","fluent":"คล่อง",
  "grounded":"ที่อ้างอิงจริง","grounding":"การอ้างอิงจริง",
  "factual":"เชิงข้อเท็จจริง","factually":"อย่างถูกต้องตามข้อเท็จจริง",
  "correlation":"ค่าสหสัมพันธ์","correlated":"ที่สัมพันธ์กัน",
  "synthetic":"สังเคราะห์","synthesize":"สังเคราะห์","synthesis":"การสังเคราะห์",
  "mentions":"การกล่าวถึง","mention":"กล่าวถึง","mentioned":"ที่กล่าวถึง",
  "tokens":"โทเค็น","OCR-tokens":"โทเค็นจาก OCR",
  "candidate":"ตัวเลือก","candidates":"ตัวเลือก",
  "reranker":"ตัวจัดอันดับใหม่","rerank":"จัดอันดับใหม่",
  "optimizer":"ตัวปรับแต่ง","optimize":"ปรับแต่ง","optimized":"ที่ปรับแต่งแล้ว",
  "DSPy":"กรอบงาน DSPy","pipeline":"กระบวนการ (ไปป์ไลน์)",
  "reproducibility":"ความสามารถในการทำซ้ำ","reproducible":"ที่ทำซ้ำได้",
  "bottleneck":"คอขวด","bottlenecks":"คอขวด",
  "unstructured":"ไม่มีโครงสร้าง","structured":"มีโครงสร้าง",
  "digitize":"แปลงเป็นดิจิทัล","digitized":"ที่แปลงแล้ว",

  // ── Paper-specific enriched terms (format: { th, ctx }) ──
  "MT-Bench":  { th:"ชุดทดสอบ MT-Bench",    ctx:"Paper #7 · 80 คำถาม 8 หมวด — ใช้ LLM ตัดสิน คิดค้นโดย Zheng et al. 2023" },
  "LaMP-Cap":  { th:"ชุดข้อมูล LaMP-Cap",   ctx:"Paper #8 · dataset สำหรับ personalized figure captioning — target figure + profile figures จาก paper เดียวกัน" },
  "SciCap":    { th:"ชุดข้อมูล SciCap",     ctx:"Papers #8, #9 · large-scale scientific figure captioning dataset จาก arXiv papers" },
  "MIPROv2":   { th:"ตัวปรับแต่ง prompt",    ctx:"Paper #9 · DSPy optimizer สำหรับ multi-stage prompt optimization อัตโนมัติ" },
  "SIMBA":     { th:"กรอบงาน SIMBA",        ctx:"Paper #9 · Systematic Iterative Multimodal Bibliography Augmentation — author-context captioning" },
  "QWK":       { th:"Quadratic Weighted Kappa", ctx:"Paper #10 · ค่าสถิติวัด annotator agreement แบบ weighted — ค่ายิ่งสูงยิ่งสอดคล้องกัน" },
  "Spearman":  { th:"Spearman Correlation",  ctx:"Paper #10 · ค่าสหสัมพันธ์อันดับ — วัดความสัมพันธ์แบบ rank-based ไม่ขึ้นกับ distribution" },
  "MIND-RAG":  { th: "กรอบงาน MIND-RAG", ctx: "เหมือนระบบสืบค้นที่เดาได้ว่าคนถามอยากได้ภาพหรือข้อความวิชาอะไร → RAG ที่ใช้ image summarization และ intent-aware reranking (Paper #11)" },
  "MEED-QA":   { th: "ชุดข้อมูล MEED-QA", ctx: "ชุดทดสอบ 10 ปีสำหรับ RAG เชิงการศึกษา → Medical Education QA dataset สำหรับประเมินการสืบค้นและตอบคำถามหลายรูปแบบ (Paper #11)" },
  "Graph-RAG": { th: "กรอบงาน Graph-RAG", ctx: "เหมือนการทำ RAG บนแผนที่ความคิดที่ระบุความสัมพันธ์ของข้อมูล → RAG ที่ทำงานร่วมกับ Knowledge Graph" },
  "semantic drift": { th: "ความหมายเบี่ยงเบน", ctx: "เหมือนการค่อยๆ ไหลออกนอกเรื่องระหว่างสืบค้น → ความหมายเบี่ยงเบนไปจากหัวข้อคิวรีเดิมระหว่างดึงข้อมูล" },
  "context-aware image summarization": { th: "การสรุปภาพตามบริบท", ctx: "เหมือนการอ่านคำอธิบายรอบรูปภาพมาช่วยอธิบายรูปภาพ → การสร้าง semantic summary ของ figure จาก surrounding context (Paper #11)" },
  "intent-aware reranking": { th: "การจัดอันดับใหม่โดยรับรู้ความเจตนา", ctx: "เหมือนคนจัดลำดับเอกสารตามประเภทที่ลูกค้าต้องการ → การจัดอันดับ RAG ใหม่โดยอ้างอิง modality และ domain intent (Paper #11)" },
  "Neo4j":     { th:"ฐานข้อมูลกราฟ Neo4j",   ctx:"Paper #12 · graph database ยอดนิยม ใช้ Cypher query language" },
  "PII":       { th:"ข้อมูลส่วนตัว (PII)",   ctx:"Paper #12 · Personally Identifiable Information — ข้อมูลที่ต้องปกป้องไม่ให้รั่วผ่าน NL query" },
  "NL2Cypher": { th:"แปล NL เป็น Cypher",    ctx:"Paper #12 · task สร้าง graph database query จาก natural language input" },
  "dual-view": { th:"การแสดงผลสองมุมมอง",    ctx:"Paper #13 · list view + scatter plot แสดงพร้อมกันและ linked กัน" },

  // ── Paper #1: SciCap — new terms ──
  "BLEU":    "ตัวชี้วัดคุณภาพข้อความที่สร้าง (BLEU)",
  "BLEU-4":  { th:"คะแนน BLEU-4", ctx:"เหมือนนับว่า 4 คำต่อเนื่องตรงกับ reference กี่เปอร์เซ็นต์ → วัดความทับซ้อน 4-gram ระหว่าง output กับ reference caption" },
  "ResNet":  { th:"โมเดล ResNet (Residual Network)", ctx:"เหมือน CNN ที่มี shortcut ข้ามชั้น → แก้ปัญหา vanishing gradient ให้ฝึก network ลึกได้" },
  "ResNet-101": { th:"โมเดล ResNet-101", ctx:"ResNet 101 ชั้น → image encoder มาตรฐานสำหรับงาน image captioning" },
  "LSTM":    { th:"โมเดล LSTM (Long Short-Term Memory)", ctx:"เหมือนหน่วยความจำที่เลือกได้ว่าจะจำหรือลืมอะไร → RNN ชนิดพิเศษที่รับมือ long-range dependency ได้" },
  "CNN":     "เครือข่ายประสาทเทียมเชิงสัมพัส (Convolutional Neural Network)",
  "image-captioning": "การสร้างคำอธิบายภาพอัตโนมัติ",
  "subfigure":  "รูปย่อย (ส่วนหนึ่งของรูปภาพรวม)",
  "subfigures": "รูปย่อย",
  "PDFFigures": { th:"เครื่องมือ PDFFigures 2.0", ctx:"เหมือน OCR เฉพาะทางสำหรับ PDF วิชาการ → สกัดรูปภาพ ตาราง และ caption จาก PDF อัตโนมัติ (Paper #1)" },
  "FigureSeparator": { th:"โมเดล FigureSeparator", ctx:"เหมือนตัวตรวจสอบว่ารูปมีรูปย่อยหรือเปล่า → CNN แยก compound figure ด้วยความแม่นยำ 85.9% (Paper #1)" },
  "FigureQA": { th:"ชุดข้อมูล FigureQA", ctx:"เหมือน benchmark QA บนรูปภาพสังเคราะห์ → dataset ถาม-ตอบบน chart ที่สร้างด้วย Matplotlib (Paper #1)" },
  "DVQA":    { th:"ชุดข้อมูล DVQA", ctx:"เหมือน FigureQA แต่เน้น bar chart → dataset QA บน bar chart สังเคราะห์ (Paper #1)" },
  "FigCAP":  { th:"ชุดข้อมูล FigCAP", ctx:"งาน captioning รุ่นแรกบน figure สังเคราะห์ → ใช้ LSTM+attention แต่ figure ไม่ใช่ real-world (Paper #1)" },
  "FigureSeer": { th:"ชุดข้อมูล FigureSeer", ctx:"เหมือนฐานข้อมูลรูปภาพวิทยาศาสตร์จริงรุ่นแรก → 60K+ figure จาก research papers 7 ประเภท (Paper #1)" },
  "SciBERT": { th:"โมเดล SciBERT", ctx:"เหมือน BERT แต่ฝึกบนบทความวิทยาศาสตร์ → pre-trained LM เฉพาะทางวิชาการ ใช้กับ SciCap ในงานต่อยอด (Paper #1)" },
  "NLTK":    "ชุดเครื่องมือ NLP สำหรับ Python (Natural Language Toolkit)",
  "end-to-end": "แบบครบวงจร (รับ input → ได้ output โดยตรง ไม่ต้องแยกขั้นตอน)",
  "Adam":    { th:"Adam optimizer", ctx:"เหมือน gradient descent ที่ปรับ learning rate อัตโนมัติตาม momentum → optimizer ยอดนิยมสำหรับ deep learning" },

  // ── Paper #2: MLBCAP — new terms ──
  "MLBCAP": { th: "กรอบงาน MLBCAP", ctx: "เหมือนทีมเขียน-ตรวจงาน -> กรอบงานสร้างคำบรรยายภาพด้วย LLM หลายตัวประสานกัน (Paper #2)" },
  "GPT-4o": { th: "โมเดล GPT-4o", ctx: "เหมือนผู้รู้สารพัด -> โมเดลภาษา-ภาพขนาดใหญ่ประสิทธิภาพสูงแบบปิด (Paper #2)" },
  "LLaMA-3-8B": { th: "โมเดล LLaMA-3-8B", ctx: "เหมือนผู้ช่วยขนาดกะทัดรัดแต่ฉลาด -> โมเดลภาษาแบบเปิดขนาด 8 พันล้านพารามิเตอร์ (Paper #2)" },
  "Yi-1.5-9B": { th: "โมเดล Yi-1.5-9B", ctx: "เหมือนผู้ชำนาญการภาษาจีน-อังกฤษ -> โมเดลภาษาแบบเปิดขนาด 9 พันล้านพารามิเตอร์ (Paper #2)" },
  "MiniCPM-V": { th: "โมเดล MiniCPM-V", ctx: "เหมือนผู้ช่วยตาดีบนมือถือ -> โมเดลภาษา-ภาพขนาดเล็กสำหรับอุปกรณ์พกพา (Paper #2)" },
  "LLaVA": { th: "โมเดล LLaVA", ctx: "เหมือนเพิ่มดวงตาให้โมเดลภาษา -> โมเดลภาษา-ภาพแบบเปิดที่ใช้ภาพร่วมกับข้อความ (Paper #2)" },
  "Pegasus": { th: "โมเดล Pegasus", ctx: "เหมือนนักย่อเอกสาร -> โมเดล Encoder-Decoder สำหรับสรุปย่อข้อความ (Paper #2)" },
  "LLMs": "โมเดลภาษาขนาดใหญ่ (LLMs)",
  "high-quality": "คุณภาพสูง",
  "low-quality": "คุณภาพต่ำ",
  "descriptions": "คำอธิบาย/คำบรรยาย",
  "author-written": "ที่เขียนโดยผู้เขียนวิจัย",
  "evaluations": "การประเมินผล",
  "assessment": "การประเมิน",
  "generating": "การสร้าง",
  "judgments": "การตัดสิน",
  "leveraging": "การใช้ประโยชน์จาก",
  "effectiveness": "ประสิทธิผล/ประสิทธิภาพ",
  "available": "มีให้ใช้งาน",
  "figure-mentioning": "ที่กล่าวถึงรูปภาพ",
  "arXiv papers": "บทความวิจัยใน arXiv",
  "figure-mentioning paragraphs": "ย่อหน้าที่กล่าวถึงรูปภาพ",
  "human evaluation": "การประเมินโดยมนุษย์",
  "human evaluations": "การประเมินโดยมนุษย์",
  "Multi-LLM": "การใช้หลาย LLM ร่วมกัน",
  "Collaborative": "เชิงร่วมมือ",
  "Multi-LLM Collaborative": "ความร่วมมือระหว่างหลาย LLM",
  "scientific documents": "เอกสารทางวิทยาศาสตร์",
  "contextually": "ตามบริบท",
  "prominent": "ที่โดดเด่น",
  "essential": "ที่จำเป็น/สำคัญ",
  "particularly": "โดยเฉพาะอย่างยิ่ง",
  "integrates": "ผสานรวม",
  "preferred": "ที่เป็นที่ต้องการ/เป็นที่ชื่นชอบ",
  "demonstrating": "แสดงให้เห็นถึง",
  "post-editing": "การปรับแต่งแก้ไขหลังการสร้าง",
  "individual": "ส่วนบุคคล/รายบุคคล",
  "differences": "ความแตกต่าง",
  "reasoning": "การใช้เหตุผล",

  // ── Paper #3: DePlot ──
  "DePlot": { th:"โมเดล DePlot", ctx:"เหมือนนักแปลกราฟเป็นตาราง → โมเดล image-to-text ที่แปลงภาพแผนภูมิ/กราฟให้เป็นตารางข้อมูลแบบเรียงเส้นตรง (Paper #3)" },
  "MatCha": { th:"โมเดล MatCha", ctx:"เหมือนผู้เชี่ยวชาญอ่านแผนภูมิที่ฝึกมาก่อน → โมเดลภาษาภาพ SOTA ที่ฝึกล่วงหน้าด้วยงานคณิตศาสตร์และ chart derendering ใช้เป็นฐานของ DePlot (Paper #3)" },
  "ChartQA": { th:"ชุดข้อมูล ChartQA", ctx:"เหมือนชุดข้อสอบถาม-ตอบจากแผนภูมิ → benchmark สำหรับ chart question answering มีทั้งคำถามสังเคราะห์และที่มนุษย์เขียน (Paper #3)" },
  "PlotQA": { th:"ชุดข้อมูล PlotQA", ctx:"เหมือน ChartQA แต่สร้างแบบสังเคราะห์ทั้งหมด → benchmark QA บนกราฟสังเคราะห์ขนาดใหญ่ มี v1 (extractive) และ v2 (numerical reasoning) (Paper #3)" },
  "ChartOCR": { th:"ระบบ ChartOCR", ctx:"เหมือนระบบ OCR ที่จับจุดสำคัญบนกราฟ → ระบบไฮบริดที่ใช้ OCR และ keypoint detection ในการสกัดข้อมูลจากแผนภูมิ ใช้เป็นเส้นฐาน (Paper #3)" },
  "Pix2Struct": { th:"โมเดล Pix2Struct", ctx:"เหมือนตัวอ่านภาพหน้าเว็บแบบ end-to-end → โมเดล image-to-text ที่ฝึกล่วงหน้าด้วยการแปลง screenshot เป็น HTML ใช้เป็นเส้นฐาน (Paper #3)" },
  "PaLI": { th:"โมเดล PaLI", ctx:"เหมือนโมเดลภาพ-ภาษาสารพัดประโยชน์ → โมเดลภาพ-ภาษาขนาดใหญ่ของ Google ใช้เป็นเส้นฐานเปรียบเทียบกับ DePlot (Paper #3)" },
  "FlanPaLM": { th:"โมเดล FlanPaLM", ctx:"เหมือน PaLM ที่ฝึกเพิ่มด้วยคำสั่งสอน → PaLM 540B ที่ปรับด้วย instruction tuning ใช้เป็น LLM คู่กับ DePlot (Paper #3)" },
  "Codex": { th:"โมเดล Codex", ctx:"เหมือนโปรแกรมเมอร์ AI → LLM ของ OpenAI ที่เชี่ยวชาญการเขียนโค้ด ใช้กับ Program-of-Thoughts prompting (Paper #3)" },
  "RNSS": { th:"ตัวชี้วัด RNSS (Relative Number Set Similarity)", ctx:"เหมือนเทียบแค่ชุดตัวเลขแบบไม่สนตำแหน่ง → ตัวชี้วัดเดิมที่วัดความคล้ายของชุดตัวเลขในตาราง ไม่สนโครงสร้าง (Paper #3)" },
  "RMS": { th:"ตัวชี้วัด RMS (Relative Mapping Similarity)", ctx:"เหมือนเทียบทั้งตำแหน่งและค่าของตาราง → ตัวชี้วัดใหม่ที่ DePlot เสนอ พิจารณาทั้งโครงสร้างและค่าตัวเลข ทนต่อการสลับแถว/คอลัมน์ (Paper #3)" },
  "linearized table": { th:"ตารางแบบเรียงเส้นตรง", ctx:"เหมือนพิมพ์ตารางออกมาเป็นข้อความต่อกันด้วย | และ \\n → การแทนตารางในรูปลำดับข้อความเดียว ใช้เป็นผลลัพธ์ของ DePlot (Paper #3)" },
  "plot-to-table": { th:"การแปลงกราฟเป็นตาราง", ctx:"งานหลักของ DePlot → การแปลงภาพแผนภูมิ/กราฟให้เป็นตารางข้อมูลที่อยู่เบื้องหลัง (Paper #3)" },
  "Chain-of-Thoughts": { th:"การ Prompt แบบ Chain-of-Thoughts (CoT)", ctx:"เหมือนให้โมเดลคิดเป็นขั้นเป็นตอนก่อนตอบ → เทคนิค prompt ที่ให้โมเดลแสดงเหตุผลทีละขั้นก่อนให้คำตอบสุดท้าย (Paper #3)" },
  "Self-Consistency": { th:"เทคนิค Self-Consistency (SC)", ctx:"เหมือนถามหลายครั้งแล้วเอาคำตอบที่ได้เสียงข้างมาก → สุ่มตัวอย่างคำตอบหลายเส้นทางแล้วเลือกคำตอบที่ปรากฏบ่อยที่สุด (Paper #3)" },
  "Program-of-Thoughts": { th:"การ Prompt แบบ Program-of-Thoughts (PoT)", ctx:"เหมือนให้โมเดลเขียนโค้ดคำนวณแทนคิดเลขเอง → เทคนิค prompt ที่ให้โมเดลสร้างโค้ดเพื่อให้ตัวแปลภาษารันหาคำตอบ (Paper #3)" },
  "one-shot": "แบบมีตัวอย่างเดียว (one-shot)",
  "modality conversion": { th:"การแปลงรูปแบบข้อมูล (modality conversion)", ctx:"เหมือนแปลภาพให้เป็นข้อความก่อนคิดต่อ → การแปลงข้อมูลจากรูปแบบหนึ่ง (ภาพ) ไปเป็นอีกรูปแบบ (ข้อความ) เพื่อให้ LLM ใช้เหตุผลได้ (Paper #3)" },
  "Relative Number Set Similarity": "ความคล้ายคลึงของชุดตัวเลขสัมพัทธ์ (RNSS)",
  "Relative Mapping Similarity": "ความคล้ายคลึงของการจับคู่สัมพัทธ์ (RMS)",
  "Normalized Levenshtein Distance": { th:"ระยะห่าง Levenshtein แบบปรับมาตรฐาน", ctx:"เหมือนนับจำนวนตัวอักษรที่ต้องแก้ไขแล้วทำให้เป็นสัดส่วน → ตัวชี้วัดระยะห่างของสตริงที่ปรับให้อยู่ในช่วง 0-1 (Paper #3)" },
  "out-of-distribution": "ข้อมูลนอกการกระจาย (out-of-distribution, OOD)",
  "transposition": "การสลับแถวเป็นคอลัมน์ (transposition)",
  "permutation": "การสลับลำดับ (permutation)",
  "chart understanding": "การทำความเข้าใจแผนภูมิ",
  "visual language reasoning": "การใช้เหตุผลเชิงภาษาภาพ",
  "human-written queries": "คำถามที่มนุษย์เขียนขึ้น",
  "synthetic queries": "คำถามสังเคราะห์",
  "keypoint detection": "การตรวจจับจุดสำคัญ (keypoint detection)",
  "data leakage": "การรั่วไหลของข้อมูล (data leakage)",

  // ── Paper #4: SciCap+ ──
  "SciCap+": { th:"ชุดข้อมูล SciCap+", ctx:"เหมือน SciCap เวอร์ชันเสริมความรู้ → ต่อยอดจาก SciCap ด้วย mention-paragraph และ OCR tokens (Paper #4)" },
  "M4C-Captioner": { th:"โมเดล M4C-Captioner", ctx:"เหมือนนักเขียนคำบรรยายที่หยิบคำจาก OCR มาแต่งประโยคได้ → โมเดล caption ที่ต่อยอดจาก M4C ด้วย pointer network (Paper #4)" },
  "M4C": { th:"โมเดล M4C (Multimodal Multi-Copy Mesh)", ctx:"เหมือนตาข่ายที่ทอความรู้จากหลายโมดัลลิตีเข้าด้วยกัน → สถาปัตยกรรม transformer ที่เรียนรู้ representation ร่วมจากภาพ ข้อความ และ OCR (Paper #4)" },
  "MMF": { th:"เฟรมเวิร์ก MMF", ctx:"เหมือนกล่องเครื่องมือสำเร็จรูปสำหรับงาน multimodal → framework โอเพนซอร์สบน PyTorch สำหรับงานวิจัย vision-and-language (Paper #4)" },
  "mention-paragraph": { th:"ย่อหน้าอ้างอิงรูป (mention-paragraph)", ctx:"เหมือนข้อความรอบรูปที่พูดถึงรูปนั้นโดยตรง → ย่อหน้าแรกในเนื้อหาที่กล่าวถึงรูปภาพนั้นโดยใช้เลขรูปอ้างอิง (Paper #4)" },
  "mention-paragraphs": { th:"ย่อหน้าอ้างอิงรูป (mention-paragraphs)", ctx:"เหมือนข้อความรอบรูปที่พูดถึงรูปนั้นโดยตรง → ย่อหน้าในเนื้อหาที่กล่าวถึงรูปภาพนั้น ใช้เป็นความรู้บริบทเสริม (Paper #4)" },
  "OCR tokens": { th:"ข้อความที่อ่านได้จากรูป (OCR tokens)", ctx:"เหมือนตัวอักษรที่สแกนออกมาจากรูปพร้อมพิกัด → คำ/ตัวเลขในรูปภาพที่สกัดด้วย OCR พร้อมกรอบพิกัด (bounding box) (Paper #4)" },
  "PHOC": { th:"ตัวเข้ารหัส PHOC (Pyramidal Histogram of Characters)", ctx:"เหมือนแปลงตัวอักษรเป็นฮิสโตแกรมหลายระดับ → วิธีเข้ารหัสคำเป็นเวกเตอร์โดยอิงโครงสร้างตัวอักษรแบบพีระมิด (Paper #4)" },
  "sentencepiece": { th:"ตัวตัดคำ SentencePiece", ctx:"เหมือนเครื่องตัดคำย่อยอัตโนมัติไม่ขึ้นกับภาษา → tokenizer แบบ subword ใช้สร้างพจนานุกรม 32,000 คำของโมเดล (Paper #4)" },
  "PDFFigures 2.0": { th:"เครื่องมือ PDFFigures 2.0", ctx:"เหมือน OCR เฉพาะทางสำหรับ PDF วิชาการ → เครื่องมือสกัดรูป ตาราง และข้อความจาก PDF บทความวิทยาศาสตร์ (Paper #4)" },
  "Faster R-CNN": { th:"โมเดล Faster R-CNN", ctx:"เหมือนกล้องตรวจจับวัตถุที่บอกได้ทั้งตำแหน่งและลักษณะ → โมเดล object detection ใช้สกัด feature เชิงภาพของ OCR tokens (Paper #4)" },
  "ResNet-152": { th:"โมเดล ResNet-152", ctx:"เหมือน ResNet ที่มี 152 ชั้น → image encoder เชิงลึกที่ใช้สกัด feature ของรูปภาพในงานนี้ (Paper #4)" },
  "FastText": { th:"โมเดล FastText", ctx:"เหมือนตัวแทนคำที่รู้จักคำที่ไม่เคยเห็นผ่าน subword → word embedding ที่เข้ารหัสด้วยข้อมูล subword (Paper #4)" },
  "Cohen's kappa": { th:"ค่าสถิติ Cohen's Kappa", ctx:"เหมือนวัดว่าสองคนให้คะแนนตรงกันมากแค่ไหนหลังหักลบโอกาสบังเอิญ → ค่าสถิติวัดความสอดคล้องระหว่างผู้ประเมินสองคน (Paper #4)" },
  "knowledge-augmented image captioning": { th:"การสร้างคำบรรยายภาพแบบเสริมความรู้", ctx:"เหมือนให้โมเดลอ่านทั้งภาพและเนื้อเรื่องรอบภาพก่อนแต่งคำบรรยาย → การตั้งโจทย์ caption ที่ต้องใช้ความรู้จากหลายโมดัลลิตีไม่ใช่แค่ภาพ (Paper #4)" },
  "appropriateness evaluation": "การประเมินความเหมาะสม",
  "relevance score": "คะแนนความเกี่ยวข้อง",
  "figure-to-caption": "งานแปลงรูปภาพเป็นคำบรรยาย (figure-to-caption)",
  "multimodal summarization": "การสรุปข้อมูลแบบหลายโมดัลลิตี",
  "out-of-vocabulary": "คำที่ไม่อยู่ในพจนานุกรม (out-of-vocabulary)",
};


window.SENTENCES = [
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Abstract",
    "th": "บทคัดย่อ (Abstract)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Researchers use figures to communicate rich, complex information in scientific papers.",
    "th": "นักวิจัยใช้รูปภาพเพื่อสื่อสารข้อมูลที่ซับซ้อนและอุดมด้วยความหมายในบทความวิชาการ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The captions of these figures are critical to conveying effective messages.",
    "th": "คำอธิบายภาพ (caption) ของรูปเหล่านี้มีความสำคัญอย่างยิ่งในการถ่ายทอดสาระที่ต้องการ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "However, low-quality figure captions commonly occur in scientific articles and may decrease understanding.",
    "th": "อย่างไรก็ตาม คำอธิบายภาพคุณภาพต่ำยังคงพบได้บ่อยในบทความวิทยาศาสตร์และอาจลดความเข้าใจของผู้อ่าน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "In this paper, we propose an end-to-end neural framework to automatically generate informative, high-quality captions for scientific figures.",
    "th": "ในงานนี้เราเสนอกรอบงานเชิงประสาทเทียมแบบ end-to-end สำหรับสร้างคำอธิบายภาพที่ให้ข้อมูลครบถ้วนและมีคุณภาพสูงโดยอัตโนมัติ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "To this end, we introduce SciCap, a large-scale figure-caption dataset based on computer science arXiv papers published between 2010 and 2020.",
    "th": "เพื่อจุดประสงค์นี้ เราแนะนำ SciCap ชุดข้อมูล figure-caption ขนาดใหญ่ที่สร้างจากบทความวิทยาศาสตร์คอมพิวเตอร์ใน arXiv"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "After pre-processing — including figure-type classification, sub-figure identification, text normalization, and caption text selection — SciCap contained more than two million figures extracted from over 290,000 papers.",
    "th": "ที่ตีพิมพ์ระหว่างปี 2010–2020 หลังผ่านกระบวนการประมวลผลเบื้องต้น (การจำแนกประเภทรูปภาพ การระบุ subfigure การปรับมาตรฐานข้อความ และการคัดเลือกข้อความคำอธิบาย) SciCap มีรูปภาพมากกว่าสองล้านรูปจากบทความกว่า"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We then established baseline models that caption graph plots, the dominant (19.2%) figure type.",
    "th": "290,000 ชิ้น เราสร้างโมเดล baseline สำหรับ graph plot ซึ่งเป็นประเภทรูปภาพที่พบมากที่สุด"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The experimental results showed both opportunities and steep challenges of generating captions for scientific figures.",
    "th": "(ร้อยละ 19.2) ผลการทดลองแสดงทั้งโอกาสและความท้าทายสูงในการสร้างคำอธิบายรูปภาพวิทยาศาสตร์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "1.",
    "th": "1."
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Introduction",
    "th": "บทนำ (Introduction)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Researchers use figures to explain complex concepts or show critical results.",
    "th": "นักวิจัยใช้รูปภาพเพื่ออธิบายแนวคิดที่ซับซ้อนหรือแสดงผลลัพธ์ที่สำคัญ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "In scholarly articles, figure captions are critical to get the message across effectively.",
    "th": "ในบทความวิชาการ คำอธิบายภาพมีบทบาทสำคัญในการสื่อสารสาระสำคัญอย่างมีประสิทธิภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Ones that are too generic (e.g., \"Results of Experiment A.\") or poorly written (e.g., \"Relations between X and Y.\") represent missed opportunities to explain scientific narratives to readers.",
    "th": "คำอธิบายที่ทั่วไปเกินไป (เช่น \"ผลของการทดลอง A\") หรือเขียนได้ไม่ดี (เช่น \"ความสัมพันธ์ระหว่าง X และ Y\") ล้วนเป็นโอกาสที่สูญเสียในการอธิบายเรื่องราวทางวิทยาศาสตร์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Unfortunately, such low-quality captions still occur in published scientific articles.",
    "th": "น่าเสียดายที่คำอธิบายคุณภาพต่ำยังคงปรากฏในบทความวิทยาศาสตร์ที่ตีพิมพ์แล้ว"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This paper aims to develop automatic figure-captioning models that generate high-quality captions for figures and charts in scientific papers.",
    "th": "งานวิจัยนี้มุ่งพัฒนาโมเดลสร้างคำอธิบายภาพอัตโนมัติที่สามารถสร้างคำอธิบายคุณภาพสูงสำหรับรูปภาพและแผนภูมิในบทความวิชาการ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Figure 1: The figure captioning model takes a scientific figure (e.g., a graph plot) as input and generates captions that describe the figure.",
    "th": "รูปที่ 1: โมเดลสร้างคำอธิบายภาพรับรูปภาพวิทยาศาสตร์ (เช่น graph plot) เป็น input แล้วสร้างคำอธิบายที่บรรยายรูปภาพนั้น"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Our motivation is two-fold.",
    "th": "แรงจูงใจของเรามีสองด้าน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "First, we aim to help researchers write better captions for the figures and charts in their papers.",
    "th": "ประการแรก เราต้องการช่วยนักวิจัยเขียนคำอธิบายภาพที่ดีขึ้นสำหรับรูปภาพและแผนภูมิในบทความ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Automatic caption models trained on informative, high-quality captions can suggest better captions.",
    "th": "โมเดลสร้างคำอธิบายอัตโนมัติที่ฝึกด้วยคำอธิบายคุณภาพสูงสามารถแนะนำคำอธิบายที่ดีขึ้นได้"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Second, the proposed technology can make scientific charts and figures more accessible to blind or visually impaired readers.",
    "th": "ประการที่สอง เทคโนโลยีที่นำเสนอสามารถทำให้แผนภูมิและรูปภาพวิทยาศาสตร์เข้าถึงได้ง่ายขึ้นสำหรับผู้อ่านที่มีความบกพร่องทางการมองเห็น"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Researchers have developed technologies to assist the blind to navigate graphical content, such as data visualization charts, printed physical maps, 3D chemical diagrams, and images on social media.",
    "th": "นักวิจัยได้พัฒนาเทคโนโลยีช่วยเหลือผู้พิการทางสายตาในการนำทางเนื้อหาเชิงภาพ เช่น แผนภูมิแสดงผลข้อมูล แผนที่กายภาพ ไดอะแกรมเคมีสามมิติ และรูปภาพบนโซเชียลมีเดีย"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "However, only a few prior works focused on scientific figures.",
    "th": "อย่างไรก็ตาม มีเพียงไม่กี่งานที่เน้นรูปภาพวิทยาศาสตร์โดยเฉพาะ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "An image-captioning model specialized for scientific figures can improve the narration of scientific articles for the blind even when the original caption is unhelpful.",
    "th": "โมเดล image-captioning ที่เชี่ยวชาญด้านรูปภาพวิทยาศาสตร์สามารถปรับปรุงการบรรยายบทความวิทยาศาสตร์สำหรับผู้พิการทางสายตาได้แม้เมื่อคำอธิบายเดิมไม่มีประโยชน์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "To this end, we introduce SciCap, a large-scale image-captioning dataset that contains real-world scientific figures and captions.",
    "th": "เพื่อบรรลุจุดประสงค์นี้ เราแนะนำ SciCap ชุดข้อมูล image-captioning ขนาดใหญ่ที่มีรูปภาพวิทยาศาสตร์จริงและคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "SciCap was constructed using computer science papers collected and released by arXiv.",
    "th": "SciCap สร้างจากบทความวิทยาศาสตร์คอมพิวเตอร์ที่รวบรวมและเผยแพร่โดย"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "With pre-processing complete — including figure-type classification, sub-figure identification, text normalization, and caption text selection — SciCap contained more than two million figures extracted from over 290,000 papers.",
    "th": "arXiv หลังผ่านกระบวนการประมวลผลเบื้องต้น ได้แก่ การจำแนกประเภทรูปภาพ การระบุ subfigure การปรับมาตรฐานข้อความ และการคัดเลือกข้อความคำอธิบาย SciCap มีรูปภาพมากกว่าสองล้านรูปจากบทความกว่า"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The experimental results showed both exciting opportunities and steep challenges of generating captions for scientific figures.",
    "th": "290,000 ชิ้น ผลการทดลองแสดงให้เห็นทั้งโอกาสที่น่าสนใจและความท้าทายสูงในการสร้างคำอธิบายรูปภาพวิทยาศาสตร์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "2.",
    "th": "2. งานวิจัยที่เกี่ยวข้อง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Related Work",
    "th": "(Related Work)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "One of the few prior works attempting to caption scientific figures was by Chen et al.",
    "th": "หนึ่งในงานก่อนหน้าที่พยายามสร้างคำอธิบายรูปภาพวิทยาศาสตร์คือผลงานของ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "They created FigCAP, a caption-figure pair corpus where the figures are synthesized, and used an LSTM model with an attention mechanism to produce captions.",
    "th": "Chen และคณะ พวกเขาสร้าง FigCAP ซึ่งเป็นคลังข้อมูลคู่ figure-caption โดยใช้รูปภาพที่สังเคราะห์ขึ้น และใช้โมเดล LSTM ที่มีกลไก"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "FigCAP was built on research that aimed to analyze figure content automatically, including FigureSeer, FigureQA, and DVQA.",
    "th": "attention ในการสร้างคำอธิบาย FigCAP สร้างต่อยอดจากงานวิจัยที่มุ่งวิเคราะห์เนื้อหารูปภาพโดยอัตโนมัติ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "DVQA and FigureQA were both made using synthetic figures; FigureSeer contained over 60,000 figures across seven figure types extracted from research papers.",
    "th": "ได้แก่ FigureSeer, FigureQA และ DVQA ทั้ง DVQA และ FigureQA ใช้รูปภาพสังเคราะห์ ในขณะที่ FigureSeer มีรูปภาพกว่า 60,000"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Meanwhile, Qian et al. proposed a set of \"caption units\" (such as Title, Label Name, Min/Max, etc.) that are important to include in a caption of scientific figures; they created a model, FigJAM, to produce such units.",
    "th": "รูปจากเจ็ดประเภทที่สกัดจากบทความวิจัย นอกจากนี้ Qian และคณะเสนอชุด \"caption units\" (เช่น ชื่อเรื่อง ชื่อป้ายกำกับ ค่าต่ำสุด/สูงสุด) ที่สำคัญในการรวมไว้ในคำอธิบาย และสร้างโมเดล"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Also relevant is the \"data-to-caption\" work, which takes a chart's source data table and metadata as input to generate a caption.",
    "th": "FigJAM เพื่อสร้างหน่วยดังกล่าว งานที่เกี่ยวข้องอีกประเภทคือ \"data-to-caption\" ซึ่งรับตารางข้อมูลและ metadata"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "These models generate captions based on data tables, not the figures.",
    "th": "ของแผนภูมิเป็น input เพื่อสร้างคำอธิบาย แต่โมเดลเหล่านี้สร้างคำอธิบายจากตารางข้อมูล ไม่ใช่จากรูปภาพโดยตรง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Differences Between Synthetic and Real-World Captions",
    "th": "ความแตกต่างระหว่างคำอธิบายสังเคราะห์และคำอธิบายจริง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Most prior work has tried to generate captions for scientific figures using synthetic images and texts.",
    "th": "งานส่วนใหญ่ก่อนหน้านี้พยายามสร้างคำอธิบายรูปภาพวิทยาศาสตร์โดยใช้รูปภาพและข้อความสังเคราะห์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "However, synthetic captions tend to be generic and describe features without conveying higher-level insights, for example: \"This is a line plot.",
    "th": "อย่างไรก็ตาม คำอธิบายสังเคราะห์มักทั่วไปและบรรยายลักษณะโดยไม่สื่อข้อมูลเชิงลึกระดับสูง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "It contains 6 categories.",
    "th": "เช่น \"นี่คือ line plot มี 6 หมวดหมู่ Dark Magenta มีค่าต่ำสุด Lawn Green มีค่าสูงสุด\""
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Dark Magenta has the lowest value.",
    "th": "ในทางตรงกันข้าม คำอธิบายที่มนุษย์เขียนมักเน้นส่วนที่มีความหมายของรูปภาพและเพิ่มบริบท"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Lawn Green has the highest value.\" Human-written captions, on the other hand, tend to highlight the meaningful parts of the figure and bring more context, for example: \"Train loss curve with respect to optimization steps.",
    "th": "เช่น"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "With prior coarse-tuning on NLI data, convergence becomes much faster and easier.\"",
    "th": "\"กราฟ train loss เทียบกับจำนวน optimization steps เมื่อมีการ coarse-tuning บนข้อมูล NLI มาก่อน การ converge จะเร็วและง่ายขึ้นมาก\""
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "3.",
    "th": "3."
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Constructing the SciCap Dataset",
    "th": "การสร้างชุดข้อมูล SciCap (Constructing the SciCap Dataset)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This section describes the process that transforms real-world figure-caption data into an appropriate, easy-to-use format for the NLP community.",
    "th": "ส่วนนี้อธิบายกระบวนการแปลงข้อมูล figure-caption จากโลกจริงให้อยู่ในรูปแบบที่เหมาะสมและใช้งานง่ายสำหรับชุมชน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This data-processing procedure was developed iteratively and empirically.",
    "th": "NLP กระบวนการนี้ถูกพัฒนาแบบวนซ้ำและอาศัยหลักฐานเชิงประจักษ์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Step 1: Data Acquisition and Pre-processing",
    "th": "ขั้นตอนที่ 1: การได้มาซึ่งข้อมูลและการประมวลผลเบื้องต้น"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Data acquisition is a fundamental challenge for constructing a public scientific figure-caption dataset.",
    "th": "การได้มาซึ่งข้อมูลเป็นความท้าทายพื้นฐานในการสร้างชุดข้อมูล figure-caption สาธารณะ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "SciCap is based on the arXiv dataset.",
    "th": "SciCap ใช้ชุดข้อมูล arXiv"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The arXiv dataset is licensed under CC-0, which grants remake and republish rights.",
    "th": "เป็นฐาน ซึ่งอยู่ภายใต้สัญญาอนุญาต CC-0 ที่อนุญาตให้นำไปสร้างใหม่และเผยแพร่ได้"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "It contains a repository of 1.7 million articles with relevant features, such as article titles, authors, categories, abstracts, full-text PDFs, and more.",
    "th": "ชุดข้อมูลนี้มีคลังบทความ 1.7 ล้านชิ้น พร้อมข้อมูลที่เกี่ยวข้อง เช่น ชื่อบทความ ผู้เขียน หมวดหมู่ บทคัดย่อ และ PDF ฉบับเต็ม"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We first downloaded all scholarly articles from the arXiv dataset, freezing the date at Dec 22, 2020 (a total of 1,921,287 papers).",
    "th": "เราดาวน์โหลดบทความทั้งหมดจากชุดข้อมูล arXiv โดยกำหนดวันที่ตัดข้อมูลไว้ที่วันที่ 22 ธันวาคม 2020"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "SciCap does not include any papers published after this date.",
    "th": "(รวม 1,921,287 บทความ) SciCap ไม่รวมบทความที่ตีพิมพ์หลังจากวันดังกล่าว"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We further narrowed our dataset to papers published between 2010 and 2020 in computer science (cs.) and machine learning (stat.ML) topics, which numbered 295,028 papers.",
    "th": "เราจำกัดชุดข้อมูลเพิ่มเติมให้เหลือเฉพาะบทความที่ตีพิมพ์ระหว่างปี 2010–2020 ในสาขาวิทยาศาสตร์คอมพิวเตอร์ (cs.) และ machine learning"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We did not use these papers' \"source files,\" which might contain the original LaTeX and figure files, since not all papers come with source files and some have complex dependencies that are hard to parse.",
    "th": "(stat.ML) รวม 295,028 บทความ เราไม่ใช้ \"source files\" ของบทความเนื่องจากไม่ใช่ทุกบทความที่มี source files และบางบทความมี dependency ซับซ้อนที่วิเคราะห์ได้ยาก"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Step 2: Figure-Caption Pair Extraction",
    "th": "ขั้นตอนที่ 2: การสกัดคู่ Figure-Caption"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We used PDFFigures 2.0 to extract the figures from papers in our collection.",
    "th": "เราใช้ PDFFigures 2.0 เพื่อสกัดรูปภาพจากบทความในชุดสะสมของเรา"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "PDFFigures 2.0 is a Scala-based tool created to extract figures, captions, tables, and section titles from scholarly documents, with a focus on the computer science domain.",
    "th": "PDFFigures 2.0 เป็นเครื่องมือที่เขียนด้วย Scala สำหรับสกัดรูปภาพ คำอธิบายภาพ ตาราง และชื่อหัวข้อจากเอกสารวิชาการ โดยเน้นสาขาวิทยาศาสตร์คอมพิวเตอร์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "In addition to the figures' images and captions, the tool also extracted all text snippets inside the figures, such as legends, X-Y labels, and titles.",
    "th": "นอกจากรูปภาพและคำอธิบายแล้ว เครื่องมือยังสกัดข้อความภายในรูปภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The extracted information can be used to boost the performance of image-captioning models.",
    "th": "เช่น legend ป้ายกำกับแกน X-Y และชื่อเรื่อง ซึ่งสามารถนำไปเสริมประสิทธิภาพโมเดล"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This step resulted in 295,028 papers and 2,170,719 figures.",
    "th": "image-captioning ได้ ขั้นตอนนี้ได้ผลลัพธ์เป็นบทความ 295,028 ชิ้น และรูปภาพ 2,170,719 รูป"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Step 3: Figure Type Classification",
    "th": "ขั้นตอนที่ 3: การจำแนกประเภทรูปภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Given the high diversity in figure types in scientific articles, we aimed to create captioning models specialized for one particular figure type.",
    "th": "เนื่องจากประเภทรูปภาพในบทความวิทยาศาสตร์มีความหลากหลายสูง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We used an automatic figure type classifier to classify figure types in SciCap.",
    "th": "เราจึงมุ่งสร้างโมเดลสร้างคำอธิบายที่เชี่ยวชาญประเภทรูปภาพเฉพาะ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This pre-trained classifier can identify seven types of figures: graph plots, flowcharts (node diagrams), equations (algorithms), bar plots, scatter plots, tables, and \"other.\" Its reported accuracy is 86% over 60,000 samples.",
    "th": "เราใช้ตัวจำแนกประเภทรูปภาพอัตโนมัติสำหรับ SciCap ซึ่งสามารถระบุเจ็ดประเภท ได้แก่ graph plot, flowchart (node diagram), สมการ (algorithm), bar plot, scatter plot, ตาราง และ \"อื่นๆ\" โดยมีความแม่นยำ 86% บน 60,000 ตัวอย่าง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "According to the classifier's prediction, out of 2,170,719 figures: 19.2% (416,804) are graph plots, 23.6% (511,984) are tables, 5.9% (127,197) are equations, 8.5% (185,398) are flowcharts, 2.0% (44,052) are scatter plots, 4.7% (101,146) are bar charts, and 36.1% (784,138) are \"other.\" In SciCap, we focus only on graph plots, which have the highest classification performance and are the most common figure type.",
    "th": "จากผลการจำแนกพบว่า ในจำนวนรูปภาพ 2,170,719 รูป: ร้อยละ 19.2 (416,804 รูป) เป็น graph plot, ร้อยละ 23.6 (511,984) เป็นตาราง, ร้อยละ 5.9 (127,197) เป็นสมการ, ร้อยละ 8.5 (185,398) เป็น flowchart, ร้อยละ 2.0 (44,052) เป็น scatter plot, ร้อยละ 4.7 (101,146) เป็น bar chart และร้อยละ 36.1 (784,138) เป็น \"อื่นๆ\" ใน SciCap เราเน้นเฉพาะ graph plot เนื่องจากมีความแม่นยำในการจำแนกสูงสุดและเป็นประเภทที่พบบ่อยที่สุด"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Step 4: Removing Figures with Subfigures",
    "th": "ขั้นตอนที่ 4: การนำรูปภาพที่มี Subfigure ออก"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Many scientific figures contain subfigures.",
    "th": "รูปภาพวิทยาศาสตร์หลายรูปมี subfigure"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "In our pilot study, 35.72% of overall scientific figures had subfigures.",
    "th": "ในการศึกษานำร่องพบว่า ร้อยละ 35.72 ของรูปภาพวิทยาศาสตร์ทั้งหมดมี"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "SciCap focuses on generating captions for single figures, so we removed figures with subfigures from the dataset.",
    "th": "subfigure SciCap เน้นสร้างคำอธิบายสำหรับรูปภาพเดี่ยว จึงต้องนำรูปที่มี subfigure ออก"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We first used handcrafted rules to identify captions that explicitly mention subfigures (e.g., (a), a), (b), b), (1), 1), (2), 2) …).",
    "th": "เราใช้กฎที่สร้างด้วยมือเพื่อระบุคำอธิบายที่กล่าวถึง subfigure อย่างชัดเจน (เช่น (a), a), (b), b), (1),"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Furthermore, we also used FigureSeparator, a CNN-based model that separates compound figures in the ImageCLEF Medical dataset with 85.9% accuracy.",
    "th": "1), (2), 2) ฯลฯ) นอกจากนี้ยังใช้ FigureSeparator โมเดลที่ใช้ CNN เพื่อแยก compound figure ในชุดข้อมูล ImageCLEF Medical ด้วยความแม่นยำ 85.9%"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Of 416,804 graph plots identified in Step 3, the rule-based approach yielded 352,719 graph plots, and FigureSeparator further narrowed the collection down to 133,543 figures.",
    "th": "จาก graph plot 416,804 รูปที่ระบุในขั้นตอนที่ 3 วิธีตามกฎเหลือ 352,719 รูป และ FigureSeparator คัดเหลือ 133,543"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "An estimated 32.04% of the graph plots did not have subfigures.",
    "th": "รูป ประมาณร้อยละ 32.04 ของ graph plot ทั้งหมดไม่มี subfigure"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Step 5: Text Normalization",
    "th": "ขั้นตอนที่ 5: การปรับมาตรฐานข้อความ (Text Normalization)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We used NLTK for tokenization and converted all text to lowercase.",
    "th": "เราใช้ NLTK (Natural Language Toolkit) สำหรับ tokenization"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We also removed figure numbers such as \"Figure 1:\" or \"Fig. 1:\", keeping only the main caption text.",
    "th": "และแปลงข้อความทั้งหมดเป็นตัวพิมพ์เล็ก นอกจากนี้ยังนำหมายเลขรูปภาพออก"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Two text normalization strategies were applied:",
    "th": "เช่น \"Figure 1:\" หรือ \"Fig. 1:\" โดยเก็บเฉพาะข้อความคำอธิบายหลัก มีการใช้กลยุทธ์ปรับมาตรฐานสองแบบ:"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Basic Normalization: All numbers (e.g., 0, -0.2, 3.44%, 1,000,000) were replaced with [NUM].",
    "th": "Basic Normalization: ตัวเลขทั้งหมด (เช่น 0, -0.2, 3.44%, 1,000,000) ถูกแทนที่ด้วย [NUM]"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Advanced Normalization: Regular expressions were used to identify equations in captions and replace them with [EQUATION].",
    "th": "Advanced Normalization: ใช้ regular expression ระบุสมการในคำอธิบายและแทนที่ด้วย"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "All text spans enclosed by bracket pairs {}, [], and () were replaced with [BRACKET].",
    "th": "[EQUATION] ข้อความที่ครอบด้วยวงเล็บ {}, [] และ () ถูกแทนที่ด้วย [BRACKET]"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Step 6: Target Caption Text Selection",
    "th": "ขั้นตอนที่ 6: การคัดเลือกข้อความคำอธิบายเป้าหมาย"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "SciCap provides three different data collections, each sampled using different strategies:",
    "th": "SciCap มีชุดข้อมูลสามชุด แต่ละชุดใช้กลยุทธ์การสุ่มตัวอย่างต่างกัน:"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "First Sentence (133,543 Figures): Includes all figures; for each figure, only the first sentence of the caption is included.",
    "th": "ประโยคแรก (133,543 รูป): รวมรูปภาพทั้งหมด โดยเก็บเฉพาะประโยคแรกของคำอธิบายภาพสำหรับแต่ละรูป"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Single-Sentence Caption (94,110 Figures): Includes the complete caption of only the figures with a one-sentence caption.",
    "th": "คำอธิบายประโยคเดียว (94,110 รูป): รวมเฉพาะรูปภาพที่มีคำอธิบายเป็นประโยคเดียว ร้อยละ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Of the graph plots, 70.47% had a one-sentence caption.",
    "th": "70.47 ของ graph plot มีคำอธิบายประโยคเดียว"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Caption with No More than 100 Words (131,319 Figures): Includes complete captions of figures whose captions contain no more than 100 tokens (punctuation included).",
    "th": "คำอธิบายไม่เกิน 100 คำ (131,319 รูป): รวมรูปภาพที่คำอธิบายมี token ไม่เกิน 100 ตัว"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "On average, a caption here contains 1.66 sentences (SD=1.07).",
    "th": "โดยเฉลี่ยคำอธิบายในชุดนี้มี 1.66 ประโยค (SD=1.07)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "On average, with advanced normalization, a sentence in the \"First Sentence\" collection contains 23.19 tokens (SD=20.86); a sentence in the \"Single-Sentence Caption\" collection contains 14.05 tokens (SD=8.15); and a sentence in the \"Caption with No More Than 100 Words\" collection contains 22.04 tokens (SD=17.44).",
    "th": "โดยเฉลี่ย (หลัง Advanced Normalization) ประโยคใน \"First Sentence\" มี 23.19 token (SD=20.86), ประโยคใน \"Single-Sentence Caption\" มี 14.05 token (SD=8.15) และประโยคใน \"Caption ≤100 Words\" มี 22.04 token (SD=17.44)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Note that we first created the 80/10/10 train/val/test data split for the entire corpus and then proceeded with the caption selection step.",
    "th": "ทั้งนี้ เราสร้างการแบ่งชุดข้อมูล 80/10/10 (train/val/test) สำหรับ corpus ทั้งหมดก่อน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This ensured the identical set of figures was used for each collection's test set.",
    "th": "แล้วจึงดำเนินขั้นตอนคัดเลือกคำอธิบาย เพื่อให้แต่ละชุดข้อมูลใช้รูปภาพชุดทดสอบเดียวกัน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "3.1 Data Analysis and Quality Measurement",
    "th": "3.1 การวิเคราะห์ข้อมูลและการวัดคุณภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "To evaluate the quality of our data cleaning and processing pipeline, we randomly sampled 2,000 figures from the original arXiv dataset, and one author manually labelled each figure's type and whether it contained subfigures.",
    "th": "เพื่อประเมินคุณภาพของ pipeline การทำความสะอาดและประมวลผลข้อมูล เราสุ่มตัวอย่างรูปภาพ 2,000 รูปจากชุดข้อมูล arXiv ต้นฉบับ โดยผู้เขียนคนหนึ่งติดป้ายกำกับประเภทและสถานะ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Of these 2,000 figures, 1,926 had no extraction errors.",
    "th": "subfigure ด้วยมือ จาก 2,000 รูป มี 1,926"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "As for types, 20.35% were graph plots, 4.1% were bar charts, and 3.11% were scatter plots.",
    "th": "รูปที่ไม่มีข้อผิดพลาดในการสกัด ร้อยละ 20.35 เป็น graph plot ร้อยละ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "In terms of subfigures, 237 out of 1,926 figures (35.72%) contained subfigures.",
    "th": "4.1 เป็น bar chart และร้อยละ 3.11 เป็น scatter plot มี 237 จาก 1,926 รูป (ร้อยละ 35.72) ที่มี subfigure"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We used these 1,926 labeled images to evaluate the tools employed in constructing SciCap.",
    "th": "เราใช้ภาพที่มีป้ายกำกับ 1,926 รูปเพื่อประเมินเครื่องมือที่ใช้สร้าง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Table 1 shows the results.",
    "th": "SciCap ผลแสดงใน Table"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "For figure type classification, the overall performance over graph plots was reliable.",
    "th": "1 สำหรับการจำแนกประเภทรูปภาพ ประสิทธิภาพโดยรวมบน graph plot"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Regarding identifying graph plots without subfigures, FigureSeparator had an exceptionally high precision.",
    "th": "เชื่อถือได้ ส่วนการระบุ graph plot ที่ไม่มี subfigure นั้น FigureSeparator มี precision สูงเป็นพิเศษ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "4.",
    "th": "4."
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Experimental Results",
    "th": "ผลการทดลอง (Experimental Results)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "To examine the feasibility and challenges of creating an image-captioning model for scientific figures, we established several baselines and tested them using SciCap.",
    "th": "เพื่อตรวจสอบความเป็นไปได้และความท้าทายในการสร้างโมเดล image-captioning สำหรับรูปภาพวิทยาศาสตร์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The caption quality was measured by BLEU-4, using the test set of the corresponding data collection as a reference.",
    "th": "เราสร้างโมเดล baseline หลายตัวและทดสอบด้วย SciCap คุณภาพคำอธิบายวัดด้วย BLEU-4"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Figure 2 shows some example outputs.",
    "th": "โดยใช้ชุดทดสอบของชุดข้อมูลที่สอดคล้องกันเป็น reference รูปที่ 2 แสดงตัวอย่าง output"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Baseline Model",
    "th": "โมเดล Baseline"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We used a classical image-captioning model, CNN+LSTM architecture, as our baseline.",
    "th": "เราใช้โมเดล image-captioning แบบคลาสสิก สถาปัตยกรรม CNN+LSTM เป็น"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The pre-trained ResNet-101 was used as the image encoder to represent a figure as a 2048-dimension vector.",
    "th": "baseline โดยใช้ ResNet-101 ที่ฝึกไว้ล่วงหน้าเป็น image encoder แปลงรูปภาพเป็นเวกเตอร์ขนาด"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This image vector was then fed into a dense layer to fit the dimension of the word-embedding and the LSTM decoder (word-embedding and LSTM hidden layer size were all 512).",
    "th": "2,048 มิติ เวกเตอร์นี้ถูกส่งผ่าน dense layer เพื่อให้มิติตรงกับ word-embedding และ LSTM decoder (ขนาด word-embedding และ hidden layer ของ LSTM เท่ากับ 512)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "A global attention mechanism was added to the LSTM decoder to better model the context.",
    "th": "มีการเพิ่มกลไก global attention ให้ LSTM decoder"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The LSTM decoder took the image vector as the initial state and generated captions.",
    "th": "เพื่อสร้างแบบจำลองบริบทที่ดีขึ้น โดย LSTM decoder ใช้เวกเตอร์รูปภาพเป็น initial state ในการสร้างคำอธิบาย"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We designed three variations of baseline models: Vision-only, Vision+Text, and Text-only.",
    "th": "เราออกแบบโมเดล baseline สามรูปแบบ: Vision-only, Vision+Text และ Text-only"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The text information was the titles, legends, and X-Y labels extracted from the figures (Step 2).",
    "th": "ข้อมูลข้อความได้แก่ ชื่อเรื่อง legend และป้ายกำกับแกน X-Y ที่สกัดจากรูปภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Another LSTM was used as a text encoder to encode text into a vector.",
    "th": "(ขั้นตอนที่ 2) โดยใช้ LSTM อีกตัวเป็น text encoder"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "For the Vision+Text variation, the image vector and text vector were concatenated and fed into the LSTM decoder.",
    "th": "แปลงข้อความเป็นเวกเตอร์ สำหรับรูปแบบ Vision+Text เวกเตอร์รูปภาพและเวกเตอร์ข้อความถูก"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The Text-only variation used only the text vector as the feature.",
    "th": "concatenate แล้วส่งเข้า LSTM decoder รูปแบบ Text-only ใช้เฉพาะเวกเตอร์ข้อความ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Figure 2: Example outputs of the baseline models trained and tested on the Single-Sentence Caption Only collection.",
    "th": "รูปที่ 2: ตัวอย่าง output ของโมเดล baseline ที่ฝึกและทดสอบด้วยชุด Single-Sentence Caption Only"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Intensive research will be needed to create models that can caption scientific figures reliably.",
    "th": "จำเป็นต้องมีงานวิจัยเข้มข้นเพิ่มเติมเพื่อสร้างโมเดลที่สร้างคำอธิบายรูปภาพวิทยาศาสตร์ได้อย่างน่าเชื่อถือ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Experimental Setups",
    "th": "การตั้งค่าการทดลอง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We trained the baseline models using an 80/10/10 train/val/test data split.",
    "th": "เราฝึกโมเดล baseline โดยใช้การแบ่งชุดข้อมูล 80/10/10"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The models were trained by minimizing a cross-entropy loss with doubly stochastic regularization using Adam optimizer.",
    "th": "(train/val/test) โมเดลถูกฝึกด้วยการลด cross-entropy loss พร้อม doubly stochastic"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The weights of the pre-trained ResNet-101 image encoder were partially frozen so that only convolutional blocks 2–4 were fine-tuned throughout training.",
    "th": "regularization โดยใช้ Adam optimizer น้ำหนักของ ResNet-101 ที่ฝึกไว้ล่วงหน้าถูก freeze บางส่วน โดย fine-tune"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Hyper-parameters used were a dropout rate of 0.5; a batch size of 16/32; a learning rate of 4e-4 with a decay factor of 0.8 when there was no improvement for 8 epochs.",
    "th": "เฉพาะ convolutional block 2–4 Hyperparameter ที่ใช้: dropout rate 0.5, batch size 16/32, learning rate 4e-4 พร้อม"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The models were trained until there was no improvement for 20 epochs.",
    "th": "decay factor 0.8 เมื่อไม่มีการปรับปรุงนาน 8 epoch"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We kept the model with the highest BLEU-4 score on the validation set for testing.",
    "th": "และหยุดฝึกเมื่อไม่มีการปรับปรุงนาน 20 epoch เก็บโมเดลที่ได้คะแนน BLEU-4 สูงสุดบน validation set"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Results",
    "th": "ผลการทดลอง"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We trained the models on each data collection with varying levels of data filtering and text normalization.",
    "th": "เราฝึกโมเดลบนแต่ละชุดข้อมูลโดยมีระดับการกรองข้อมูลและปรับมาตรฐานข้อความต่างกัน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Among the three data collections, the models trained on the single-sentence captions performed the best.",
    "th": "ในบรรดาสามชุดข้อมูล โมเดลที่ฝึกด้วยคำอธิบายประโยคเดียวทำงานได้ดีที่สุด"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This might be because the Single-Sentence Caption collection, which is a subset of the First Sentence collection, had the smallest vocabulary size.",
    "th": "อาจเป็นเพราะชุด Single-Sentence Caption ซึ่งเป็น subset ของ First Sentence มีขนาด vocabulary เล็กที่สุด"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Effects of Text Normalization",
    "th": "ผลของการปรับมาตรฐานข้อความ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Our experiments did not show clear benefits of normalizing text on the resulting BLEU-4 scores.",
    "th": "การทดลองไม่แสดงประโยชน์ที่ชัดเจนของการปรับมาตรฐานข้อความต่อคะแนน BLEU-4"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We will explore other methods to normalize text, for example, using advanced techniques to identify equations in text.",
    "th": "เราจะสำรวจวิธีอื่นในการปรับมาตรฐานข้อความ เช่น การใช้เทคนิคขั้นสูงในการระบุสมการในข้อความ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Effects of Text and Vision Features",
    "th": "ผลของคุณลักษณะข้อความและภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We also used Vision-Only, Text-Only, and Text+Vision features to develop models (Table 3).",
    "th": "เราพัฒนาโมเดลด้วยคุณลักษณะ Vision-Only, Text-Only และ Text+Vision (Table 3) คุณลักษณะ Vision-Only"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Vision-Only and Text-Only features yielded similar performance.",
    "th": "และ Text-Only ให้ประสิทธิภาพใกล้เคียงกัน"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Furthermore, the models performed slightly worse when training on combined features.",
    "th": "นอกจากนี้ โมเดลที่ฝึกด้วยคุณลักษณะรวมกันทำงานได้แย่ลงเล็กน้อย ซึ่งบ่งชี้ว่าการรวม modality ในแบบง่ายๆ ไม่ได้ช่วยเพิ่มประสิทธิภาพเสมอไป"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "5.",
    "th": "5. บทสรุปและทิศทางการวิจัยในอนาคต"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Conclusion and Future Work",
    "th": "(Conclusion and Future Work)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "This paper introduces SciCap, a large-scale image-captioning dataset containing real-world scientific figures and captions, constructed using more than two million images from over 290,000 papers collected and released by arXiv.",
    "th": "งานวิจัยนี้แนะนำ SciCap ชุดข้อมูล image-captioning ขนาดใหญ่ที่มีรูปภาพวิทยาศาสตร์จริงและคำอธิบายภาพ สร้างจากรูปภาพกว่าสองล้านรูปจากบทความกว่า 290,000 ชิ้นที่รวบรวมและเผยแพร่โดย"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We also established several image-captioning baselines, showing the feasibility and challenges of generating captions for scientific figures.",
    "th": "arXiv เราสร้างโมเดล baseline image-captioning หลายตัวเพื่อแสดงความเป็นไปได้และความท้าทายในการสร้างคำอธิบายรูปภาพวิทยาศาสตร์"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "In the future, we will explore approaches to improve caption quality, such as taking advantage of large pre-trained language models (e.g., SciBERT), or using information in the paper's full text to boost performance.",
    "th": "ในอนาคตเราจะสำรวจแนวทางปรับปรุงคุณภาพคำอธิบาย เช่น การใช้ประโยชน์จากโมเดลภาษาขนาดใหญ่ที่ฝึกไว้ล่วงหน้า (เช่น SciBERT) หรือการนำข้อมูลจากข้อความเต็มในบทความมาเสริมประสิทธิภาพ"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "Ethical Considerations",
    "th": "การพิจารณาด้านจริยธรรม (Ethical Considerations)"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "The arXiv dataset uses the CC0 1.0 Universal Public Domain Dedication license, which grants permission to remix, remake, annotate, and publish the data.",
    "th": "ชุดข้อมูล arXiv อยู่ภายใต้สัญญาอนุญาต CC0 1.0 Universal ซึ่งอนุญาตให้นำไปดัดแปลง สร้างใหม่ ติดป้ายกำกับ และเผยแพร่ได้"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "We are also aware that language technologies trained on a \"standard\" or mainstream variety of a language favor the popular variety and may harm people using varieties with fewer speakers.",
    "th": "นอกจากนี้เราตระหนักว่าเทคโนโลยีภาษาที่ฝึกด้วยภาษารูปแบบ \"มาตรฐาน\" หรือกระแสหลักจะเอื้อประโยชน์ต่อรูปแบบยอดนิยม และอาจสร้างผลเสียต่อผู้ใช้ภาษาที่มีผู้พูดน้อยกว่า"
  },
  {
    "paper": "area2-understanding/1-SciCap_2021",
    "title": "SciCap: Generating Captions for Scientific Figures",
    "en": "For example, standard automatic speech recognition trained on Dutch speeches results in 10–15% higher error rates on Flemish Dutch than on \"standard\" Dutch.",
    "th": "ตัวอย่างเช่น ระบบรู้จำคำพูดอัตโนมัติที่ฝึกด้วยภาษาดัตช์มาตรฐานมีอัตราความผิดพลาดสูงกว่าบน Flemish Dutch ถึงร้อยละ 10–15"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "th": "การสร้างคำอธิบายภาพในเอกสารวิชาการด้วยความร่วมมือของโมเดลภาษาขนาดใหญ่ (Multi-LLM Collaborative Caption Generation in Scientific Documents)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Abstract",
    "th": "บทคัดย่อ (Abstract)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Scientific figure captioning is a complex task that requires generating contextually appropriate descriptions of visual content.",
    "th": "การสร้างคำอธิบายรูปภาพวิทยาศาสตร์ (scientific figure captioning) เป็นงานที่ซับซ้อนซึ่งต้องอาศัยการสร้างคำบรรยายข้อมูลภาพที่สอดคล้องกับบริบท"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "However, existing methods often fall short by utilizing incomplete information, treating the task solely as either an image-to-text or text summarization problem.",
    "th": "อย่างไรก็ตาม วิธีการในปัจจุบันมักมีข้อจำกัดจากการใช้ข้อมูลที่ไม่ครบถ้วน โดยมองปัญหานี้เป็นเพียงการแปลงภาพเป็นข้อความ (image-to-text) หรือการสรุปความข้อความ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This limitation hinders the generation of high-quality captions that fully capture the necessary details.",
    "th": "(text summarization) เพียงอย่างเดียว ซึ่งข้อจำกัดนี้ขัดขวางการสร้างคำอธิบายภาพที่มีคุณภาพสูงและครอบคลุมรายละเอียดที่จำเป็น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Moreover, existing data sourced from arXiv papers contain low-quality captions, posing significant challenges for training large language models (LLMs).",
    "th": "นอกจากนี้ ข้อมูลเดิมที่ได้จากบทความวิจัยใน arXiv มักมีคำอธิบายภาพคุณภาพต่ำ ซึ่งเป็นอุปสรรคสำคัญในการฝึกฝนโมเดลภาษาขนาดใหญ่ (LLM) ในบทความวิจัยนี้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In this paper, we introduce a framework called Multi-LLM Collaborative Figure Caption Generation (MLBCAP) to address these challenges by leveraging specialized LLMs for distinct sub-tasks.",
    "th": "เราขอนำเสนอกรอบการทำงานชื่อ MLBCAP (Multi-LLM Collaborative Figure Caption Generation) เพื่อแก้ปัญหาเหล่านี้โดยการใช้ LLM ที่มีความเชี่ยวชาญเฉพาะด้านสำหรับงานย่อยต่าง ๆ แนวทางของเราแบ่งออกเป็นสามโมดูลหลัก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Our approach unfolds in three key modules: (Quality Assessment) We utilize multimodal LLMs to assess the quality of training data, enabling the filtration of low-quality captions. (Diverse Caption Generation) We then employ a strategy of fine-tuning/prompting multiple LLMs on the captioning task to generate candidate captions. (Judgment) Lastly, we prompt a prominent LLM to select the highest quality caption from the candidates, followed by refining any remaining inaccuracies.",
    "th": "ได้แก่: (การประเมินคุณภาพ - Quality Assessment) เราใช้ LLM แบบหลายรูปแบบ (multimodal LLM) เพื่อประเมินคุณภาพของข้อมูลที่ใช้ฝึกฝน ทำให้สามารถกรองคำอธิบายภาพที่มีคุณภาพต่ำออกไปได้ (การสร้างคำอธิบายภาพที่หลากหลาย - Diverse Caption Generation) จากนั้นเราใช้กลยุทธ์การ fine-tune หรือการกำหนด prompt ให้กับ LLM หลายตัวเพื่อสร้างคำอธิบายภาพที่เป็นตัวเลือก (การตัดสิน - Judgment) ขั้นสุดท้าย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Human evaluations demonstrate that informative captions produced by our approach rank better than human-written captions, highlighting its effectiveness.",
    "th": "เรากำหนด prompt ให้ LLM ตัวหลักทำหน้าที่เลือกคำอธิบายภาพที่มีคุณภาพสูงสุดจากตัวเลือกทั้งหมด พร้อมทั้งปรับปรุงแก้ไขความไม่ถูกต้องที่เหลืออยู่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Our code is available at https://github.com/teamreboott/MLBCAP",
    "th": "ผลการประเมินโดยมนุษย์แสดงให้เห็นว่าคำอธิบายภาพที่สร้างจากแนวทางของเรามีอันดับที่ดีกว่าคำอธิบายภาพที่เขียนโดยมนุษย์ ซึ่งแสดงถึงประสิทธิภาพของระบบ โค้ดของเราเปิดเผยที่ https://github.com/teamreboott/MLBCAP"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Keywords:",
    "th": "คำสำคัญ (Keywords):"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "1 Introduction",
    "th": "1 บทนำ (Introduction)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Scientific figures are integral to academic communication, offering a concise and effective means of presenting complex information.",
    "th": "รูปภาพวิทยาศาสตร์ (scientific figures) เป็นส่วนสำคัญของการสื่อสารทางวิชาการ โดยช่วยนำเสนอข้อมูลที่ซับซ้อนได้อย่างกระชับและมีประสิทธิภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "However, the value of a figure is largely determined by the quality of its accompanying caption.",
    "th": "อย่างไรก็ตาม คุณค่าของรูปภาพส่วนใหญ่ขึ้นอยู่กับคุณภาพของคำอธิบายภาพ (caption) ที่แนบมาด้วย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Captions provide essential context, elucidate visual elements, and enable readers to fully grasp the insights conveyed by the figure.",
    "th": "คำอธิบายภาพช่วยให้บริบทที่จำเป็น อธิบายองค์ประกอบภาพ และช่วยให้ผู้อ่านเข้าใจข้อมูลเชิงลึกที่รูปภาพต้องการสื่อได้อย่างครบถ้วน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Consequently, the generation of accurate and informative captions for scientific documents is critical to effectively communicating key findings to domain experts.",
    "th": "ดังนั้น การสร้างคำอธิบายภาพที่แม่นยำและให้ข้อมูลครบถ้วนสำหรับเอกสารวิทยาศาสตร์จึงมีความสำคัญอย่างยิ่งต่อการสื่อสารผลการวิจัยหลักไปยังผู้เชี่ยวชาญในสาขา"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Automated captioning not only aids researchers by improving the clarity of figure descriptions but also contributes to the overall enhancement of scholarly communication [9].",
    "th": "การสร้างคำอธิบายภาพอัตโนมัติไม่เพียงแต่ช่วยนักวิจัยด้วยการปรับปรุงความชัดเจนของคำบรรยายรูปภาพเท่านั้น แต่ยังมีส่วนช่วยส่งเสริมการสื่อสารทางวิชาการในภาพรวมอีกด้วย [9]"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Existing approaches to automatic figure captioning have predominantly treated the task either as an image-to-text problem [8, 21] or a text summarization task [11, 4].",
    "th": "แนวทางปัจจุบันในการสร้างคำอธิบายรูปภาพอัตโนมัติส่วนใหญ่มักมองงานนี้เป็นเพียงปัญหาการแปลงภาพเป็นข้อความ (image-to-text) [8, 21] หรือการสรุปความข้อความ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Image-to-text methods focus on extracting information directly from visual content, but they often lack the domain-specific understanding required to interpret abbreviations, symbols, and implicit relationships.",
    "th": "(text summarization) [11, 4] โดยวิธีแปลงภาพเป็นข้อความจะเน้นดึงข้อมูลโดยตรงจากเนื้อหาภาพ แต่อาจขาดความเข้าใจเฉพาะสาขาที่จำเป็นในการตีความคำย่อ สัญลักษณ์ และความสัมพันธ์เชิงนัย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "On the other hand, text summarization approaches rely on textual metadata such as figure-mentioning paragraphs or optical character recognition (OCR) outputs from figures.",
    "th": "ในทางกลับกัน วิธีการสรุปความข้อความจะพึ่งพา metadata เชิงข้อความ เช่น ย่อหน้าที่กล่าวถึงรูปภาพ หรือผลลัพธ์จากการรู้จำอักขระด้วยแสง (OCR) จากรูปภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "While these methods can capture textual context, they frequently overlook crucial visual details, such as trends, patterns, and color-coded elements that are vital for a comprehensive understanding of the figure.",
    "th": "แม้ว่าวิธีเหล่านี้จะจับบริบทเชิงข้อความได้ แต่ก็มักจะละเลยรายละเอียดเชิงทัศน์ที่สำคัญ เช่น แนวโน้ม รูปแบบ และองค์ประกอบที่ระบุด้วยสี ซึ่งมีความสำคัญอย่างยิ่งต่อความเข้าใจรูปภาพอย่างสมบูรณ์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Consequently, these fragmented approaches fail to produce captions that are both accurate and informative, underscoring the need for a unified framework capable of leveraging both textual and visual modalities.",
    "th": "ส่งผลให้แนวทางที่แยกส่วนเหล่านี้ไม่สามารถสร้างคำอธิบายภาพที่ถูกต้องและให้ข้อมูลครบถ้วนได้ ซึ่งตอกย้ำถึงความจำเป็นในกรอบการทำงานที่เป็นหนึ่งเดียวซึ่งสามารถใช้ประโยชน์จากทั้งสื่อข้อความและภาพร่วมกัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Another major challenge in figure captioning lies in the quality of available training data.",
    "th": "ความท้าทายหลักอีกประการหนึ่งในการสร้างคำอธิบายภาพอยู่ที่คุณภาพของข้อมูลสำหรับใช้ฝึกฝนโมเดล"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Many existing datasets [14, 13, 8, 26], particularly those sourced from platforms like arXiv, contain captions that are incomplete, verbose, or poorly written.",
    "th": "ชุดข้อมูลที่มีอยู่ในปัจจุบัน [14, 13, 8, 26] โดยเฉพาะอย่างยิ่งข้อมูลที่มาจากแพลตฟอร์มอย่าง arXiv มักมีคำอธิบายภาพที่ไม่สมบูรณ์ ฟุ่มเฟือย หรือเขียนได้ไม่ดี"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "A recent study [11] reports that over 50% of captions in arXiv papers are unhelpful to domain experts.",
    "th": "การศึกษาล่าสุด [11] รายงานว่าคำอธิบายภาพใน arXiv มากกว่า 50% ไม่มีประโยชน์ต่อผู้เชี่ยวชาญในสาขา"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These low-quality captions can hinder model training and result in sub-optimal caption generation, complicating the accurate assessment of model performance.",
    "th": "คำอธิบายภาพคุณภาพต่ำเหล่านี้สามารถขัดขวางการฝึกฝนโมเดลและส่งผลให้การสร้างคำอธิบายภาพได้ประสิทธิภาพต่ำกว่าที่ควร ซึ่งทำให้การประเมินประสิทธิภาพของโมเดลอย่างถูกต้องเป็นไปได้ยาก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To this end, we propose a unified framework named Multi-LLM Collaborative Figure Caption Generation (MLBCAP).",
    "th": "เพื่อตอบสนองต่อสิ่งนี้ เราขอนำเสนอกรอบการทำงานที่เป็นหนึ่งเดียวชื่อว่า MLBCAP (Multi-LLM Collaborative Figure Caption Generation)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Unlike previous methods, MLBCAP integrates textual and visual information through a carefully orchestrated pipeline comprising three key components: quality assessment, diverse caption generation, and judgment.",
    "th": "ซึ่งแตกต่างจากวิธีการก่อนหน้า โดย MLBCAP จะรวมข้อมูลข้อความและทัศน์เข้าด้วยกันผ่านกระบวนการทำงานที่จัดวางไว้อย่างเป็นระบบซึ่งประกอบด้วยสามส่วนหลัก ได้แก่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The quality assessment module filters out low-quality training captions, ensuring that the models are trained on reliable data.",
    "th": "การประเมินคุณภาพ (quality assessment) การสร้างคำอธิบายภาพที่หลากหลาย (diverse caption generation) และการตัดสิน (judgment)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In the caption generation stage, multiple LLMs, each specializing in different aspects of figure captioning, collaborate to produce diverse candidate captions.",
    "th": "โมดูลประเมินคุณภาพจะกรองคำอธิบายภาพคุณภาพต่ำออกไปเพื่อให้แน่ใจว่าโมเดลได้รับการฝึกด้วยข้อมูลที่เชื่อถือได้ ในขั้นตอนการสร้างคำอธิบายภาพ LLM หลายตัวที่มีความเชี่ยวชาญในด้านต่าง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Finally, a judgment module utilizes a prominent LLM to select the best candidate caption and refine it for accuracy and coherence.",
    "th": "ๆ จะทำงานร่วมกันเพื่อสร้างตัวเลือกคำอธิบายภาพที่หลากหลาย และท้ายที่สุด โมดูลตัดสินจะใช้ LLM ตัวหลักในการเลือกตัวเลือกที่ดีที่สุดและขัดเกลาเพื่อความถูกต้องและความสอดคล้องของเนื้อหา"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "While prior studies find that longer captions are generally more beneficial to readers [7, 11], scientific journals and conference papers often impose strict page limits.",
    "th": "แม้ว่าการศึกษาก่อนหน้านี้จะพบว่าคำอธิบายภาพที่ยาวกว่ามักมีประโยชน์ต่อผู้อ่านมากกว่า [7, 11]"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To accommodate this, our framework is designed to generate both long and short versions of captions.",
    "th": "แต่วารสารทางวิชาการและการประชุมวิชาการมักมีการจำกัดหน้ากระดาษอย่างเข้มงวด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In the final step, we utilize GPT-4o with specific instructions regarding caption length to achieve that both versions are concise yet informative.",
    "th": "เพื่อรองรับข้อจำกัดนี้ กรอบการทำงานของเราจึงถูกออกแบบมาให้สามารถสร้างคำอธิบายภาพได้ทั้งแบบสั้นและแบบยาว ในขั้นตอนสุดท้าย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In a human evaluation by domain experts, captions generated by our method are preferred over the original author-written captions, demonstrating the effectiveness of our approach.",
    "th": "เราใช้ GPT-4o พร้อมคำสั่งเฉพาะเจาะจงเกี่ยวกับความยาวของคำอธิบายภาพ เพื่อให้แน่ใจว่าทั้งสองเวอร์ชันจะกระชับและให้ข้อมูลครบถ้วน ในการประเมินโดยผู้เชี่ยวชาญที่เป็นมนุษย์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Our main contributions are as follows:",
    "th": "คำอธิบายภาพที่สร้างจากวิธีการของเราเป็นที่นิยมมากกว่าคำอธิบายภาพดั้งเดิมที่เขียนโดยผู้เขียนวิจัย ซึ่งแสดงถึงประสิทธิภาพของแนวทางของเรา โดยผลงานหลักของเรามีดังนี้:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We propose a unified framework that includes data cleaning, caption generation, and post-editing processes to generate high-quality captions.",
    "th": "เราเสนอกรอบการทำงานที่เป็นหนึ่งเดียว ซึ่งประกอบด้วยกระบวนการล้างข้อมูล การสร้างคำอธิบายภาพ และการแก้ไขหลังประมวลผล เพื่อสร้างคำอธิบายภาพที่มีคุณภาพสูง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Our approach integrates both textual and visual features, leveraging multi-modal models to produce contextually rich and accurate captions.",
    "th": "แนวทางของเราบูรณาการทั้งลักษณะเชิงข้อความและทัศน์ โดยใช้ประโยชน์จากโมเดลหลายรูปแบบเพื่อสร้างคำอธิบายภาพที่มีข้อมูลบริบทครบถ้วนและแม่นยำ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Through human evaluations, we show that our approach ranked better than author-written captions, demonstrating its effectiveness.",
    "th": "จากผลการประเมินโดยมนุษย์ เราแสดงให้เห็นว่าแนวทางของเราได้รับการจัดอันดับที่ดีกว่าคำอธิบายภาพที่เขียนโดยผู้เขียนวิจัย ซึ่งพิสูจน์ถึงประสิทธิภาพของระบบ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "2 Related Work",
    "th": "2 งานวิจัยที่เกี่ยวข้อง (Related Work)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "2.1 Collaboration Techniques with LLMs",
    "th": "2.1 เทคนิคการทำงานร่วมกันด้วย LLM (Collaboration Techniques with LLMs)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "LLMs have shown exceptional performance across a wide range of tasks, benefiting from their ability to comprehend instructions [1, 28].",
    "th": "LLM แสดงประสิทธิภาพการทำงานที่โดดเด่นในหลากหลายงาน โดยได้รับประโยชน์จากความสามารถในการเข้าใจคำสั่ง [1, 28]"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "However, despite their versatility, individual LLMs exhibit distinct strengths and limitations due to differences in training data and architectural design [12].",
    "th": "อย่างไรก็ตาม แม้จะมีความสามารถรอบด้าน แต่ LLM แต่ละตัวก็มีจุดแข็งและข้อจำกัดที่แตกต่างกันเนื่องจากความแตกต่างของข้อมูลที่ใช้ฝึกฝนและการออกแบบสถาปัตยกรรมโมเดล"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To mitigate this issue, recent work [23] trained a classifier to select the best response generated by different reasoning models.",
    "th": "[12] เพื่อบรรเทาปัญหานี้ งานวิจัยล่าสุด [23] ได้ฝึกตัวจำแนกประเภท (classifier)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Another related work [6] proposed an algorithm that combines outputs from multiple LLMs for attribute extraction through weight assignment.",
    "th": "เพื่อเลือกคำตอบที่ดีที่สุดที่สร้างจากโมเดลการใช้เหตุผลแบบต่าง ๆ และงานที่เกี่ยวข้องอีกชิ้น [6] ได้นำเสนออัลกอริทึมที่รวมผลลัพธ์จาก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Despite the growing application of collaborative methods in various fields, a significant research gap exists in exploring their potential for figure captioning in scientific documents.",
    "th": "LLM หลายตัวเพื่อสกัดคุณลักษณะ (attribute extraction) ผ่านการกำหนดค่าน้ำหนัก แม้ว่าวิธีการทำงานร่วมกันจะถูกนำมาประยุกต์ใช้อย่างแพร่หลายในหลายสาขา แต่ยังคงมีช่องว่างการวิจัยที่สำคัญในการสำรวจศักยภาพสำหรับการสร้างคำอธิบายรูปภาพในเอกสารวิทยาศาสตร์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "2.2 Figure Captioning in Scientific Documents",
    "th": "2.2 การสร้างคำอธิบายรูปภาพในเอกสารวิชาการ (Figure Captioning in Scientific Documents)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To facilitate the generation of captions by neural networks, previous research developed a variety of datasets, such as FigureSeer [24], FigureQA [14], DVQA [13], and SciCap [8].",
    "th": "เพื่ออำนวยความสะดวกในการสร้างคำอธิบายภาพด้วยโครงข่ายประสาทเทียม งานวิจัยก่อนหน้านี้ได้พัฒนาชุดข้อมูลที่หลากหลาย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "More recently, an enhanced version of SciCap was introduced, incorporating both figures and their associated textual information [11].",
    "th": "เช่น FigureSeer [24], FigureQA [14], DVQA [13] และ SciCap [8] เมื่อไม่นานมานี้ ได้มีการแนะนำ SciCap"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This dataset advances caption generator capabilities, enabling them to produce contextually relevant captions for scientific figures.",
    "th": "เวอร์ชันปรับปรุงที่รวมทั้งรูปภาพและข้อมูลเชิงข้อความที่เกี่ยวข้องเข้าด้วยกัน [11] ชุดข้อมูลนี้ช่วยเพิ่มความสามารถของตัวสร้างคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Based on this dataset, a recent study [11] discovered that more than 76% of the words in figure captions matched those in figure-mentioning paragraphs and OCR text.",
    "th": "ทำให้สามารถสร้างคำอธิบายที่สอดคล้องกับบริบทสำหรับรูปภาพวิทยาศาสตร์ได้ จากชุดข้อมูลนี้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Based on this empirical observation, they formulated the figure captioning task as a text summarization task.",
    "th": "การศึกษาล่าสุด [11] พบว่าคำศัพท์ในคำอธิบายภาพมากกว่า 76% ตรงกับคำในย่อหน้าที่กล่าวถึงรูปภาพและข้อความจาก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Contemporaneously, SciCap+ [26] was proposed as an extension of SciCap, integrating OCR-derived textual data to further enhance the generation of figure captions.",
    "th": "OCR จากการสังเกตเชิงประจักษ์นี้ พวกเขาได้กำหนดให้งานสร้างคำอธิบายภาพเป็นงานสรุปความข้อความ ในขณะเดียวกัน SciCap+ [26] ได้ถูกเสนอขึ้นเพื่อเป็นส่วนขยายของ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "However, text summarization models, which depend on textual data from figure-related paragraphs and OCR outputs, often fail to capture essential visual details, including patterns and colors in graphs.",
    "th": "SciCap โดยรวมข้อมูลข้อความที่ได้จาก OCR เพื่อยกระดับการสร้างคำอธิบายรูปภาพ อย่างไรก็ตาม โมเดลสรุปความข้อความซึ่งพึ่งพาข้อมูลเชิงข้อความจากย่อหน้าที่เกี่ยวข้องและผลลัพธ์ OCR มักล้มเหลวในการจับรายละเอียดเชิงทัศน์ที่สำคัญ เช่น แนวโน้ม รูปแบบ และสีในกราฟ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "2.3 Evaluating Natural Language Generation (NLG) Tasks",
    "th": "2.3 Evaluating Natural Language Generation (NLG) Tasks"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In NLG tasks, traditional automatic metrics such as BLEU [20] and ROUGE [16] are widely used for evaluation.",
    "th": "ในงาน NLG มาตรวัดอัตโนมัติดั้งเดิมอย่าง BLEU [20] และ ROUGE [16] มักถูกใช้อย่างแพร่หลายในการประเมินประสิทธิภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "However, these metrics often exhibit a relatively low correlation with human judgments in text generation tasks [18], mainly because they depend on human-preferred reference outputs to fairly evaluate the performance of NLG models.",
    "th": "อย่างไรก็ตาม มาตรวัดเหล่านี้มักมีความสอดคล้องในระดับต่ำกับการประเมินโดยมนุษย์ในงานสร้างข้อความ [18] เนื่องจากต้องพึ่งพาผลลัพธ์อ้างอิงที่มนุษย์ชอบในการประเมินประสิทธิภาพของโมเดล NLG"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Recent studies have advocated for using LLMs as reference-free evaluation metrics, achieving higher correspondence with human evaluations than traditional metrics [30, 18].",
    "th": "การศึกษาเมื่อเร็ว ๆ นี้จึงสนับสนุนการใช้ LLM เป็นมาตรวัดการประเมินแบบไม่มีข้อความอ้างอิง (reference-free) ซึ่งมีความสอดคล้องกับการประเมินโดยมนุษย์สูงกว่ามาตรวัดแบบเดิม"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Notably, SciCap-Eval [10] employed LLMs to assess caption quality and demonstrated that GPT-4, as a zero-shot caption evaluator, positively correlates with Ph.D. students’ assessments (Pearson correlation coefficient of 0.5).",
    "th": "[30, 18] ที่สำคัญคือ SciCap-Eval [10] ได้นำ LLM มาใช้ประเมินคุณภาพคำอธิบายภาพ และสาธิตว่า GPT-4 ในฐานะตัวประเมินคำอธิบายภาพแบบ zero-shot มีความสัมพันธ์เชิงบวกกับการประเมินของนักศึกษาระดับปริญญาเอก (ค่าสัมประสิทธิ์สหสัมพันธ์เพียร์สันเท่ากับ 0.5)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Figure 1: Figure 1: Overview of the collaborative framework integrating multiple LLMs for caption generation in scientific documents.",
    "th": "รูปที่ 1: รูปที่ 1: ภาพรวมของกรอบการทำงานร่วมกันที่บูรณาการ LLM หลายตัวเพื่อสร้างคำอธิบายภาพในเอกสารวิชาการ ในตอนแรก MLLM"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Initially, two MLLMs generate figure descriptions.",
    "th": "สองตัวจะสร้างคำบรรยายรูปภาพ จากนั้นโมเดลที่ผ่านการ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Next, three fine-tuned models and GPT-4o generate candidate captions.",
    "th": "fine-tune สามตัวและ GPT-4o จะสร้างตัวเลือกคำอธิบายภาพ และสุดท้าย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Finally, GPT-4o selects and refines the best caption from the candidates.",
    "th": "GPT-4o จะเลือกและปรับปรุงแก้ไขคำอธิบายภาพที่ดีที่สุดจากตัวเลือกเหล่านั้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "3 Problem Statement",
    "th": "3 คำจำกัดความของปัญหา (Problem Statement)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Consider an arXiv paper DD with nn captions {Ci}i=1n\\{C_{i}\\}_{i=1}^{n}.",
    "th": "พิจารณาบทความวิจัยใน arXiv D ที่มีคำอธิบายภาพ n รายการ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For each caption CiC_{i}, several related sources from DD are used to assist in caption generation.",
    "th": "{Ci}i=1n\\{C_{i}\\}_{i=1}^{n} สำหรับคำอธิบายภาพ CiC_{i}แต่ละรายการ จะใช้แหล่งข้อมูลที่เกี่ยวข้องจาก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These sources include the corresponding figure FiF_{i} and mm paragraphs {Pij}j=1m\\{P_{i}^{j}\\}_{j=1}^{m} that mention FiF_{i}.",
    "th": "D เพื่อช่วยในการสร้างคำอธิบายภาพ แหล่งข้อมูลเหล่านี้ประกอบด้วยรูปภาพที่เกี่ยวข้อง FiF_{i}และ m ย่อหน้า"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Specifically, kk sentences {Mij}j=1k\\{M_{i}^{j}\\}_{j=1}^{k} within these paragraphs explicitly refer to FiF_{i} (e.g., “As shown in Fig. 1, …”).",
    "th": "{Pij}j=1m\\{P_{i}^{j}\\}_{j=1}^{m}ที่กล่าวถึง FiF_{i}โดยเฉพาะอย่างยิ่ง มีประโยค k ประโยค {Mij}j=1k\\{M_{i}^{j}\\}_{j=1}^{k}ภายในย่อหน้าเหล่านี้ที่อ้างถึง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "111For simplicity, superscripts for PiP_{i} and MiM_{i} are omitted in the following sections, as multiple instances may exist.",
    "th": "FiF_{i}อย่างชัดเจน (เช่น \"ดังแสดงในรูปที่ 1...\") เพื่อความง่ายในการอธิบาย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Additionally, textual information extracted using OCR from the figure is denoted as OiO_{i}, and the figure’s type (e.g., bar chart, node diagram) is represented as TiT_{i}.",
    "th": "เราจะละตัวยกสำหรับ PiP_{i}และ MiM_{i}ในส่วนถัดไป เนื่องจากอาจมีหลายรายการเกิดขึ้นได้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Finally, the subject category of DD (e.g., “cs.AI” for Computer Science - Artificial Intelligence) is denoted as SS.",
    "th": "นอกจากนี้ ข้อมูลเชิงข้อความที่สกัดด้วย OCR จากรูปภาพจะแทนด้วย OiO_{i}และประเภทของรูปภาพ (เช่น แผนภูมิแท่ง, แผนผังโหนด)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The objective of this work is to generate high-quality CiC_{i} for FiF_{i} utilizing the aforementioned figure-relevant features.",
    "th": "จะแทนด้วย TiT_{i}และสุดท้าย หมวดหมู่หัวข้อของ D (เช่น \"cs.AI\" สำหรับวิทยาศาสตร์คอมพิวเตอร์ - ปัญญาประดิษฐ์) จะแทนด้วย S วัตถุประสงค์ของงานนี้คือการสร้าง CiC_{i}คุณภาพสูงสำหรับ FiF_{i}โดยใช้คุณลักษณะที่เกี่ยวข้องกับรูปภาพที่กล่าวมาข้างต้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "4 Multi-LLM Collaborative Figure Caption Generation",
    "th": "4 การสร้างคำอธิบายรูปภาพด้วยความร่วมมือของโมเดลภาษาขนาดใหญ่ (Multi-LLM Collaborative Figure Caption Generation)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Our overall pipeline is illustrated in Figure 1, and the following sections provide a description of each component.",
    "th": "กระบวนการทำงานในภาพรวมของเราแสดงไว้ในรูปที่ 1 และหัวข้อต่อไปนี้จะอธิบายรายละเอียดของแต่ละองค์ประกอบ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The actual prompts are described in the Appendix.",
    "th": "ส่วน prompt จริงที่ใช้นั้นได้อธิบายไว้ในภาคผนวก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "4.1 Quality Assessment",
    "th": "4.1 การประเมินคุณภาพ (Quality Assessment)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We employ GPT-4o to generate a synthetic quality assessment dataset using 3k subset of the training data.",
    "th": "เราใช้ GPT-4o เพื่อสร้างชุดข้อมูลการประเมินคุณภาพแบบสังเคราะห์โดยใช้ข้อมูลชุดย่อยขนาด 3,000"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Following the approach of SciCap-Eval, we prompt GPT-4o to score captions on a scale of 1 to 6 based on the given CiC_{i}, FiF_{i}, and PiP_{i} (higher scores indicate better quality).",
    "th": "รายการของข้อมูลสำหรับฝึกฝน ตามแนวทางของ SciCap-Eval โดยเรากำหนด prompt ให้ GPT-4o ให้คะแนนคำอธิบายภาพในช่วง 1 ถึง 6 คะแนนตามค่า CiC_{i}, FiF_{i}และ PiP_{i}ที่กำหนดให้ (คะแนนที่สูงกว่าแสดงถึงคุณภาพที่ดีกว่า)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Next, we fine-tune LLaVA [17] on the constructed dataset.",
    "th": "ถัดไป เราทำการ fine-tune LLaVA [17] บนชุดข้อมูลที่สร้างขึ้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "After fine-tuning, LLaVA predicts the caption quality across the entire training dataset.",
    "th": "หลังจาก fine-tune แล้ว LLaVA จะทำนายคุณภาพของคำอธิบายภาพในชุดข้อมูลที่ใช้ฝึกฝนทั้งหมด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We then collect samples 𝒟high\\mathcal{D}_{\\text{high}} with quality scores of 5 and 6.",
    "th": "จากนั้นเราจะเก็บรวบรวมตัวอย่าง 𝒟high\\mathcal{D}_{\\text{high}} ที่มีคะแนนคุณภาพเท่ากับ 5"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For the evaluation of 200 samples, the fine-tuned LLaVA showed agreement in quality assessment with GPT-4o, achieving Kendall’s tau coefficient of 0.5502.",
    "th": "และ 6 สำหรับการประเมินตัวอย่าง 200 รายการ LLaVA ที่ผ่านการ fine-tune แสดงความสอดคล้องในการประเมินคุณภาพร่วมกับ GPT-4o โดยมีค่าสัมประสิทธิ์ทาวของเคนดัลล์ (Kendall’s tau) เท่ากับ 0.5502"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "4.2 Diverse Caption Generation",
    "th": "4.2 การสร้างคำอธิบายภาพที่หลากหลาย (Diverse Caption Generation)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To capture diverse perspectives and generate a varied set of candidate captions, we utilize four distinct models: GPT-4o, LLaMA-3-8B [2], Yi-1.5-9B [28], and Pegasus [29].",
    "th": "เพื่อจับมุมมองที่หลากหลายและสร้างชุดตัวเลือกคำอธิบายภาพที่ต่างกัน เราใช้โมเดลสี่ตัว ได้แก่ GPT-4o, LLaMA-3-8B [2], Yi-1.5-9B [28] และ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Each model offers unique viewpoints that contribute to the diversity of the generated captions.",
    "th": "Pegasus [29] แต่ละโมเดลนำเสนอจุดเด่นเฉพาะตัวที่มีส่วนช่วยสร้างความหลากหลายของตัวเลือกคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Specifically, GPT-4o leverages its advanced reasoning capabilities as a large-scale LLM.",
    "th": "โดยเฉพาะอย่างยิ่ง GPT-4o ใช้ความสามารถในการใช้เหตุผลขั้นสูงของโมเดลภาษาขนาดใหญ่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "LLaMA-3-8B and Yi-1.5-9B are fine-tuned on the figure captioning task, enhancing domain-specific knowledge.",
    "th": "LLaMA-3-8B และ Yi-1.5-9B ได้รับการ fine-tune สำหรับงานสร้างคำอธิบายภาพโดยเฉพาะเพื่อเพิ่มความรู้เฉพาะด้าน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Pegasus excels in abstractive summarization of textual content, capturing essential information from figure-mentioning paragraphs and OCR text.",
    "th": "และ Pegasus มีความโดดเด่นในการสรุปใจความสำคัญจากย่อหน้าที่อ้างถึงรูปภาพและข้อความ OCR"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "GPT-4o.",
    "th": "GPT-4o:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For a test sample, we use few-shot prompting by providing GPT-4o with ten example captions, EE, randomly selected from 𝒟h​i​g​h\\mathcal{D}_{high}.",
    "th": "สำหรับตัวอย่างทดสอบ เราใช้การทำ prompt แบบ few-shot โดยให้ตัวอย่างคำอธิบายภาพ 10 รายการแก่ GPT-4o ซึ่งสุ่มเลือกมาจากชุดข้อมูล 𝒟high\\mathcal{D}_{high}"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These examples have the same subject as the test sample and have a quality score of 6.",
    "th": "โดยตัวอย่างเหล่านี้เป็นเรื่องเดียวกันกับตัวอย่างที่ต้องการทดสอบและมีคะแนนคุณภาพเท่ากับ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We first instruct GPT-4o to generate a figure description ZiZ_{i} for FiF_{i} by providing the FiF_{i}, TiT_{i} and SS.",
    "th": "6 ในขั้นตอนแรก เราสั่งให้ GPT-4o สร้างคำบรรยายรูปภาพ ZiZ_{i} สำหรับ FiF_{i} โดยส่งรูปภาพ FiF_{i}, ประเภทภาพ TiT_{i}"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Then, GPT-4o generates a candidate caption based on EE, PiP_{i}, MiM_{i}, TiT_{i}, OiO_{i}, SS, and ZiZ_{i}.",
    "th": "และหมวดหมู่หัวข้อ S จากนั้น GPT-4o จะสร้างคำอธิบายภาพตัวเลือกโดยอิงจากตัวอย่าง few-shot, PiP_{i}, MiM_{i}, TiT_{i}, OiO_{i}, S และ ZiZ_{i}"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "LLaMA-3-8B and Yi-1.5-9B are fine-tuned with visual and textual features from the 𝒟high\\mathcal{D}_{\\text{high}} dataset.",
    "th": "LLaMA-3-8B และ Yi-1.5-9B ได้รับการ fine-tune ด้วยลักษณะเด่นทางภาพและข้อความจากชุดข้อมูล 𝒟high\\mathcal{D}_{\\text{high}}"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Figure descriptions are generated by MiniCPM-V [27], which outperforms GPT-4V-1106 and Gemini-Pro [22] for OpenCompass benchmarks [5].",
    "th": "โดยมีคำบรรยายรูปภาพที่สร้างขึ้นโดย MiniCPM-V [27] ซึ่งมีประสิทธิภาพดีกว่า GPT-4V-1106 และ Gemini-Pro [22] ในการทดสอบ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The prompts used for LLaMA-3-8B and Yi-1.5-9B are identical to the prompts used for GPT-4o, except for the exclusion of the few-shot examples.",
    "th": "OpenCompass [5] ทั้งนี้ prompt ที่ใช้กับ LLaMA-3-8B และ Yi-1.5-9B จะเหมือนกับ prompt ของ GPT-4o ยกเว้นแต่ไม่มีการส่งตัวอย่างแบบ few-shot"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Pegasus is fine-tuned on figure-mentioning paragraphs and OCR-text from 𝒟high\\mathcal{D}_{\\text{high}}.",
    "th": "Pegasus ได้รับการ fine-tune บนย่อหน้าที่กล่าวถึงรูปภาพและข้อความ OCR จากชุดข้อมูล 𝒟high\\mathcal{D}_{\\text{high}}"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Apart from the dataset, this model follows the previous work [11].",
    "th": "นอกเหนือจากชุดข้อมูลแล้ว โมเดลนี้ดำเนินการตามแนวทางจากงานวิจัยก่อนหน้า [11]"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "4.3 Judgement",
    "th": "4.3 การตัดสิน (Judgement)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We ask GPT-4o to select the best quality caption from four candidate captions and edit inaccuracies in the selected caption leveraging both visual and textual information.",
    "th": "เราให้ GPT-4o เลือกคำอธิบายภาพที่มีคุณภาพดีที่สุดจากตัวเลือกทั้งสี่รายการ และแก้ไขความไม่ถูกต้องในคำอธิบายภาพที่เลือกโดยใช้ข้อมูลภาพและข้อความร่วมกัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To generate both long and short captions, we set a word limit using the placeholder [MAX_LEN] in the prompt.",
    "th": "เพื่อสร้างคำอธิบายภาพทั้งแบบสั้นและแบบยาว เรากำหนดขีดจำกัดจำนวนคำโดยใช้ตัวแทนข้อความ [MAX_LEN]"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To maintain the conciseness while sufficiently conveying figure information, we define [MAX_LEN] as 50 words for long captions and 30 words for short captions.",
    "th": "ใน prompt และเพื่อรักษาความกระชับแต่ยังคงข้อมูลรูปภาพที่เพียงพอ เรากำหนด [MAX_LEN] เป็น 50 คำสำหรับคำอธิบายแบบยาว และ 30 คำสำหรับคำอธิบายแบบสั้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These limits are based on the training data, where the average caption length is 41.85 words.",
    "th": "ขีดจำกัดเหล่านี้อ้างอิงจากข้อมูลฝึกฝน ซึ่งมีความยาวเฉลี่ยของคำอธิบายภาพอยู่ที่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Here, we refer to the generation of long captions as MLBCAP (long) and short captions as MLBCAP (short).",
    "th": "41.85 คำ ในที่นี้ เราจะเรียกคำอธิบายแบบยาวว่า MLBCAP (long) และแบบสั้นว่า MLBCAP (short)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5 Experiments",
    "th": "5 การทดลอง (Experiments)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5.1 Dataset",
    "th": "5.1 ชุดข้อมูล (Dataset)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "One of the goals of this study is to evaluate whether MLBCAP can generate captions that align with human preferences.",
    "th": "หนึ่งในเป้าหมายของการศึกษานี้คือการประเมินว่า MLBCAP สามารถสร้างคำอธิบายภาพที่สอดคล้องกับความพึงพอใจของมนุษย์ได้หรือไม่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To enhance the richness of the training data, we have chosen to combine the SciCap222https://huggingface.co/datasets/CrowdAILab/scicap/tree/main and SciCap+ [26] datasets for training.",
    "th": "เพื่อเพิ่มความหลากหลายของข้อมูลฝึกฝน เราได้เลือกที่จะผสมผสานชุดข้อมูล SciCap และ SciCap+ [26] เข้าด้วยกันสำหรับการฝึกฝน ชุดข้อมูลเหล่านี้รวมข้อมูล metadata"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These datasets include caption-relevant metadata extracted from the original arXiv papers.",
    "th": "ที่เกี่ยวข้องกับคำอธิบายภาพซึ่งสกัดมาจากบทความวิจัยใน arXiv ดั้งเดิม"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Detailed statistics of the datasets is provided in Table 1.",
    "th": "รายละเอียดสถิติของชุดข้อมูลแสดงอยู่ในตารางที่ 1"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Data Preprocessing.",
    "th": "การประเมินข้อมูลเบื้องต้น:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Since both SciCap and SciCap+ are built on arXiv papers, we first conducted deduplication using the arXiv paper ID.",
    "th": "เนื่องจากทั้ง SciCap และ SciCap+ สร้างขึ้นจากบทความวิจัยใน arXiv ขั้นแรกเราจึงลบข้อมูลที่ซ้ำซ้อนโดยใช้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To obtain high-quality examples, the following preprocessing steps were applied.",
    "th": "ID ของบทความวิจัย และเพื่อรวบรวมตัวอย่างที่มีคุณภาพสูง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "First, figures with captions that do not end with a period were excluded.",
    "th": "เราได้ดำเนินการตามขั้นตอนการประมวลผลเบื้องต้นดังนี้: (1)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Second, captions that were either too long or too short, specifically those exceeding 100 words in length or consisting of a single sentence, were removed.",
    "th": "คัดรูปภาพที่มีคำอธิบายภาพไม่ลงท้ายด้วยจุดออก (2) ลบคำอธิบายภาพที่ยาวหรือสั้นเกินไป โดยเฉพาะที่ยาวเกิน 100 คำ หรือมีเพียงประโยคเดียว"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Lastly, figures with captions rated below 5, as described in Section 4, were filtered out.",
    "th": "และ (3) กรองรูปภาพที่มีคะแนนคุณภาพต่ำกว่า 5 ตามที่อธิบายในส่วนที่ 4 ออกไป"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "After these preprocessing steps, we could get 135,935 samples.",
    "th": "หลังผ่านขั้นตอนเหล่านี้ เราได้ตัวอย่างจำนวน 135,935 ตัวอย่าง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Caption Quality Dataset.",
    "th": "ชุดข้อมูลคุณภาพคำอธิบายภาพ:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We employ GPT-4o to generate a synthetic quality assessment dataset using 3k subset samples for the training data since there is no publicly available dataset.",
    "th": "เราใช้ GPT-4o เพื่อสร้างชุดข้อมูลการประเมินคุณภาพแบบสังเคราะห์โดยใช้ข้อมูลตัวอย่างย่อย 3,000 ตัวอย่างสำหรับข้อมูลฝึกฝน เนื่องจากไม่มีชุดข้อมูลสาธารณะที่ใช้งานได้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The quality distribution of the 3k captions is shown in Table 2, which shows that the training data contains low-quality captions.",
    "th": "การกระจายคุณภาพของคำอธิบายภาพ 3,000 รายการแสดงอยู่ในตารางที่ 2 ซึ่งบ่งชี้ว่าข้อมูลฝึกฝนเดิมมีคำอธิบายภาพคุณภาพต่ำปะปนอยู่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5.2 Training Details",
    "th": "5.2 รายละเอียดการฝึกฝนโมเดล (Training Details)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Prompts.",
    "th": "Prompt:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The specific prompts employed in our study are detailed in the Appendix.",
    "th": "รายละเอียดของ prompt ที่ใช้ในการศึกษาของเราระบุไว้ในภาคผนวก"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To elicit figure descriptions from the MiniCPM-V model, we employed a direct and intuitive prompt: “What is in the image?”.",
    "th": "สำหรับการสกัดการบรรยายรูปภาพจากโมเดล MiniCPM-V เราใช้ prompt ที่สั้นและตรงไปตรงมาว่า"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We also tried extracting figure descriptions with the prompts used in GPT-4o, however, the quality of the generated descriptions was inferior compared to descriptions obtained using the more intuitive prompts.",
    "th": "\"What is in the image?\" เรายังทดลองสกัดการบรรยายรูปภาพด้วย prompt แบบเดียวกับที่ใช้ใน GPT-4o"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "A representative example of the figure descriptions generated is illustrated in Table 3.",
    "th": "แต่พบว่าคุณภาพของคำบรรยายที่ได้มีประสิทธิภาพด้อยกว่าคำบรรยายจาก prompt ที่ตรงไปตรงมามากกว่า ตัวอย่างคำบรรยายรูปภาพที่สร้างขึ้นแสดงอยู่ในตารางที่ 3"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Models.",
    "th": "โมเดล:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Here are the models we used in our experiments.",
    "th": "ต่อไปนี้คือโมเดลที่ใช้ในการทดลองของเรา"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The fine-tuned models were tuned for 5 epochs.",
    "th": "โดยโมเดลที่ผ่านการ fine-tune จะถูกฝึกเป็นจำนวน 5 epoch"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "GPT-4o.",
    "th": "GPT-4o:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We used gpt-4o-2024-05-13 with a temperature setting of 0.",
    "th": "เราใช้ gpt-4o-2024-05-13 โดยตั้งค่าอุณหภูมิ (temperature)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "All experimental procedures were conducted between May 2024 and August 2024.",
    "th": "เป็น 0 ขั้นตอนการทดลองทั้งหมดดำเนินการระหว่างเดือนพฤษภาคม 2024 ถึงสิงหาคม 2024"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "LLaVA.",
    "th": "LLaVA:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We used llava-llama-3-8b-v1_1-hf model 333https://huggingface.co/xtuner/llava-llama-3-8b-v1_1-transformers, which is fine-tuned from the LLaMA-3-8B architecture.",
    "th": "เราใช้โมเดล llava-llama-3-8b-v1_1-hf ซึ่งได้รับการ fine-tune มาจากสถาปัตยกรรม LLaMA-3-8B ตัวเลือกของ LLaVA"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This variant of LLaVA was optimized using the AdamW [19] optimizer, with a learning rate set to 1​e−51e-5 and a batch size of 4.",
    "th": "นี้ได้รับการปรับให้เหมาะสมโดยใช้ตัวเพิ่มประสิทธิภาพ AdamW [19] โดยตั้งค่าอัตราการเรียนรู้ไว้ที่ 1e-5 และมีขนาด batch size เท่ากับ 4"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "MiniCPM-V.",
    "th": "MiniCPM-V:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For the task of figure description extraction, we used the latest model (MiniCPM-Llama3-V 2.5 444https://huggingface.co/openbmb/MiniCPM-Llama3-V-2_5) in the MiniCPM-V families without the fine-tuning.",
    "th": "สำหรับงานสกัดคำบรรยายรูปภาพ เราใช้โมเดลล่าสุด (MiniCPM-Llama3-V 2.5) ในตระกูล MiniCPM-V โดยไม่มีการ fine-tune"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "LLaMA-3-8B.",
    "th": "LLaMA-3-8B:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To generate a caption, we used Meta-Llama-3-8B-Instruct 555https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct model.",
    "th": "ในการสร้างคำอธิบายภาพ เราใช้โมเดล Meta-Llama-3-8B-Instruct"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The model was trained with AdamW, a learning rate of 1​e−51e-5 and a batch size of 1.",
    "th": "โมเดลได้รับการฝึกด้วย AdamW โดยมีอัตราการเรียนรู้ 1e-5 และมีขนาด batch size เท่ากับ 1"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Yi-1.5-9B is an upgraded version of Yi.",
    "th": "Yi-1.5-9B เป็นเวอร์ชันปรับปรุงของ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For generating captions, we used Yi-1.5-9B-Chat 666https://huggingface.co/01-ai/Yi-1.5-9B-Chat.",
    "th": "Yi สำหรับสร้างคำอธิบายภาพ เราใช้ Yi-1.5-9B-Chat"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The training configuration is the same as LLaMa-3-8B.",
    "th": "โดยการกำหนดค่าการฝึกฝนเหมือนกับ LLaMA-3-8B"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Pegasus.",
    "th": "Pegasus:"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We trained the pegasus-large 777https://huggingface.co/google/pegasus-large model using the AdamW optimizer, with a batch size of 32 and a learning rate of 5​e−55e-5.",
    "th": "เราฝึกโมเดล pegasus-large โดยใช้ตัวเพิ่มประสิทธิภาพ AdamW โดยมีขนาด batch size เท่ากับ 32 และอัตราการเรียนรู้ 5e-5"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "When fine-tuning the caption generation models, we concatenated all figure-mentioning paragraphs.",
    "th": "เมื่อ fine-tune โมเดลสร้างคำอธิบายภาพ เราได้นำย่อหน้าที่กล่าวถึงรูปภาพทั้งหมดมาเชื่อมต่อกัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In cases where the cumulative length of these paragraphs exceeded 512 tokens, the text was truncated to fit within this limit.",
    "th": "ในกรณีที่ความยาวสะสมของย่อหน้าเหล่านี้เกิน 512 โทเค็น ข้อความจะถูกตัดให้สั้นลงเพื่อให้พอดีกับขีดจำกัดนี้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For text generation, we utilized greedy search to ensure the generation of coherent.",
    "th": "สำหรับการสร้างข้อความ เราใช้ greedy search เพื่อให้มั่นใจว่าจะได้ข้อความที่สอดคล้องกัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5.3 Human Evaluation Results",
    "th": "5.3 ผลการประเมินโดยมนุษย์ (Human Evaluation Results)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We evaluate MLBCAP with a human evaluation to accurately assess the quality of generated captions.",
    "th": "เราประเมิน MLBCAP ด้วยการประเมินโดยมนุษย์เพื่อวัดคุณภาพของคำอธิบายภาพที่สร้างขึ้นอย่างถูกต้อง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The baseline models used for evaluation include LLaMA-3-8B, Yi-1.5-9B, and Pegasus.",
    "th": "โมเดล baseline ที่ใช้เปรียบเทียบประกอบด้วย LLaMA-3-8B, Yi-1.5-9B และ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "All baselines were fine-tuned on the high-quality captions from the SciCap and SciCap+ datasets, specifically captions with a quality score of 5 or higher.",
    "th": "Pegasus โดย baseline ทั้งหมดได้รับการ fine-tune ด้วยคำอธิบายภาพคุณภาพสูงจากชุดข้อมูล SciCap และ SciCap+ ที่มีคะแนนคุณภาพตั้งแต่ 5"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The qualitative results for generated captions are illustrated in Table 4.",
    "th": "ขึ้นไป ผลลัพธ์เชิงคุณภาพสำหรับคำอธิบายภาพที่สร้างขึ้นแสดงอยู่ในตารางที่ 4"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5.4 Comparison with Baselines",
    "th": "5.4 การเปรียบเทียบกับโมเดลคู่แข่ง (Comparison with Baselines)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We recruited three computer vision (CV) experts, each with over five years of experience in the field.",
    "th": "เราสรรหาผู้เชี่ยวชาญด้านคอมพิวเตอร์วิทัศน์ (CV) สามคน ซึ่งแต่ละคนมีประสบการณ์มากกว่าห้าปีในสาขานี้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These experts were asked to select the best and worst quality captions generated by LLMs.",
    "th": "ผู้เชี่ยวชาญเหล่านี้ถูกขอให้เลือกคำอธิบายภาพที่ดีที่สุดและแย่ที่สุดที่สร้างโดย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We used 91 CV figures from the SciCap test dataset, with the candidate captions de-identified and randomly shuffled for each figure before being presented to the experts.",
    "th": "LLM เราใช้รูปภาพ CV จำนวน 91 รูปจากชุดข้อมูลทดสอบ SciCap โดยนำตัวเลือกคำอธิบายภาพมาสลับลำดับแบบสุ่มและปิดบังข้อมูลโมเดลผู้สร้างก่อนที่จะนำเสนอต่อผู้เชี่ยวชาญ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Figure 2(a) presents the results of the human evaluation.",
    "th": "รูปที่ 2(a) แสดงผลการประเมินโดยมนุษย์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Notably, captions generated by MLBCAP (long) were consistently selected as high-quality by all three experts, indicating a strong preference compared to baselines.",
    "th": "โดยคำอธิบายภาพที่สร้างจาก MLBCAP (long) ได้รับเลือกให้เป็นภาพคุณภาพสูงอย่างสม่ำเสมอจากผู้เชี่ยวชาญทั้งสามคน ซึ่งสะท้อนถึงความพึงพอใจอย่างมากเมื่อเทียบกับ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To understand the high preference for the MLBCAP, we investigated which LLM-generated captions were selected during the best caption selection phase.",
    "th": "baseline และเพื่อศึกษาความพึงพอใจที่สูงต่อ MLBCAP เราได้ตรวจสอบว่าโมเดล LLM ตัวใดที่ถูกเลือกในระหว่างกระบวนการเลือกคำอธิบายภาพที่ดีที่สุด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The percentages of captions selected from the GPT-4o, Yi-1.5-9B, LLaMA-3-8B, and Pegasus models were 89.38%, 4.23%, 6.17%, and 0.19%, respectively.",
    "th": "พบว่าเปอร์เซ็นต์การเลือกคำอธิบายจาก GPT-4o, Yi-1.5-9B, LLaMA-3-8B และ Pegasus อยู่ที่ร้อยละ 89.38, 4.23, 6.17 และ 0.19 ตามลำดับ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "As expected, GPT-4o performed exceptionally well in generating high-quality captions.",
    "th": "ซึ่งเป็นไปตามคาดที่ GPT-4o ทำงานได้อย่างโดดเด่นในการสร้างคำอธิบายภาพคุณภาพสูง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Interestingly, the assessment of MLBCAP (short) captions revealed variability in expert opinion.",
    "th": "เป็นเรื่องน่าสนใจที่การประเมินคำอธิบายภาพของ MLBCAP (short) เผยให้เห็นความผันแปรในความเห็นของผู้เชี่ยวชาญ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Despite this variance, Figure 2(b) demonstrates that MLBCAP (short) captions were rarely selected as the worst quality, suggesting that the differences in preference may stem more from individual biases towards caption length rather than from a significant discrepancy in caption quality.",
    "th": "อย่างไรก็ตาม รูปที่ 2(b) แสดงให้เห็นว่าคำอธิบายภาพแบบสั้นของ MLBCAP แทบไม่ถูกเลือกให้เป็นภาพคุณภาพแย่ที่สุดเลย ซึ่งชี้ให้เห็นว่าความแตกต่างของความพึงพอใจอาจเกิดจากความชอบส่วนบุคคลเกี่ยวกับความยาวของคำอธิบายภาพมากกว่าจะเกิดจากความแตกต่างด้านคุณภาพอย่างมีนัยสำคัญ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Figure 2: Figure 2: The human evaluation results for selecting captions based on quality.",
    "th": "รูปที่ 2: รูปที่ 2: ผลลัพธ์การประเมินโดยมนุษย์สำหรับการเลือกคำอธิบายภาพตามคุณภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Captions generated by MLBCAP (long) are most frequently selected as high quality.",
    "th": "โดยคำอธิบายภาพที่สร้างโดย MLBCAP (long) ได้รับเลือกให้เป็นคำอธิบายภาพคุณภาพสูงบ่อยที่สุด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5.5 Comparison with Author Captions",
    "th": "5.5 การเปรียบเทียบกับคำอธิบายภาพของผู้วิจัยเดิม (Comparison with Author Captions)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Another human evaluation was conducted as part of the 2nd SciCap challenge 888http://scicap.ai/.",
    "th": "การประเมินโดยมนุษย์อีกรายการหนึ่งถูกจัดขึ้นเป็นส่วนหนึ่งของการแข่งขัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To account for the natural distinctions and ensure equitable assessment between short and long captions, the task was divided into two tracks.",
    "th": "SciCap Challenge ครั้งที่ 2 เพื่อพิจารณาถึงความแตกต่างและประเมินอย่างเป็นธรรมระหว่างคำอธิบายแบบสั้นและแบบยาว"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Participants in the short caption track were required to submit results where at least 30% of the captions were no longer than the original author-written captions from the SciCap test dataset.",
    "th": "งานนี้ถูกแบ่งออกเป็นสองแทร็ก ผู้เข้าร่วมในแทร็กคำอธิบายแบบสั้นต้องส่งผลลัพธ์ที่คำอธิบายภาพอย่างน้อย 30% ไม่ยาวกว่าคำอธิบายดั้งเดิมที่เขียนโดยผู้เขียนวิจัยเดิมในชุดทดสอบ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Similarly, teams in the long caption track were required to submit results where at least 30% of the captions exceeded the length of the original author-written captions.",
    "th": "SciCap ในทำนองเดียวกัน แทร็กคำอธิบายแบบยาวต้องส่งผลลัพธ์ที่คำอธิบายภาพอย่างน้อย 30% ยาวกว่าคำอธิบายดั้งเดิมของผู้วิจัย สำหรับ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In the case of MLBCAP, 68.15% of the captions in the long caption track were longer than the author-written captions, while 46.53% of the captions in the short caption track were shorter than the author’s captions.",
    "th": "MLBCAP พบว่าร้อยละ 68.15 ของคำอธิบายภาพในแทร็กแบบยาวนั้นยาวกว่าคำอธิบายของผู้วิจัย ในขณะที่ร้อยละ 46.53 ของคำอธิบายภาพในแทร็กแบบสั้นมีขนาดสั้นกว่าของผู้วิจัย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Three judges (who are not the CV experts), all native American English speakers with expertise in technical academic writing, were recruited to rank the captions.",
    "th": "กรรมการสามคน (ซึ่งไม่ใช่ผู้เชี่ยวชาญด้าน CV) เป็นผู้พูดภาษาอังกฤษแบบอเมริกันโดยกำเนิดที่มีความเชี่ยวชาญด้านการเขียนเชิงวิชาการเชิงเทคนิค"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "They ranked captions for the same 200 figures, randomly selected from the challenge test set, based on how effectively they convey the figure’s message for each track.",
    "th": "ได้รับการสรรหาเพื่อจัดอันดับคำอธิบายภาพ กรรมการจัดอันดับคำอธิบายภาพสำหรับรูปภาพ 200 รูปที่สุ่มเลือกมาจากชุดทดสอบการแข่งขัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The selection of these figures adhered to the following criteria: (1) For the long caption track, figures were selected where the author-written captions were shorter than the generated captions submitted by participants. (2) For the short caption track, figures were chosen where the author-written captions exceeded the length of the generated captions submitted by participants. (3) For both the long and short caption tracks, only figures with a SciCap-Eval score of 4 or higher were included.",
    "th": "โดยพิจารณาจากประสิทธิภาพการสื่อความหมายของรูปภาพในแต่ละแทร็ก การคัดเลือกรูปภาพเหล่านี้เป็นไปตามเกณฑ์ดังนี้: (1) แทร็กคำอธิบายแบบยาว จะเลือกรูปภาพที่คำอธิบายของผู้วิจัยสั้นกว่าที่ผู้เข้าร่วมสร้างขึ้น (2) แทร็กคำอธิบายแบบสั้น จะเลือกรูปภาพที่คำอธิบายของผู้วิจัยยาวกว่าที่ผู้เข้าร่วมสร้างขึ้น และ (3) ทั้งสองแทร็กจะรวมเฉพาะรูปภาพที่มีคะแนน SciCap-Eval ตั้งแต่ 4 ขึ้นไปเท่านั้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "As shown in Table 5, in the long caption track, MLBCAP (long) outperformed all others, receiving the best score of 1.27.",
    "th": "ดังแสดงในตารางที่ 5 ในแทร็กคำอธิบายแบบยาว MLBCAP (long) ทำประสิทธิภาพได้ดีกว่าโมเดลอื่น ๆ ทั้งหมด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This result presents the effectiveness of our approach in generating comprehensive captions that resonated well with expert evaluators.",
    "th": "โดยได้รับคะแนนเฉลี่ยดีที่สุดที่ 1.27 ผลลัพธ์นี้แสดงถึงประสิทธิภาพของกรอบงานของเราในการสร้างคำอธิบายภาพที่ครอบคลุมซึ่งได้รับความเห็นชอบอย่างดีจากกรรมการประเมิน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Additionally, although the MLBCAP’s caption in the short caption track ranked marginally lower than the author-written captions, it still placed our method ahead of other methods.",
    "th": "นอกจากนี้ แม้ว่าคำอธิบายของ MLBCAP ในแทร็กแบบสั้นจะได้อันดับต่ำกว่าคำอธิบายของผู้วิจัยเล็กน้อย แต่ก็ยังทำให้แนวทางของเราอยู่นำหน้าแนวทางอื่น ๆ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "5.6 Analysis",
    "th": "5.6 บทวิเคราะห์ (Analysis)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Here we conduct an analysis focused on the components of MLBCAP to examine their impact on caption quality, using a random sample of 200 instances from the SciCap test dataset.",
    "th": "ในที่นี้เราวิเคราะห์โดยเน้นที่องค์ประกอบย่อยของ MLBCAP เพื่อตรวจสอบผลกระทบต่อคุณภาพของคำอธิบายภาพ โดยใช้กลุ่มตัวอย่างสุ่ม 200 รายการจากชุดทดสอบ SciCap ตารางที่"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Table 6 illustrates the significant improvements in caption quality across all models when figure descriptions and a robust filtering process are incorporated.",
    "th": "6 แสดงให้เห็นถึงการปรับปรุงคุณภาพคำอธิบายภาพอย่างมีนัยสำคัญในทุกโมเดลเมื่อมีการนำคำบรรยายรูปภาพและกระบวนการกรองข้อมูลที่มีประสิทธิภาพมาร่วมใช้งาน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "While models such as LLaMA-3-8B and Yi-1.5-9B perform well in generating high-quality captions, GPT-4o emerges as the best model for providing top-tier candidate captions.",
    "th": "แม้ว่าโมเดลอย่าง LLaMA-3-8B และ Yi-1.5-9B จะทำงานได้ดีในการสร้างคำอธิบายภาพคุณภาพสูง แต่ GPT-4o ยังคงโดดเด่นในฐานะโมเดลที่ดีที่สุดสำหรับสร้างคำอธิบายภาพตัวเลือกชั้นยอด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "However, Table 7 reveals a crucial insight; the highest caption quality score (5.440) is achieved not solely by relying on the individual model (GPT-4o) but through a strategic combination of multiple LLMs and subsequent post-editing.",
    "th": "อย่างไรก็ตาม ตารางที่ 7 เผยข้อมูลเชิงลึกที่สำคัญว่า คะแนนคุณภาพคำอธิบายภาพสูงสุด (5.440) นั้นไม่ได้มาจากการพึ่งพาโมเดลเดี่ยว (GPT-4o) เพียงอย่างเดียว"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This approach demonstrates that even with the availability of a powerful model like GPT-4o, the incorporation of diverse perspectives from smaller LLMs can yield improved results.",
    "th": "แต่มาจากการทำงานร่วมกันของ LLM หลายตัวตามกลยุทธ์และการแก้ไขหลังการสร้างคำอธิบาย วิธีการนี้พิสูจน์ให้เห็นว่าแม้จะมีโมเดลที่มีประสิทธิภาพสูงอย่าง GPT-4o การผสมผสานมุมมองที่หลากหลายจาก LLM ขนาดเล็กกว่าก็สามารถสร้างผลลัพธ์ที่ดีขึ้นได้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "6 Discussion",
    "th": "6 การอภิปราย (Discussion)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "6.1 Caption Preferences",
    "th": "6.1 ความพึงพอใจของคำอธิบายภาพ (Caption Preferences)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "While MLBCAP rarely produced low-quality captions in human evaluations, we observed variability among experts when selecting the best and worst captions.",
    "th": "แม้ว่า MLBCAP แทบไม่สร้างคำอธิบายภาพคุณภาพต่ำในการประเมินโดยมนุษย์ แต่เราก็พบความผันแปรในกลุ่มผู้เชี่ยวชาญเมื่อเลือกคำอธิบายที่ดีที่สุดและแย่ที่สุด"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This challenge was reflected in the low inter-rater agreement metrics.",
    "th": "ความท้าทายนี้สะท้อนออกมาในมาตรวัดความสอดคล้องระหว่างกรรมการประเมินในระดับต่ำ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For instance, Fleiss’ kappa for selecting high-quality captions among baseline models was 0.154, indicating low agreement, while for low-quality captions, the kappa improved to 0.382, signifying moderate agreement.",
    "th": "ตัวอย่างเช่น Fleiss’ kappa สำหรับการเลือกคำอธิบายภาพคุณภาพสูงท่ามกลางโมเดล baseline อยู่ที่ 0.154 ซึ่งแสดงความสอดคล้องในระดับต่ำ ขณะที่การเลือกคำอธิบายคุณภาพต่ำ ค่า kappa ปรับดีขึ้นเป็น 0.382 บ่งชี้ถึงความสอดคล้องระดับปานกลาง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Similarly, in the SciCap Challenge, Kendall’s tau for inter-rater agreement, provided by the challenge organizers, was 0.3589 for long captions and 0.1100 for short captions, highlighting the difficulty of reaching a consensus even among experienced judges.",
    "th": "ในทำนองเดียวกัน ในการแข่งขัน SciCap Challenge ค่า Kendall’s tau สำหรับความสอดคล้องระหว่างกรรมการซึ่งจัดทำโดยผู้จัดแข่งขัน อยู่ที่ 0.3589 สำหรับคำอธิบายแบบยาว และ 0.1100 สำหรับคำอธิบายแบบสั้น ซึ่งเน้นย้ำถึงความยากลำบากในการบรรลุฉันทามติแม้ในกลุ่มผู้ตัดสินที่มีประสบการณ์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These findings align with previous research [11], which has shown that caption ranking tasks inherently elicit varied judgments from evaluators.",
    "th": "ผลลัพธ์เหล่านี้สอดคล้องกับงานวิจัยก่อนหน้า [11] ซึ่งแสดงให้เห็นว่างานจัดอันดับคำอธิบายภาพมักกระตุ้นการตัดสินใจที่แตกต่างกันในกลุ่มผู้ประเมิน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The low agreement underscores the complexity of defining “quality” in figure captioning, where multiple factors interplay, such as the caption’s informativeness, length, detail, and overall style.",
    "th": "ความสอดคล้องในระดับต่ำตอกย้ำถึงความซับซ้อนของการนิยามคำว่า \"คุณภาพ\" ในการสร้างคำอธิบายรูปภาพ ซึ่งมีปัจจัยหลายอย่างที่ส่งผลกระทบร่วมกัน เช่น ความครบถ้วนของข้อมูล ความยาว รายละเอียด และรูปแบบโดยรวมของคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "A plausible explanation for the observed discrepancies lies in the subjective nature of caption preferences.",
    "th": "คำอธิบายที่เป็นไปได้สำหรับความแตกต่างที่สังเกตพบนั้นอยู่ในธรรมชาติที่เป็นอัตวิสัย (subjective)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Evaluators may prioritize different attributes, such as the level of detail versus brevity, or favor stylistic differences in language.",
    "th": "ของความชอบส่วนบุคคล ผู้ประเมินอาจให้ความสำคัญกับคุณลักษณะที่ต่างกัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "For instance, one expert might value a caption that provides exhaustive detail, while another might prefer concise summaries that align with the space constraints typical in scientific publications.",
    "th": "เช่น ระดับของรายละเอียดเทียบกับความกระชับ หรือชอบความแตกต่างทางสไตล์การใช้ภาษา ตัวอย่างเช่น ผู้เชี่ยวชาญคนหนึ่งอาจให้คุณค่ากับคำอธิบายภาพที่ให้รายละเอียดอย่างถี่ถ้วน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This subjectivity in preferences naturally leads to variability in judgments, reducing inter-rater reliability.",
    "th": "ในขณะที่อีกคนอาจชอบการสรุปกระชับที่สอดคล้องกับข้อความจำกัดหน้ากระดาษของการตีพิมพ์วิทยาศาสตร์ ความชอบที่เป็นอัตวิสัยนี้ทำให้การตัดสินใจมีความผันแปรและลดระดับความน่าเชื่อถือระหว่างผู้ประเมินลง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "These observations highlight the importance of developing clearer guidelines and evaluation criteria for figure captions.",
    "th": "การสังเกตเหล่านี้ตอกย้ำถึงความสำคัญของการพัฒนาแนวทางและเกณฑ์การประเมินคำอธิบายภาพที่ชัดเจนยิ่งขึ้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "A more standardized framework could help align evaluators’ judgments and establish a consensus on what constitutes a “high-quality” caption.",
    "th": "กรอบการทำงานที่เป็นมาตรฐานมากขึ้นจะช่วยปรับการตัดสินใจของผู้ประเมินให้สอดคล้องกันและสร้างฉันทามติว่าสิ่งใดถือเป็นคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Future work could explore leveraging LLMs not only for caption generation but also as assistive tools for evaluating captions in a more consistent manner, thereby addressing some of the subjectivity inherent in human evaluations.",
    "th": "\"คุณภาพสูง\" งานในอนาคตอาจสำรวจการใช้ประโยชน์จาก LLM ไม่เพียงแต่สำหรับการสร้างคำอธิบายภาพเท่านั้น แต่ยังเป็นเครื่องมือช่วยประเมินคำอธิบายภาพให้สอดคล้องกันมากขึ้น ซึ่งจะช่วยลดข้อจำกัดของอัตวิสัยในการประเมินโดยมนุษย์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This would ensure that assessments of caption quality are both rigorous and aligned with the needs of diverse scientific communities.",
    "th": "และช่วยให้การประเมินคุณภาพคำอธิบายมีความเข้มงวดและตอบสนองความต้องการของชุมชนวิทยาศาสตร์ที่หลากหลาย"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "6.2 Evaluation with Traditional Metrics",
    "th": "6.2 การประเมินด้วยมาตรวัดดั้งเดิม (Evaluation with Traditional Metrics)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Furthermore, we found a discrepancy between traditional metric-based evaluations and human judgments.",
    "th": "นอกจากนี้ เรายังพบความไม่สอดคล้องกันระหว่างการประเมินด้วยมาตรวัดดั้งเดิมกับการตัดสินโดยมนุษย์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In Table 8, while MLBCAP was preferred over the author-written captions in the human evaluations, traditional metrics failed to capture the perceived quality of captions.",
    "th": "ในตารางที่ 8 แม้ว่า MLBCAP จะเป็นที่ชื่นชอบมากกว่าคำอธิบายภาพดั้งเดิมที่เขียนโดยผู้แต่งในการประเมินโดยมนุษย์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This divergence presents the limitations of relying solely on conventional metrics for evaluating caption quality.",
    "th": "แต่มาตรวัดดั้งเดิมกลับล้มเหลวในการสะท้อนคุณภาพที่รับรู้ได้ของคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Similar observations have been made in the natural image captioning task [3], where BLEU and ROUGE scores showed low correlation with human judgments (Kendall’s tau of approximately 0.3 for both metrics).",
    "th": "ความขัดแย้งนี้แสดงถึงข้อจำกัดของการพึ่งพามาตรวัดแบบเดิมเพียงอย่างเดียว การสังเกตการณ์ที่คล้ายกันนี้พบในงานสร้างคำอธิบายรูปภาพธรรมชาติทั่วไป [3] ซึ่งคะแนน BLEU และ ROUGE แสดงความสัมพันธ์ในระดับต่ำมากกับการประเมินโดยมนุษย์ (ค่าเคนดัลล์ทาวประมาณ 0.3 สำหรับทั้งสองมาตรวัด)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This inconsistency can be attributed to the inherent limitations of BLEU and ROUGE metrics, which focus on n-gram overlap between the generated caption and the reference caption.",
    "th": "ความไม่สอดคล้องกันนี้อาจมีสาเหตุมาจากข้อจำกัดโดยธรรมชาติของมาตรวัด BLEU และ ROUGE ซึ่งเน้นเฉพาะการจับคู่คำแบบ n-gram ระหว่างคำอธิบายภาพที่สร้างขึ้นกับคำอธิบายภาพอ้างอิง"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In scientific figure captioning, there are multiple valid ways to describe the same content using different terminologies or phrasings.",
    "th": "ในการสร้างคำอธิบายรูปภาพวิทยาศาสตร์ มีวิธีการที่ถูกต้องหลายวิธีในการอธิบายเนื้อหาเดียวกันโดยใช้คำศัพท์หรือโครงสร้างประโยคที่ต่างกัน"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "As a result, even high-quality captions may receive low scores if they do not closely match the reference.",
    "th": "ส่งผลให้แม้แต่คำอธิบายภาพที่มีคุณภาพสูงก็อาจได้รับคะแนนต่ำหากคำที่ใช้ไม่ตรงกับตัวอ้างอิงทุกประการ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "7 Limitations",
    "th": "7 ข้อจำกัด (Limitations)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "While our experiments indicate the potential of MLBCAP in the figure captioning task, there are some limitations that point to possible directions for future work.",
    "th": "แม้ว่าการทดลองของเราจะชี้ให้เห็นถึงศักยภาพของ MLBCAP ในงานสร้างคำอธิบายภาพ แต่ยังมีข้อจำกัดบางประการที่สามารถชี้ทางสำหรับการวิจัยในอนาคต"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Firstly, the integration of multiple LLMs in our framework introduces a trade-off between performance and efficiency.",
    "th": "ประการแรก การรวม LLM หลายตัวเข้าในกรอบงานของเราก่อให้เกิดการแลกเปลี่ยน (trade-off) ระหว่างประสิทธิภาพและประสิทธิผล"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The reliance on multiple models not only reduces inference speed but also increases the demand for computational resources.",
    "th": "การพึ่งพาหลายโมเดลไม่เพียงแต่ลดความเร็วในการอนุมาน (inference speed)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This may limit the practical scalability of MLBCAP, particularly in environments with restricted computational capabilities or in real-time applications.",
    "th": "แต่ยังเพิ่มความต้องการทรัพยากรการคำนวณอีกด้วย ซึ่งอาจจำกัดความสามารถในการขยายขนาดระบบของ MLBCAP ในทางปฏิบัติ โดยเฉพาะอย่างยิ่งในสภาพแวดล้อมที่มีข้อจำกัดด้านการคำนวณ หรือในการใช้งานแบบเรียลไทม์"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Secondly, MLBCAP incorporates a closed-source LLM as a critical component of the caption generation pipeline.",
    "th": "ประการที่สอง MLBCAP รวม LLM ที่เป็น closed-source เป็นส่วนประกอบหลักของกระบวนการสร้างคำอธิบายภาพ"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This inclusion imposes inherent limitations, particularly in terms of transparency and interpretability.",
    "th": "การรวมนี้เพิ่มข้อจำกัดโดยเฉพาะด้านความโปร่งใสและการตีความได้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "The closed-source nature restricts our ability to fully understand and analyze the model’s reasoning processes and decision-making behavior, which may hinder trust and adoption in certain scientific communities where explainability is crucial.",
    "th": "การเป็นโมเดล closed-source จำกัดความสามารถของเราในการทำความเข้าใจและวิเคราะห์กระบวนการใช้เหตุผลและการตัดสินใจของโมเดล ซึ่งอาจส่งผลเสียต่อความไว้วางใจและการยอมรับในชุมชนวิทยาศาสตร์บางกลุ่มที่ความสามารถในการอธิบายความ (explainability) มีความจำเป็น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Lastly, our evaluation was primarily conducted through human assessments on arXiv papers, which, while valuable, does not fully capture the generalization capabilities of MLBCAP across a broader range of scientific literature.",
    "th": "สุดท้ายนี้ การประเมินของเราดำเนินการหลักๆ ผ่านการประเมินโดยมนุษย์บนบทความ arXiv ซึ่งแม้ว่าจะมีค่า แต่ก็ไม่สามารถจับความสามารถในการทำเป็นกรณีทั่วไป (generalization capabilities) ของ MLBCAP บนเอกสารวิทยาศาสตร์ที่กว้างขวางขึ้นได้"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "To rigorously validate the robustness and adaptability of the model, future evaluations should include a diverse set of scientific documents.",
    "th": "เพื่อทดสอบความทนทานและการปรับตัวของโมเดลอย่างเข้มงวด การประเมินในอนาคตควรครอบคลุมเอกสารวิทยาศาสตร์ที่หลากหลายและครอบคลุมมากขึ้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "8 Conclusion",
    "th": "8 บทสรุป (Conclusion)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In this paper, we presented MLBCAP, a novel framework for generating high-quality captions for scientific figures through the collaborative utilization of multiple Large Language Models (LLMs).",
    "th": "ในบทความวิจัยนี้ เราได้นำเสนอ MLBCAP กรอบการทำงานใหม่สำหรับการสร้างคำอธิบายรูปภาพวิทยาศาสตร์ที่มีคุณภาพสูงผ่านการทำงานร่วมกันของโมเดลภาษาขนาดใหญ่ (LLM) หลายตัว"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Unlike prior approaches that rely on isolated modalities or limited data perspectives, MLBCAP uniquely integrates textual and visual features alongside a filtering mechanism to ensure that only high-quality training data is utilized.",
    "th": "ซึ่งแตกต่างจากแนวทางก่อนหน้านี้ที่พึ่งพารูปแบบสื่อเดี่ยวหรือมุมมองข้อมูลที่จำกัด MLBCAP ผสานรวมลักษณะเด่นของข้อความและทัศน์เข้ากับกลไกการกรองเพื่อให้แน่ใจว่าใช้เฉพาะข้อมูลฝึกฝนที่มีคุณภาพสูงเท่านั้น"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "By combining the complementary strengths of multiple LLMs with candidate caption generation and a post-editing stage, our framework generates captions that are not only preferred over author-written captions in informativeness but also cater to diverse needs through long and short caption formats.",
    "th": "การผสานจุดเด่นที่ส่งเสริมกันของ LLM หลายตัวร่วมกับการสร้างคำอธิบายภาพตัวเลือกและขั้นตอนการขัดเกลาแก้ไข ทำให้กรอบงานของเราสร้างคำอธิบายภาพที่ได้รับการจัดอันดับสูงกว่าคำอธิบายภาพของผู้วิจัยเดิมในแง่ของความครบถ้วนของข้อมูล และยังสามารถตอบสนองต่อความต้องการที่แตกต่างกันผ่านรูปแบบคำอธิบายแบบสั้นและแบบยาว"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "In addition, our results highlight the effectiveness of a multi-LLM approach, demonstrating higher caption quality compared to a single prominent LLM like GPT-4o.",
    "th": "นอกจากนี้ ผลลัพธ์ของเรายังเน้นย้ำถึงประสิทธิภาพของแนวทางทำงานร่วมกันแบบหลาย LLM โดยมีคุณภาพของคำอธิบายภาพที่สูงกว่าการใช้ LLM เดี่ยวที่มีประสิทธิภาพสูงเพียงตัวเดียวอย่าง GPT-4o"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "9 Acknowledgement",
    "th": "9 กิตติกรรมประกาศ (Acknowledgement)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "We are grateful to the anonymous reviewers for their valuable feedback.",
    "th": "เราขอแสดงความขอบคุณต่อผู้ประเมินนิรนามสำหรับข้อเสนอแนะที่มีคุณค่า"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "This research, along with the SciCap Challenge 2024, was partially supported by the Alfred P.",
    "th": "งานวิจัยนี้และกิจกรรม SciCap Challenge 2024 ได้รับการสนับสนุนบางส่วนจากมูลนิธิ Alfred"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Sloan Foundation (Grant Number: 2024-22721).",
    "th": "P. Sloan Foundation (หมายเลขทุน: 2024-22721)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "References",
    "th": "เอกสารอ้างอิง (References)"
  },
  {
    "paper": "area2-understanding/2-MLBCAP_2025",
    "title": "Multi-LLM Collaborative Caption Generation in Scientific Documents",
    "en": "Appendix",
    "th": "ภาคผนวก (Appendix)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Abstract",
    "th": "บทคัดย่อ (Abstract)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Visual language such as charts and plots is ubiquitous in the human world.",
    "th": "ภาษาเชิงภาพ (visual language) เช่น แผนภูมิและกราฟ ปรากฏอยู่ทั่วไปในโลกของมนุษย์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Comprehending plots and charts requires strong reasoning skills.",
    "th": "การทำความเข้าใจกราฟและแผนภูมิต้องอาศัยทักษะการใช้เหตุผลที่แข็งแกร่ง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Prior state-of-the-art (SOTA) models require at least tens of thousands of training examples and their reasoning capabilities are still much limited, especially on complex human-written queries.",
    "th": "โมเดลที่ดีที่สุด ณ ปัจจุบัน (SOTA) ต้องใช้ตัวอย่างฝึกฝนอย่างน้อยหลายหมื่นตัวอย่าง และความสามารถในการใช้เหตุผลของโมเดลเหล่านั้นยังมีข้อจำกัดมาก โดยเฉพาะกับคำถามที่มนุษย์เขียนขึ้นซึ่งมีความซับซ้อน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This paper presents the first few(one)-shot solution to visual language reasoning.",
    "th": "บทความนี้นำเสนอวิธีการแก้ปัญหาการใช้เหตุผลเชิงภาพแบบ few(one)-shot เป็นครั้งแรก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We decompose the challenge of visual language reasoning into two steps: (1) plot-to-text translation, and (2) reasoning over the translated text.",
    "th": "เราแบ่งปัญหาการใช้เหตุผลเชิงภาพออกเป็นสองขั้นตอน ได้แก่ (1) การแปลงกราฟเป็นข้อความ (plot-to-text translation) และ (2)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The key in this method is a modality conversion module, named as DePlot, which translates the image of a plot or chart to a linearized table.",
    "th": "การใช้เหตุผลบนข้อความที่แปลงแล้ว หัวใจสำคัญของวิธีนี้คือโมดูลแปลงรูปแบบข้อมูล (modality conversion module) ที่ชื่อว่า DePlot"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The output of DePlot can then be directly used to prompt a pretrained large language model (LLM), exploiting the few-shot reasoning capabilities of LLMs.",
    "th": "ซึ่งแปลงภาพของกราฟหรือแผนภูมิให้เป็นตารางในรูปแบบข้อความเรียงเส้นตรง (linearized table) ผลลัพธ์จาก DePlot สามารถนำไปใช้เป็น prompt ให้กับโมเดลภาษาขนาดใหญ่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To obtain DePlot, we standardize the plot-to-table task by establishing unified task formats and metrics, and train DePlot end-to-end on this task.",
    "th": "(LLM) ที่ผ่านการฝึกมาแล้วได้โดยตรง โดยอาศัยความสามารถในการใช้เหตุผลแบบ few-shot ของ LLM ในการสร้าง DePlot"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot can then be used off-the-shelf together with LLMs in a plug-and-play fashion.",
    "th": "เราได้สร้างมาตรฐานให้กับงาน plot-to-table โดยกำหนดรูปแบบงานและตัวชี้วัดที่เป็นหนึ่งเดียว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compared with a SOTA model finetuned on thousands of data points, DePlot+LLM with just one-shot prompting achieves a 29.4% improvement over finetuned SOTA on human-written queries from the task of chart QA.",
    "th": "และฝึก DePlot แบบครบวงจร (end-to-end) บนงานนี้ DePlot สามารถนำไปใช้ร่วมกับ LLM ได้ทันทีในรูปแบบ plug-and-play เมื่อเทียบกับโมเดล SOTA ที่ปรับแต่ง (finetuned) ด้วยข้อมูลนับพันจุด DePlot+LLM ที่ใช้เพียง one-shot prompting ทำได้ดีกว่า SOTA ที่ปรับแต่งแล้วถึง 29.4% บนคำถามที่มนุษย์เขียนขึ้นจากงาน chart QA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "1.",
    "th": "1."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Introduction",
    "th": "บทนำ (Introduction)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Multimodal reasoning on visual language such as plots and charts is an extremely complex task.",
    "th": "การใช้เหตุผลแบบหลายรูปแบบ (multimodal reasoning) บนภาษาเชิงภาพเช่นกราฟและแผนภูมิเป็นงานที่ซับซ้อนอย่างยิ่ง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "For downstream tasks such as question answering (QA) on plots/charts, a model needs to first extract relevant information from the image, organize them in a sensible manner, then perform reasoning over the entries extracted.",
    "th": "สำหรับงานปลายทาง (downstream tasks) เช่นการถาม-ตอบ (QA) บนกราฟ/แผนภูมิ โมเดลต้องสกัดข้อมูลที่เกี่ยวข้องจากภาพก่อน จัดระเบียบข้อมูลเหล่านั้นอย่างเหมาะสม แล้วจึงใช้เหตุผลบนรายการข้อมูลที่สกัดได้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Previous studies have proposed end-to-end solutions to such methods [Lee et al., 2023; Liu et al., 2023a].",
    "th": "งานวิจัยก่อนหน้านี้ได้เสนอวิธีแก้ปัญหาแบบครบวงจร (end-to-end) [Lee et al., 2023; Liu et al., 2023a]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Whilst being an effective solution, end-to-end methods need to be finetuned on large amounts of task data and they still lag behind on queries that require complex reasoning even after finetuning.",
    "th": "แม้จะเป็นวิธีที่ได้ผลดี แต่วิธีแบบ end-to-end ต้องอาศัยการปรับแต่ง (finetune) ด้วยข้อมูลปริมาณมาก และยังตามหลังอยู่ในคำถามที่ต้องใช้เหตุผลซับซ้อนแม้หลังปรับแต่งแล้ว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "As an example, the current SOTA model MatCha [Liu et al., 2023a] achieves only 38.2% accuracy on ChartQA [Masry et al., 2022] (human written queries).",
    "th": "ตัวอย่างเช่น โมเดล SOTA ปัจจุบัน MatCha [Liu et al., 2023a] ทำได้แม่นยำเพียง 38.2% บน ChartQA [Masry et al., 2022] (คำถามที่มนุษย์เขียนขึ้น)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In the meantime, large language models (LLMs) such as GPT-3 [Brown et al., 2020] and PaLM [Chowdhery et al., 2022] have demonstrated exceptional few-shot reasoning skills, without requiring expensive human annotations.",
    "th": "ในขณะเดียวกัน โมเดลภาษาขนาดใหญ่ (LLM) เช่น GPT-3 [Brown et al., 2020] และ PaLM [Chowdhery et al., 2022] ได้แสดงให้เห็นถึงทักษะการใช้เหตุผลแบบ few-shot ที่ยอดเยี่ยม โดยไม่จำเป็นต้องใช้การติดป้ายกำกับโดยมนุษย์ที่มีค่าใช้จ่ายสูง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, it is an open question how multimodal reasoning tasks could benefit from LLMs.",
    "th": "อย่างไรก็ตาม ยังเป็นคำถามเปิดอยู่ว่างานการใช้เหตุผลแบบหลายรูปแบบจะได้ประโยชน์จาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In this work, we propose to decompose the multimodal visual language reasoning problem into: (1) converting the input plot image to a linearized table and (2) passing the linearized table to LLMs for one-shot reasoning.",
    "th": "LLM ได้อย่างไร ในงานนี้ เราเสนอให้แบ่งปัญหาการใช้เหตุผลเชิงภาพแบบหลายรูปแบบออกเป็น (1) การแปลงภาพกราฟที่นำเข้าให้เป็นตารางแบบเรียงเส้นตรง และ (2) การส่งตารางที่แปลงแล้วไปให้ LLM ใช้เหตุผลแบบ one-shot"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Figure 1: An illustration of the DePlot+LLM method.",
    "th": "รูปที่ 1: ภาพประกอบของวิธี DePlot+LLM"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This is a real example using FlanPaLM [Chung et al., 2022] with Chain-of-Thoughts prompting [Wei et al., 2022] and Codex [Chen et al., 2021] with Program-of-Thoughts prompting [Chen et al., 2022].",
    "th": "นี่เป็นตัวอย่างจริงที่ใช้ FlanPaLM [Chung et al., 2022] ร่วมกับ Chain-of-Thoughts prompting [Wei et al., 2022] และ Codex [Chen et al., 2021] ร่วมกับ Program-of-Thoughts"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The light blue boxes are input (or intermediate forms of the input) to the LLM and the light red box contains the answer generated by the LLMs.",
    "th": "prompting [Chen et al., 2022] กล่องสีฟ้าอ่อนคือข้อมูลนำเข้า (หรือรูปแบบกึ่งกลางของข้อมูลนำเข้า) ที่ส่งให้ LLM และกล่องสีแดงอ่อนคือคำตอบที่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Key reasoning steps are highlighted.",
    "th": "LLM สร้างขึ้น ขั้นตอนการใช้เหตุผลที่สำคัญถูกเน้นไว้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The key of the method is a modality conversion module called DePlot that maps charts and plots to the underlying data table.",
    "th": "หัวใจของวิธีการนี้คือโมดูลแปลงรูปแบบข้อมูลที่เรียกว่า DePlot ซึ่งแปลงแผนภูมิและกราฟให้เป็นตารางข้อมูลที่อยู่เบื้องหลัง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "While there has been prior works in chart information extraction, they are usually hybrid systems combining complex hand-designed rules, OCR, keypoint detection, and object segmentation modules [Siegel et al., 2016; Luo et al., 2021; Masry et al., 2022].",
    "th": "แม้จะมีงานวิจัยก่อนหน้านี้ด้านการสกัดข้อมูลจากแผนภูมิ (chart information extraction) แต่ส่วนใหญ่เป็นระบบไฮบริดที่ผสมผสานกฎที่ออกแบบด้วยมือซึ่งซับซ้อน, OCR,"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "For different types of charts, distinct approaches have been used [Rane et al., 2021; Kato et al., 2022].",
    "th": "การตรวจจับจุดสำคัญ (keypoint detection) และโมดูลแบ่งส่วนวัตถุ (object segmentation)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Besides, there does not exist a unified, consistent, and accurate framework for evaluating chart information extraction – metrics specific to certain types of charts [Siegel et al., 2016] or overly-simplified number matching metrics [Luo et al., 2021] have been used.",
    "th": "[Siegel et al., 2016; Luo et al., 2021; Masry et al., 2022] สำหรับแผนภูมิแต่ละประเภทก็ใช้แนวทางที่แตกต่างกัน [Rane et al., 2021; Kato et al., 2022]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Our proposed DePlot is an end-to-end image-to-text Transformer model trained with the task of plot-to-table translation.",
    "th": "นอกจากนี้ยังไม่มีกรอบการประเมินการสกัดข้อมูลจากแผนภูมิที่เป็นหนึ่งเดียว สอดคล้องกัน และแม่นยำ —"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "A combination of synthetic and web-crawled charts and plots and their underlying data table are collected as the training corpus.",
    "th": "มีการใช้ตัวชี้วัดที่เฉพาะเจาะจงกับแผนภูมิบางประเภท [Siegel et al., 2016] หรือตัวชี้วัดการจับคู่ตัวเลขที่ง่ายเกินไป"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We demonstrate that DePlot significantly outperforms hybrid systems and can uniformly handle all types of charts.",
    "th": "[Luo et al., 2021] DePlot ที่เราเสนอเป็นโมเดล Transformer แบบ image-to-text ที่ฝึกแบบครบวงจรด้วยงาน plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To accurately capture plot-to-table systems' effectiveness (and avoid error propagation to downstream tasks), we propose a novel table matching metric that considers both textual and numeric entries with relative error tolerance, and is invariant to transpositions, row and column permutations.",
    "th": "translation โดยรวบรวมแผนภูมิและกราฟทั้งแบบสังเคราะห์และที่เก็บมาจากเว็บพร้อมตารางข้อมูลเบื้องหลังเป็นชุดข้อมูลฝึกฝน เราแสดงให้เห็นว่า DePlot มีประสิทธิภาพดีกว่าระบบไฮบริดอย่างมีนัยสำคัญ และสามารถจัดการแผนภูมิทุกประเภทได้อย่างสม่ำเสมอ เพื่อจับประสิทธิผลของระบบ plot-to-table ได้อย่างแม่นยำ (และหลีกเลี่ยงการแพร่กระจายของข้อผิดพลาดไปยังงานปลายทาง) เราเสนอตัวชี้วัดการจับคู่ตารางแบบใหม่ที่พิจารณาทั้งรายการข้อความและตัวเลขโดยมีค่าความคลาดเคลื่อนสัมพัทธ์ที่ยอมรับได้ และไม่ขึ้นกับการสลับตำแหน่งแถว/คอลัมน์หรือการสลับแถวเป็นคอลัมน์ (transposition)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "After accurately translating plot images to texts (as linearized tables), we can pass the output from DePlot in conjunction with a query to LLMs to compute the answer.",
    "th": "หลังจากแปลงภาพกราฟเป็นข้อความ (ในรูปตารางแบบเรียงเส้นตรง) อย่างแม่นยำแล้ว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We take advantage of novel prompting techniques such as Chain of Thoughts (CoT) [Wei et al., 2022], Self-Consistency (SC) [Wang et al., 2023], and Program of Thoughts (PoT) [Chen et al., 2022] to elicit more accurate answers.",
    "th": "เราสามารถส่งผลลัพธ์จาก DePlot พร้อมกับคำถามให้ LLM เพื่อคำนวณคำตอบได้ เราใช้ประโยชน์จากเทคนิคการ prompt ใหม่ ๆ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "An illustration of the whole process can be seen in Figure 1.",
    "th": "เช่น Chain of Thoughts (CoT) [Wei et al., 2022], Self-Consistency (SC) [Wang et al., 2023] และ Program of Thoughts (PoT) [Chen et al., 2022] เพื่อให้ได้คำตอบที่แม่นยำยิ่งขึ้น ภาพประกอบของกระบวนการทั้งหมดแสดงอยู่ในรูปที่ 1"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To summarize, this work has the following contributions: (1) We standardize the plot-to-table task and propose a unified and informative metric for table comparison. (2) We propose a highly-effective modality conversion model DePlot to translate a multimodal task into a language-only task and then leverage LLMs to solve it with just one shot. (3) DePlot+LLM achieves SOTA on ChartQA with just one-shot supervision, outperforming the second best method (which is fully supervised) by 29.4% on human-written queries.",
    "th": "สรุปได้ว่างานวิจัยนี้มีผลงานหลักดังนี้ (1) เราสร้างมาตรฐานให้กับงาน plot-to-table และเสนอตัวชี้วัดที่เป็นหนึ่งเดียวและให้ข้อมูลครบถ้วนสำหรับการเปรียบเทียบตาราง (2) เราเสนอโมเดลแปลงรูปแบบข้อมูล DePlot ที่มีประสิทธิภาพสูง ซึ่งแปลงงานแบบหลายรูปแบบให้เป็นงานเชิงภาษาอย่างเดียว แล้วใช้ประโยชน์จาก LLM ในการแก้ปัญหาด้วยเพียง one-shot (3) DePlot+LLM ทำได้ดีที่สุด (SOTA) บน ChartQA ด้วยการกำกับดูแลแบบ one-shot เพียงอย่างเดียว โดยทำได้ดีกว่าวิธีอันดับสอง (ซึ่งเป็นแบบ fully supervised) ถึง 29.4% บนคำถามที่มนุษย์เขียนขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "2.",
    "th": "2. งานวิจัยพื้นฐาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Background",
    "th": "(Background)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Plug-and-play of multimodal pretrained models.",
    "th": "การใช้โมเดลที่ฝึกล่วงหน้าแบบหลายรูปแบบในลักษณะ Plug-and-play"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Numerous large pretrained models, either for cross-modal tasks such as CLIP [Radford et al., 2021], or single-modal tasks, such as GPT-3 and PaLM, have been introduced in the past few years.",
    "th": "โมเดลที่ฝึกล่วงหน้าขนาดใหญ่จำนวนมาก ทั้งสำหรับงานข้ามรูปแบบข้อมูล (cross-modal) เช่น CLIP [Radford et al., 2021] หรืองานรูปแบบเดียว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "These pretrained models' strong zero/few-shot inference capabilities have enabled creative solutions to more complex multimodal tasks.",
    "th": "เช่น GPT-3 และ PaLM ได้ถูกนำเสนอในช่วงไม่กี่ปีที่ผ่านมา ความสามารถในการอนุมานแบบ zero/few-shot"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Socratic Models [Zeng et al., 2023] combine multimodal pretrained models using multimodal prompts for tasks such as multimodal assistive dialogue and robot perception & planning.",
    "th": "ที่แข็งแกร่งของโมเดลเหล่านี้ทำให้เกิดวิธีแก้ปัญหาที่สร้างสรรค์สำหรับงานหลายรูปแบบที่ซับซ้อนยิ่งขึ้น Socratic Models [Zeng et al., 2023] รวมโมเดลที่ฝึกล่วงหน้าแบบหลายรูปแบบโดยใช้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Minds' Eyes [Liu et al., 2023b] converts physical reasoning queries into code that could be executed in physical engines.",
    "th": "prompt แบบหลายรูปแบบสำหรับงานเช่นบทสนทนาช่วยเหลือแบบหลายรูปแบบ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MAGIC [Su et al., 2022] inserts visual control using CLIP in text generation models for unsupervised image captioning.",
    "th": "และการรับรู้/วางแผนของหุ่นยนต์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Similar our work, Yang et al. (2022) also translates natural images into texts and leverage GPT-3 for knowledge-based VQA.",
    "th": "Minds' Eyes [Liu et al., 2023b] แปลงคำถามการใช้เหตุผลเชิงฟิสิกส์เป็นโค้ดที่สามารถรันได้ในเอนจินจำลองฟิสิกส์ MAGIC [Su et al., 2022] แทรกการควบคุมเชิงภาพโดยใช้ CLIP ในโมเดลสร้างข้อความสำหรับการสร้างคำบรรยายภาพแบบไม่มีการกำกับดูแล (unsupervised) เช่นเดียวกับงานของเรา Yang et al. (2022) ก็แปลงภาพธรรมชาติเป็นข้อความและใช้ประโยชน์จาก GPT-3 สำหรับงาน VQA ที่อิงความรู้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, all above approaches focus on natural images and the tasks of interest usually only require capturing very basic visual information such as types of objects.",
    "th": "อย่างไรก็ตาม แนวทางข้างต้นทั้งหมดมุ่งเน้นไปที่ภาพธรรมชาติ และงานที่สนใจมักต้องการเพียงการจับข้อมูลเชิงภาพพื้นฐานมาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Visual language reasoning poses a different set of challenges from natural image reasoning – it requires, first, accurate and detailed information extraction (IE) from complex visual language data (plots and charts in this work); and secondly very strong numerical reasoning skills to answer queries based on information extracted.",
    "th": "เช่น ประเภทของวัตถุ การใช้เหตุผลเชิงภาษาภาพ (visual language reasoning) มีความท้าทายที่แตกต่างจากการใช้เหตุผลบนภาพธรรมชาติ — ก่อนอื่นต้องมีการสกัดข้อมูล (IE) ที่แม่นยำและละเอียดจากข้อมูลภาษาภาพที่ซับซ้อน (กราฟและแผนภูมิในงานนี้) และต้องมีทักษะการใช้เหตุผลเชิงตัวเลขที่แข็งแกร่งมากในการตอบคำถามโดยอิงจากข้อมูลที่สกัดได้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "While end-to-end fully-supervised models struggle to answer complex human-written queries, DePlot when combined with LLMs can outperform the supervised SOTA by 29.4%.",
    "th": "ในขณะที่โมเดล fully-supervised แบบ end-to-end ยังลำบากในการตอบคำถามที่มนุษย์เขียนขึ้นซึ่งซับซ้อน DePlot เมื่อรวมกับ LLM สามารถทำได้ดีกว่า SOTA แบบ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This is achieved by decomposing the two key challenges in visual language reasoning into leveraging two strong pretrained models that excel at their own respective tasks.",
    "th": "supervised ถึง 29.4% สิ่งนี้เกิดขึ้นได้จากการแบ่งความท้าทายหลักสองประการในการใช้เหตุผลเชิงภาษาภาพ ออกเป็นการใช้ประโยชน์จากโมเดลที่ฝึกล่วงหน้าที่แข็งแกร่งสองตัวซึ่งเชี่ยวชาญในงานของตัวเองตามลำดับ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Zero & few-shot reasoning over tables.",
    "th": "การใช้เหตุผลแบบ Zero และ Few-shot บนตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Traditionally, table reasoning tasks are dominated by end-to-end neural models with table-specific architectural designs [Herzig et al., 2020; Yin et al., 2020; Andrejczuk et al., 2022].",
    "th": "โดยทั่วไป งานการใช้เหตุผลบนตารางถูกครอบงำโดยโมเดลโครงข่ายประสาทเทียมแบบ end-to-end ที่ออกแบบโครงสร้างเฉพาะสำหรับตาราง [Herzig et al., 2020; Yin et al., 2020; Andrejczuk et al., 2022]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Recently, there has been a surge in using LLMs to process tables for downstream tasks such as QA.",
    "th": "เมื่อไม่นานมานี้มีการใช้ LLM ในการประมวลผลตารางสำหรับงานปลายทางเช่น QA เพิ่มขึ้นอย่างมาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Chen (2023) shows that with just one-shot in-context demonstration, GPT-3 could reach near SOTA performance on table QA datasets, on par with end-to-end models trained with at least thousands of training examples.",
    "th": "Chen (2023) แสดงให้เห็นว่าด้วยการสาธิตแบบ one-shot in-context เพียงครั้งเดียว GPT-3 สามารถทำประสิทธิภาพใกล้เคียง SOTA บนชุดข้อมูล table QA ได้ เทียบเท่ากับโมเดลแบบ end-to-end"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Beyond pure LLM approaches, Binder [Cheng et al., 2023], Program of Thoughts [Chen et al., 2022], and Program-Aided Language models [Gao et al., 2022] all combine LLMs with compilers/program executors for table reasoning tasks and have achieved SOTA performance.",
    "th": "ที่ฝึกด้วยตัวอย่างฝึกฝนอย่างน้อยหลายพันตัวอย่าง นอกเหนือจากแนวทางที่ใช้ LLM อย่างเดียว Binder [Cheng et al., 2023], Program of Thoughts [Chen et al., 2022] และ Program-Aided Language models [Gao et al., 2022] ต่างรวม LLM"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot can be combined with pure LLMs and also any of the aforementioned neural-symbolic methods in a plug-and-play style.",
    "th": "เข้ากับคอมไพเลอร์/ตัวรันโปรแกรมสำหรับงานการใช้เหตุผลบนตาราง และทำได้ประสิทธิภาพระดับ SOTA DePlot สามารถใช้ร่วมกับ LLM อย่างเดียว และวิธี neural-symbolic ที่กล่าวมาข้างต้นได้ในรูปแบบ plug-and-play"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Information extraction from plots and charts.",
    "th": "การสกัดข้อมูลจากกราฟและแผนภูมิ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Prior works on plot/chart IE is usually pipeline-based, combining OCR, object detection/segmentation systems, and hand-crafted rules.",
    "th": "งานวิจัยก่อนหน้าด้าน plot/chart IE มักเป็นแบบไปป์ไลน์ (pipeline-based) ที่ผสมผสาน OCR ระบบตรวจจับ/แบ่งส่วนวัตถุ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Such specialized systems are frequently designed for specific types of graphs, e.g., Kato et al. (2022) for line graphs, and Rane et al. (2021) for bar plots.",
    "th": "และกฎที่สร้างด้วยมือ ระบบเฉพาะทางเหล่านี้มักออกแบบมาสำหรับกราฟประเภทใดประเภทหนึ่ง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "ChartBERT [Akhtar et al., 2023] adopts an OCR-based method for text extraction from charts and uses two more stages of neural methods for processing the extracted texts.",
    "th": "เช่น Kato et al. (2022) สำหรับกราฟเส้น และ Rane et al. (2021) สำหรับแผนภูมิแท่ง ChartBERT [Akhtar et al., 2023] ใช้วิธีอิง OCR ในการสกัดข้อความจากแผนภูมิ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "ChartOCR [Luo et al., 2021] is a hybrid system that accepts all types of chart inputs and has been adopted by downstream task models for chart QA [Masry et al., 2022] and summarization [Kantharaj et al., 2022].",
    "th": "และใช้ขั้นตอนเชิงโครงข่ายประสาทอีกสองขั้นตอนในการประมวลผลข้อความที่สกัดได้ ChartOCR [Luo et al., 2021] เป็นระบบไฮบริดที่รับแผนภูมิทุกประเภท และถูกนำไปใช้ในโมเดลงานปลายทางสำหรับ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot, as an end-to-end neural model, outperforms ChartOCR by very large margins on plot-to-table conversion.",
    "th": "chart QA [Masry et al., 2022] และการสรุปความ [Kantharaj et al., 2022] DePlot ในฐานะโมเดลโครงข่ายประสาทแบบ end-to-end มีประสิทธิภาพดีกว่า ChartOCR อย่างมากในงานแปลง plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Beyond methodology, the evaluation of plot data extraction tasks has traditionally been ununified.",
    "th": "นอกเหนือจากวิธีการแล้ว การประเมินงานสกัดข้อมูลจากกราฟยังไม่เป็นมาตรฐานเดียวกันมาโดยตลอด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Siegel et al. (2016); Luo et al. (2021); Kato et al. (2022) design different metrics for different types of charts and the metrics can be defined upon coordinates, bounding boxes, or keypoints of the graphs' objects.",
    "th": "Siegel et al. (2016); Luo et al. (2021); Kato et al. (2022) ออกแบบตัวชี้วัดที่แตกต่างกันสำหรับแผนภูมิแต่ละประเภท และตัวชี้วัดเหล่านั้นอาจถูกกำหนดบนพิกัด กรอบล้อมรอบ (bounding box)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, this measures only the intermediate steps of the data extraction process rather than the quality of data extraction itself.",
    "th": "หรือจุดสำคัญของวัตถุในกราฟ อย่างไรก็ตาม สิ่งนี้วัดเพียงขั้นตอนกึ่งกลางของกระบวนการสกัดข้อมูล ไม่ใช่คุณภาพของการสกัดข้อมูลเอง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We formulate chart data extraction as a plot-to-table translation task since the ultimate goal of chart IE is obtaining the underlying data table.",
    "th": "เราตั้งกรอบปัญหาการสกัดข้อมูลจากแผนภูมิเป็นงานแปล plot-to-table เนื่องจากเป้าหมายสุดท้ายของ chart IE คือการได้มาซึ่งตารางข้อมูลที่อยู่เบื้องหลัง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Besides our work, Masry et al. (2022) also considers chart IE as plot-to-table conversion.",
    "th": "นอกจากงานของเราแล้ว Masry et al. (2022) ก็มองว่า chart IE คือการแปลง plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, the metric used in Masry et al. (2022) is a number set matching metric, ignoring table structure (i.e., correct organization of the extracted numbers).",
    "th": "เช่นกัน แต่ตัวชี้วัดที่ใช้ใน Masry et al. (2022) เป็นตัวชี้วัดการจับคู่ชุดตัวเลข ซึ่งมองข้ามโครงสร้างของตาราง (คือการจัดเรียงตัวเลขที่สกัดได้อย่างถูกต้อง)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We propose a better table comparison metric and discuss more in Section 3.",
    "th": "เราเสนอตัวชี้วัดการเปรียบเทียบตารางที่ดีกว่า และจะกล่าวถึงรายละเอียดเพิ่มเติมในส่วนที่ 3"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "3.",
    "th": "3."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Standardizing the Plot-to-table Task",
    "th": "การสร้างมาตรฐานให้กับงาน Plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To perform visual language reasoning, we propose to decompose a visual language reasoning task on plots into two steps: (1) converting plots to texts (in the form of linearized tables) using DePlot and (2) inputing the linearized table to LLMs for reasoning.",
    "th": "เพื่อทำการใช้เหตุผลเชิงภาษาภาพ เราเสนอให้แบ่งงานการใช้เหตุผลเชิงภาษาภาพบนกราฟออกเป็นสองขั้นตอน ได้แก่ (1) การแปลงกราฟเป็นข้อความ (ในรูปตารางแบบเรียงเส้นตรง) โดยใช้ DePlot และ (2)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Accurately performing plot-to-table translation is essential for the downstream visual language reasoning tasks.",
    "th": "การส่งตารางที่แปลงแล้วให้ LLM ใช้เหตุผล การแปล plot-to-table อย่างแม่นยำเป็นสิ่งจำเป็นสำหรับงานการใช้เหตุผลเชิงภาษาภาพปลายทาง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Plot-to-table is also an important task standalone as it addresses IE from plots/charts, which can benefit applications such as automatic reports and documents digitization.",
    "th": "plot-to-table ยังเป็นงานสำคัญในตัวของมันเองด้วย เนื่องจากแก้ปัญหาการสกัดข้อมูลจากกราฟ/แผนภูมิ ซึ่งเป็นประโยชน์ต่อแอปพลิเคชันเช่นการสร้างรายงานอัตโนมัติและการแปลงเอกสารเป็นดิจิทัล"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We will standardize the plot-to-table conversion task in Section 3.1 and propose a new metric for evaluating plot-to-table conversion quality.",
    "th": "เราจะสร้างมาตรฐานให้กับงานแปลง plot-to-table ในส่วนที่ 3.1 และเสนอตัวชี้วัดใหม่สำหรับประเมินคุณภาพของการแปลง plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Then in Section 3.2, we introduce the DePlot model and training procedure for performing plot-to-table conversion.",
    "th": "จากนั้นในส่วนที่ 3.2 เราจะนำเสนอโมเดล DePlot และขั้นตอนการฝึกฝนสำหรับการแปลง plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "3.1 Task Definition",
    "th": "3.1 คำจำกัดความของงาน (Task Definition)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Prior research in table similarity metric is limited.",
    "th": "งานวิจัยก่อนหน้าด้านตัวชี้วัดความคล้ายคลึงของตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Masry et al. (2022) has introduced a metric based on the graph IE metric proposed in Luo et al. (2021), which we denote Relative Number Set Similarity or RNSS.",
    "th": "(table similarity metric) ยังมีอยู่จำกัด Masry et al. (2022) ได้แนะนำตัวชี้วัดที่อิงจากตัวชี้วัดด้าน graph IE ที่เสนอใน Luo et al. (2021) ซึ่งเราเรียกว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The metric looks only at the unordered set of numeric entries predicted and measures how the predicted set matches the target set of numbers.",
    "th": "Relative Number Set Similarity หรือ RNSS ตัวชี้วัดนี้พิจารณาเพียงชุดตัวเลขที่ทำนายได้แบบไม่มีลำดับ และวัดว่าชุดที่ทำนายได้ตรงกับชุดตัวเลขเป้าหมายมากเพียงใด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In the following, we first introduce RNSS more formally and then discuss our rationales of proposing a more well-rounded metric Relative Mapping Similarity or RMS.",
    "th": "ต่อไปนี้เราจะอธิบาย RNSS อย่างเป็นทางการมากขึ้นก่อน แล้วจึงอธิบายเหตุผลของการเสนอตัวชี้วัดที่รอบด้านยิ่งขึ้นคือ Relative Mapping Similarity หรือ RMS"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Relative Number Set Similarity (RNSS).",
    "th": "Relative Number Set Similarity (RNSS)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Let the model predicted numbers in table be $\\mathcal{P}=\\{p_{i}\\}_{1\\leq i\\leq N}$ and numbers in target tables be $\\mathcal{T}=\\{t_{j}\\}_{1\\leq j\\leq M}$.",
    "th": "กำหนดให้ตัวเลขที่โมเดลทำนายได้ในตารางคือ $\\mathcal{P}=\\{p_{i}\\}_{1\\leq i\\leq N}$ และตัวเลขในตารางเป้าหมายคือ $\\mathcal{T}=\\{t_{j}\\}_{1\\leq j\\leq M}$"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We compute the pairwise set of relative distances between them: $\\text{D}(p,t)=\\min(1,\\|p-t\\|/\\|t\\|)$.",
    "th": "เราคำนวณชุดของระยะห่างสัมพัทธ์ (relative distance) แบบจับคู่ระหว่างทั้งสองชุด: $\\text{D}(p,t)=\\min(1,\\|p-t\\|/\\|t\\|)$"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Then the $N\\times M$ matrix of distances can be used to find a minimal cost matching between the elements in $\\mathcal{P}$ and $\\mathcal{T}$, expressed in the form of binary matrix $\\mathbf{X}\\in\\mathbb{R}^{N\\times M}$.",
    "th": "จากนั้นเมทริกซ์ระยะห่างขนาด $N\\times M$ จะถูกใช้หาการจับคู่ที่มีค่าใช้จ่ายต่ำที่สุด (minimal cost matching) ระหว่างสมาชิกใน $\\mathcal{P}$ และ $\\mathcal{T}$ ซึ่งแสดงในรูปเมทริกซ์ฐานสอง $\\mathbf{X}\\in\\mathbb{R}^{N\\times M}$"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The final score is computed as $\\texttt{RNSS}=1-\\frac{\\sum_{i,j}\\mathbf{X}_{ij}\\text{D}(p_{i},t_{j})}{\\max(N,M)}$ (Eq.",
    "th": "คะแนนสุดท้ายคำนวณได้จาก $\\texttt{RNSS}=1-\\frac{\\sum_{i,j}\\mathbf{X}_{ij}\\text{D}(p_{i},t_{j})}{\\max(N,M)}$"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "1).",
    "th": "(สมการที่ 1)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, RNSS has several key limitations: it does not distinguish the position of numbers within the table; it completely ignores all non numeric content; it gives credit to very high relative errors; and it does not distinguish precision versus recall losses in table reconstruction.",
    "th": "อย่างไรก็ตาม RNSS มีข้อจำกัดสำคัญหลายประการ ได้แก่ ไม่แยกแยะตำแหน่งของตัวเลขภายในตาราง มองข้ามเนื้อหาที่ไม่ใช่ตัวเลขทั้งหมด ให้คะแนนแม้มีค่าความคลาดเคลื่อนสัมพัทธ์ที่สูงมาก และไม่แยกแยะระหว่างการสูญเสีย precision กับ recall ในการสร้างตารางขึ้นใหม่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In contrast, we argue that a metric to measure similarity between tables should satisfy the following desiderata: (1) Be invariant to transpositions, as well as permutations of column and rows. (2) Allow but penalize small errors in numeric or textual values up to a certain threshold. (3) Clearly reflect losses in precision or recall.",
    "th": "ในทางตรงกันข้าม เราเสนอว่าตัวชี้วัดสำหรับวัดความคล้ายคลึงระหว่างตารางควรมีคุณสมบัติดังนี้ (1) ไม่ขึ้นกับการสลับแถวเป็นคอลัมน์ (transposition) และการสลับลำดับคอลัมน์/แถว (2) ยอมรับแต่ลงโทษความผิดพลาดเล็กน้อยในค่าตัวเลขหรือข้อความได้ในระดับหนึ่ง (3) สะท้อนการสูญเสีย precision หรือ recall ได้อย่างชัดเจน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Relative Mapping Similarity (RMS).",
    "th": "Relative Mapping Similarity (RMS)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In order to address all of these requirements, we propose RMS, which views tables not as sets of numbers but as unordered collection of mappings from row and column headers $(r,c)$ to a single value $v$, which we write $p_{i}=(p^{r}_{i},p^{c}_{i},p^{v}_{i})$ and $t_{j}=(t^{r}_{j},t^{c}_{j},t^{v}_{j})$ for each entry in the predicted table $\\mathcal{P}$ and the target table $\\mathcal{T}$ respectively.",
    "th": "เพื่อตอบสนองความต้องการทั้งหมดนี้ เราเสนอ RMS ซึ่งมองตารางไม่ใช่ในรูปชุดตัวเลข แต่เป็นกลุ่มการจับคู่ (mapping) แบบไม่มีลำดับจากส่วนหัวแถวและคอลัมน์ $(r,c)$ ไปยังค่า $v$ ค่าเดียว ซึ่งเราเขียนเป็น $p_{i}=(p^{r}_{i},p^{c}_{i},p^{v}_{i})$ และ $t_{j}=(t^{r}_{j},t^{c}_{j},t^{v}_{j})$ สำหรับแต่ละรายการในตารางที่ทำนาย $\\mathcal{P}$ และตารางเป้าหมาย $\\mathcal{T}$ ตามลำดับ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Following Biten et al. (2019), the distance between textual entries can be measured with Normalized Levenshtein Distance, or $\\texttt{NL}_{\\tau}$ where the variable $\\tau$ is such that values above $\\tau$ are set to the maximum of 1, in order to prevent partial credit for very dissimilar texts.",
    "th": "ตามแนวทางของ Biten et al. (2019) ระยะห่างระหว่างรายการข้อความสามารถวัดได้ด้วย Normalized Levenshtein Distance หรือ $\\texttt{NL}_{\\tau}$ โดยตัวแปร $\\tau$ กำหนดว่าค่าที่สูงกว่า $\\tau$ จะถูกตั้งเป็นค่าสูงสุดคือ 1"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Therefore the distance of two keys $p_{i}$ and $t_{j}$ is $\\texttt{NL}_{\\tau}(p^{r}||p^{c},t^{r}||t^{c})$ where $||$ denotes string concatenation.",
    "th": "เพื่อป้องกันไม่ให้ข้อความที่ต่างกันมากได้คะแนนบางส่วน ดังนั้นระยะห่างของคีย์สองตัว $p_{i}$ และ $t_{j}$ คือ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The distance between numeric entries is computed using relative distance $\\text{D}_{\\theta}(p,t)=\\min(1,\\|p-t\\|/\\|t\\|)$ and distances above $\\theta$ are set to the maximum of 1.",
    "th": "$\\texttt{NL}_{\\tau}(p^{r}||p^{c},t^{r}||t^{c})$ โดย $||$ หมายถึงการต่อสตริง ส่วนระยะห่างระหว่างรายการตัวเลขคำนวณด้วยระยะห่างสัมพัทธ์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Combining this two distances we can compute the similarity between two entries in a mapping $\\text{D}_{\\tau,\\theta}(p,t)$ as $(1-\\texttt{NL}_{\\tau}(p^{r}||p^{c},t^{r}||t^{c}))(1-\\text{D}_{\\theta}(p^{v},t^{v}))$.",
    "th": "$\\text{D}_{\\theta}(p,t)=\\min(1,\\|p-t\\|/\\|t\\|)$ และค่าที่สูงกว่า $\\theta$ จะถูกตั้งเป็นค่าสูงสุดคือ 1 เมื่อรวมระยะห่างทั้งสองแบบเข้าด้วยกัน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "When both the keys and values are similar, the similarity $\\text{D}_{\\tau,\\theta}$ is close to 1 (close to 0 when dissimilar).",
    "th": "เราสามารถคำนวณความคล้ายคลึงระหว่างสองรายการในการจับคู่ $\\text{D}_{\\tau,\\theta}(p,t)$ ได้เป็น $(1-\\texttt{NL}_{\\tau}(p^{r}||p^{c},t^{r}||t^{c}))(1-\\text{D}_{\\theta}(p^{v},t^{v}))$ เมื่อทั้งคีย์และค่าคล้ายกัน ความคล้ายคลึง $\\text{D}_{\\tau,\\theta}$ จะมีค่าใกล้ 1 (ใกล้ 0 เมื่อต่างกัน)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To compute RMS, we first compute the pairwise similarity between keys in $\\mathcal{P}$ and $\\mathcal{T}$ using the cost function $1-\\texttt{NL}_{\\tau}(p^{r}||p^{c},t^{r}||t^{c})$.",
    "th": "ในการคำนวณ RMS เราคำนวณความคล้ายคลึงแบบจับคู่ระหว่างคีย์ใน $\\mathcal{P}$ และ $\\mathcal{T}$ ก่อน โดยใช้ฟังก์ชันค่าใช้จ่าย $1-\\texttt{NL}_{\\tau}(p^{r}||p^{c},t^{r}||t^{c})$"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We obtain a similarity matrix with shape $N\\times M$ and with the matrix we can identify the minimal cost matching $\\mathbf{X}\\in\\mathbb{R}^{N\\times M}$ between the keys (in the form of a binary matrix).",
    "th": "เราจะได้เมทริกซ์ความคล้ายคลึงขนาด $N\\times M$ และใช้เมทริกซ์นี้หาการจับคู่ที่มีค่าใช้จ่ายต่ำที่สุด $\\mathbf{X}\\in\\mathbb{R}^{N\\times M}$ ระหว่างคีย์ (ในรูปเมทริกซ์ฐานสอง) จากนั้นเราคำนวณ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Then we can compute the precision and recall between two full mappings as the total similarities of the correspondingly matched entries: $\\texttt{RMS}_{\\text{precision}}=1-\\frac{\\sum_{i,j}\\mathbf{X}_{ij}\\text{D}_{\\tau,\\theta}(p_{i},t_{j})}{N}$ (Eq.",
    "th": "precision และ recall ระหว่างการจับคู่แบบสมบูรณ์ทั้งสองชุดได้จากผลรวมความคล้ายคลึงของรายการที่จับคู่กัน: $\\texttt{RMS}_{\\text{precision}}=1-\\frac{\\sum_{i,j}\\mathbf{X}_{ij}\\text{D}_{\\tau,\\theta}(p_{i},t_{j})}{N}$ (สมการที่ 2),"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "2), $\\texttt{RMS}_{\\text{recall}}=1-\\frac{\\sum_{i,j}\\mathbf{X}_{ij}\\text{D}_{\\tau,\\theta}(p_{i},t_{j})}{M}$ (Eq.",
    "th": "$\\texttt{RMS}_{\\text{recall}}=1-\\frac{\\sum_{i,j}\\mathbf{X}_{ij}\\text{D}_{\\tau,\\theta}(p_{i},t_{j})}{M}$"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "3).",
    "th": "(สมการที่ 3)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The $\\texttt{RMS}_{\\text{F1}}$ score can be computed the harmonic mean of the precision and recall.",
    "th": "คะแนน $\\texttt{RMS}_{\\text{F1}}$ คำนวณได้จากค่าเฉลี่ยฮาร์มอนิก (harmonic mean) ของ precision"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Because permutations of columns and rows yield the same set of column header, row header, value entries, the resulting metric is invariant to them.",
    "th": "และ recall เนื่องจากการสลับลำดับคอลัมน์และแถวให้ชุดส่วนหัวคอลัมน์ ส่วนหัวแถว และค่าข้อมูลเดียวกัน ตัวชี้วัดที่ได้จึงไม่ขึ้นกับการสลับนั้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In order to allow for table transpositions, we just consider both the table and its transposed version and return the one that corresponds to highest $\\texttt{RMS}_{\\text{F1}}$ score.",
    "th": "เพื่อให้รองรับการสลับแถวเป็นคอลัมน์ของตาราง เราพิจารณาทั้งตารางต้นฉบับและตารางที่สลับแถวเป็นคอลัมน์แล้ว และเลือกค่าที่ให้คะแนน $\\texttt{RMS}_{\\text{F1}}$ สูงที่สุด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "3.2 Training Plot-to-table Conversion Models",
    "th": "3.2 การฝึกโมเดลแปลง Plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Unlike prior works that combine rule-based heuristics, OCR systems, and object/keypoint segmentation/detection systems [Siegel et al., 2016; Luo et al., 2021; Kato et al., 2022], we propose DePlot as an end-to-end solution to plot information extraction.",
    "th": "แตกต่างจากงานก่อนหน้าที่ผสมผสานวิธีฮิวริสติกแบบกฎ ระบบ OCR และระบบแบ่งส่วน/ตรวจจับวัตถุหรือจุดสำคัญ [Siegel et al., 2016; Luo et al., 2021; Kato et al., 2022]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot is conceptually simple yet can robustly work for all types of charts (line, dot, bar, and pie charts) without requiring type-specific engineering and hybrid components.",
    "th": "เราเสนอ DePlot เป็นทางออกแบบ end-to-end สำหรับการสกัดข้อมูลจากกราฟ DePlot มีแนวคิดที่เรียบง่ายแต่สามารถทำงานได้อย่างมั่นคงกับแผนภูมิทุกประเภท"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Specifically, we initialize an image-to-text encode-decoder Transformer model with the architecture and weights of the SOTA visual language model MatCha [Liu et al., 2023a].",
    "th": "(กราฟเส้น กราฟจุด แผนภูมิแท่ง และแผนภูมิวงกลม) โดยไม่ต้องออกแบบเฉพาะตามประเภทหรือใช้องค์ประกอบแบบไฮบริด โดยเฉพาะอย่างยิ่ง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We continue finetuning the MatCha checkpoint with the task of mapping plots to their underlying data tables.",
    "th": "เราตั้งค่าเริ่มต้นโมเดล Transformer แบบ encode-decoder ที่แปลงภาพเป็นข้อความด้วยโครงสร้างและน้ำหนักของโมเดลภาษาภาพ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The table is linearized as a textual sequence (markdown format) with | separating cells and \\n separating rows.",
    "th": "SOTA คือ MatCha [Liu et al., 2023a] แล้วทำการปรับแต่ง (finetune) checkpoint ของ MatCha"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot is trained to generate the table from left to right autoregressively.",
    "th": "ต่อด้วยงานแปลงกราฟให้เป็นตารางข้อมูลเบื้องหลัง ตารางถูกแปลงให้เป็นลำดับข้อความ (รูปแบบ markdown) โดยใช้ | แยกเซลล์ และ \\n แยกแถว DePlot ถูกฝึกให้สร้างตารางจากซ้ายไปขวาแบบถดถอยอัตโนมัติ (autoregressive)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The training corpus is a set of parallel plot-table pairs collected similar to Liu et al. (2023a) – both synthetic data and real world plot-table pairs are combined to form a finetuning corpus.",
    "th": "ชุดข้อมูลฝึกฝนคือชุดคู่กราฟ-ตารางแบบคู่ขนานที่รวบรวมในลักษณะคล้ายกับ Liu et al. (2023a) — โดยรวมข้อมูลสังเคราะห์และคู่กราฟ-ตารางจากโลกจริงเข้าด้วยกันเป็นชุดข้อมูลปรับแต่ง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Specifically, three sources of plot-table pairs are used: (1) synthetic data generated by Liu et al. (2023a); (2) synthetic data generated by Methani et al. (2020) (also used in PlotQA dataset); (3) real-world data crawled by Masry et al. (2022) (also used in ChartQA). (3) is sourced from four websites: statista.com, pewresearch.com, ourworldindata.org, and oecd.org.",
    "th": "โดยเฉพาะอย่างยิ่งใช้แหล่งข้อมูลคู่กราฟ-ตารางสามแหล่ง ได้แก่ (1) ข้อมูลสังเคราะห์จาก Liu et al. (2023a) (2) ข้อมูลสังเคราะห์จาก Methani et al. (2020) (ใช้ใน PlotQA dataset เช่นกัน) (3) ข้อมูลจากโลกจริงที่เก็บมาโดย Masry et al. (2022) (ใช้ใน ChartQA เช่นกัน) ข้อมูลในส่วน (3) มาจากสี่เว็บไซต์ ได้แก่ statista.com, pewresearch.com, ourworldindata.org"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The three corpora are mixed with the rate of 1:1:1.",
    "th": "และ oecd.org ทั้งสามชุดข้อมูลถูกผสมกันในอัตรา"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To avoid data leakage in downstream evaluation, only training set charts from the above datasets are used.",
    "th": "1:1:1 เพื่อหลีกเลี่ยงการรั่วไหลของข้อมูล (data leakage) ในการประเมินผลปลายทาง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We call our finetuned checkpoint DePlot.",
    "th": "มีการใช้เฉพาะกราฟจากชุดฝึกฝนของชุดข้อมูลข้างต้นเท่านั้น เราเรียก checkpoint ที่ปรับแต่งแล้วนี้ว่า DePlot"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "3.3 Human Eval of Plot-to-table Metrics",
    "th": "3.3 การประเมินโดยมนุษย์สำหรับตัวชี้วัด Plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To verify that RMS is indeed more sensitive and robust than previously proposed table comparison metric, we conduct human evaluation to compare $\\texttt{RMS}_{\\text{F1}}$ with the previously used RNSS metric.",
    "th": "เพื่อยืนยันว่า RMS มีความไวและความน่าเชื่อถือมากกว่าตัวชี้วัดเปรียบเทียบตารางที่เสนอไว้ก่อนหน้านี้จริง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Specifically, we sample 50 plot-table pairs where the tables are predictions of the plot-to-table conversion models.",
    "th": "เราได้ทำการประเมินโดยมนุษย์เพื่อเปรียบเทียบ $\\texttt{RMS}_{\\text{F1}}$ กับตัวชี้วัด RNSS"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We score the 50 pairs with RNSS and $\\texttt{RMS}_{\\text{F1}}$.",
    "th": "ที่ใช้กันมาก่อน โดยเฉพาะอย่างยิ่ง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Then we collect human judgment of the table prediction quality from 6 human annotators on the 50 examples.",
    "th": "เราสุ่มตัวอย่างคู่กราฟ-ตาราง 50 คู่ ซึ่งตารางเป็นผลทำนายจากโมเดลแปลง plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "For each instance, the human annotators are given a plot, the model's predicted table, and three questions regarding different aspects of the quality of the predicted table.",
    "th": "เราให้คะแนน 50 คู่นี้ด้วย RNSS และ $\\texttt{RMS}_{\\text{F1}}$ จากนั้นรวบรวมการตัดสินของมนุษย์เกี่ยวกับคุณภาพการทำนายตารางจากผู้ประเมิน 6 คน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The three questions are (1) \"Does the model overgenerate columns/rows or some rows/columns are missing?\", (2) \"Are the x, y label/index names, and title correct?\", and (3) \"Are numbers close to the true values and associated with the correct column, row labels/indexes?\".",
    "th": "บนตัวอย่างทั้ง 50 รายการ สำหรับแต่ละตัวอย่าง ผู้ประเมินจะได้รับกราฟ ตารางที่โมเดลทำนาย และคำถามสามข้อเกี่ยวกับคุณภาพของตารางที่ทำนายในแง่มุมต่าง ๆ คำถามทั้งสามข้อคือ (1) \"โมเดลสร้างคอลัมน์/แถวเกินหรือขาดหรือไม่?\" (2)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Annotators should rate the table from 1–5 (the higher the better).",
    "th": "\"ป้ายชื่อ/ดัชนีแกน x, y และชื่อเรื่องถูกต้องหรือไม่?\""
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The final human score for a plot-table pair is the average of the scores across the three questions across all human annotators.",
    "th": "และ (3) \"ตัวเลขใกล้เคียงค่าจริงและสัมพันธ์กับป้ายกำกับคอลัมน์/แถวที่ถูกต้องหรือไม่?\""
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We compute the Pearson's $r$ and Spearman's $\\rho$ correlations between metric scores and human scores.",
    "th": "ผู้ประเมินให้คะแนนตารางในช่วง 1–5 (สูงกว่าคือดีกว่า) คะแนนสุดท้ายของแต่ละคู่กราฟ-ตารางคือค่าเฉลี่ยของคะแนนทั้งสามคำถามจากผู้ประเมินทุกคน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "As shown in Table 1, under both correlation metrics, we can observe a great improvement of $\\texttt{RMS}_{\\text{F1}}$ over the baseline RNSS, suggesting that $\\texttt{RMS}_{\\text{F1}}$ is a much more sensitive and informative metric for evaluating the model generated tables.",
    "th": "เราคำนวณค่าสหสัมพันธ์ Pearson's $r$ และ Spearman's $\\rho$ ระหว่างคะแนนตัวชี้วัดกับคะแนนจากมนุษย์ ดังแสดงในตารางที่ 1 พบว่าทั้งสองค่าสหสัมพันธ์ $\\texttt{RMS}_{\\text{F1}}$ ดีกว่า RNSS อย่างมาก แสดงว่า $\\texttt{RMS}_{\\text{F1}}$ เป็นตัวชี้วัดที่มีความไวและให้ข้อมูลที่เป็นประโยชน์มากกว่าสำหรับการประเมินตารางที่โมเดลสร้างขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "4.",
    "th": "4."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Prompting LLMs for Reasoning",
    "th": "การ Prompt LLM ให้ใช้เหตุผล"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "With DePlot introduced in Section 3, we can convert a given chart/plot into its textual form (as a linearized table).",
    "th": "เมื่อมี DePlot ที่นำเสนอในส่วนที่ 3 แล้ว เราสามารถแปลงแผนภูมิ/กราฟที่กำหนดให้เป็นรูปแบบข้อความ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We can then construct textual prompts by concatenating the linearized tables and the questions for QA tasks.",
    "th": "(ในรูปตารางแบบเรียงเส้นตรง) ได้ จากนั้นเราสามารถสร้าง prompt เชิงข้อความได้โดยการต่อตารางที่แปลงแล้วกับคำถามสำหรับงาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We follow the typical in-context learning paradigm to prepend a one-shot example before the current prompt.",
    "th": "QA เราใช้รูปแบบการเรียนรู้แบบ in-context ทั่วไป โดยวางตัวอย่าง one-shot ไว้ก่อนหน้า prompt ปัจจุบัน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The full prompts use either Chain-of-Thoughts (CoT) [Wei et al., 2022] or Program-of-Thoughts (PoT) [Chen et al., 2022] and can be seen in Appendix C.",
    "th": "prompt แบบเต็มใช้ทั้ง Chain-of-Thoughts (CoT) [Wei et al., 2022] หรือ Program-of-Thoughts (PoT) [Chen et al., 2022]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "They are slightly modified versions of the ones used by Chen (2023) and Chen et al. (2022) for evaluating reasoning on tabular data.",
    "th": "ดูได้ในภาคผนวก C ซึ่งเป็นรูปแบบที่ปรับเล็กน้อยจากที่ Chen (2023) และ Chen et al. (2022)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Besides CoT prompting, we also explore combining DePlot+LLM with self-consistency (SC) [Wang et al., 2023], which samples a diverse set of reasoning paths and choose the majority-voted answer instead of relying on one greedily-decoded answer as in CoT.",
    "th": "ใช้ในการประเมินการใช้เหตุผลบนข้อมูลตาราง นอกจากการ prompt แบบ CoT แล้ว เรายังสำรวจการรวม DePlot+LLM กับ self-consistency (SC) [Wang et al., 2023] ซึ่งสุ่มตัวอย่างแนวทางการใช้เหตุผลที่หลากหลาย"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In order to simplify performing arithmetic on large numbers, we also tested prompting the models to generate python code that can be passed through an interpreter.",
    "th": "และเลือกคำตอบที่ได้รับเสียงข้างมาก แทนการพึ่งพาคำตอบเดียวที่ถอดรหัสแบบ greedy เหมือนใน CoT"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In order to do that, we adapt the paradigm from Chen et al. (2022); Gao et al. (2022) to the context of tables.",
    "th": "เพื่อให้การคำนวณทางคณิตศาสตร์กับตัวเลขขนาดใหญ่ง่ายขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Future work could alternatively take advantage of finetuned tabular QA models such as Herzig et al. (2020) or use LLMs that generate SQL programs [Cheng et al., 2023] and might require multiple LLM iterative invocations to perform different atomic operations.",
    "th": "เรายังทดสอบการ prompt ให้โมเดลสร้างโค้ด python ที่สามารถส่งผ่านตัวแปลภาษาได้ โดยปรับใช้แนวทางจาก Chen et al. (2022); Gao et al. (2022) มาใช้กับบริบทของตาราง งานในอนาคตอาจใช้ประโยชน์จากโมเดล tabular QA ที่ปรับแต่งแล้ว เช่น Herzig et al. (2020) หรือใช้ LLM ที่สร้างโปรแกรม SQL [Cheng et al., 2023] ซึ่งอาจต้องเรียกใช้ LLM ซ้ำหลายครั้งเพื่อทำการดำเนินการพื้นฐานต่าง ๆ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "5.",
    "th": "5."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Experiment",
    "th": "การทดลอง (Experiment)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We introduce the experimental setup in Section 5.1 and then the results in Section 5.2 including both plot-to-table translation and downstream QA tasks.",
    "th": "เรานำเสนอการตั้งค่าการทดลองในส่วนที่ 5.1 และผลลัพธ์ในส่วนที่ 5.2 ซึ่งครอบคลุมทั้งงานแปล plot-to-table และงาน QA ปลายทาง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "5.1 Experimental Setup",
    "th": "5.1 การตั้งค่าการทดลอง (Experimental Setup)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Training and inference.",
    "th": "การฝึกและการอนุมาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot is trained for 10k steps with a maximum sequence length of 512.",
    "th": "DePlot ถูกฝึกเป็นจำนวน 10,000 steps โดยมีความยาวลำดับสูงสุดที่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The other hyperparameters are identical to MatCha pretraining as introduced in Liu et al. (2023a).",
    "th": "512 ไฮเปอร์พารามิเตอร์อื่น ๆ เหมือนกับการฝึกล่วงหน้าของ MatCha ตามที่นำเสนอใน Liu et al."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In DePlot inference we set temperature to 0 (so the output is deterministic).",
    "th": "(2023a) ในการอนุมานของ DePlot เรากำหนด temperature เป็น 0"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "For LLM prompting, in all cases we use temperature of 0.4.",
    "th": "(เพื่อให้ผลลัพธ์คงที่แน่นอน) สำหรับการ prompt LLM เราใช้ temperature ที่ 0.4 ในทุกกรณี"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Datasets and metrics.",
    "th": "ชุดข้อมูลและตัวชี้วัด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We evaluate on two chart/plot question answering benchmarks ChartQA [Masry et al., 2022] and PlotQA [Methani et al., 2020].",
    "th": "เราประเมินบนเกณฑ์มาตรฐานการถาม-ตอบกราฟ/แผนภูมิสองชุด ได้แก่ ChartQA [Masry et al., 2022] และ PlotQA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "ChartQA contains two sets: augmented (aug.) and human where the augmented set is synthetically generated and the human set is human written.",
    "th": "[Methani et al., 2020] ChartQA มีสองชุด คือ augmented (aug.) ซึ่งสร้างขึ้นแบบสังเคราะห์ และ human ซึ่งมนุษย์เขียนขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Human written queries usually are more diverse and complex, requiring more reasoning while synthetic questions are usually highly templatic.",
    "th": "คำถามที่มนุษย์เขียนมักหลากหลายและซับซ้อนกว่า ต้องใช้เหตุผลมากกว่า ขณะที่คำถามสังเคราะห์มักมีรูปแบบตายตัว (templatic) PlotQA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "PlotQA is purely synthetic.",
    "th": "เป็นข้อมูลสังเคราะห์ทั้งหมด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "It contains v1 & v2 sets where v1 is mostly extractive questions and v2 focuses more on numerical reasoning.",
    "th": "มีชุด v1 และ v2 โดย v1 ส่วนใหญ่เป็นคำถามเชิงสกัดข้อมูล (extractive) และ v2 เน้นการใช้เหตุผลเชิงตัวเลขมากกว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Both RNSS and $\\texttt{RMS}_{\\text{F1}}$ are used for evaluating plot-to-table translation (though we have argued that $\\texttt{RMS}_{\\text{F1}}$ is the more informative metric).",
    "th": "ใช้ทั้ง RNSS และ $\\texttt{RMS}_{\\text{F1}}$ ในการประเมินการแปล plot-to-table (แม้เราจะได้อธิบายไปแล้วว่า $\\texttt{RMS}_{\\text{F1}}$ เป็นตัวชี้วัดที่ให้ข้อมูลมากกว่า)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Following Masry et al. (2022); Methani et al. (2020), exact match accuracy with 5% tolerance on numerical error is used to report all QA numbers.",
    "th": "ตามแนวทางของ Masry et al. (2022); Methani et al. (2020) เราใช้ความแม่นยำแบบจับคู่ตรงทุกประการโดยมีค่าความคลาดเคลื่อนตัวเลข 5% ในการรายงานตัวเลข QA ทั้งหมด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Hardware.",
    "th": "ฮาร์ดแวร์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We train and evaluate our models using 64 GCP-TPUv3.",
    "th": "เราฝึกและประเมินโมเดลของเราโดยใช้ TPUv3 ของ GCP"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The training of DePlot can be completed in roughly 5 hours.",
    "th": "จำนวน 64 ตัว การฝึก DePlot สามารถเสร็จสิ้นได้ในเวลาประมาณ 5 ชั่วโมง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Parameters.",
    "th": "พารามิเตอร์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot has 282M parameters.",
    "th": "DePlot มีพารามิเตอร์ 282 ล้านตัว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "FlanPaLM has 540B parameters.",
    "th": "FlanPaLM มีพารามิเตอร์ 5.4"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Codex and GPT3 have roughly 175B parameters.",
    "th": "แสนล้านตัว Codex และ GPT3 มีพารามิเตอร์ประมาณ 1.75 แสนล้านตัว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "5.2 Main Results",
    "th": "5.2 ผลลัพธ์หลัก (Main Results)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Plot-to-table translation.",
    "th": "การแปล Plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We evaluate plot-to-table conversion against an OCR and keypoint detection based system proposed by Luo et al. (2021) called ChartOCR.",
    "th": "เราประเมินการแปลง plot-to-table เปรียบเทียบกับระบบที่อิง OCR และการตรวจจับจุดสำคัญที่เสนอโดย Luo et al. (2021) เรียกว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This system also relies on multiple hand-crafted rules that depend on the type of chart.",
    "th": "ChartOCR ระบบนี้พึ่งพากฎที่สร้างด้วยมือหลายข้อซึ่งขึ้นกับประเภทของแผนภูมิ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We also compare against two PaLI models [Chen et al., 2023] (of different input resolutions) finetuned with the same plot-to-table corpus as DePlot.",
    "th": "เรายังเปรียบเทียบกับโมเดล PaLI สองตัว [Chen et al., 2023] (ที่มีความละเอียดของข้อมูลนำเข้าต่างกัน) ที่ปรับแต่งด้วยชุดข้อมูล plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Finally, we compare with the MatCha base model off-the-shelf.",
    "th": "เดียวกันกับ DePlot สุดท้าย เราเปรียบเทียบกับโมเดลพื้นฐาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The results are shown in Table 4.",
    "th": "MatCha แบบสำเร็จรูป (off-the-shelf) ผลลัพธ์แสดงอยู่ในตารางที่ 4"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "On both metrics, DePlot outperforms the baseline ChartOCR by very significant margins.",
    "th": "ในทั้งสองตัวชี้วัด DePlot มีประสิทธิภาพดีกว่าเส้นฐาน ChartOCR อย่างมีนัยสำคัญ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The gap is especially large on $\\texttt{RMS}_{\\text{F1}}$ since ChartOCR might suffice to extract numbers from the plot but can struggle to organize the extracted numbers into a structured table with the correct row and column labels.",
    "th": "ช่องว่างนี้กว้างเป็นพิเศษบน $\\texttt{RMS}_{\\text{F1}}$ เนื่องจาก ChartOCR อาจสกัดตัวเลขจากกราฟได้เพียงพอ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "When compared against PaLI and MatCha, DePlot is also better, suggesting that a visual-language-specific architecture/initialization and task-specific finetuning can both boost plot-to-table accuracy.",
    "th": "แต่ลำบากในการจัดระเบียบตัวเลขที่สกัดได้ให้เป็นตารางที่มีโครงสร้างพร้อมป้ายกำกับแถวและคอลัมน์ที่ถูกต้อง เมื่อเทียบกับ PaLI และ MatCha แล้ว DePlot ก็ดีกว่าเช่นกัน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "It is also worth noting that PaLI-17B (res.",
    "th": "แสดงว่าทั้งสถาปัตยกรรม/การตั้งค่าเริ่มต้นเฉพาะภาษาภาพและการปรับแต่งเฉพาะงานต่างช่วยเพิ่มความแม่นยำของ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "588) performs much better than the 224-resolution variant, indicating that high input resolution is a key ingredient for chart information extraction.",
    "th": "plot-to-table ได้ นอกจากนี้ยังน่าสังเกตว่า PaLI-17B (res. 588) ทำได้ดีกว่ารุ่นความละเอียด 224 มาก แสดงว่าความละเอียดของข้อมูลนำเข้าที่สูงเป็นปัจจัยสำคัญสำหรับการสกัดข้อมูลจากแผนภูมิ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Downstream tasks.",
    "th": "งานปลายทาง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We list the main results on ChartQA [Masry et al., 2022] and PlotQA [Methani et al., 2020] in Table 5.",
    "th": "เรารายงานผลลัพธ์หลักบน ChartQA [Masry et al., 2022] และ PlotQA [Methani et al., 2020]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We evaluate different DePlot+LLM setups.",
    "th": "ในตารางที่ 5 เราประเมินการตั้งค่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We evaluate chain-of-thoughts (CoT) [Wei et al., 2022] prompts for GPT-3 [Brown et al., 2020] (text-davinci-003) and FlanPaLM [Chung et al., 2022] (540B).",
    "th": "DePlot+LLM ที่แตกต่างกัน โดยประเมิน prompt แบบ chain-of-thoughts (CoT) [Wei et al., 2022] สำหรับ GPT-3 [Brown et al., 2020] (text-davinci-003)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In addition, we use self-consistency (SC) [Wang et al., 2023] across 10 predictions.",
    "th": "และ FlanPaLM [Chung et al., 2022] (540B)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Finally, we use program-of-thoughts (PoT) [Chen et al., 2022] to prompt Codex [Chen et al., 2021] (code-davinci-002) to generate python snippets that can be subsequently executed by an interpreter to extract an answer.",
    "th": "นอกจากนี้เราใช้ self-consistency (SC) [Wang et al., 2023] ข้าม 10 การทำนาย สุดท้ายเราใช้ program-of-thoughts (PoT) [Chen et al., 2022]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Since some reasoning operations are better done by plain language (like computing an argmax) and some by code snippets (like floating point arithmetic), we find optimal results by doing self-consistency across both CoT and PoT predictions.",
    "th": "เพื่อ prompt Codex [Chen et al., 2021] (code-davinci-002) ให้สร้างโค้ด python ที่สามารถรันด้วยตัวแปลภาษาเพื่อหาคำตอบได้ เนื่องจากการดำเนินการใช้เหตุผลบางอย่างทำได้ดีกว่าด้วยภาษาธรรมดา (เช่นการคำนวณ argmax) และบางอย่างทำได้ดีกว่าด้วยโค้ด (เช่นการคำนวณทศนิยม) เราพบว่าผลลัพธ์ที่ดีที่สุดได้จากการทำ self-consistency ข้ามทั้งการทำนายแบบ CoT และ PoT"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+LLM performs especially strong on the ChartQA human set which contains complex human written queries.",
    "th": "DePlot+LLM ทำงานได้ดีเป็นพิเศษบนชุด human ของ ChartQA ซึ่งมีคำถามที่มนุษย์เขียนขึ้นซึ่งซับซ้อน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compared with prior SOTA MatCha, DePlot+LLM when combined with FlanPaLM and Codex and Self-Consistency (SC) achieves an improvement of 29.4% (38.2%→67.6%).",
    "th": "เมื่อเทียบกับ SOTA เดิมคือ MatCha แล้ว DePlot+LLM เมื่อรวมกับ FlanPaLM, Codex และ Self-Consistency (SC) ทำได้ดีขึ้น 29.4% (38.2% → 67.6%)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This is also the best setup for PlotQA.",
    "th": "นี่ยังเป็นการตั้งค่าที่ดีที่สุดสำหรับ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "On the heavily synthetic queries from PlotQA v1 and v2, DePlot+LLM models underperform the end-to-end SOTA MatCha.",
    "th": "PlotQA ด้วย ในคำถามสังเคราะห์ล้วน ๆ จาก PlotQA v1 และ v2 โมเดล DePlot+LLM ทำได้แย่กว่า SOTA แบบ end-to-end คือ MatCha"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In summary, DePlot+LLM significantly outperforms finetuned SOTA on human-written chart QA queries and overall underperforms finetuned SOTA on synthetic QA queries.",
    "th": "กล่าวโดยสรุป DePlot+LLM ทำได้ดีกว่า SOTA ที่ปรับแต่งแล้วอย่างมีนัยสำคัญบนคำถาม chart QA ที่มนุษย์เขียนขึ้น และโดยรวมทำได้แย่กว่า SOTA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We believe it is especially important to achieve good performance on the human set as it is much more diverse and reflects the real-world challenges.",
    "th": "ที่ปรับแต่งแล้วบนคำถามสังเคราะห์ เราเชื่อว่าการทำได้ดีบนชุด human เป็นสิ่งสำคัญอย่างยิ่ง เนื่องจากมีความหลากหลายมากกว่าและสะท้อนความท้าทายในโลกจริง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The results suggest DePlot+LLM's strong capability in solving novel human queries unseen in demonstration.",
    "th": "ผลลัพธ์เหล่านี้แสดงให้เห็นถึงความสามารถที่แข็งแกร่งของ DePlot+LLM ในการแก้คำถามของมนุษย์รูปแบบใหม่ที่ไม่เคยเห็นในตัวอย่างสาธิต"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "It is also worth emphasizing again that DePlot+LLM requires much less supervision than the finetuned SOTA methods (one shot vs. tens of thousands of training examples).",
    "th": "และยังเน้นย้ำได้ว่า DePlot+LLM ต้องการการกำกับดูแลน้อยกว่าวิธี SOTA ที่ปรับแต่งแล้วมาก (one-shot เทียบกับตัวอย่างฝึกฝนหลายหมื่นตัวอย่าง)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We will discuss why DePlot+LLM underperforms on PlotQA in error analysis (Section 6.1).",
    "th": "เราจะอธิบายว่าทำไม DePlot+LLM ทำได้แย่กว่าบน PlotQA ในการวิเคราะห์ข้อผิดพลาด (ส่วนที่ 6.1)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Besides one-shot learning, we also experimented with zero- and few-shot inference.",
    "th": "นอกเหนือจากการเรียนรู้แบบ one-shot แล้ว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We found the models generally fail without demonstration and few-shot has similar performance as one-shot.",
    "th": "เรายังทดลองกับการอนุมานแบบ zero-shot และ few-shot"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "After the submission of this paper, we experimented with RLHF-ed LLMs such as ChatGPT, GPT-4 [OpenAI, 2023], and Bard, finding that such aligned conversational models are capable of processing the DePlot-generated tables in a zero-shot manner.",
    "th": "ด้วย เราพบว่าโมเดลโดยทั่วไปจะล้มเหลวหากไม่มีตัวอย่างสาธิต และ few-shot มีประสิทธิภาพคล้ายกับ one-shot หลังจากส่งบทความนี้แล้ว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This can potentially further improve DePlot+LLM's performance on academic benchmarks by large margins.",
    "th": "เราได้ทดลองกับ LLM ที่ผ่านการปรับด้วย RLHF เช่น ChatGPT, GPT-4 [OpenAI, 2023] และ Bard พบว่าโมเดลสนทนาที่ผ่านการปรับแนว (aligned) เหล่านี้สามารถประมวลผลตารางที่ DePlot สร้างขึ้นแบบ zero-shot ได้ ซึ่งอาจช่วยเพิ่มประสิทธิภาพของ DePlot+LLM บนเกณฑ์มาตรฐานวิชาการได้อีกมาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "6.",
    "th": "6."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Analyses and Discussions",
    "th": "การวิเคราะห์และอภิปราย (Analyses and Discussions)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In this section, we first conduct case studies and error analysis in Section 6.1 to better understand DePlot's wins and losses against end-to-end methods.",
    "th": "ในส่วนนี้ เราจะทำการศึกษากรณีตัวอย่างและวิเคราะห์ข้อผิดพลาดในส่วนที่ 6.1 ก่อน เพื่อให้เข้าใจจุดเด่นและจุดด้อยของ DePlot เมื่อเทียบกับวิธีแบบ end-to-end ได้ดีขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Then in Section 6.2 we study the performance of DePlot when exposed to out-of-distribution web charts and plots.",
    "th": "จากนั้นในส่วนที่ 6.2 เราจะศึกษาประสิทธิภาพของ DePlot เมื่อเจอกับกราฟและแผนภูมิจากเว็บที่อยู่นอกการกระจายข้อมูล (out-of-distribution)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "6.1 Case Study and Error Analysis",
    "th": "6.1 กรณีศึกษาและการวิเคราะห์ข้อผิดพลาด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To more concretely demonstrate the strengths and weaknesses of DePlot+LLM, we present two case studies for the downstream task ChartQA.",
    "th": "เพื่อแสดงให้เห็นจุดแข็งและจุดอ่อนของ DePlot+LLM อย่างเป็นรูปธรรมมากขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We compare DePlot+FlanPaLM using either PoT or CoT.",
    "th": "เราขอนำเสนอกรณีศึกษาสองกรณีสำหรับงานปลายทาง ChartQA โดยเปรียบเทียบ DePlot+FlanPaLM ที่ใช้ทั้ง PoT และ CoT"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "First, in Table 6 we show an example demonstrating the benefit of using LLM and prompting techniques for stronger numerical reasoning.",
    "th": "ตัวอย่างแรก ในตารางที่ 6 เราแสดงตัวอย่างที่แสดงประโยชน์ของการใช้ LLM และเทคนิคการ prompt สำหรับการใช้เหตุผลเชิงตัวเลขที่แข็งแกร่งกว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "While the finetuned SOTA MatCha wrongly predicts the answer, DePlot+FlanPaLM (using either CoT or PoT) produces accurately the answer.",
    "th": "ในขณะที่ SOTA ที่ปรับแต่งแล้วคือ MatCha ทำนายคำตอบผิด DePlot+FlanPaLM (ทั้งแบบ CoT หรือ PoT) ให้คำตอบที่ถูกต้อง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Table 6: DePlot+LLM shows much stronger numerical reasoning skills than the finetuned MatCha.",
    "th": "ตารางที่ 6: DePlot+LLM แสดงทักษะการใช้เหตุผลเชิงตัวเลขที่แข็งแกร่งกว่า MatCha"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Question: What is the difference between the sum shares of Indonesia and Ireland and the share of Mauritania?",
    "th": "ที่ปรับแต่งแล้วมาก คำถาม: ผลต่างระหว่างผลรวมสัดส่วนของอินโดนีเซียและไอร์แลนด์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha: 0.07\nDePlot+FlanPaLM CoT: Let's find the sum of shares of Indonesia and Ireland: 2.88+2.33=5.21.",
    "th": "กับสัดส่วนของมอริเตเนียคือเท่าใด? MatCha: 0.07 DePlot+FlanPaLM CoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Let's subtract the share of Mauritania: 5.21-4.15=1.06.",
    "th": "หาผลรวมสัดส่วนของอินโดนีเซียและไอร์แลนด์ก่อน:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The answer is 1.06.",
    "th": "2.88+2.33=5.21"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+Codex PoT:",
    "th": "จากนั้นลบสัดส่วนของมอริเตเนีย: 5.21-4.15=1.06 คำตอบคือ 1.06 DePlot+Codex PoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compiler output: 1.06",
    "th": "ผลลัพธ์จากการรันโค้ด: 1.06"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Second, we show an example where the DePlot+LLM framework fails in Table 7.",
    "th": "ตัวอย่างที่สอง เราแสดงตัวอย่างที่กรอบงาน DePlot+LLM"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The LLMs are unable to accurately identify the \"highest value of the gray bar\" since they do not have information about the color of bars.",
    "th": "ล้มเหลวในตารางที่ 7 LLM ไม่สามารถระบุ \"ค่าสูงสุดของแถบสีเทา\" ได้อย่างแม่นยำ เนื่องจากไม่มีข้อมูลเกี่ยวกับสีของแถบ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In Table 7, though DePlot+FlanPaLM correctly predicted \"Yes\", it is correct for the wrong reason – FlanPaLM randomly chose the highest value in light blue bars which also happens to be smaller than the average of \"identity theft\".",
    "th": "ในตารางที่ 7 แม้ DePlot+FlanPaLM ทำนาย \"Yes\" ได้ถูกต้อง แต่ถูกด้วยเหตุผลที่ผิด — FlanPaLM เลือกค่าสูงสุดในแถบสีฟ้าอ่อนแบบสุ่ม ซึ่งบังเอิญมีค่าน้อยกว่าค่าเฉลี่ยของ \"identity theft\""
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This is a typical failure mode where the query refers to a visual attribute but such attribute is lost in plot-to-table translation.",
    "th": "ด้วย นี่เป็นรูปแบบความล้มเหลวทั่วไปที่คำถามอ้างถึงคุณลักษณะเชิงภาพ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In future work, we plan to develop a table encoding scheme that also considers visual attributes to avoid such errors.",
    "th": "แต่คุณลักษณะนั้นสูญหายไปในการแปล plot-to-table ในงานอนาคต เราวางแผนจะพัฒนาวิธีการเข้ารหัสตารางที่พิจารณาคุณลักษณะเชิงภาพด้วย เพื่อหลีกเลี่ยงข้อผิดพลาดเช่นนี้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Table 7: DePlot+LLM struggles with queries related to visual attributes such as color (which is lost in plot-to-table translation).",
    "th": "ตารางที่ 7: DePlot+LLM มีปัญหากับคำถามที่เกี่ยวข้องกับคุณลักษณะเชิงภาพ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Question: Is the average of all the bars in \"identity theft\" greater than the highest value of the gray bar?",
    "th": "เช่น สี (ซึ่งสูญหายไปในการแปล plot-to-table) คำถาม: ค่าเฉลี่ยของแถบทั้งหมดใน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha: No\nDePlot+FlanPaLM CoT: Let's find the average of all the bars in \"Identity theft\".",
    "th": "\"identity theft\" มากกว่าค่าสูงสุดของแถบสีเทาหรือไม่? MatCha: No"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The sum of all the bars is 66+17+16 = 99.",
    "th": "DePlot+FlanPaLM CoT: หาค่าเฉลี่ยของแถบทั้งหมดใน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The average is 99/3 = 33.",
    "th": "\"Identity theft\""
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The highest value of the gray bar is 26.",
    "th": "ผลรวมของแถบทั้งหมดคือ 66+17+16"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "33 is greater than 26.",
    "th": "= 99 ค่าเฉลี่ยคือ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The answer is Yes.",
    "th": "99/3 = 33 ค่าสูงสุดของแถบสีเทาคือ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+Codex PoT:",
    "th": "26 ค่า 33 มากกว่า 26 คำตอบคือ Yes DePlot+Codex PoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compiler output: No",
    "th": "ผลลัพธ์จากการรันโค้ด: No"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "While DePlot+LLM has surpassed finetuned SOTA on ChartQA, we notice that the picture on PlotQA is different – DePlot underperforms finetuned SOTA MatCha by a large margin (66.6% vs. 91.5%).",
    "th": "แม้ DePlot+LLM จะทำได้ดีกว่า SOTA ที่ปรับแต่งแล้วบน ChartQA แต่เราพบว่าภาพรวมบน PlotQA นั้นแตกต่างกัน — DePlot ทำได้แย่กว่า SOTA ที่ปรับแต่งแล้วคือ MatCha อย่างมาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Through error analysis, we observe that there are two major reasons.",
    "th": "(66.6% เทียบกับ 91.5%) จากการวิเคราะห์ข้อผิดพลาด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "First, synthetic queries are highly templatic and covers only restricted types of questions.",
    "th": "เราพบสาเหตุหลักสองประการ ประการแรก คำถามสังเคราะห์มีรูปแบบตายตัวมากและครอบคลุมเพียงประเภทคำถามที่จำกัด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Models finetuned with thousands of examples can learn to solve such templatic questions, even better than humans do (human ceiling on PlotQA is just 80.5% compared with MatCha performance of 91.5%).",
    "th": "โมเดลที่ปรับแต่งด้วยตัวอย่างหลายพันตัวอย่างสามารถเรียนรู้แก้คำถามรูปแบบตายตัวเหล่านี้ได้ดีกว่ามนุษย์เสียอีก (เพดานความสามารถของมนุษย์บน PlotQA อยู่ที่เพียง 80.5% เทียบกับประสิทธิภาพของ MatCha ที่ 91.5%)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, DePlot+LLMs only learn from one-shot in-context example and thus cannot exploit such bias encoded in the training set.",
    "th": "แต่ DePlot+LLM เรียนรู้จากตัวอย่าง one-shot in-context เพียงตัวอย่างเดียว จึงไม่สามารถใช้ประโยชน์จากความเอนเอียง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The second reason is the loss of information in plot-to-table translation.",
    "th": "(bias) ที่ฝังอยู่ในชุดข้อมูลฝึกฝนได้ สาเหตุที่สองคือการสูญเสียข้อมูลในการแปล"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Synthetic queries are usually highly extractive and include questions asking visual attributes such as color, shape, or direction of objects in a plot.",
    "th": "plot-to-table คำถามสังเคราะห์มักเป็นแบบสกัดข้อมูล (extractive) สูง และมีคำถามเกี่ยวกับคุณลักษณะเชิงภาพ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "When plots are converted to tables, such information is lost.",
    "th": "เช่น สี รูปร่าง หรือทิศทางของวัตถุในกราฟ เมื่อกราฟถูกแปลงเป็นตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We plan to also decode visual attributes in future work when training the plot-to-table model.",
    "th": "ข้อมูลเหล่านี้จะสูญหายไป เราวางแผนจะถอดรหัสคุณลักษณะเชิงภาพด้วยในงานอนาคตเมื่อฝึกโมเดล plot-to-table"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "More successful and failure case analyses are available in Appendix D.",
    "th": "การวิเคราะห์กรณีตัวอย่างที่สำเร็จและล้มเหลวเพิ่มเติมมีอยู่ในภาคผนวก D"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "6.2 Out-of-distribution Analysis",
    "th": "6.2 การวิเคราะห์ข้อมูลนอกการกระจาย (Out-of-distribution Analysis)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "One limitation of our evaluation setup is that the kind and style of charts that are part of DePlot's training corpus are in the same domain as those in the evaluation sets from ChartQA and PlotQA.",
    "th": "ข้อจำกัดหนึ่งของการตั้งค่าการประเมินของเราคือประเภทและสไตล์ของแผนภูมิที่อยู่ในชุดข้อมูลฝึกฝนของ DePlot เป็นโดเมนเดียวกันกับชุดประเมินจาก ChartQA และ PlotQA ซึ่งทำให้เกิดคำถามว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "This raises the question of whether DePlot will generalize to charts sourced from different websites or built using completely different tools.",
    "th": "DePlot จะสามารถนำไปใช้ทั่วไป (generalize) กับแผนภูมิจากเว็บไซต์อื่นหรือที่สร้างด้วยเครื่องมือที่แตกต่างไปโดยสิ้นเชิงได้หรือไม่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, few public resources exist containing both charts and their associated tables.",
    "th": "อย่างไรก็ตาม มีแหล่งข้อมูลสาธารณะน้อยมากที่มีทั้งแผนภูมิและตารางที่เกี่ยวข้องอยู่ด้วยกัน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In order to estimate the out-of-distribution capabilities of DePlot we annotate 10 charts from the recently released TaTa dataset [Gehrmann et al., 2022], sourced from dhsprogram.com.",
    "th": "เพื่อประมาณความสามารถของ DePlot บนข้อมูลนอกการกระจาย เราติดป้ายกำกับแผนภูมิ 10 แผนภูมิจากชุดข้อมูล TaTa [Gehrmann et al., 2022] ที่เพิ่งเผยแพร่ ซึ่งมาจาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We skip choropleth maps since none have been seen during training.",
    "th": "dhsprogram.com เราข้าม choropleth maps เนื่องจากไม่มีรูปแบบนี้ในข้อมูลฝึกฝนเลย"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We find DePlot obtains an average 78% $\\texttt{RMS}_{\\text{F1}}$ score in reconstructing the underlying tables.",
    "th": "เราพบว่า DePlot ได้คะแนน $\\texttt{RMS}_{\\text{F1}}$ เฉลี่ย 78% ในการสร้างตารางเบื้องหลังขึ้นใหม่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We observed two limitations in DePlot which we outline below and can attributed to the nature of the training datasets used.",
    "th": "เราสังเกตข้อจำกัดสองประการใน DePlot ซึ่งสรุปไว้ด้านล่าง และสามารถอธิบายได้จากธรรมชาติของชุดข้อมูลฝึกฝนที่ใช้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "First the model could get distracted by adjacent text, such as references to external sources, and it benefited from cropping the chart in advance.",
    "th": "ประการแรก โมเดลอาจถูกรบกวนจากข้อความที่อยู่ใกล้เคียง เช่น การอ้างอิงแหล่งข้อมูลภายนอก และได้ประโยชน์จากการครอปแผนภูมิไว้ก่อน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Secondly, DePlot struggled to understand labels or values linked to their corresponding bar/pie section by an arrow.",
    "th": "ประการที่สอง DePlot มีปัญหาในการเข้าใจป้ายกำกับหรือค่าที่เชื่อมโยงกับส่วนแถบ/วงกลมที่สัมพันธ์กันด้วยลูกศร"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We will address these issues in future work by making the synthetic data creation pipeline more robust.",
    "th": "เราจะแก้ไขปัญหาเหล่านี้ในงานอนาคตโดยทำให้ไปป์ไลน์การสร้างข้อมูลสังเคราะห์มีความทนทานมากขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "7.",
    "th": "7. บทสรุป"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Conclusion",
    "th": "(Conclusion)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We have proposed DePlot+LLM, a method for visual language reasoning by decomposing the task into two steps.",
    "th": "เราได้เสนอ DePlot+LLM ซึ่งเป็นวิธีการใช้เหตุผลเชิงภาษาภาพโดยแบ่งงานออกเป็นสองขั้นตอน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The first step is converting a plot into linearized table using an image-to-text Transformer model finetuned for the conversion.",
    "th": "ขั้นตอนแรกคือการแปลงกราฟให้เป็นตารางแบบเรียงเส้นตรงโดยใช้โมเดล Transformer แบบ image-to-text ที่ปรับแต่งสำหรับการแปลงนี้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The second step is combining the plot-to-text model with an off-the-shelf LLM to reason on the linearized table with just one-shot supervision.",
    "th": "ขั้นตอนที่สองคือการรวมโมเดลแปลง plot-to-text กับ LLM แบบสำเร็จรูปเพื่อใช้เหตุผลบนตารางที่แปลงแล้วด้วยการกำกับดูแลแบบ one-shot เพียงอย่างเดียว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We standardize the plot-to-table conversion task by proposing a new table similarity comparison metric that considers the structure of the table and the numeric values but is invariant to column/row permutation.",
    "th": "เราสร้างมาตรฐานให้กับงานแปลง plot-to-table โดยเสนอตัวชี้วัดเปรียบเทียบความคล้ายคลึงของตารางแบบใหม่ที่พิจารณาทั้งโครงสร้างของตารางและค่าตัวเลข"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "With the new metric, we compare our image-to-text model DePlot's performance with an OCR-based baseline and three end-to-end baselines, achieving the best improvement.",
    "th": "แต่ไม่ขึ้นกับการสลับลำดับคอลัมน์/แถว ด้วยตัวชี้วัดใหม่นี้ เราเปรียบเทียบประสิทธิภาพของโมเดล image-to-text คือ DePlot กับเส้นฐานที่อิง OCR"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The conversion model is then used for downstream tasks of ChartQA and PlotQA.",
    "th": "และเส้นฐานแบบ end-to-end อีกสามตัว ซึ่งให้ผลลัพธ์ที่ดีที่สุด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "On ChartQA human-query set, the one-shot DePlot+LLM model achieves +29.4% performance compared with end-to-end SOTA finetuned with thousands of examples.",
    "th": "จากนั้นโมเดลแปลงนี้ถูกนำไปใช้ในงานปลายทางของ ChartQA และ PlotQA บนชุดคำถามมนุษย์ของ ChartQA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We have also conducted comprehensive analyses to understand the wins and loses of the DePlot+LLM framework and highlight that encoding visual attributes can be a fruitful direction for future exploration.",
    "th": "โมเดล DePlot+LLM แบบ one-shot ทำได้ดีขึ้น +29.4% เมื่อเทียบกับ SOTA แบบ end-to-end ที่ปรับแต่งด้วยตัวอย่างหลายพันตัวอย่าง เรายังได้ทำการวิเคราะห์อย่างครอบคลุมเพื่อเข้าใจจุดเด่นและจุดด้อยของกรอบงาน DePlot+LLM และเน้นว่าการเข้ารหัสคุณลักษณะเชิงภาพอาจเป็นทิศทางที่น่าสนใจสำหรับการศึกษาในอนาคต"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Limitations",
    "th": "ข้อจำกัด (Limitations)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot's strength is highly dependent on the accuracy of plot-to-text(table) conversion.",
    "th": "จุดแข็งของ DePlot ขึ้นอยู่กับความแม่นยำของการแปลง plot-to-text (table) เป็นอย่างมาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To obtain effective plot-to-text conversion, large amounts of diverse and in-domain plot-table parallel data are usually needed.",
    "th": "การแปลง plot-to-text ที่มีประสิทธิภาพมักต้องใช้ข้อมูลคู่ plot-table ที่หลากหลายและอยู่ในโดเมนเดียวกันปริมาณมาก"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "It is unknown to which extent DePlot can work for out-of-domain (OOD) plot-to-text conversion.",
    "th": "ยังไม่เป็นที่แน่ชัดว่า DePlot จะทำงานได้ดีเพียงใดกับการแปลง plot-to-text ที่อยู่นอกโดเมน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We investigated this in Section 6.2 but in the future a wider range of web charts can be used to gain a deeper understanding into DePlot's robustness for OOD plots.",
    "th": "(OOD) เราได้ศึกษาเรื่องนี้ในส่วนที่ 6.2 แต่ในอนาคตอาจใช้แผนภูมิจากเว็บที่หลากหลายยิ่งขึ้นเพื่อทำความเข้าใจความทนทานของ DePlot ต่อกราฟ OOD ได้ลึกซึ้งยิ่งขึ้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Beyond, DePlot does not work for visual language that does not have a clear latent textual representation such as textbook figures where the visual illustrations are created using specialized software and do not have clear structured representations.",
    "th": "นอกจากนี้ DePlot ยังไม่สามารถทำงานได้กับภาษาภาพที่ไม่มีการแทนค่าเชิงข้อความที่แอบแฝงอยู่อย่างชัดเจน เช่น รูปภาพในหนังสือเรียนที่ภาพประกอบถูกสร้างขึ้นด้วยซอฟต์แวร์เฉพาะทาง และไม่มีการแทนค่าเชิงโครงสร้างที่ชัดเจน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Another limitation of the current DePlot approach is that we ignore any layout information such as orientation and color of the visual elements/objects.",
    "th": "ข้อจำกัดอีกประการของแนวทาง DePlot ในปัจจุบันคือเรามองข้ามข้อมูลการจัดวาง (layout)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In future work, we can incorporate such attributional information by including them in the decoding target.",
    "th": "เช่น การวางแนวและสีขององค์ประกอบ/วัตถุเชิงภาพ ในงานอนาคต เราสามารถรวมข้อมูลคุณลักษณะเหล่านี้เข้าไปในเป้าหมายการถอดรหัส (decoding target) ได้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Ethics Statement",
    "th": "แถลงการณ์ด้านจริยธรรม (Ethics Statement)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "To the best of our knowledge, DePlot is of low risk to the society since it is an information extraction model that converts graphics information from image to textual information in the form of table.",
    "th": "ตามความเข้าใจของเราที่ดีที่สุด DePlot มีความเสี่ยงต่ำต่อสังคม เนื่องจากเป็นโมเดลสกัดข้อมูลที่แปลงข้อมูลกราฟิกจากภาพให้เป็นข้อมูลเชิงข้อความในรูปตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "That said, when combined with LLMs, DePlot+LLM can demonstrate potential risk such as generating toxic content similar to when LLMs are used standalone.",
    "th": "อย่างไรก็ตาม เมื่อรวมกับ LLM แล้ว DePlot+LLM อาจแสดงความเสี่ยงที่อาจเกิดขึ้นได้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "As a result, we should proceed with caution when deploying DePlot+LLM in the real-world and take necessary precautions such as having a filtering stage after the generation.",
    "th": "เช่นการสร้างเนื้อหาที่เป็นพิษ (toxic content) เช่นเดียวกับเมื่อใช้ LLM เพียงอย่างเดียว ดังนั้นเราควรดำเนินการด้วยความระมัดระวังเมื่อนำ DePlot+LLM ไปใช้ในโลกจริง และมีมาตรการป้องกันที่จำเป็น เช่น การมีขั้นตอนกรองเนื้อหาหลังจากการสร้าง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In terms of data used, all training and evaluation data are either synthetically created using rules or publicly available data on the web with appropriate permissive licenses.",
    "th": "ในด้านข้อมูลที่ใช้ ข้อมูลฝึกฝนและประเมินทั้งหมดเป็นข้อมูลที่สร้างขึ้นแบบสังเคราะห์โดยใช้กฎ หรือข้อมูลที่เปิดเผยต่อสาธารณะบนเว็บโดยมีสัญญาอนุญาตที่เหมาะสม"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Appendix A.",
    "th": "ภาคผนวก A. รายละเอียดของเส้นฐาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Details of Baselines",
    "th": "(Details of Baselines)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We introduce below the details of the baselines used in Table 5.",
    "th": "เรานำเสนอรายละเอียดของเส้นฐาน (baseline) ที่ใช้ในตารางที่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "T5 is an encode-decoder Transformer model proposed by Raffel et al. (2020).",
    "th": "5 ด้านล่างนี้ T5 เป็นโมเดล Transformer แบบ encode-decoder ที่เสนอโดย"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The baseline model T5 takes the concatenation of a linearized table (and a query, when the task is QA) as input, and aims to decode the target (answer or summarization).",
    "th": "Raffel et al. (2020) โมเดลเส้นฐาน T5 รับข้อมูลนำเข้าเป็นการต่อตารางแบบเรียงเส้นตรง (และคำถาม สำหรับงาน QA) และมีเป้าหมายถอดรหัสคำตอบหรือบทสรุป"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "When the gold table is available, the gold table is used as the input and the chart image is not used directly.",
    "th": "เมื่อมีตารางต้นฉบับ (gold table) ตารางนั้นจะถูกใช้เป็นข้อมูลนำเข้าโดยไม่ใช้ภาพแผนภูมิโดยตรง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "VL-T5 proposed by Cho et al. (2021) is similar to T5 but also takes a visual input (i.e., the chart image) on the encoder side.",
    "th": "VL-T5 ที่เสนอโดย Cho et al. (2021) คล้ายกับ T5 แต่รับข้อมูลภาพ (คือภาพแผนภูมิ) ที่ส่วน encoder"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "VisionTaPas [Masry et al., 2022] is modified from TaPas [Herzig et al., 2020] to incorporate the visual modality by adding a ViT model [Dosovitskiy et al., 2021] and cross-modal fusion layers.",
    "th": "ด้วย VisionTaPas [Masry et al., 2022] ปรับปรุงจาก TaPas [Herzig et al., 2020] เพื่อรวมรูปแบบข้อมูลเชิงภาพโดยเพิ่มโมเดล ViT [Dosovitskiy et al., 2021]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "T5-OCR, VL-T5-OCR, and VisionTaPas-OCR are the same model as T5, VL-T5, and VisionTaPas, respectively.",
    "th": "และชั้นผสานข้ามรูปแบบข้อมูล (cross-modal fusion) T5-OCR, VL-T5-OCR และ VisionTaPas-OCR"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, they do not assume the existence of gold table but use an OCR-based system to extract the data table from the chart image.",
    "th": "เป็นโมเดลเดียวกับ T5, VL-T5 และ VisionTaPas ตามลำดับ แต่ไม่สมมติว่ามีตารางต้นฉบับอยู่ และใช้ระบบที่อิง OCR"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The above mentioned models and their performance numbers are all extracted from Masry et al. (2022) and Kantharaj et al. (2022).",
    "th": "ในการสกัดตารางข้อมูลจากภาพแผนภูมิแทน โมเดลที่กล่าวมาข้างต้นและตัวเลขประสิทธิภาพทั้งหมดดึงมาจาก Masry et al."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Classification - Regression Chart Transformer (CRCT) [Levy et al., 2022] is the best performing model on PlotQA according to the PlotQA benchmark on paperswithcode.com.",
    "th": "(2022) และ Kantharaj et al. (2022) Classification - Regression Chart Transformer (CRCT) [Levy et al., 2022] เป็นโมเดลที่ทำได้ดีที่สุดบน PlotQA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "It uses a detector that extracts all textual and visual elements of chart then processes these elements with a multimodal Transformer.",
    "th": "ตามเกณฑ์มาตรฐาน PlotQA บน paperswithcode.com ใช้ตัวตรวจจับที่สกัดองค์ประกอบเชิงข้อความและเชิงภาพทั้งหมดของแผนภูมิ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "PaLI [Chen et al., 2023] with 17B parameters is a SOTA on multiple vision-language tasks in the natural image domain however fails significantly on chart understanding tasks.",
    "th": "แล้วประมวลผลองค์ประกอบเหล่านี้ด้วย Transformer แบบหลายรูปแบบข้อมูล PaLI [Chen et al., 2023] ที่มีพารามิเตอร์ 17 พันล้านตัวเป็น SOTA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha [Liu et al., 2023a] is the strongest supervised baseline and uses a mixture of image-to-text tasks as pretraining to inject math reasoning and chart layout understanding knowledge to the base model.",
    "th": "บนงานภาพ-ภาษาหลายงานในโดเมนภาพธรรมชาติ แต่ล้มเหลวอย่างมากในงานทำความเข้าใจแผนภูมิ MatCha [Liu et al., 2023a] เป็นเส้นฐานแบบ supervised ที่แข็งแกร่งที่สุด และใช้ส่วนผสมของงาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In downstream tasks ChartQA and PlotQA, the full-supervised models are finetuned with the corresponding training sets (ChartQA has ~33k data points and PlotQA has ~37M).",
    "th": "image-to-text เป็นการฝึกล่วงหน้าเพื่อฝังความรู้ด้านการใช้เหตุผลทางคณิตศาสตร์และความเข้าใจการจัดวางแผนภูมิให้กับโมเดลพื้นฐาน ในงานปลายทาง ChartQA"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The fully supervised results are collected from Liu et al. (2023a).",
    "th": "และ PlotQA โมเดลแบบ fully-supervised ถูกปรับแต่งด้วยชุดฝึกฝนที่สัมพันธ์กัน (ChartQA มีข้อมูลประมาณ 33,000 จุด และ PlotQA มีประมาณ 37 ล้านจุด) ผลลัพธ์แบบ fully supervised รวบรวมมาจาก Liu et al. (2023a)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Appendix B.",
    "th": "ภาคผนวก B. คำถามสำหรับการประเมินโดยมนุษย์"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Human Evaluation Questions",
    "th": "(Human Evaluation Questions)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We list below (Figure 2) the annotation form of the three questions asked when producing the human judgment scores of plot-table pairs.",
    "th": "เราแสดงรายการ (รูปที่ 2) แบบฟอร์มการให้คะแนนสามคำถามที่ใช้ในการสร้างคะแนนการตัดสินของมนุษย์สำหรับคู่กราฟ-ตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Each question asks one aspect regarding the quality of the generated table and the annotator needs to rate the table from 1 to 5.",
    "th": "คำถามแต่ละข้อถามถึงแง่มุมหนึ่งของคุณภาพตารางที่สร้างขึ้น และผู้ประเมินต้องให้คะแนนตารางในช่วง 1 ถึง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The final table score is the average score from the three questions.",
    "th": "5 คะแนนสุดท้ายของตารางคือค่าเฉลี่ยของคะแนนทั้งสามคำถาม"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Figure 2: Questions for producing human scores of plot-table pairs.",
    "th": "รูปที่ 2: คำถามสำหรับสร้างคะแนนของมนุษย์สำหรับคู่กราฟ-ตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Appendix C.",
    "th": "ภาคผนวก C."
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Chain-of-thoughts and Program-of-thoughts Prompt",
    "th": "Prompt แบบ Chain-of-thoughts และ Program-of-thoughts"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In Figure 3 we show the one-shot prompt used across all experiments CoT.",
    "th": "ในรูปที่ 3 เราแสดง prompt แบบ one-shot ที่ใช้ในการทดลอง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "It is taken from development set examples in combination with prompts used by Chen (2023).",
    "th": "CoT ทั้งหมด ซึ่งนำมาจากตัวอย่างชุด development ผสมกับ prompt ที่ Chen"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We also modified this prompt to output Python code when needing to compute arithmetic operations in Figure 4.",
    "th": "(2023) ใช้ เรายังปรับ prompt นี้ให้ส่งออกโค้ด Python เมื่อต้องคำนวณการดำเนินการทางคณิตศาสตร์ ดังแสดงในรูปที่ 4"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Figure 3: Prompt used for question answering on tables.",
    "th": "รูปที่ 3: Prompt ที่ใช้สำหรับการถาม-ตอบบนตาราง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Figure 4: Prompt used for question answering on tables using Python code.",
    "th": "รูปที่ 4: Prompt ที่ใช้สำหรับการถาม-ตอบบนตารางโดยใช้โค้ด Python"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Appendix D.",
    "th": "ภาคผนวก D. กรณีศึกษาเพิ่มเติม"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "More Case Study",
    "th": "(More Case Study)"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Successes.",
    "th": "กรณีที่สำเร็จ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "In Table 8 and Table 9 we demonstrate two more cases where DePlot+LLM are successful due to its stronger numerical reasoning capabilities.",
    "th": "ในตารางที่ 8 และตารางที่ 9 เราแสดงอีกสองกรณีที่ DePlot+LLM ประสบความสำเร็จ เนื่องจากความสามารถในการใช้เหตุผลเชิงตัวเลขที่แข็งแกร่งกว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Table 8: A line plot example that requires numerical reasoning which is easily solved by DePlot+LLM but failed by MatCha.",
    "th": "ตารางที่ 8: ตัวอย่างกราฟเส้นที่ต้องใช้การใช้เหตุผลเชิงตัวเลข ซึ่ง DePlot+LLM แก้ได้ง่ายแต่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Question: Can you identify how many points the female data moved from 2009 to 2019?",
    "th": "MatCha ทำผิด คำถาม: คุณสามารถระบุได้ไหมว่าข้อมูลของผู้หญิงเปลี่ยนไปกี่จุดจากปี"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha: 0.8\nDePlot+FlanPaLM CoT: Let's find the row of year 2009, that's Row 11.",
    "th": "2009 ถึง 2019? MatCha: 0.8 DePlot+FlanPaLM CoT: หาแถวของปี"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Let's extract the number on Row 11, that's 5.27.",
    "th": "2009 ก่อน คือแถว 11 สกัดตัวเลขในแถว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Let's find the row of year 2019, that's Row 1.",
    "th": "11 ได้ 5.27 หาแถวของปี 2019 คือแถว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Let's extract the number on Row 1, that's 5.9.",
    "th": "1 สกัดตัวเลขในแถว 1 ได้ 5.9 จากนั้น"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "5.9-5.27=0.63.",
    "th": "5.9-5.27=0.63"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The answer is 0.63.",
    "th": "คำตอบคือ 0.63"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+Codex PoT:",
    "th": "DePlot+Codex PoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compiler output: 0.63",
    "th": "ผลลัพธ์จากการรันโค้ด: 0.63"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Table 9: DePlot+LLM is especially suitable for more complex numerical computations such as computing the average for multiple numbers as shown in this example.",
    "th": "ตารางที่ 9: DePlot+LLM เหมาะเป็นพิเศษสำหรับการคำนวณเชิงตัวเลขที่ซับซ้อนกว่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Question: What is the average penetration rate?",
    "th": "เช่นการคำนวณค่าเฉลี่ยของตัวเลขหลายตัวดังตัวอย่างนี้"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha: 43\nDePlot+FlanPaLM CoT: Let's add all the penetration rates: 48% + 43% + 33% + 26% + 18% = 168%.",
    "th": "คำถาม: อัตราการเข้าถึง (penetration rate) เฉลี่ยคือเท่าใด? MatCha: 43 DePlot+FlanPaLM"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "There are 5 years, so the average is 168% / 5 = 33.6%.",
    "th": "CoT: บวกอัตราการเข้าถึงทั้งหมด: 48% + 43% +"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The answer is 33.6.",
    "th": "33% + 26% + 18%"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+Codex PoT:",
    "th": "= 168% มีทั้งหมด 5 ปี ดังนั้นค่าเฉลี่ยคือ 168% / 5 = 33.6% คำตอบคือ 33.6 DePlot+Codex PoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compiler output: 33.6",
    "th": "ผลลัพธ์จากการรันโค้ด: 33.6"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Failures.",
    "th": "กรณีที่ล้มเหลว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "For questions concerning color or other visual attributes of the graph, the DePlot+LLM framework is unable to handle since such information is lost in modality translation and not considered in the current textual table encoding scheme.",
    "th": "สำหรับคำถามที่เกี่ยวข้องกับสีหรือคุณลักษณะเชิงภาพอื่น ๆ ของกราฟ กรอบงาน DePlot+LLM ไม่สามารถจัดการได้ เนื่องจากข้อมูลดังกล่าวสูญหายไปในการแปลงรูปแบบข้อมูล และไม่ได้ถูกพิจารณาในวิธีเข้ารหัสตารางเชิงข้อความปัจจุบัน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We show an additional examples in Table 10.",
    "th": "เราแสดงตัวอย่างเพิ่มเติมในตารางที่ 10"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Besides color, plot-to-table conversion can ignore other visual attributes such as the example in Table 11.",
    "th": "นอกจากสีแล้ว การแปลง plot-to-table อาจมองข้ามคุณลักษณะเชิงภาพอื่น ๆ ได้ ดังตัวอย่างในตารางที่"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "There does not exist a one-to-one alignment between dots on the line graphs and x labels.",
    "th": "11 ซึ่งไม่มีการจับคู่แบบหนึ่งต่อหนึ่งระหว่างจุดบนกราฟเส้นกับป้ายกำกับแกน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The DePlot model produces a table that, while reasonable, does not align perfectly with the ground truth dots and labels, leading to downstream reasoning errors.",
    "th": "x โมเดล DePlot สร้างตารางที่ดูสมเหตุสมผล แต่ไม่ตรงกับจุดและป้ายกำกับจริงอย่างสมบูรณ์ ส่งผลให้เกิดข้อผิดพลาดในการใช้เหตุผลขั้นปลายทาง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Table 10: All models made mistakes.",
    "th": "ตารางที่ 10: ทุกโมเดลทำผิดพลาด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "For the finetuned model MatCha, the error seems to be numerical reasoning since its 10.3 is from the correct graph.",
    "th": "สำหรับโมเดลที่ปรับแต่งแล้ว MatCha ข้อผิดพลาดดูเหมือนมาจากการใช้เหตุผลเชิงตัวเลข เนื่องจากค่า"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "However, for DePlot+LLMs, the error originates from identifying the wrong graph as the red graph.",
    "th": "10.3 มาจากกราฟที่ถูกต้อง แต่สำหรับ DePlot+LLM ข้อผิดพลาดมาจากการระบุกราฟผิด"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Question: What's the median value of the red graph?",
    "th": "(เลือกกราฟสีแดงผิดเส้น) คำถาม: ค่ามัธยฐาน"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha: 10.3\nDePlot+FlanPaLM CoT: Let's find the median value of red graph.",
    "th": "(median) ของกราฟสีแดงคือเท่าใด? MatCha: 10.3 DePlot+FlanPaLM"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The median is the middle value of the data set.",
    "th": "CoT: หาค่ามัธยฐานของกราฟสีแดง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The data set is [2, 2, 3.5, 0, 4.5, 5.6, 6.6, 6.8, 0].",
    "th": "มัธยฐานคือค่ากึ่งกลางของชุดข้อมูล ชุดข้อมูลคือ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The middle value is 4.5.",
    "th": "[2, 2, 3.5, 0, 4.5, 5.6, 6.6, 6.8, 0]"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The answer is 4.5.",
    "th": "ค่ากึ่งกลางคือ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+Codex PoT:",
    "th": "4.5 คำตอบคือ 4.5 DePlot+Codex PoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compiler output: 4.5",
    "th": "ผลลัพธ์จากการรันโค้ด: 4.5"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Table 11: An error caused by plot-to-table translation.",
    "th": "ตารางที่ 11: ข้อผิดพลาดที่เกิดจากการแปล"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The dots on the lines and the x labels (years) are not exactly aligned, causing challenges in the translation.",
    "th": "plot-to-table จุดบนเส้นกราฟและป้ายกำกับแกน x (ปี) ไม่ตรงกันพอดี ทำให้เกิดความท้าทายในการแปล"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Question: Which country's line bar shows three data points in the same place between 2010 and 2014?",
    "th": "คำถาม: เส้นกราฟของประเทศใดที่มีจุดข้อมูลซ้ำตำแหน่งเดียวกันสามจุดระหว่างปี 2010"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "MatCha: Belize\nDePlot:",
    "th": "ถึง 2014? MatCha: Belize DePlot:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+FlanPaLM CoT: Let's find the rows with countries.",
    "th": "DePlot+FlanPaLM CoT: หาแถวที่มีชื่อประเทศ"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We find Row 1, 2.",
    "th": "ได้แถว 1, 2"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Let's find the years between 2010 to 2014.",
    "th": "หาปีระหว่าง 2010 ถึง 2014 ได้แถว"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We find Row 6, 7.",
    "th": "6, 7 หาข้อมูลที่อยู่ตำแหน่งเดียวกันระหว่าง"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We find the data in the same place between 2010 to 2014.",
    "th": "2010 ถึง 2014 ได้ 61.0, 61.0, 41.0, 41.0"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "We find 61.0, 61.0, 41.0, 41.0.",
    "th": "คำตอบคือ Belize"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "The answer is Belize.",
    "th": "DePlot+Codex"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "DePlot+Codex PoT:",
    "th": "PoT:"
  },
  {
    "paper": "area2-understanding/3-DePlot_2023",
    "title": "DePlot: One-shot visual language reasoning by plot-to-table translation",
    "en": "Compiler output: Belize",
    "th": "ผลลัพธ์จากการรันโค้ด: Belize"
  }
];
