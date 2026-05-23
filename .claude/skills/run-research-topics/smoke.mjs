#!/usr/bin/env node
// smoke.mjs — start a local content server and verify every HTML/PDF loads.
// Usage: node .claude/skills/run-research-topics/smoke.mjs [--port 8788]

import { spawn } from "child_process";
import { readdir } from "fs/promises";
import { join } from "path";

const PORT = (() => {
  const i = process.argv.indexOf("--port");
  return i !== -1 ? Number(process.argv[i + 1]) : 8788;
})();

const ROOT = new URL("../../../", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

// ── collect all HTML and PDF files ────────────────────────────────────────────
// urlBase: the URL path prefix (always forward-slashes)
// fsDir:   the filesystem path relative to ROOT
async function collectFiles(urlBase, fsDir) {
  const entries = await readdir(join(ROOT, fsDir), { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const urlChild = `${urlBase}/${e.name}`;
    const fsChild  = `${fsDir}/${e.name}`;
    if (e.isDirectory()) {
      files.push(...(await collectFiles(urlChild, fsChild)));
    } else if (/\.(html|pdf)$/.test(e.name)) {
      files.push(urlChild);
    }
  }
  return files;
}

// ── start server ──────────────────────────────────────────────────────────────
function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn("npx", ["serve", "-p", String(PORT), "."], {
      cwd: ROOT,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let ready = false;
    const onData = (data) => {
      if (!ready && String(data).includes(String(PORT))) {
        ready = true;
        resolve(proc);
      }
    };
    proc.stdout.on("data", onData);
    proc.stderr.on("data", onData);

    setTimeout(() => {
      if (!ready) { ready = true; resolve(proc); } // assume ready after 5s
    }, 5000);

    proc.on("error", reject);
  });
}

// ── smoke check ───────────────────────────────────────────────────────────────
async function check(url) {
  const r = await fetch(url);
  return { url, status: r.status, ok: r.ok };
}

// ── main ──────────────────────────────────────────────────────────────────────
const proc = await startServer();
console.log(`\nServing ${ROOT}`);
console.log(`Local: http://localhost:${PORT}\n`);

const files = [
  ...(await collectFiles("/papers", "papers")),
  ...(await collectFiles("/docs", "docs")),
];

let pass = 0, fail = 0;
for (const path of files) {
  const url = `http://localhost:${PORT}${path}`;
  try {
    const { status, ok } = await check(url);
    const icon = ok ? "✓" : "✗";
    console.log(`  ${icon} ${status}  ${path}`);
    ok ? pass++ : fail++;
  } catch (e) {
    console.log(`  ✗ ERR  ${path}  (${e.message})`);
    fail++;
  }
}

console.log(`\n${pass} passed, ${fail} failed`);
console.log(`\nServer running at http://localhost:${PORT}  (Ctrl-C to stop)\n`);

if (fail > 0) {
  proc.kill();
  process.exit(1);
}
// leave server running for manual browsing
