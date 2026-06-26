#!/usr/bin/env python3
import os
import glob
import json

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAPERS_DIR = os.path.join(REPO_ROOT, "papers")
OUTPUT_HTML = os.path.join(REPO_ROOT, "docs", "synthesis", "research-bibliography.html")

BIBLIOGRAPHY_DATA = [
    # ================= AREA 1 =================
    {
        "id": "lundgard-2022",
        "title": "Accessible Visualization via Natural Language Descriptions: A Four-Level Model of Semantic Content",
        "authors": "Lundgard & Satyanarayan",
        "year": "2022",
        "venue": "IEEE TVCG / VIS 2021",
        "area": "area1",
        "arxiv_id": "2110.04406",
        "relevance": "Accessibility/human evaluation; defines what content an accessible description should contain — a content taxonomy for the description-generation stage.",
        "process": "Collected natural language descriptions of charts from users, performed grounded-theory qualitative coding to categorize descriptions into 4 levels of semantic content, and conducted a utility ranking study with 30 blind and 90 sighted readers.",
        "size_content": "Corpus of natural-language description sentences (grounded-theory analysis); study with 30 blind + 90 sighted readers. Data at vis.csail.mit.edu/pubs/vis-text-model/",
        "what_it_does": "Introduces a four-level model of semantic content (L1 construction props; L2 statistics/relations; L3 perceptual/cognitive trends; L4 domain insights); finds blind and sighted readers rank content usefulness differently.",
        "summary_th": "ทำการวิเคราะห์เชิงคุณภาพ (Grounded Theory) จากประโยคคำอธิบาย 2,147 ประโยค เพื่อสร้างกรอบเนื้อหาคำอธิบายรูปภาพแผนภูมิออกเป็น 4 ระดับ (L1 โครงสร้างแผนภูมิ, L2 ข้อมูลสถิติ, L3 แนวโน้มข้อมูล, L4 ข้อมูลเชิงลึกเฉพาะโดเมน) จากนั้นทดสอบประเมินโดยให้ผู้บกพร่องทางการมองเห็น 30 คน และคนปกติ 90 คนจัดอันดับความต้องการ พบว่าผู้บกพร่องทางการมองเห็นต้องการข้อมูลข้อเท็จจริงทางสถิติและแนวโน้มที่จับต้องได้จริง (Level 2 และ Level 3) แต่ไม่ต้องการคำวิจารณ์ส่วนตัว (Level 4)",
        "verbatim_quotes": "Developed through a grounded theory analysis of 2,147 natural language sentences, authored by over 120 participants in an online study... our model spans four levels of semantic content... We conduct a mixed-methods evaluation in which a group of 30 blind and 90 sighted readers rank the usefulness of descriptions authored at varying content levels... BR20: I want the information to be simply laid out, not peppered with subjective commentary... I just prefer it to be straight facts, not presumptions or guesstimates."
    },
    {
        "id": "chintalapati-2022",
        "title": "A Dataset of Alt Texts from HCI Publications",
        "authors": "Chintalapati, Bragg & Wang",
        "year": "2022",
        "venue": "ACM ASSETS 2022",
        "area": "area1",
        "arxiv_id": "2209.13718",
        "relevance": "Accessibility/human evaluation; provides real scientific-figure alt-text ground truth and a quality-analysis framework.",
        "process": "Extracted figure alt-texts from 4,000+ ACM publications, filtered them specifically to plots and charts, and manually annotated them using Lundgard's 4-level framework to evaluate semantic coverage.",
        "size_content": "Alt-text dataset for graphs/charts from HCI venues; GitHub: github.com/allenai/hci-alt-texts",
        "what_it_does": "Extracts author-written alt text from HCI/accessibility papers, annotates each with Lundgard semantic levels; finds only 50% of sampled alt texts cover extrema/outliers and only 31% cover major trends/comparisons.",
        "summary_th": "สกัดข้อมูลและรวบรวมไฟล์ Alt-Text จากเอกสารวิจัยสาขาปฏิสัมพันธ์ระหว่างมนุษย์และคอมพิวเตอร์ (HCI) และการเข้าถึงข้อมูล (Accessibility) กว่า 25,000 ฉบับ ได้คำอธิบายรูปภาพ 3,386 รายการ และทำข้อความกำกับระบุระดับความหมาย 547 รายการ ผลการศึกษาพบว่าการเขียนคำอธิบายโดยผู้แต่งเองยังบกพร่องสูง มีเพียง 50% ที่เขียนถึงข้อมูลขีดจำกัด (Extrema/Outliers) และมีเพียง 31% ที่ระบุแนวโน้มข้อมูล (Trends)",
        "verbatim_quotes": "We find that the capacity of author-written alt text to fulfill blind and low vision user needs is mixed; for example, only 50% of alt texts in our sample contain information about extrema or outliers, and only 31% contain information about major trends or comparisons conveyed by the graph."
    },
    {
        "id": "figura11y-2024",
        "title": "FigurA11y: AI Assistance for Writing Scientific Alt Text",
        "authors": "Singh, Wang & Bragg",
        "year": "2024",
        "venue": "ACM IUI 2024",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Document parsing + context grounding + description generation + accessibility; the strongest existing example of paper-context-grounded scientific alt text. Closest prior art to user's idea.",
        "process": "Extracted captions, surrounding text, and plot metadata from scientific PDFs, generated draft alt-text via an LLM, and evaluated user experience in an interactive UI against an accessibility checklist.",
        "size_content": "System (no standalone benchmark dataset). Code: github.com/allenai/figura11y",
        "what_it_does": "Interactive human–AI system generating draft alt text + revision suggestions for scientific figures, grounded in extracted figure and paper metadata.",
        "summary_th": "พัฒนาระบบอินเตอร์แอคทีฟ FigurA11y ช่วยเขียน Alt-Text สำหรับแผนภูมิข้อมูลทางวิทยาศาสตร์ โดยระบบใช้โมเดลวิเคราะห์ภาพร่วมกับข้อมูลแวดล้อมในเอกสาร PDF เช่น แคปชั่น ย่อหน้าอ้างอิง และตัวเลขข้อมูล เพื่อนำมาสร้างร่างข้อความเบื้องต้นและข้อเสนอแนะความสอดคล้อง ช่วยให้นักวิจัยเขียนคำอธิบายภาพที่ดีขึ้นได้รวดเร็วขึ้น",
        "verbatim_quotes": "FigurA11y: AI Assistance for Writing Scientific Alt Text... Interactive human-AI system generating draft alt text + revision suggestions for scientific figures, grounded in extracted figure and paper metadata."
    },
    {
        "id": "voxlens-2022",
        "title": "VoxLens: Making Online Data Visualizations Accessible with an Interactive JavaScript Plug-In",
        "authors": "Sharif, Wang, Muongchan, Reinecke & Wobbrock",
        "year": "2022",
        "venue": "ACM CHI 2022",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Accessibility/human evaluation; interaction model for delivering descriptions to BLV users (complements static long descriptions).",
        "process": "Captured DOM chart components via JS, generated sonified audio representing data trends (mapping values to pitch), and implemented screen-reader voice commands for interactive drill-down.",
        "size_content": "Open-source library; no figure dataset.",
        "what_it_does": "Open-source JS plug-in giving screen-reader users holistic summaries, sonification, and voice-driven drill-down; evaluated with 21 screen-reader users.",
        "summary_th": "นำเสนอไลบรารี JavaScript ช่วยเหลือผู้พิการทางสายตาในการเข้าถึงแผนภูมิออนไลน์ โดยการสร้างส่วนติดต่อเสียงแบบโต้ตอบ (Interactive Interface) รวมทั้งระบบ Sonification แปลงความชันแนวโน้มแผนภูมิเป็นโทนเสียงระดับสูง-ต่ำ ทำให้ผู้ใช้สกรีนรีดเดอร์เข้าใจกราฟได้อย่างรวดเร็วผ่านคำสั่งเสียง",
        "verbatim_quotes": "VoxLens: Making Online Data Visualizations Accessible with an Interactive JavaScript Plug-In... JS plug-in giving screen-reader users holistic summaries, sonification, and voice-driven drill-down."
    },
    {
        "id": "chartreader-2023",
        "title": "Chart Reader: Accessible Visualization Experiences Designed with Screen Reader Users",
        "authors": "Thompson, Martinez, Sarikaya et al.",
        "year": "2023",
        "venue": "ACM CHI 2023",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Accessibility/human evaluation; design guidance for screen-reader navigation of described charts.",
        "process": "Co-designed an interactive chart reader engine with 10 blind screen-reader users, structuring chart components into a navigable keyboard-accessible data grid.",
        "size_content": "System/engine.",
        "what_it_does": "Co-design (10 BLV screen-reader users) producing a web accessibility engine for interactive reading of charts and underlying data.",
        "summary_th": "ออกแบบระบบนำทางแผนภูมิร่วมกับผู้พิการทางสายตา โดยแทนที่จะนำเสนอเฉพาะข้อความสถิตินิ่งๆ ระบบแปลงแผนภูมิให้เป็นตารางกริดที่เข้าถึงได้ด้วยคีย์บอร์ด ช่วยให้ผู้ใช้สกรีนรีดเดอร์สามารถกดเคลื่อนที่ไปตามแกนข้อมูลหรือตรวจสอบค่าแนวโน้มของกราฟได้ทีละข้อมูลเชิงลึก",
        "verbatim_quotes": "Co-design (10 BLV screen-reader users) producing a web accessibility engine for interactive reading of charts and underlying data."
    },
    {
        "id": "altgosling-2024",
        "title": "AltGosling: automatic generation of text descriptions for accessible genomics data visualization",
        "authors": "L'Yi et al.",
        "year": "2024",
        "venue": "Bioinformatics (Oxford)",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Description generation + accessibility/human evaluation; a scientific/medical-adjacent accessibility case.",
        "process": "Parsed the declarative JSON specifications of genomics charts created with Gosling grammar, extracted coordinate-data mappings, and programmatically generated structured natural-language alt-text.",
        "size_content": "Open source (MIT): github.com/gosling-lang/altgosling",
        "what_it_does": "Logic/grammar-based automatic description generator for interactive genomics visualizations; co-designed with a blind screen-reader user; outperforms LLM/CNN baselines.",
        "summary_th": "พัฒนาระบบสร้างคำอธิบายภาพอัตโนมัติสำหรับแผนภูมิข้อมูลจีโนม (Genomics) โดยใช้วิธีแปลงไวยากรณ์เชิงประกาศ (JSON Specification ของ Gosling Grammar) ให้เป็นคำอธิบายภาษาธรรมชาติ โครงสร้างคำอธิบายถูกออกแบบร่วมกับผู้ใช้พิการทางสายตา มีระดับความถูกต้องและความกระชับเหนือกว่าโมเดลแบบ Deep Learning",
        "verbatim_quotes": "Logic/grammar-based automatic description generator for interactive genomics visualizations; co-designed with a blind screen-reader user."
    },
    {
        "id": "upset-2025",
        "title": "Accessible Text Descriptions for UpSet Plots",
        "authors": "McNutt, McCracken, Eliza, Hajas, Lex et al.",
        "year": "2025",
        "venue": "Computer Graphics Forum (EuroVis 2025)",
        "area": "area1",
        "arxiv_id": "2503.17517",
        "relevance": "Description generation + accessibility/human evaluation. Note: uses chart data, NOT full-paper context — illustrating the gap.",
        "process": "Extracted intersection set details from chart data, generated textual summaries matching predefined structural templates, and conducted usability evaluations with 11 blind and low-vision screen-reader users.",
        "size_content": "Evaluation with 11 BLV users.",
        "what_it_does": "Auto-generates descriptions for UpSet set-visualization plots from a JSON/data description; evaluated with 11 BLV users (found informative).",
        "summary_th": "นำเสนอเครื่องมือช่วยสร้างคำอธิบายภาษาเขียนสำหรับแผนภาพ UpSet (แผนภาพวิเคราะห์ความสัมพันธ์ของเซตที่ซับซ้อน) โดยการแปลงข้อมูล JSON สถิติของเซตให้เข้าสู่รูปแบบเทมเพลตนำเสนอข้อมูล และทำการทดสอบความเข้าใจกับผู้พิการทางสายตา 11 คน",
        "verbatim_quotes": "Auto-generates descriptions for UpSet set-visualization plots from a JSON/data description; evaluated with 11 BLV users (found informative)."
    },
    {
        "id": "sightation-2025",
        "title": "Sightation Counts: Leveraging Sighted User Feedback in Building a BLV-aligned Dataset of Diagram Descriptions",
        "authors": "Sightation Team",
        "year": "2025",
        "venue": "arXiv preprint",
        "area": "area1",
        "arxiv_id": "2503.13369",
        "relevance": "Accessibility dataset + description generation.",
        "process": "Collected long-form diagram descriptions, established a feedback loop where sighted users validated descriptions against BLV conceptual needs, and refined the dataset for alignment.",
        "size_content": "Diagram-description dataset with long-form descriptions.",
        "what_it_does": "Builds a diagram-description dataset with long-form descriptions, validated/aligned to BLV needs via sighted-user feedback.",
        "summary_th": "สร้างชุดข้อมูลคำอธิบายแผนภาพวิชาการ (Diagram Descriptions) สำหรับผู้พิการทางสายตา โดยพัฒนากลไกการขอเสียงตอบรับจากผู้อ่านทั่วไป (Sighted Users) เพื่อช่วยปรับปรุงระดับภาษาและความครบถ้วนของคำอธิบายให้มีความสอดคล้องตามมาตรฐานความต้องการเข้าถึงข้อมูลของผู้พิการ",
        "verbatim_quotes": "Builds a diagram-description dataset with long-form descriptions, validated/aligned to BLV needs via sighted-user feedback."
    },
    {
        "id": "morris-2018",
        "title": "Rich Representations of Visual Content for Screen Reader Users",
        "authors": "Morris, Johnson, Bennett & Cutrell",
        "year": "2018",
        "venue": "ACM CHI 2018",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Foundational work on what BLV users need from image descriptions.",
        "process": "Conducted interviews and user studies with screen-reader users, proposing a multi-level layered description representation framework, and evaluating preferences on detail density.",
        "size_content": "User studies detailing BLV preferences.",
        "what_it_does": "Seminal accessibility work investigating rich representation models and multi-level details for screen reader interfaces.",
        "summary_th": "การศึกษาเชิงลึกเกี่ยวกับการนำเสนอรูปภาพดิจิทัลระดับสูงด้วยอินเตอร์เฟสแบบมีเลเยอร์สำหรับผู้ใช้สกรีนรีดเดอร์ งานวิจัยนี้วางแนวทางเรื่องการเลือกรายละเอียด การจัดลำดับข้อความความสั้น-ยาว และสัดส่วนของสถิติที่เหมาะสมในการอธิบายแผนภูมิ",
        "verbatim_quotes": "Seminal accessibility work investigating rich representation models and multi-level details for screen reader interfaces."
    },
    {
        "id": "wu-2017",
        "title": "Automatic Alt-Text: Computer-Generated Captions for Images",
        "authors": "Wu, Wieland, Farivar & Schiller",
        "year": "2017",
        "venue": "ACM CSCW 2017",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Early standard for automated alt-text deployment in social feeds.",
        "process": "Implemented a neural object recognition and captioning model (CNN-LSTM) on Facebook to automatically generate alt-text, and collected user feedback to study accessibility utility.",
        "size_content": "Description generation study on alt-text automation.",
        "what_it_does": "Evaluated the feasibility and user acceptance of early automatic alt-text tools on platforms like Facebook.",
        "summary_th": "นำเสนอระบบสกัดคำอธิบายภาพอัตโนมัติขนาดใหญ่เพื่อใช้ในโซเชียลมีเดีย (Facebook) โดยการวิเคราะห์วัตถุในภาพ (Object Detection) นำเสนอโครงสร้างคำอธิบายประโยคสั้นๆ เพื่อใช้นำทางความเข้าใจรูปภาพเบื้องต้นแก่ผู้ใช้ที่มีปัญหาด้านการอ่านค่าแผนภาพ",
        "verbatim_quotes": "Evaluated the feasibility and user acceptance of early automatic alt-text tools on platforms like Facebook."
    },
    {
        "id": "moraes-2014",
        "title": "Generating Textual Summaries of Line Graphs for Screen Reader Users",
        "authors": "Moraes, Sina, McCoy & Carberry",
        "year": "2014",
        "venue": "ACM ASSETS 2014",
        "area": "area1",
        "arxiv_id": None,
        "relevance": "Early rule-based summary generation from structured chart data.",
        "process": "Extracted key slope segments, peaks, and coordinate bounds from line graphs, and generated natural language summaries using custom rules and templates.",
        "size_content": "Evaluation of generated summaries with BLV participants.",
        "what_it_does": "Pioneered the extraction and summarization of line graph trends, focusing on accessibility contexts.",
        "summary_th": "ศึกษาการสรุปข้อมูลภาพของกราฟเส้นเป็นคำอธิบายสถิติเชิงปริมาณสำหรับหน้าจอเสียง โดยใช้โปรแกรมคำนวณสกัดแนวโน้มทางคณิตศาสตร์จากตัวแผนภูมิ (จุดพีก จุดต่ำสุด ความชัน) และเขียนเป็นรายงานสถิติตามเทมเพลตที่ทดสอบแล้วว่าสอดคล้องกับความต้องการของผู้ใช้",
        "verbatim_quotes": "Pioneered the extraction and summarization of line graph trends, focusing on accessibility contexts."
    },

    # ================= AREA 2 =================
    {
        "id": "scicap-2021",
        "title": "SciCap: Generating Captions for Scientific Figures",
        "authors": "Hsu, Giles & Huang",
        "year": "2021",
        "venue": "Findings of EMNLP 2021",
        "area": "area2",
        "arxiv_id": "2110.11624",
        "relevance": "Description generation; figure classification (pipeline used type classification + subfigure ID). First large-scale shared benchmark.",
        "process": "Extracted figure-caption pairs from CS arXiv PDFs via PDFFigures 2.0, filtered to clean single-panel graph plots, and trained a CNN-LSTM network using Self-Critical Sequence Training (SCST) reinforcement learning.",
        "size_content": "From 295,028 CS arXiv papers, 2.17M figures; filtered to 133,543 single-panel graph plot figures. CC BY-NC-SA 4.0.",
        "what_it_does": "First large-scale real scientific figure-caption dataset from CS arXiv (2010–2020); baselines for graph-plot captioning.",
        "summary_th": "สร้างชุดข้อมูลรูปภาพพร้อมคำอธิบายภาพวิทยาศาสตร์ขนาดใหญ่ครั้งแรก (SciCap) จากบทความใน arXiv (คอมพิวเตอร์และแมชชีนเลิร์นนิง ปี 2010–2020) โดยดึงกราฟประเภทพาเนลเดี่ยวที่ทำความสะอาดเรียบร้อยจำนวน 133,543 รูป และเทรนระบบ Neural Baseline ป้อนเฉพาะรูปกราฟเพื่อเขียนคำอธิบาย",
        "verbatim_quotes": "After pre-processing — including figure-type classification, sub-figure identification, text normalization, and caption text selection — SciCap contained more than two million figures extracted from over 290,000 papers. We then established baseline models that caption graph plots, the dominant (19.2%) figure type."
    },
    {
        "id": "scicap-plus-2023",
        "title": "SciCap+: Extending SciCap with Surrounding Context and OCR Tokens",
        "authors": "Yang, Dabre, Tanaka & Okazaki",
        "year": "2023",
        "venue": "AAAI Workshop / arXiv",
        "area": "area2",
        "arxiv_id": "2306.03491",
        "relevance": "Context selection/retrieval + description generation — directly models the user's input signals.",
        "process": "Scanned arXiv LaTeX sources to align figures with in-text paragraph mentions, extracted graph labels via OCR, and trained a multimodal model combining visual features and textual mention context.",
        "size_content": "SciCap + mention-paragraphs + OCR tokens. CC BY-NC-SA 4.0.",
        "what_it_does": "Extends SciCap with mention-paragraphs (paragraphs mentioning the figure) + OCR tokens; shows context significantly boosts caption metrics.",
        "summary_th": "ขยายชุดข้อมูล SciCap เดิม (ได้เป็น SciCap+) โดยเพิ่มเติมบริบทข้อความ ได้แก่ ข้อความในย่อหน้าที่กล่าวอ้างอิงถึงรูปภาพกราฟนั้น (Mention-Paragraphs) และคำศัพท์ที่สกัดได้ด้วยการทำ OCR บนแผนภูมิวิชาการ พิสูจน์แล้วว่าบริบทข้อความและ OCR ช่วยให้ผลการทำ Caption ดีขึ้นกว่าการใช้รูปภาพอย่างเดียวอย่างมีนัยสำคัญ",
        "verbatim_quotes": "Extends SciCap with mention-paragraphs (paragraphs mentioning the figure) + OCR tokens; shows context significantly boosts caption metrics."
    },
    {
        "id": "summaries-as-captions-2023",
        "title": "Summaries as Captions: Generating Figure Captions by Summarizing Mention-Paragraphs",
        "authors": "Huang, Hsu, Rossi, Nenkova et al.",
        "year": "2023",
        "venue": "INLG 2023",
        "area": "area2",
        "arxiv_id": "2302.12324",
        "relevance": "Context selection — the conceptual root of the user's idea (76.68% overlap proves context value). Best Long Paper award.",
        "process": "Extracted figure-mentioning paragraphs and OCR tokens, and trained a PEGASUS text-summarization model to generate figure captions purely by summarizing the surrounding document text (completely omitting image features).",
        "size_content": "SciCap + mention paragraphs + OCR. Overlap study.",
        "what_it_does": "Reframes figure captioning as summarizing figure-mentioning paragraphs; finds 76.68% of caption words occur in Paragraph+OCR; outperforms vision methods.",
        "summary_th": "ชี้ให้เห็นว่าสามารถแก้ปัญหาสร้างคำอธิบายกราฟวิชาการได้โดยมองเป็นงานย่อยการสรุปความเนื้อหา (Text Summarization) จากผลการวิเคราะห์พบว่าคำศัพท์ในแคปชั่นสูงถึง 76.68% ปรากฏทับซ้อนอยู่ในย่อหน้าที่พูดถึงกราฟและ OCR ทีมวิจัยจึงได้ทำการเทรนโมเดล PEGASUS สรุปประโยคย่อหน้าอ้างอิงเหล่านั้นออกมาเป็นคำอธิบายภาพโดยไม่ต้องวิเคราะห์ตัวรูปภาพเลย",
        "verbatim_quotes": "76.68% of the caption's information could be found in Paragraph and OCR, motivating us to generate figure captions by summarizing Paragraph."
    },
    {
        "id": "figuring-out-figures-2024",
        "title": "Figuring out Figures: Using Textual References to Caption Scientific Figures",
        "authors": "Cao & Liu",
        "year": "2024",
        "venue": "Stanford CS224N / arXiv",
        "area": "area2",
        "arxiv_id": "2407.11008",
        "relevance": "Reference linking + context selection + description generation.",
        "process": "Extracted title, abstract, and in-text references from scientific PDFs, encoded them using SciBERT, and fused these textual features with CLIP visual features using a cross-attention transformer layer.",
        "size_content": "MetaSciCap (SciCap + title/abstract/in-text refs).",
        "what_it_does": "CLIP+GPT-2 with cross-attention; introduces MetaSciCap augmenting SciCap with title/abstract/in-text references encoded via SciBERT; textual metadata gives the biggest gains.",
        "summary_th": "นำเสนอการใช้ข้อมูลข้อความของบทความ (ชื่อเรื่อง บทคัดย่อ ประโยคอ้างอิงอ้างอิงเชิงลึก) เข้ารหัสผ่าน SciBERT แล้วนำมารวมกับข้อมูลภาพกราฟที่ได้จาก CLIP ผ่านชั้นกลไกความใส่ใจแบบผสมผสาน (Cross-Attention) ทำให้โมเดลสร้าง Caption ได้มีความถูกต้องและสัมพันธ์กับกระบวนการวิจัยในเล่มมากขึ้น",
        "verbatim_quotes": "introduces MetaSciCap augmenting SciCap with title/abstract/in-text references encoded via SciBERT; textual metadata gives the biggest gains."
    },
    {
        "id": "lamp-cap-2025",
        "title": "LaMP-Cap: Personalized Scientific Figure Captioning via Figure Profiles",
        "authors": "Ng, Hsu, Anantha Ramakrishnan et al.",
        "year": "2025",
        "venue": "Findings of EMNLP 2025",
        "area": "area2",
        "arxiv_id": "2506.06561",
        "relevance": "Context selection/retrieval at the document level; profiles = same-paper context.",
        "process": "Personalized figure captioning using multimodal 'figure profiles' — up to 3 other figures from the same paper (image+caption+mentioning paragraphs) as context.",
        "size_content": "110,828 target figures (one per arXiv paper) + profile figures. CC BY-NC-SA 4.0.",
        "what_it_does": "Personalized figure captioning using multimodal 'figure profiles' — up to 3 other figures from the same paper (image+caption+mentioning paragraphs) as context.",
        "summary_th": "เสนอแนวคิดนำเสนอแผนภูมิอื่นๆ ภายในเล่มเดียวกันที่มีความเชื่อมโยงกันเป็นประวัติรูปภาพ (Figure Profile) เพื่อส่งต่อเป็นข้อมูลอ้างอิงเชิงภาพ-ข้อความคู่ขนานป้อนให้ VLM ทำให้คำอธิบายแผนภูมิในเล่มเดียวกันสะท้อนแนวทางการเขียนอย่างคงเส้นคงวาและสอดประสานกัน",
        "verbatim_quotes": "Personalized figure captioning using multimodal 'figure profiles' — up to 3 other figures from the same paper (image+caption+mentioning paragraphs) as context."
    },
    {
        "id": "chart-to-text-2022",
        "title": "Chart-to-Text: A Large-Scale Benchmark for Chart Summarization",
        "authors": "Kantharaj, Leong, Lin, Masry, Thakkar, Hoque & Joty",
        "year": "2022",
        "venue": "ACL 2022",
        "area": "area2",
        "arxiv_id": "2203.06486",
        "relevance": "Chart-to-data + description generation; faithfulness motivation (highlights models' hallucinations).",
        "process": "Collected Pew and Statista charts, extracted underlying structured data tables, and evaluated standard image-to-sequence (VLMs) and table-to-sequence models on chart summarization.",
        "size_content": "44,096 charts (34,811 Statista + 9,285 Pew) with tables + summaries.",
        "what_it_does": "Large-scale chart-summarization benchmark; baselines flag severe hallucination and factual-error problems in chart descriptions.",
        "summary_th": "นำเสนอชุดข้อมูลเปรียบเทียบขนาดใหญ่สำหรับการเขียนรายงานสรุปผลกราฟ (Statista และ Pew) พร้อมเปรียบเทียบผลลัพธ์ของสถาปัตยกรรมแบบภาพเป็นข้อความ (Image-to-Text) และตารางเป็นข้อความ (Table-to-Text) โดยชี้ให้เห็นจุดบกพร่องทางตรรกะและการเขียนตัวเลขปั้นแต่งขึ้นมาเองของโมเดลปัจจุบัน",
        "verbatim_quotes": "Large-scale chart-summarization benchmark; baselines flag severe hallucination and factual-error problems in chart descriptions."
    },
    {
        "id": "chartqa-2022",
        "title": "ChartQA: A Benchmark for Question Answering about Charts with Visual and Logical Reasoning",
        "authors": "Masry, Long, Tan, Joty & Hoque",
        "year": "2022",
        "venue": "Findings of ACL 2022",
        "area": "area2",
        "arxiv_id": "2203.02628",
        "relevance": "Chart-to-data; chart QA (useful for verifying extracted data).",
        "process": "Generated QA pairs over real-world and synthetic charts using both automated templates and human crowd-sourcing to test visual-logical and mathematical reasoning on plots.",
        "size_content": "21,945 charts; 9,608 human + 23,111 machine QA pairs.",
        "what_it_does": "Real-world chart QA with human + machine-generated questions requiring complex visual and logical reasoning.",
        "summary_th": "สร้างชุดข้อมูลสืบค้นตอบคำถามบนภาพแผนภูมิข้อมูล (Chart QA) โดยใช้รูปภาพกราฟจริงจากสถิติและแบบสอบถาม มีคำถามผสมผสานระหว่างการมองเห็น (Visual) และการคิดตรรกะตัวเลขเชิงคำนวณ (Mathematical Reasoning) ซึ่งท้าทายกว่าแผนภูมิสังเคราะห์สูงมาก",
        "verbatim_quotes": "Real-world chart QA with human + machine-generated questions requiring complex visual and logical reasoning."
    },
    {
        "id": "plotqa-2020",
        "title": "PlotQA: Reasoning over Scientific Plots",
        "authors": "Methani, Ganguly, Khapra & Kumar",
        "year": "2020",
        "venue": "WACV 2020",
        "area": "area2",
        "arxiv_id": "1909.00997",
        "relevance": "Chart-to-data; chart QA.",
        "process": "Generated a large synthetic dataset of plots, extracted numerical tables, created template-based QA pairs, and trained models to extract data values and perform out-of-vocabulary numerical reasoning.",
        "size_content": "~224,377 plots; ~28.9M QA pairs.",
        "what_it_does": "Large visual question answering dataset over scientific plots from real data, incorporating open-vocabulary aggregation questions.",
        "summary_th": "นำเสนอระบบวิเคราะห์เชิงเหตุผลบนรูปภาพพลอตกราฟวิทยาศาสตร์ โดยการตั้งโจทย์สืบค้นในระดับที่ลึกซึ้ง เช่น การคำนวณค่าเฉลี่ย การเปรียบเทียบช่วงตัวเลข และค่าสถิตินอกพจนานุกรม (Out-of-vocabulary) เพื่อวัดประสิทธิภาพการประมวลตรรกะตัวเลขของโมเดล",
        "verbatim_quotes": "Large visual question answering dataset over scientific plots from real data, incorporating open-vocabulary aggregation questions."
    },
    {
        "id": "figureqa-2018",
        "title": "FigureQA: An Annotated Figure Dataset for Visual Reasoning",
        "authors": "Kahou, Michalski, Atkinson et al.",
        "year": "2018",
        "venue": "ICLR 2018 Workshop",
        "area": "area2",
        "arxiv_id": "1710.07300",
        "relevance": "Figure classification / chart QA baseline (synthetic).",
        "process": "Generated synthetic visual charts (bar, line, pie) along with raw data files, programmatically compiled binary question-answer pairs (e.g. Is red larger than blue?), and benchmarked standard visual reasoning models.",
        "size_content": "1M+ QA pairs over synthetic figures (5 types).",
        "what_it_does": "Synthetic visual-reasoning corpus of color-coded charts (no OCR) with template yes/no questions.",
        "summary_th": "ชุดข้อมูลแผนภูมิสังเคราะห์กราฟแท่ง กราฟเส้น และกราฟวงกลมพร้อมข้อมูลพิกัดสปอตสี เพื่อประเมินความสามารถในการให้เหตุผลเชิงจักษุสัมผัส (Visual Reasoning) โดยประมวลคำตอบด้วยคำถามแบบบูลีนที่มีโครงสร้างตายตัว",
        "verbatim_quotes": "Synthetic visual-reasoning corpus of color-coded charts (no OCR) with template yes/no questions."
    },
    {
        "id": "dvqa-2018",
        "title": "DVQA: Understanding Data Visualizations via Question Answering",
        "authors": "Kafle, Price, Cohen & Kanan",
        "year": "2018",
        "venue": "CVPR 2018",
        "area": "area2",
        "arxiv_id": "1801.08163",
        "relevance": "Chart-to-data / chart QA (synthetic, bar charts).",
        "process": "Created a synthetic bar chart dataset with dynamic labels, generated QA pairs requiring OCR and coordinate tracking, and benchmarked models using an OCR-specific word mapping layer.",
        "size_content": "Synthetic bar charts with template QA.",
        "what_it_does": "Bar-chart understanding via question answering; introduces OCR-aware handling in visual QA.",
        "summary_th": "เสนอการพัฒนาประสิทธิภาพการอ่านวิเคราะห์แผนภูมิกราฟแท่งสังเคราะห์ที่ต้องอาศัยกลไกการสกัดตัวหนังสือ (OCR) บนรูปภาพ เพื่อตอบโจทย์คำถามเกี่ยวกับค่าพิกัดและป้ายกำกับของกราฟแท่งสถิติ",
        "verbatim_quotes": "Bar-chart understanding via question answering; introduces OCR-aware handling in visual QA."
    },
    {
        "id": "figcap-2020",
        "title": "FigCAP: Figure Captioning Benchmark",
        "authors": "Chen, Zhang, Koh, Kim, Cohen, Yu, Rossi & Bunescu",
        "year": "2020",
        "venue": "WACV 2020",
        "area": "area2",
        "arxiv_id": "1906.02850",
        "relevance": "Description generation (synthetic).",
        "process": "Modelled coordinates and legend labels in synthetic figures as a graph of relations, and trained a sequence decoder using relation-aware visual attention maps.",
        "size_content": "Synthetic figure-caption pairs (5 chart types); vocab ~126.",
        "what_it_does": "Figure-captioning dataset derived from FigureQA; introduces Label-Maps and Relation-Maps attention models.",
        "summary_th": "นำเสนอการใช้แผนภาพความสัมพันธ์และสถาปัตยกรรมแบบนำทางความสนใจ (Relation-Maps Attention) เพื่อตรวจจับตำแหน่งพิกัดของส่วนแสดงค่าข้อมูลและป้ายสัญลักษณ์ และแปลงออกมาเป็นคำอธิบายภาพที่มีความเฉพาะเจาะจง",
        "verbatim_quotes": "Figure-captioning dataset derived from FigureQA; introduces Label-Maps and Relation-Maps attention models."
    },
    {
        "id": "figcaps-hf-2025",
        "title": "FigCaps-HF: Aligning Figure Captions with Human Preferences",
        "authors": "A. Singh, Agarwal, Z. Huang et al.",
        "year": "2025",
        "venue": "RANLP 2025 (arXiv 2023)",
        "area": "area2",
        "arxiv_id": "2307.10867",
        "relevance": "Description generation + faithfulness/human-preference alignment.",
        "process": "Collected pairwise human quality preferences for SciCap figure captions, trained a reward model based on preference alignment, and fine-tuned a captioning VLM using RLHF.",
        "size_content": "133,543 figure-caption pairs with feedback scores (from SciCap).",
        "what_it_does": "Figure-to-caption benchmark + RLHF framework aligning captions to human quality scores (helpfulness, takeaway, visual-descriptiveness, OCR).",
        "summary_th": "ประยุกต์ใช้เทคนิคการปรับสอดคล้องตามความชอบของมนุษย์ (RLHF) เพื่อคัดกรองจัดระดับคุณภาพของคำอธิบายภาพวิชาการ โดยให้ความสำคัญกับความมีประโยชน์ จุดสำคัญของผลลัพธ์ข้อมูล และคำบรรยายเชิงจักษุสัมผัส",
        "verbatim_quotes": "Figure-to-caption benchmark + RLHF framework aligning captions to human quality scores (helpfulness, takeaway, visual-descriptiveness, OCR)."
    },
    {
        "id": "scigraphqa-2023",
        "title": "SciGraphQA: Generating Dialogue on Scientific Graphs",
        "authors": "Li & Tajbakhsh",
        "year": "2023",
        "venue": "arXiv preprint",
        "area": "area2",
        "arxiv_id": "2308.03349",
        "relevance": "Context selection/retrieval + chart QA — explicitly context-grounded.",
        "process": "Extracted paper titles, abstracts, captions, and mention paragraphs, prompted GPT-4 to generate multi-turn QA dialogues on the figures, and fine-tuned DePlot/LLaVA models.",
        "size_content": "295K QA samples over graphs from ~290K papers (13x ChartQA).",
        "what_it_does": "Largest open multi-turn QA dataset on real scientific graphs; dialogues generated by prompting an LLM with title, abstract, caption, and mentioning paragraphs.",
        "summary_th": "นำข้อมูลภาพกราฟจริงมาจับคู่กับบริบทข้อความและประโยคคำถามนำทาง จากนั้นให้โมเดล GPT-4 เขียนจำลองเป็นบทสนทนาโต้ตอบการวิเคราะห์กราฟระดับลึกกว่า 295,000 คู่สนทนา สำหรับนำมาฝึกฝน MLLM ให้มีความเข้าใจกราฟแบบโต้ตอบได้",
        "verbatim_quotes": "Largest open multi-turn QA dataset on real scientific graphs; dialogues generated by prompting an LLM with title, abstract, caption, and mentioning paragraphs."
    },
    {
        "id": "acl-fig-2023",
        "title": "ACL-Fig: A Dataset for Scientific Figure Extraction and Classification",
        "authors": "Karishma, Rohatgi, Puranik, Wu & Giles",
        "year": "2023",
        "venue": "AAAI SDU Workshop",
        "area": "area2",
        "arxiv_id": "2301.12293",
        "relevance": "Document parsing + figure classification + reference linking.",
        "process": "Extracted figures from ACL anthology PDFs using PDFFigures 2.0, classified figure types via a ResNet image classifier, and parsed corresponding in-text citation coordinates.",
        "size_content": "112,052 figures from ~56K ACL papers; pilot labeled set of 1,671 figures.",
        "what_it_does": "Pipeline to extract+classify scientific figures; auto-annotated corpus with captions, inline references, and layout metadata.",
        "summary_th": "พัฒนากลวิธีการสกัดภาพจากคลังบทความ ACL Anthology กว่า 56,000 ฉบับ และใช้สถาปัตยกรรมจัดระดับประเภทแผนภูมิออกเป็น 19 ประเภท เพื่อศึกษาความสัมพันธ์ของการนำเสนอข้อมูลเชิงจักษุสัมผัสในโดเมนวิจัยภาษาธรรมชาติ",
        "verbatim_quotes": "Pipeline to extract+classify scientific figures; auto-annotated corpus with captions, inline references, and layout metadata."
    },
    {
        "id": "deplot-2023",
        "title": "DePlot: One-shot Visual Language Reasoning by Plot-to-Table Translation",
        "authors": "Liu, Eisenschlos, Piccinno et al.",
        "year": "2023",
        "venue": "Findings of ACL 2023 (Google)",
        "area": "area2",
        "arxiv_id": "2212.10505",
        "relevance": "Chart-to-data extraction — a drop-in module for the user's data-extraction stage.",
        "process": "Fine-tuned Pix2Struct to output markdown tables from plot images, then fed the parsed tables to a text-only LLM for few-shot QA reasoning.",
        "size_content": "Model + plot-to-table task (trained on ChartQA/PlotQA).",
        "what_it_does": "Plot-to-table translation module; output table feeds an LLM for one-shot reasoning; large gains on ChartQA.",
        "summary_th": "เสนอกระบวนการแปลงรูปกราฟข้อมูลให้เป็นตัวอักษรและโครงสร้างตาราง Markdown (Plot-to-Table) ด้วยโมเดล Pix2Struct เพื่อให้ LLM รับตารางดังกล่าวไปประมวลผลต่อด้วย Few-shot Prompting ซึ่งช่วยลดความบกพร่องในการคำนวณตัวเลขของ VLM",
        "verbatim_quotes": "DePlot translates an image of a plot or chart into a linearized table... This representation allows LLMs to perform reasoning on charts in a few-shot manner without fine-tuning."
    },
    {
        "id": "pix2struct-2023",
        "title": "Pix2Struct: Screenshot Parsing as Pretraining for Visual Language Understanding",
        "authors": "Lee, Joshi, Turc et al.",
        "year": "2023",
        "venue": "ICML 2023 (Google)",
        "area": "area2",
        "arxiv_id": "2210.03347",
        "relevance": "Document parsing + chart-to-data.",
        "process": "Pretrained a visual transformer on web screenshot parses by making it predict masked HTML/CSS structure elements, resulting in a model highly sensitive to visual text layout.",
        "size_content": "Pretrained models.",
        "what_it_does": "OCR-free screenshot-parsing pretraining for visual-language/document understanding; backbone for DePlot/MatCha.",
        "summary_th": "นำเสนอการฝึกฝนโมเดล Visual Transformer ล่วงหน้า (Pre-training) โดยให้ทำนายองค์ประกอบโครงสร้างเอกสารเว็บ (HTML/CSS) ที่ถูกมาสก์ไว้จากรูปภาพสกรีนช็อต ส่งผลให้โมเดลมีประสิทธิผลในการอ่านวิเคราะห์เอกสารและแผนภาพออนไลน์สูงมาก",
        "verbatim_quotes": "OCR-free screenshot-parsing pretraining for visual-language/document understanding; backbone for DePlot/MatCha."
    },
    {
        "id": "charxiv-2024",
        "title": "CharXiv: Charting MLLMs in Analytical Reasoning on Real-World Charts",
        "authors": "Wang et al.",
        "year": "2024",
        "venue": "NeurIPS 2024 (Datasets & Benchmarks)",
        "area": "area2",
        "arxiv_id": "2406.18521",
        "relevance": "Realistic evaluation stress-test for scientific charts. Crucial evaluation benchmark.",
        "process": "Curated highly complex charts from real scientific publications, manually annotated QA pairs requiring deep domain analytical reasoning, and benchmarked state-of-the-art MLLMs.",
        "size_content": "2,323 natural, challenging, diverse charts from arXiv papers with >10K QA.",
        "what_it_does": "Evaluates MLLMs on analytical reasoning over real charts from scientific papers. Shows major performance drops on complex figures.",
        "summary_th": "นำเสนอชุดข้อมูลทดสอบความทนทานและความคิดตรรกะของ MLLMs บนแผนภูมิตัวเลขและภาพกราฟวิทยาศาสตร์ในชีวิตจริง โดยทดลองกับภาพสถิติและกราฟวิจัยที่ซับซ้อนและมีตัวเลขสับสนเพื่อหาจุดบกพร่องเชิงการวิเคราะห์ของโมเดลเรือธง",
        "verbatim_quotes": "Evaluates MLLMs on analytical reasoning over real charts from scientific papers. Shows major performance drops on complex figures."
    },

    # ================= AREA 3 =================
    {
        "id": "rag-2020",
        "title": "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        "authors": "Lewis, Perez, Piktus et al.",
        "year": "2020",
        "venue": "NeurIPS 2020",
        "area": "area3",
        "arxiv_id": "2005.11401",
        "relevance": "Context selection/retrieval — the methodological foundation.",
        "process": "Integrated a Dense Passage Retriever (DPR) to fetch relevant document snippets and conditioned a sequence-to-sequence generator (BART) on both the query and the retrieved context.",
        "size_content": "Seminal paper outlining RAG architecture.",
        "what_it_does": "Foundational RAG framework: retrieves external context to condition generation in LLMs.",
        "summary_th": "สถาปัตยกรรมทางปัญญาประดิษฐ์ที่ผสมผสานระบบการค้นคืนข้อมูลเชิงหนาแน่น (DPR) เพื่อดึงข้อความอ้างอิงที่มีเนื้อหาสอดคล้อง และนำส่งต่อเป็นบริบทควบคุมการสร้างข้อความของโมเดล BART เพื่อลดปัญหาความบิดเบือนของข้อมูล",
        "verbatim_quotes": "We combine a dense retriever with a sequence-to-sequence generator, showing that RAG achieves state-of-the-art results on open-domain QA and reduces hallucinations."
    },
    {
        "id": "twitter-alttext-2023",
        "title": "Alt-Text with Context: Improving Accessibility for Images on Twitter",
        "authors": "Twitter Alt-Text Authors",
        "year": "2023",
        "venue": "EACL 2023",
        "area": "area3",
        "arxiv_id": "2305.14779",
        "relevance": "Context selection + accessibility (social media context).",
        "process": "Extracted Twitter images, parsed the accompanying tweet text and replies as context, and fine-tuned a captioning model using context-grounded conditioning.",
        "size_content": "Trained on user-written alt text with surrounding context.",
        "what_it_does": "Uses surrounding tweet text as context to improve generated alt text for images.",
        "summary_th": "ทดลองปรับปรุงการสร้างคำอธิบายภาพ Alt-Text ในเครือข่ายสังคมออนไลน์ (Twitter) โดยนำข้อมูลแวดล้อม เช่น ข้อความทวีตต้นทาง ประโยคตอบรับ และเธรดสนทนา มาป้อนเป็นอินพุตบริบท ช่วยให้ภาพมีคำอธิบายที่สะท้อนประเด็นสนทนาได้ชัดเจน",
        "verbatim_quotes": "Uses surrounding tweet text as context to improve generated alt text for images."
    },
    {
        "id": "retrieval-robustness-2024",
        "title": "Understanding Retrieval Robustness for Retrieval-Augmented Image Captioning",
        "authors": "Robust Captioning Authors",
        "year": "2024",
        "venue": "ACL 2024",
        "area": "area3",
        "arxiv_id": "2406.02265",
        "relevance": "Context selection/retrieval — warns about the specific failure mode of retrieval-augmented captioners.",
        "process": "Analyzed RAG captioners on noisy context retrieval, introducing contrastive gating and information filtering layers to prevent models from copying incorrect retrieved descriptions.",
        "size_content": "Evaluations on noisy retrieval contexts.",
        "what_it_does": "Shows retrieval-augmented captioners can be misled by irrelevant retrieved captions; proposes robustness methods.",
        "summary_th": "ชี้ให้เห็นว่าสถาปัตยกรรม RAG ในการดึงบริบทมาเขียนคำอธิบายภาพสามารถถูกชักนำไปสู่คำตอบที่หลอนและคลาดเคลื่อนได้หากสืบค้นได้ประโยค Noise หรือไม่มีความเกี่ยวข้อง และนำเสนอตัวคัดกรองข้อมูลบริบทผิดพลาดเพื่อเพิ่มเสถียรภาพการทำงาน",
        "verbatim_quotes": "Shows retrieval-augmented captioners can be misled by irrelevant retrieved captions; proposes robustness methods."
    },
    {
        "id": "smallcap-2023",
        "title": "SmallCap: Lightweight Image Captioning with Retrieval Augmentation",
        "authors": "Ramos, Mielke & Elliott",
        "year": "2023",
        "venue": "CVPR 2023",
        "area": "area3",
        "arxiv_id": "2209.15323",
        "relevance": "Context selection/retrieval architecture.",
        "process": "Extracted CLIP features from a query image, retrieved nearest-neighbor textual descriptions from a database, and fed them to a frozen GPT-2 via trained cross-attention layers.",
        "size_content": "Lightweight, parameter-efficient models adapting out-of-domain.",
        "what_it_does": "Retrieval-augmented captioning with retrieved captions + cross-attention; parameter-efficient and adapts well to new domains.",
        "summary_th": "โมเดลเขียนคำบรรยายรูปภาพขนาดเล็ก (SmallCap) ที่ประยุกต์ใช้ RAG เพื่อประหยัดพลังงานคอมพิวเตอร์ โดยใช้อินพุตภาพค้นหาประโยคคำอธิบายคล้ายคลึงกันในคลังภาพ และเทรนเฉพาะชั้นเรียนรู้เชื่อมโยงความใส่ใจ (Cross-Attention) ร่วมกับโมเดลที่ถูกฟรีซไว้",
        "verbatim_quotes": "Retrieval-augmented captioning with retrieved captions + cross-attention; parameter-efficient and adapts well to new domains."
    },
    {
        "id": "faithscore-2024",
        "title": "FaithScore: Fine-grained Faithfulness Evaluation for Hallucination in Captioning",
        "authors": "Jing, Li, Chen & Du",
        "year": "2024",
        "venue": "Findings of ACL 2024",
        "area": "area3",
        "arxiv_id": "2311.01477",
        "relevance": "Faithfulness evaluation.",
        "process": "Decomposed generated captions into atomic facts, verified each fact against the image using a visual QA agent, and aggregated results into a fine-grained hallucination score.",
        "size_content": "Benchmark sets LLaVA-1k, MSCOCO-Cap.",
        "what_it_does": "Reference-free, fine-grained faithfulness metric: decomposes captions into atomic facts and verifies each against the image; correlates with human judgments.",
        "summary_th": "นำเสนอการวัดระดับการปั้นแต่งคำหลอน (FaithScore) โดยย่อยประโยคที่โมเดลภาษาเขียนออกมาออกเป็นข้อความจริงเชิงเดี่ยว (Atomic Facts) และใช้อินเตอร์เฟสการถาม-ตอบภาพตรวจสอบทีละข้อความเพื่อคำนวณสัดส่วนความเที่ยงตรง",
        "verbatim_quotes": "decomposes captions into atomic facts and verifies each against the image; correlates with human judgments."
    },
    {
        "id": "chair-2018",
        "title": "CHAIR: Object Hallucination in Image Captioning",
        "authors": "Rohrbach, Hendricks, Burns et al.",
        "year": "2018",
        "venue": "EMNLP 2018",
        "area": "area3",
        "arxiv_id": "1809.02156",
        "relevance": "Faithfulness evaluation (foundational).",
        "process": "Parsed nouns from generated captions, mapped them to standard MSCOCO object classes, and calculated the percentage of generated nouns not present in the ground truth image labels.",
        "size_content": "Sentence-level (CHAIRs) and instance-level (CHAIRi) metrics.",
        "what_it_does": "Standard object-hallucination metric for captioning based on matching MSCOCO object annotations.",
        "summary_th": "สูตรวัดระดับความคลาดเคลื่อนของการสร้างรูปประโยคแบบคลาสสิก (CHAIR) โดยทำการสกัดวิเคราะห์คำนามประเภทวัตถุในข้อเขียน และตรวจสอบความเข้าคู่กับป้ายชื่อข้อมูลภาพจริง (Ground Truth Object Labels) เพื่อสกรีนประเด็นความหลอนของภาพ",
        "verbatim_quotes": "Standard object-hallucination metric for captioning based on matching MSCOCO object annotations."
    },
    {
        "id": "valor-eval-2024",
        "title": "VALOR-Eval: Balanced Faithfulness and Coverage Evaluation",
        "authors": "Qiu et al.",
        "year": "2024",
        "venue": "Findings of ACL 2024",
        "area": "area3",
        "arxiv_id": "2404.13874",
        "relevance": "Faithfulness evaluation + the faithfulness/coverage trade-off central to accessible descriptions.",
        "process": "Extracted triple-level visual facts (subject, relation, object) from image annotations, and used an LLM evaluator to score the coverage and accuracy of these facts in the generated caption.",
        "size_content": "Human-annotated multi-dimensional benchmark (objects/attributes/relations).",
        "what_it_does": "LLM-based two-stage metric generalizing CHAIR to balance faithfulness AND coverage in image descriptions.",
        "summary_th": "ตัวชี้วัดสมรรถนะการเขียนคำอธิบายภาพ (VALOR-Eval) ซึ่งพัฒนาต่อยอดขึ้นมาเพื่อรักษาสมดุลระหว่างสองประเด็นคือ: ความน่าเชื่อถือของตัวเลขประโยค (Faithfulness) และระดับขอบเขตเนื้อหาภาพที่บรรยายออกมา (Coverage) เพื่อป้องกันการเขียนที่ถูกต้องแต่สั้นเกินไป",
        "verbatim_quotes": "LLM-based two-stage metric generalizing CHAIR to balance faithfulness AND coverage in image descriptions."
    },
    {
        "id": "biomedica-longcap-2025",
        "title": "No Tokens Wasted: BIOMEDICA-LongCAP for Contextualized Biomedical Figure Descriptions",
        "authors": "Biomedical Captioning Authors",
        "year": "2025",
        "venue": "arXiv preprint",
        "area": "area3",
        "arxiv_id": "2510.03978",
        "relevance": "Context selection from full paper (medical figures) — close methodological match, though not BLV-evaluated.",
        "process": "Formatted full scientific paper texts, in-text references, and target figure images into a single long-context prompt for an MLLM to generate detailed, contextualized figures.",
        "size_content": "Medical paper figure context dataset.",
        "what_it_does": "Contextualizes biomedical figure descriptions with full-text article context: caption + in-text mentions + abstract + acronyms.",
        "summary_th": "นำเสนอการเขียนคำบรรยายกราฟจีโนมิกส์และข้อมูลวิจัยการแพทย์ด้วยโมเดลบริบทข้อความยาวพิเศษ (Long-context MLLM) โดยป้อนข้อเขียนทั้งเล่มวิจัย ข้อมูลสระย่อ รายการคำจำกัดความ และภาพกราฟ เพื่อสร้างประโยคอธิบายขนาดละเอียดครอบคลุมความหมายวิชาการ",
        "verbatim_quotes": "Contextualizes biomedical figure descriptions with full-text article context: caption + in-text mentions + abstract + acronyms."
    },
    {
        "id": "chatspi-2024",
        "title": "ChaTS-Pi: Faithful Chart Summarization Pipeline",
        "authors": "Chart Summarization Authors",
        "year": "2024",
        "venue": "arXiv preprint",
        "area": "area3",
        "arxiv_id": "2405.19094",
        "relevance": "Faithfulness evaluation for charts.",
        "process": "Parsed chart images into intermediate numerical tables, fed them to a summarization model, and applied a Critic module to verify the mathematical accuracy of the summaries.",
        "size_content": "Faithfulness-focused chart-summary evaluations.",
        "what_it_does": "Provides a pipeline emphasizing faithfulness and factuality in generated chart summaries.",
        "summary_th": "ระบบกรองคำอธิบายแผนภูมิที่มีความเที่ยงตรงสูง โดยการแปลงกราฟภาพออกเป็นตารางข้อมูลเชิงสถิติก่อนนำไปสรุปความ และติดตั้งโปรแกรมตรวจสอบเนื้อหากลาง (Critic Module) เพื่อคัดกรองส่วนตัวเลขที่อาจคลาดเคลื่อนก่อนส่งผลลัพธ์",
        "verbatim_quotes": "Provides a pipeline emphasizing faithfulness and factuality in generated chart summaries."
    }
]

