import json
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_DIR = REPO_ROOT / "papers"

app = FastAPI(title="Paper Browser PoC")


def load_papers() -> list[dict]:
    papers = []
    for json_path in sorted(PAPERS_DIR.glob("*.json")):
        try:
            data = json.loads(json_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            continue
        base_name = data.get("base_name", json_path.stem)
        data["files"] = {
            "pdf": (PAPERS_DIR / f"{base_name}.pdf").exists(),
            "source_html": (PAPERS_DIR / f"{base_name}_source.html").exists(),
            "translations_html": (PAPERS_DIR / f"{base_name}_translations.html").exists(),
        }
        papers.append(data)
    return papers


@app.get("/api/papers")
def list_papers():
    return load_papers()


@app.get("/api/papers/{base_name}")
def get_paper(base_name: str):
    for paper in load_papers():
        if paper.get("base_name") == base_name:
            return paper
    raise HTTPException(status_code=404, detail="Paper not found")


@app.get("/api/search")
def search_papers(q: str = ""):
    query = q.strip().lower()
    if not query:
        return []
    results = []
    for paper in load_papers():
        haystack = " ".join(
            [
                paper.get("title", ""),
                paper.get("abstract", ""),
                paper.get("venue", "") or "",
                " ".join(paper.get("authors", [])),
            ]
        ).lower()
        if query in haystack:
            results.append(paper)
    return results


@app.get("/papers-static/{filename}")
def get_paper_file(filename: str):
    file_path = (PAPERS_DIR / filename).resolve()
    if PAPERS_DIR.resolve() not in file_path.parents or not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(file_path)


app.mount("/", StaticFiles(directory=Path(__file__).resolve().parent / "static", html=True), name="static")
