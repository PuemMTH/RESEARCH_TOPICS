/* Shared behavior script for *_translations.html bilingual reader files */
/* Load via: <script src="../assets/translation.js"></script> after translations.js */

(function() {
  const DICT = window.DICT || {};

  function isEnglish(w) {
    return /^[A-Za-z][A-Za-z0-9''-]*$/.test(w);
  }

  function lookupTh(w) {
    const l = w.toLowerCase().replace(/[.,;:!?'"()[\]]/g, '');
    const v = DICT[l] || DICT[w] || null;
    if (!v) return null;
    return (typeof v === 'string') ? { th: v, ctx: null } : v;
  }

  function wrapTextNode(node) {
    const text = node.nodeValue;
    if (!text.trim()) return;
    const parts = text.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    let changed = false;
    parts.forEach(part => {
      const clean = part.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, '');
      const entry = clean ? lookupTh(clean) : null;
      if (entry && isEnglish(clean)) {
        changed = true;
        const pre = part.match(/^[^A-Za-z0-9]*/)[0];
        const suf = part.match(/[^A-Za-z0-9]*$/)[0];
        if (pre) frag.appendChild(document.createTextNode(pre));
        
        const span = document.createElement('span');
        span.className = 'en-word';
        span.textContent = clean;
        
        const tip = document.createElement('span');
        tip.className = entry.ctx ? 'tooltip has-ctx' : 'tooltip';
        
        const thSpan = document.createElement('span');
        thSpan.className = 'tooltip-th';
        thSpan.textContent = entry.th;
        tip.appendChild(thSpan);
        
        if (entry.ctx) {
          const ctxSpan = document.createElement('span');
          ctxSpan.className = 'tooltip-ctx';
          ctxSpan.textContent = entry.ctx;
          tip.appendChild(ctxSpan);
        }
        
        span.appendChild(tip);
        frag.appendChild(span);
        if (suf) frag.appendChild(document.createTextNode(suf));
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    if (changed) node.parentNode.replaceChild(frag, node);
  }

  function walkAndWrap(el) {
    if (!el || ['SCRIPT', 'STYLE', 'PRE', 'CODE'].includes(el.tagName)) return;
    if (el.classList && (el.classList.contains('tooltip') || el.classList.contains('th'))) return;
    const children = [...el.childNodes];
    children.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        wrapTextNode(child);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        walkAndWrap(child);
      }
    });
  }

  function updateProgress() {
    const s = window.scrollY;
    const d = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--progress', (d > 0 ? (s / d * 100).toFixed(1) : 0) + '%');
  }

  window.addEventListener('scroll', updateProgress, { passive: true });

  let fontSize = 16;
  window.changeFont = function(d) {
    fontSize = Math.min(24, Math.max(12, fontSize + d));
    document.body.style.fontSize = fontSize + 'px';
    const fontVal = document.getElementById('font-size-val');
    if (fontVal) fontVal.textContent = fontSize + 'px';
  };

  let dark = false;
  window.toggleTheme = function() {
    dark = !dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  };

  function splitEngSentences(text) {
    const regex = /(?<!\b(?:e\.g|i\.e|vs|Fig|fig|Dr|Mr|Mrs|Ms|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.)(?<=[.!?])\s+(?=[A-Z0-9])/g;
    return text.split(regex).map(s => s.trim()).filter(Boolean);
  }

  function alignThaiSentences(enSents, thText) {
    const thRawSegments = [];
    let current = '';
    let inParen = 0;
    let inQuote = false;
    for (let i = 0; i < thText.length; i++) {
      const char = thText[i];
      if (char === '(' || char === '[' || char === '{') {
        inParen++;
        current += char;
      } else if (char === ')' || char === ']' || char === '}') {
        inParen = Math.max(0, inParen - 1);
        current += char;
      } else if (char === '"' || char === "'") {
        inQuote = !inQuote;
        current += char;
      } else if (/\s/.test(char)) {
        if (inParen > 0 || inQuote) {
          current += char;
        } else {
          if (current.trim()) {
            thRawSegments.push(current.trim());
          }
          current = '';
        }
      } else {
        current += char;
      }
    }
    if (current.trim()) {
      thRawSegments.push(current.trim());
    }
    const N = enSents.length;
    if (thRawSegments.length <= N) {
      const result = [...thRawSegments];
      while (result.length < N) {
        result.push('');
      }
      return result;
    }
    const totalThLen = thRawSegments.reduce((sum, s) => sum + s.length, 0);
    const totalEnLen = enSents.reduce((sum, s) => sum + s.length, 0);
    const targetLens = enSents.map(s => (s.length / totalEnLen) * totalThLen);
    const result = [];
    let segIdx = 0;
    for (let i = 0; i < N; i++) {
      if (i === N - 1) {
        result.push(thRawSegments.slice(segIdx).join(' '));
        break;
      }
      let currentSent = thRawSegments[segIdx];
      segIdx++;
      const target = targetLens[i];
      while (segIdx < thRawSegments.length - (N - 1 - i)) {
        const nextSeg = thRawSegments[segIdx];
        const starters = ["อย่างไรก็ตาม", "ในงานนี้", "ในงานวิจัยนี้", "เพื่อจุดประสงค์นี้", "เรา", "ผลการทดลอง", "หลัง", "นอกจากนี้", "ดังนั้น", "งานวิจัยนี้", "โมเดล", "ตัวจำแนก", "จากผล", "โดยสรุป", "ในอนาคต", "เพื่อ", "การ", "ผู้", "นักวิจัย", "ตัวอย่างเช่น", "เช่น", "แต่", "หนึ่งใน", "ด้วย"];
        const startsWithStarter = starters.some(word => nextSeg.startsWith(word));
        const currentDiff = Math.abs(currentSent.length - target);
        const nextDiff = Math.abs((currentSent + ' ' + nextSeg).length - target);
        if (startsWithStarter && currentSent.length > target * 0.5) {
          break;
        }
        if (nextDiff < currentDiff || currentSent.length < target * 0.7) {
          currentSent += ' ' + nextSeg;
          segIdx++;
        } else {
          break;
        }
      }
      result.push(currentSent);
    }
    return result;
  }

  function initSentenceReveal() {
    document.querySelectorAll('.row.para').forEach(row => {
      const enS = row.querySelectorAll('.en p, .en li');
      const thS = row.querySelectorAll('.th p, .th li');
      for (let k = 0; k < enS.length; k++) {
        const enEl = enS[k];
        const thEl = thS[k];
        if (!thEl) continue;
        const enText = enEl.textContent.trim();
        const thText = thEl.textContent.trim();
        const enSents = splitEngSentences(enText);
        const thSents = alignThaiSentences(enSents, thText);
        enEl.innerHTML = enSents.map((s, i) => {
          const th = thSents[i] || '';
          return `<span class="en-sent" data-th="${th.replace(/"/g, '&quot;')}">${s}</span>`;
        }).join(' ');
      }
    });

    let shiftPressed = false;
    let activeSent = null;

    function showThai(s) {
      if (!s._origHTML) s._origHTML = s.innerHTML;
      s.textContent = s.dataset.th;
      s.classList.add('showing-th');
    }

    function showEnglish(s) {
      if (s._origHTML !== undefined) {
        s.innerHTML = s._origHTML;
      }
      s.classList.remove('showing-th');
    }

    window.addEventListener('keydown', e => {
      if (e.key === 'Shift') {
        shiftPressed = true;
        document.body.classList.add('shift-active');
        if (activeSent && !activeSent.classList.contains('locked')) {
          showThai(activeSent);
        }
      }
    });

    window.addEventListener('keyup', e => {
      if (e.key === 'Shift') {
        shiftPressed = false;
        document.body.classList.remove('shift-active');
        if (activeSent && !activeSent.classList.contains('locked')) {
          showEnglish(activeSent);
        }
      }
    });

    window.addEventListener('blur', () => {
      shiftPressed = false;
      document.body.classList.remove('shift-active');
      if (activeSent && !activeSent.classList.contains('locked')) {
        showEnglish(activeSent);
      }
    });

    const grid = document.querySelector('.translation-grid');
    if (grid) {
      grid.addEventListener('mouseover', e => {
        const s = e.target.closest('.en-sent');
        if (!s) return;
        activeSent = s;
        if (shiftPressed && !s.classList.contains('locked')) {
          showThai(s);
        }
      });

      grid.addEventListener('mouseout', e => {
        const s = e.target.closest('.en-sent');
        if (!s) return;
        if (activeSent === s) activeSent = null;
        if (!s.classList.contains('locked')) {
          showEnglish(s);
        }
      });

      grid.addEventListener('click', e => {
        const s = e.target.closest('.en-sent');
        if (!s) return;
        if (shiftPressed || s.classList.contains('showing-th')) {
          if (s.classList.contains('locked')) {
            showEnglish(s);
            s.classList.remove('locked');
          } else {
            showThai(s);
            s.classList.add('locked');
          }
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSentenceReveal();
    document.querySelectorAll('.row.para .en, .row.heading .en').forEach(walkAndWrap);
    updateProgress();
  });
})();