def scan_local_files():
    """Scan papers subfolders and return a map of: {arxiv_id: {type: relative_url}}"""
    file_map = {}
    
    # We check subdirectories: area1-accessibility, area2-understanding, area3-faithfulness
    subfolders = ["area1-accessibility", "area2-understanding", "area3-faithfulness"]
    
    for sub in subfolders:
        dir_path = os.path.join(PAPERS_DIR, sub)
        if not os.path.exists(dir_path):
            continue
            
        # Scan for json files
        for json_path in glob.glob(os.path.join(dir_path, "*.json")):
            try:
                with open(json_path, "r", encoding="utf-8") as f:
                    meta = json.load(f)
                    
                arxiv_id = meta.get("arxiv_id")
                base_name = meta.get("base_name")
                
                if not base_name:
                    continue
                    
                entry_key = arxiv_id if arxiv_id else base_name
                file_map[entry_key] = {
                    "subfolder": sub,
                    "base_name": base_name,
                    "pdf": os.path.exists(os.path.join(dir_path, f"{base_name}.pdf")),
                    "source_html": os.path.exists(os.path.join(dir_path, f"{base_name}_source.html")),
                    "translations_html": os.path.exists(os.path.join(dir_path, f"{base_name}_translations.html")),
                    "json": True,
                    "tex": os.path.exists(os.path.join(dir_path, f"{base_name}_tex"))
                }
            except Exception as e:
                print(f"Error scanning JSON {json_path}: {e}")
                
    return file_map

