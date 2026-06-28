import json
from pathlib import Path
from typing import AsyncGenerator

import httpx
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

OLLAMA_BASE = "http://localhost:11434"
DEFAULT_MODEL = "typhoon"

app = FastAPI(title="Typhoon Chat API")


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    messages: list[Message]
    model: str = DEFAULT_MODEL
    temperature: float = 0.7
    system: str | None = None


async def _stream_ollama(payload: dict) -> AsyncGenerator[str, None]:
    async with httpx.AsyncClient(timeout=None) as client:
        async with client.stream(
            "POST", f"{OLLAMA_BASE}/api/chat", json=payload
        ) as resp:
            if resp.status_code != 200:
                yield f"data: {json.dumps({'error': f'Ollama error {resp.status_code}'})}\n\n"
                return
            async for line in resp.aiter_lines():
                if line.strip():
                    yield f"data: {line}\n\n"
    yield "data: [DONE]\n\n"


@app.post("/api/chat")
async def chat(req: ChatRequest):
    messages = [m.model_dump() for m in req.messages]
    if req.system:
        messages = [{"role": "system", "content": req.system}] + messages

    payload = {
        "model": req.model,
        "messages": messages,
        "stream": True,
        "options": {"temperature": req.temperature},
    }

    return StreamingResponse(
        _stream_ollama(payload),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


@app.get("/api/models")
async def list_models():
    async with httpx.AsyncClient(timeout=10) as client:
        try:
            resp = await client.get(f"{OLLAMA_BASE}/api/tags")
            data = resp.json()
            return {"models": [m["name"] for m in data.get("models", [])]}
        except Exception as e:
            raise HTTPException(status_code=502, detail=f"Ollama unavailable: {e}")


@app.get("/api/health")
async def health():
    try:
        async with httpx.AsyncClient(timeout=5) as client:
            resp = await client.get(f"{OLLAMA_BASE}/api/tags")
            return {"status": "ok", "ollama": resp.status_code == 200}
    except Exception as e:
        return {"status": "error", "detail": str(e)}


app.mount(
    "/",
    StaticFiles(directory=Path(__file__).parent / "static", html=True),
    name="static",
)