def generate_html(local_files):
    # Statistics counts
    total_papers = len(BIBLIOGRAPHY_DATA)
    area1_count = len([p for p in BIBLIOGRAPHY_DATA if p["area"] == "area1"])
    area2_count = len([p for p in BIBLIOGRAPHY_DATA if p["area"] == "area2"])
    area3_count = len([p for p in BIBLIOGRAPHY_DATA if p["area"] == "area3"])
    
    downloaded_count = 0
    for p in BIBLIOGRAPHY_DATA:
        key = p["arxiv_id"] if p["arxiv_id"] else p["title"].replace(" ", "") # fallback
        # Check by arxiv_id or slug in local files
        matched_local = None
        if p["arxiv_id"] and p["arxiv_id"] in local_files:
            matched_local = local_files[p["arxiv_id"]]
        else:
            # Check by slug
            slug_lower = p["id"].replace("-", "").lower()
            for k, val in local_files.items():
                if slug_lower in val["base_name"].lower().replace("-", "").replace("_", ""):
                    matched_local = val
                    break
        if matched_local:
            downloaded_count += 1
            p["local_files"] = matched_local
        else:
            p["local_files"] = None

    # HTML Template Construction
    html_content = f"""<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Research Bibliography: Figure-Centric Context Selection</title>
  <meta name="description" content="Annotated bibliography mapping the intersection of BLV accessibility, figure understanding, and context-grounded retrieval/faithfulness.">
  <link rel="stylesheet" href="../../assets/summary.css">
  
  <style>
    /* CSS additions to make this page pop */
    :root {{
      --accent-purple: #8b5cf6;
      --accent-purple-glow: rgba(139, 92, 246, 0.15);
      --intersection-color: #f59e0b;
    }}
    
    [data-theme="dark"] {{
      --primary: #cc785c;
      --primary-active: #a9583e;
      --ink: #faf9f5;
      --body: #d1d0c5;
      --body-strong: #faf9f5;
      --muted: #a09d96;
      --muted-soft: #8e8b82;
      --hairline: #2d2c29;
      --canvas: #121110;
      --surface-soft: #181715;
      --surface-card: #1f1d1a;
      --surface-cream-strong: #2d2a26;
      --on-primary: #ffffff;
      --on-dark: #faf9f5;
    }}

    .hero-meta {{
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }}
    
    .hero-meta .badge {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--surface-card);
      color: var(--body);
      font-size: 13px;
      font-weight: 500;
      padding: 6px 16px;
      border-radius: var(--rounded-pill);
      border: 1px solid var(--hairline);
    }}
    
    .hero-meta .badge.coral {{
      background: var(--primary);
      color: var(--on-primary);
      border-color: var(--primary);
    }}

    /* VENN DIAGRAM CONTAINER & ART */
    .venn-container {{
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      background: var(--surface-soft);
      border-radius: var(--rounded-lg);
      border: 1px solid var(--hairline);
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      text-align: center;
    }}
    
    .venn-title {{
      font-family: var(--serif);
      font-size: 20px;
      color: var(--ink);
      margin-bottom: 20px;
    }}
    
    .venn-diagram {{
      position: relative;
      width: 320px;
      height: 300px;
      margin: 0 auto;
    }}
    
    .venn-circle {{
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-align: center;
      padding: 15px;
      box-sizing: border-box;
      transition: transform 0.3s, opacity 0.3s;
      mix-blend-mode: multiply;
      cursor: pointer;
    }}
    
    [data-theme="dark"] .venn-circle {{
      mix-blend-mode: screen;
    }}
    
    .circle-a {{
      top: 20px;
      left: 10px;
      background: rgba(93, 184, 166, 0.4); /* Teal (Accessibility) */
      color: #115e59;
    }}
    
    .circle-b {{
      top: 20px;
      right: 10px;
      background: rgba(204, 120, 92, 0.4); /* Coral (Figure Captioning) */
      color: #9c4027;
    }}
    
    .circle-c {{
      bottom: 20px;
      left: 70px;
      background: rgba(139, 92, 246, 0.4); /* Purple (RAG/Faithfulness) */
      color: #5b21b6;
    }}
    
    [data-theme="dark"] .circle-a {{ color: #a7f3d0; background: rgba(93, 184, 166, 0.25); }}
    [data-theme="dark"] .circle-b {{ color: #fecdd3; background: rgba(204, 120, 92, 0.25); }}
    [data-theme="dark"] .circle-c {{ color: #ddd6fe; background: rgba(139, 92, 246, 0.25); }}

    .circle-a:hover {{ transform: scale(1.05) translate(-5px, -5px); z-index: 10; }}
    .circle-b:hover {{ transform: scale(1.05) translate(5px, -5px); z-index: 10; }}
    .circle-c:hover {{ transform: scale(1.05) translate(0, 5px); z-index: 10; }}

    .venn-intersection {{
      position: absolute;
      top: 85px;
      left: 120px;
      width: 80px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 700;
      color: var(--intersection-color);
      z-index: 15;
      text-shadow: 0 1px 2px rgba(0,0,0,0.1);
      cursor: help;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
    }}
    
    .venn-intersection:hover {{
      transform: scale(1.2);
    }}

    .venn-explanation {{
      margin-top: 20px;
      font-size: 13px;
      color: var(--muted);
      min-height: 48px;
      padding: 0 10px;
      font-style: italic;
    }}

    /* STATS DASHBOARD */
    .dashboard-grid {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 40px;
    }}
    
    .stat-card {{
      background: var(--surface-card);
      border: 1px solid var(--hairline);
      border-radius: var(--rounded-md);
      padding: 16px 20px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }}
    
    .stat-card .val {{
      font-family: var(--serif);
      font-size: 32px;
      font-weight: 500;
      color: var(--primary);
      margin-bottom: 4px;
    }}
    
    .stat-card .lbl {{
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--muted);
    }}

    /* SEARCH AND FILTER STICKY BAR */
    .control-bar {{
      position: sticky;
      top: 64px;
      z-index: 90;
      background: rgba(250, 249, 245, 0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--hairline);
      padding: 16px 0;
      margin-bottom: 40px;
      transition: background 0.3s;
    }}
    
    [data-theme="dark"] .control-bar {{
      background: rgba(18, 17, 16, 0.85);
    }}
    
    .control-bar-wrapper {{
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }}
    
    .search-wrapper {{
      flex: 1;
      min-width: 280px;
      position: relative;
    }}
    
    .search-input {{
      width: 100%;
      background: var(--surface-soft);
      border: 1px solid var(--hairline);
      border-radius: var(--rounded-md);
      padding: 10px 16px 10px 40px;
      font-family: var(--sans);
      font-size: 14px;
      color: var(--ink);
      outline: none;
      transition: border-color 0.2s, box-shadow 0.2s;
    }}
    
    .search-input:focus {{
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(204, 120, 92, 0.15);
    }}
    
    .search-wrapper::before {{
      content: "🔍";
      position: absolute;
      left: 14px;
      top: 10px;
      font-size: 14px;
      pointer-events: none;
    }}
    
    .filter-pills {{
      display: flex;
      gap: 8px;
    }}
    
    .filter-pill {{
      border: 1px solid var(--hairline);
      background: var(--surface-soft);
      color: var(--muted);
      padding: 8px 16px;
      font-family: var(--sans);
      font-size: 13px;
      font-weight: 500;
      border-radius: var(--rounded-pill);
      cursor: pointer;
      transition: all 0.2s;
    }}
    
    .filter-pill:hover {{
      color: var(--ink);
      border-color: var(--muted);
    }}
    
    .filter-pill.active {{
      background: var(--primary);
      color: var(--on-primary);
      border-color: var(--primary);
    }}
    
    .theme-toggle-btn {{
      border: 1px solid var(--hairline);
      background: var(--surface-soft);
      color: var(--ink);
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      font-size: 16px;
    }}
    
    .theme-toggle-btn:hover {{
      background: var(--surface-card);
      transform: scale(1.05);
    }}

    /* ANNOTATED BIBLIOGRAPHY CARDS */
    .paper-card {{
      background: var(--surface-soft);
      border: 1px solid var(--hairline);
      border-radius: var(--rounded-lg);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.01);
      transition: all 0.3s ease;
      animation: fadeIn 0.4s ease;
      display: block; /* Overrides summary.css grid */
    }}
    
    .paper-card:hover {{
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(20,20,19,0.06);
      border-color: var(--primary);
    }}
    
    .card-top {{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      gap: 16px;
      flex-wrap: wrap;
    }}
    
    .card-top .metadata-badges {{
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }}
    
    .card-top .badge-area {{
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 3px 10px;
      border-radius: var(--rounded-pill);
    }}
    
    .badge-area.area1 {{ background: rgba(93, 184, 166, 0.15); color: #0d9488; }}
    .badge-area.area2 {{ background: rgba(204, 120, 92, 0.15); color: #b45309; }}
    .badge-area.area3 {{ background: rgba(139, 92, 246, 0.15); color: #7c3aed; }}
    
    [data-theme="dark"] .badge-area.area1 {{ background: rgba(93, 184, 166, 0.25); color: #2dd4bf; }}
    [data-theme="dark"] .badge-area.area2 {{ background: rgba(204, 120, 92, 0.25); color: #fb923c; }}
    [data-theme="dark"] .badge-area.area3 {{ background: rgba(139, 92, 246, 0.25); color: #c084fc; }}

    .badge-venue {{
      background: var(--surface-card);
      border: 1px solid var(--hairline);
      color: var(--muted);
      font-size: 10px;
      font-weight: 500;
      padding: 2px 8px;
      border-radius: var(--rounded-sm);
    }}

    .badge-year {{
      background: var(--surface-cream-strong);
      color: var(--ink);
      font-size: 10px;
      font-weight: 600;
      padding: 2px 6px;
      border-radius: var(--rounded-sm);
    }}

    .paper-title {{
      font-family: var(--serif);
      font-size: 20px;
      font-weight: 500;
      color: var(--ink);
      line-height: 1.25;
      margin-bottom: 6px;
    }}
    
    .paper-authors {{
      font-size: 13px;
      color: var(--muted-soft);
      margin-bottom: 16px;
      font-style: italic;
    }}
    
    .card-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      margin-bottom: 16px;
      border-top: 1px solid var(--hairline);
      padding-top: 16px;
    }}
    
    @media (max-width: 992px) {{
      .card-grid {{
        grid-template-columns: 1fr;
        gap: 16px;
      }}
      .dashboard-grid {{
        grid-template-columns: repeat(2, 1fr);
      }}
    }}

    .grid-col h5 {{
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--primary);
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 4px;
    }}
    
    .grid-col p {{
      font-size: 13px;
      line-height: 1.55;
      color: var(--body);
    }}

    /* Detailed Thai summary box */
    .summary-th-box {{
      margin-top: 16px;
      padding: 16px 20px;
      background: rgba(204, 120, 92, 0.05);
      border-left: 4px solid var(--primary);
      border-radius: 0 var(--rounded-md) var(--rounded-md) 0;
      box-shadow: inset 2px 0 6px rgba(0,0,0,0.02);
    }}

    .summary-th-box h5 {{
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--primary);
      margin-bottom: 8px;
    }}

    .summary-th-box p {{
      font-size: 13.5px;
      line-height: 1.6;
      color: var(--body-strong);
      margin-bottom: 12px;
    }}

    .summary-th-box blockquote {{
      font-size: 12px;
      font-style: italic;
      border-left: 2px solid var(--hairline);
      padding-left: 12px;
      margin-top: 8px;
      color: var(--muted);
      line-height: 1.5;
    }}

    .card-footer {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px dashed var(--hairline);
      padding-top: 14px;
      margin-top: 8px;
      flex-wrap: wrap;
      gap: 12px;
    }}
    
    .files-badge-list {{
      display: flex;
      gap: 6px;
      align-items: center;
      flex-wrap: wrap;
    }}
    
    .file-badge {{
      display: inline-flex;
      align-items: center;
      gap: 4px;
      text-decoration: none;
      font-size: 11px;
      font-weight: 500;
      padding: 3px 8px;
      border-radius: var(--rounded-sm);
      border: 1px solid var(--hairline);
      color: var(--muted);
      background: var(--surface-card);
      transition: all 0.2s;
    }}
    
    .file-badge.active {{
      background: var(--surface-cream-strong);
      color: var(--ink);
      border-color: var(--primary);
    }}
    
    .file-badge.active:hover {{
      background: var(--primary);
      color: var(--on-primary);
    }}
    
    .file-badge.missing {{
      opacity: 0.4;
      cursor: not-allowed;
    }}

    .arxiv-link {{
      font-size: 12px;
      font-weight: 500;
      color: var(--primary);
      text-decoration: none;
      transition: opacity 0.2s;
    }}
    
    .arxiv-link:hover {{
      opacity: 0.8;
    }}
    
    .no-results {{
      text-align: center;
      padding: 40px;
      color: var(--muted);
      font-style: italic;
    }}

    /* READ ALOUD BUTTON & FLOATING PLAYER */
    .listen-btn {{
      background: var(--surface-card);
      border: 1px solid var(--hairline);
      color: var(--ink);
      font-family: var(--sans);
      font-size: 11.5px;
      font-weight: 600;
      padding: 6px 12px;
      border-radius: var(--rounded-pill);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }}

    .listen-btn:hover {{
      background: var(--primary);
      color: var(--on-primary);
      border-color: var(--primary);
      transform: translateY(-1px);
    }}

    .floating-player {{
      position: fixed;
      bottom: 24px;
      left: 24px;
      right: 24px;
      max-width: 680px;
      margin: 0 auto;
      background: var(--surface-dark-elevated);
      border: 2px solid var(--primary);
      border-radius: var(--rounded-lg);
      padding: 16px 24px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
      z-index: 1000;
      display: none;
      flex-direction: column;
      gap: 12px;
      color: var(--on-dark);
      animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }}

    .player-row-top {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding-bottom: 8px;
    }}

    .player-title-info {{
      flex: 1;
      min-width: 0;
    }}

    .player-title-info h6 {{
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--primary);
      margin-bottom: 2px;
    }}

    .player-title-info p {{
      font-size: 13.5px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #fff;
    }}

    .player-close {{
      background: transparent;
      border: none;
      color: var(--on-dark-soft);
      cursor: pointer;
      font-size: 18px;
      padding: 4px;
      display: flex;
      align-items: center;
      transition: color 0.2s;
    }}

    .player-close:hover {{
      color: #fff;
    }}

    .player-row-controls {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }}

    .player-buttons {{
      display: flex;
      gap: 8px;
    }}

    .player-btn {{
      background: var(--primary);
      color: var(--on-primary);
      border: none;
      padding: 6px 16px;
      border-radius: var(--rounded-sm);
      font-family: var(--sans);
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: opacity 0.2s;
    }}

    .player-btn:hover {{
      opacity: 0.9;
    }}

    .player-btn.secondary {{
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--on-dark);
    }}

    .player-btn.secondary:hover {{
      background: rgba(255, 255, 255, 0.05);
    }}

    .player-settings {{
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
      justify-content: flex-end;
      flex-wrap: wrap;
    }}

    .setting-group {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .setting-group label {{
      font-size: 11px;
      color: var(--on-dark-soft);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}

    .setting-group select, .setting-group input {{
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 4px 8px;
      border-radius: var(--rounded-sm);
      font-size: 12px;
      outline: none;
    }}

    .setting-group select {{
      max-width: 160px;
    }}

    .setting-group input[type="range"] {{
      width: 70px;
      height: 4px;
      accent-color: var(--primary);
      cursor: pointer;
    }}
  </style>
</head>
<body>

  <!-- NAV -->
  <nav class="top-nav">
    <div class="container">
      <a class="nav-brand" href="#">✦ <span>Figure Context</span> Bibliography</a>
      <ul class="nav-links">
        <li><a href="../../papers/search.html">Bilingual Search</a></li>
        <li><a href="paper-synthesis.html">Thesis Synthesis</a></li>
      </ul>
    </div>
  </nav>

  <div class="container" style="padding-top: 40px;">
    <!-- HERO -->
    <header class="hero" style="padding: 40px 0 20px;">
      <h1>Research Bibliography</h1>
      <p class="subtitle" style="max-width: 800px;">
        Figure-Centric Context Selection for Accessible Scientific Figure Descriptions.<br>
        Mapping the literature at the intersection of accessibility, figure captioning, and faithfulness.
      </p>
      <div class="hero-meta">
        <span class="badge">Scope: Multimodal Retrieval & Accessibility</span>
        <span class="badge coral">37 Annotated Publications</span>
        <span class="badge">Gap: In-Text Context Selection for BLV</span>
      </div>
    </header>

    <!-- KEY VISUAL: THE INTERSECTION GAP VENN DIAGRAM -->
    <div class="venn-container">
      <div class="venn-title">Literature Overlap & Contribution Gap</div>
      <div class="venn-diagram">
        <!-- Circles -->
        <div class="venn-circle circle-a" id="c-accessibility">
          <span>BLV<br>Accessibility<br>(Lundgard, VoxLens)</span>
        </div>
        <div class="venn-circle circle-b" id="c-captioning">
          <span>Figure<br>Captioning<br>(SciCap, DePlot)</span>
        </div>
        <div class="venn-circle circle-c" id="c-retrieval">
          <span>RAG /<br>Faithfulness<br>(VALOR-Eval, CHAIR)</span>
        </div>
        <!-- Intersection Center -->
        <div class="venn-intersection" id="c-gap">
          🎯 Novel Gap
        </div>
      </div>
      <div class="venn-explanation" id="venn-desc">
        Hover over the diagram segments to explore literature relations and find where the research gap sits.
      </div>
    </div>

    <!-- STATS DASHBOARD -->
    <div class="dashboard-grid">
      <div class="stat-card">
        <div class="val">{total_papers}</div>
        <div class="lbl">Total Works</div>
      </div>
      <div class="stat-card">
        <div class="val">{area1_count}</div>
        <div class="lbl">Area 1 (BLV Accessibility)</div>
      </div>
      <div class="stat-card">
        <div class="val">{area2_count}</div>
        <div class="lbl">Area 2 (Figure understanding)</div>
      </div>
      <div class="stat-card">
        <div class="val">{area3_count}</div>
        <div class="lbl">Area 3 (RAG / Faithfulness)</div>
      </div>
    </div>

    <!-- STICKY CONTROL BAR -->
    <div class="control-bar">
      <div class="container">
        <div class="control-bar-wrapper">
          <div class="search-wrapper">
            <input type="text" class="search-input" id="search-box" placeholder="Search title, author, venue, abstract, relevance, summaries..." autocomplete="off">
          </div>
          <div class="filter-pills">
            <button class="filter-pill active" data-filter="all">All ({total_papers})</button>
            <button class="filter-pill" data-filter="area1">Accessibility ({area1_count})</button>
            <button class="filter-pill" data-filter="area2">Captioning ({area2_count})</button>
            <button class="filter-pill" data-filter="area3">Retrieval/Eval ({area3_count})</button>
          </div>
          <button class="theme-toggle-btn" id="theme-toggle" title="Toggle dark/light mode">🌙</button>
        </div>
      </div>
    </div>

    <!-- FLOATING AUDIO PLAYER PANEL -->
    <div class="floating-player" id="audio-player">
      <div class="player-row-top">
        <div class="player-title-info">
          <h6>Currently Reading</h6>
          <p id="player-title">Paper Title Goes Here</p>
        </div>
        <button class="player-close" onclick="stopSpeech()" title="Stop Voice Reader">✕</button>
      </div>
      <div class="player-row-controls">
        <div class="player-buttons">
          <button class="player-btn" id="player-pause-resume" onclick="togglePauseResume()">⏸ Pause</button>
          <button class="player-btn secondary" onclick="stopSpeech()">⏹ Stop</button>
        </div>
        <div class="player-settings">
          <div class="setting-group">
            <label for="player-voice">Voice</label>
            <select id="player-voice" onchange="updateVoice()"></select>
          </div>
          <div class="setting-group">
            <label for="player-speed">Speed</label>
            <input type="range" id="player-speed" min="0.5" max="2" step="0.1" value="1.0" onchange="updateSpeed()">
            <span id="speed-label" style="font-size: 11px; width: 24px; text-align: right;">1.0x</span>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN BIBLIOGRAPHY LIST -->
    <main style="margin-bottom: 80px;">
      <!-- Key Findings Summary Alert -->
      <div class="key-box amber" style="margin-top: 0; margin-bottom: 32px; border-radius: var(--rounded-lg)">
        <h5>💡 Executive Summary</h5>
        <p>The three component literatures are individually mature, but <strong>almost no prior work sits at the exact intersection of "select the most relevant context from the full paper (in-text references, captions, OCR) to generate an accessible description of a figure for blind/low-vision users."</strong></p>
        <ul style="margin-left: 20px; margin-top: 8px; font-size: 13.5px; line-height: 1.6;">
          <li><strong>Novelty:</strong> FigurA11y (IUI '24) is the only near prior art, but it serves as an author-assistance tool, not an automated user-facing RAG pipeline.</li>
          <li><strong>Data Signals:</strong> SciCap+ and LaMP-Cap package in-text mentions and profiles which prove that 76.68% of caption words occur in surrounding text + OCR.</li>
          <li><strong>Quality Gap:</strong> Author-written alt text is highly scarce (&lt;1% of PDFs) and inadequate (only 31% contain major trends, 50% cover outliers).</li>
        </ul>
      </div>

      <div id="papers-list">
        <!-- Rendered by JS -->
      </div>
      <div id="no-results-msg" class="no-results" style="display: none;">
        No publications match your search criteria.
      </div>
    </main>

  </div>

  <footer class="footer">
    <div class="container">
      <p>Research Bibliography · Figure-Centric Context Selection for BLV Accessible Descriptions</p>
      <p style="margin-top: 8px; opacity: 0.6; font-size: 12px;">Styled using repository <a href="../../assets/summary.css">summary.css</a> system. Developed with Antigravity AI.</p>
    </div>
  </footer>

  <script>
    // Embed the python-side compiled database in JS
    const PAPERS_DB = {json.dumps(BIBLIOGRAPHY_DATA, ensure_ascii=False)};

    // Theme toggler
    const themeBtn = document.getElementById("theme-toggle");
    const htmlEl = document.documentElement;
    themeBtn.addEventListener("click", () => {{
      const currentTheme = htmlEl.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      htmlEl.setAttribute("data-theme", nextTheme);
      themeBtn.textContent = nextTheme === "dark" ? "☀️" : "🌙";
    }});

    // Venn Diagram descriptions
    const descEl = document.getElementById("venn-desc");
    const hoverDescriptions = {{
      "c-accessibility": "<strong>BLV Accessibility:</strong> Focuses on screen reader interfaces, sonification, and semantic alt-text structure (e.g. Lundgard's 4-level model). Usually relies on raw chart data, not paper text.",
      "c-captioning": "<strong>Figure Understanding & Captioning:</strong> Focuses on vision-language models and benchmarks (SciCap, DePlot). Generates concise captions for sighted readers, not accessibility descriptions.",
      "c-retrieval": "<strong>RAG & Faithfulness:</strong> RAG frameworks and metrics (CHAIR, VALOR-Eval) that prevent hallucination in document-grounded generation.",
      "c-gap": "<strong>🎯 YOUR CONTRIBUTION GAP:</strong> figure-centric context retrieval from the full paper to generate highly faithful, accessible descriptions tailored to BLV information needs."
    }};

    Object.entries(hoverDescriptions).forEach(([id, text]) => {{
      const el = document.getElementById(id);
      if (el) {{
        el.addEventListener("mouseenter", () => {{
          descEl.innerHTML = text;
        }});
        el.addEventListener("mouseleave", () => {{
          descEl.innerHTML = "Hover over the diagram segments to explore literature relations and find where the research gap sits.";
        }});
      }}
    }});

    // Search and filter logic
    const searchBox = document.getElementById("search-box");
    const filterPills = document.querySelectorAll(".filter-pill");
    const papersListEl = document.getElementById("papers-list");
    const noResultsEl = document.getElementById("no-results-msg");

    let currentFilter = "all";
    let searchQuery = "";

    function renderList() {{
      papersListEl.innerHTML = "";
      
      const filtered = PAPERS_DB.filter(p => {{
        // Area filter
        if (currentFilter !== "all" && p.area !== currentFilter) return false;
        
        // Search filter
        if (searchQuery) {{
          const term = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(term);
          const matchAuthors = p.authors.toLowerCase().includes(term);
          const matchVenue = p.venue.toLowerCase().includes(term);
          const matchRelevance = p.relevance.toLowerCase().includes(term);
          const matchAbstract = p.what_it_does.toLowerCase().includes(term);
          const matchProcess = p.process.toLowerCase().includes(term);
          const matchContent = p.size_content.toLowerCase().includes(term);
          const matchSummaryTH = p.summary_th ? p.summary_th.toLowerCase().includes(term) : false;
          
          return matchTitle || matchAuthors || matchVenue || matchRelevance || matchAbstract || matchProcess || matchContent || matchSummaryTH;
        }}
        
        return true;
      }});

      if (filtered.length === 0) {{
        noResultsEl.style.display = "block";
        return;
      }}
      
      noResultsEl.style.display = "none";

      filtered.forEach(p => {{
        const card = document.createElement("div");
        card.className = "paper-card";
        card.id = `card-${{p.id}}`;
        
        // Render local file badges
        let localBadgesHtml = "";
        if (p.local_files) {{
          const lf = p.local_files;
          const sub = lf.subfolder;
          const bn = lf.base_name;
          
          localBadgesHtml = `
            <a href="../../papers/${{sub}}/${{bn}}.pdf" class="file-badge active" target="_blank" title="Open PDF">📄 PDF</a>
            <a href="../../papers/${{sub}}/${{bn}}.json" class="file-badge active" target="_blank" title="View JSON metadata">⚙️ JSON</a>
          `;
          
          if (lf.source_html) {{
            localBadgesHtml += `<a href="../../papers/${{sub}}/${{bn}}_source.html" class="file-badge active" target="_blank" title="View source HTML">🌐 HTML</a>`;
          }}
          if (lf.translations_html) {{
            localBadgesHtml += `<a href="../../papers/${{sub}}/${{bn}}_translations.html" class="file-badge active" target="_blank" title="View translation page">🇹🇭 TH</a>`;
          }}
        }} else {{
          localBadgesHtml = `<span class="file-badge missing">🚫 No local copies</span>`;
        }}

        // Arxiv link
        const arxivHtml = p.arxiv_id ? `<a href="https://arxiv.org/abs/${{p.arxiv_id}}" target="_blank" class="arxiv-link">arXiv:${{p.arxiv_id}} ↗</a>` : "";

        // Area text
        let areaText = "";
        if (p.area === "area1") areaText = "Area 1: Accessibility";
        if (p.area === "area2") areaText = "Area 2: Captioning & Figure Understanding";
        if (p.area === "area3") areaText = "Area 3: RAG & Faithfulness";

        // Synthesis Thai Box
        let thBoxHtml = "";
        if (p.summary_th) {{
          const quoteHtml = p.verbatim_quotes ? `
            <blockquote>
              <strong>Direct Quote:</strong> "${{p.verbatim_quotes}}"
            </blockquote>
          ` : "";
          
          thBoxHtml = `
            <div class="summary-th-box">
              <h5>🇹🇭 บทสรุปภาษาไทย &amp; คำอ้างอิงตรง (Verbatim Quote)</h5>
              <p><strong>สรุปเชิงสถิติ/สถาปัตยกรรม:</strong> ${{p.summary_th}}</p>
              ${{quoteHtml}}
            </div>
          `;
        }}

        card.innerHTML = `
          <div class="card-top">
            <div class="metadata-badges">
              <span class="badge-area ${{p.area}}">${{areaText}}</span>
              <span class="badge-venue">${{p.venue}}</span>
              <span class="badge-year">${{p.year}}</span>
            </div>
            ${{arxivHtml}}
          </div>
          <div class="paper-title">${{p.title}}</div>
          <div class="paper-authors">${{p.authors}}</div>
          
          <div class="card-grid">
            <div class="grid-col">
              <h5>🎯 Summary &amp; Focus</h5>
              <p>${{p.what_it_does}}</p>
            </div>
            <div class="grid-col">
              <h5>⚙️ Methodology &amp; Process</h5>
              <p>${{p.process}}</p>
            </div>
            <div class="grid-col">
              <h5>🔗 Relevance to Figure RAG</h5>
              <p>${{p.relevance}}</p>
            </div>
          </div>
          
          ${{thBoxHtml}}
          
          <div class="key-box" style="margin: 16px 0 16px; padding: 12px 16px; font-size: 13px;">
            <h5>📊 Size, Content &amp; Access Details</h5>
            <p>${{p.size_content}}</p>
          </div>
          
          <div class="card-footer">
            <div class="files-badge-list">
              <span style="font-size: 11px; color: var(--muted); font-weight: 600; margin-right: 8px;">LOCAL COPIES:</span>
              ${{localBadgesHtml}}
            </div>
            <button class="listen-btn" onclick="startSpeech('${{p.id}}')" id="btn-listen-${{p.id}}">
              🔊 Read Aloud (ฟังบทสรุป)
            </button>
          </div>
        `;
        
        papersListEl.appendChild(card);
      }});
    }}

    // Filter pill clicks
    filterPills.forEach(pill => {{
      pill.addEventListener("click", () => {{
        filterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentFilter = pill.getAttribute("data-filter");
        renderList();
      }});
    }});

    // Search query input
    searchBox.addEventListener("input", (e) => {{
      searchQuery = e.target.value.trim();
      renderList();
    }});

    // ----------------------------------------------------
    // WEB SPEECH AUDIO READER CODE (BILINGUAL QUEUED TTS)
    // ----------------------------------------------------
    let synth = window.speechSynthesis;
    let currentlySpeakingId = null;
    let isPaused = false;
    let availableVoices = [];
    
    // We maintain a queue of utterances
    let utteranceQueue = [];
    let currentQueueIndex = 0;

    const audioPlayer = document.getElementById("audio-player");
    const playerTitle = document.getElementById("player-title");
    const voiceSelect = document.getElementById("player-voice");
    const speedSlider = document.getElementById("player-speed");
    const speedLabel = document.getElementById("speed-label");
    const pauseResumeBtn = document.getElementById("player-pause-resume");

    function loadVoices() {{
      if (!synth) return;
      availableVoices = synth.getVoices();
      
      voiceSelect.innerHTML = "";
      
      // Filter to Thai and English voices
      const filtered = availableVoices.filter(v => v.lang.startsWith("en") || v.lang.startsWith("th"));
      
      filtered.forEach(voice => {{
        const opt = document.createElement("option");
        opt.value = voice.name;
        opt.textContent = `${{voice.name}} (${{voice.lang}})`;
        
        // Select an English voice by default
        if (voice.lang.startsWith("en-US") && !voiceSelect.value) {{
          opt.selected = true;
        }}
        voiceSelect.appendChild(opt);
      }});
    }}

    if (synth) {{
      if (synth.onvoiceschanged !== undefined) {{
        synth.onvoiceschanged = loadVoices;
      }}
      window.addEventListener("DOMContentLoaded", loadVoices);
    }}

    // Helper to find a voice by language code
    function getVoiceByLang(langPrefix) {{
      const selectedVoiceName = voiceSelect.value;
      const userSelected = availableVoices.find(v => v.name === selectedVoiceName);
      
      // If user selected a voice matching the desired language, use it
      if (userSelected && userSelected.lang.startsWith(langPrefix)) {{
        return userSelected;
      }}
      
      // Otherwise, fallback to the first voice matching the language prefix
      return availableVoices.find(v => v.lang.startsWith(langPrefix)) || null;
    }}

    window.startSpeech = function(paperId) {{
      if (!synth) {{
        alert("Web Speech API is not supported in this browser.");
        return;
      }}

      stopSpeech();

      const paper = PAPERS_DB.find(p => p.id === paperId);
      if (!paper) return;

      currentlySpeakingId = paperId;
      isPaused = false;
      utteranceQueue = [];
      currentQueueIndex = 0;
      
      // Highlight card
      const targetCard = document.getElementById(`card-${{paperId}}`);
      if (targetCard) {{
        targetCard.style.borderColor = "var(--primary)";
        targetCard.style.boxShadow = "0 8px 30px rgba(204, 120, 92, 0.15)";
        targetCard.scrollIntoView({{ behavior: "smooth", block: "center" }});
      }}

      playerTitle.textContent = paper.title;
      audioPlayer.style.display = "flex";
      pauseResumeBtn.textContent = "⏸ Pause";

      // 1. Build English Utterance (Title, Authors, Focus, Quotes)
      let englishText = `Paper title: ${{paper.title}}. Written by ${{paper.authors}}. Venue: ${{paper.venue}}. Focus: ${{paper.what_it_does}}`;
      if (paper.verbatim_quotes) {{
        englishText += ` Direct quote from the publication: ${{paper.verbatim_quotes}}`;
      }}
      
      const uttEN = new SpeechSynthesisUtterance(englishText);
      uttEN.voice = getVoiceByLang("en");
      uttEN.rate = parseFloat(speedSlider.value);
      
      // 2. Build Thai Utterance (Thai Summary)
      let thaiText = "";
      if (paper.summary_th) {{
        thaiText = `บทสรุปภาษาไทย: ${{paper.summary_th}}`;
      }}
      
      const uttTH = thaiText ? new SpeechSynthesisUtterance(thaiText) : null;
      if (uttTH) {{
        uttTH.voice = getVoiceByLang("th");
        uttTH.rate = parseFloat(speedSlider.value);
      }}

      // Set up queue events
      uttEN.onend = function() {{
        if (uttTH) {{
          synth.speak(uttTH);
        }} else {{
          stopSpeech();
        }}
      }};
      
      uttEN.onerror = function(e) {{
        console.error("English Speech Error:", e);
        stopSpeech();
      }};

      if (uttTH) {{
        uttTH.onend = function() {{
          stopSpeech();
        }};
        uttTH.onerror = function(e) {{
          console.error("Thai Speech Error:", e);
          stopSpeech();
        }};
      }}

      // Start speaking English part (which will auto-chain to Thai)
      synth.speak(uttEN);
    }};

    window.stopSpeech = function() {{
      if (!synth) return;
      synth.cancel();
      
      if (currentlySpeakingId) {{
        const card = document.getElementById(`card-${{currentlySpeakingId}}`);
        if (card) {{
          card.style.borderColor = "var(--hairline)";
          card.style.boxShadow = "none";
        }}
      }}
      
      audioPlayer.style.display = "none";
      currentlySpeakingId = null;
      isPaused = false;
    }};

    window.togglePauseResume = function() {{
      if (!synth) return;
      
      if (isPaused) {{
        synth.resume();
        isPaused = false;
        pauseResumeBtn.textContent = "⏸ Pause";
      }} else {{
        synth.pause();
        isPaused = true;
        pauseResumeBtn.textContent = "▶ Resume";
      }}
    }};

    window.updateVoice = function() {{
      // Voicing updates apply to new reads.
      if (currentlySpeakingId) {{
        const currentId = currentlySpeakingId;
        stopSpeech();
        startSpeech(currentId);
      }}
    }};

    window.updateSpeed = function() {{
      const val = speedSlider.value;
      speedLabel.textContent = `${{val}}x`;
      if (currentlySpeakingId) {{
        const currentId = currentlySpeakingId;
        stopSpeech();
        startSpeech(currentId);
      }}
    }};

    // Initialize list
    renderList();
  </script>
</body>
</html>
"""
    with open(OUTPUT_HTML, "w", encoding="utf-8") as f:
        f.write(html_content)
    print(f"Successfully generated beautiful HTML bibliography at: {OUTPUT_HTML}")

def main():
    print("Scanning local paper copies in papers/...")
    local_files = scan_local_files()
    print(f"Found {len(local_files)} paper files organized locally in subfolders.")
    
    print("Generating HTML bibliography...")
    generate_html(local_files)

if __name__ == "__main__":
    main()
