// ===== Wedding invitation interactions =====
(function () {
  const TARGET = new Date("2026-05-18T19:00:00+03:00").getTime();

  const $ = (id) => document.getElementById(id);
  const intro   = $("intro");
  const flash   = $("intro-flash");
  const startBtn= $("start-btn");
  const curtainL= $("curtain-left");
  const curtainR= $("curtain-right");
  const spark   = $("spark");
  const music   = $("bg-music");
  const musicBtn= $("music-toggle");

  // ----- Countdown -----
  const pad = (n) => String(Math.max(0, n)).padStart(2, "0");
  const els = { d: $("cd-day"), h: $("cd-hr"), m: $("cd-min"), s: $("cd-sec") };
  function tick() {
    const diff = TARGET - Date.now();
    if (diff <= 0) {
      els.d.textContent = els.h.textContent = els.m.textContent = els.s.textContent = "00";
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    els.d.textContent = pad(d); els.h.textContent = pad(h);
    els.m.textContent = pad(m); els.s.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);

  // ----- Music toggle -----
  let playing = false;
  function setMusicIcon(on) {
    musicBtn.innerHTML = on
      ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="2" x2="22" y2="22"/><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';
  }
  setMusicIcon(false);
  musicBtn.addEventListener("click", () => {
    if (music.paused) { music.play().catch(()=>{}); playing = true; }
    else { music.pause(); playing = false; }
    setMusicIcon(playing);
  });

  // ----- Start button: curtain reveal transition -----
  function reveal() {
    startBtn.disabled = true;

    // Try to start music with the user gesture
    music.play().then(() => { playing = true; setMusicIcon(true); }).catch(()=>{});

    // 1) Flash to white
    flash.style.opacity = "1";

    // 2) Curtains close (cover the screen) then reveal main content
    setTimeout(() => {
      curtainL.classList.add("opening");
      curtainR.classList.add("opening");
    }, 350);

    // 3) Show spark in the middle while curtains are fully closed
    setTimeout(() => { spark.classList.add("show"); }, 1100);

    // 4) Remove the intro overlay (behind the curtains) and fade the flash
    setTimeout(() => {
      intro.style.display = "none";
      flash.style.opacity = "0";
    }, 1300);

    // 5) Open the curtains to reveal the page
    setTimeout(() => {
      spark.classList.remove("show");
      curtainL.classList.remove("opening");
      curtainR.classList.remove("opening");
      curtainL.classList.add("closing");
      curtainR.classList.add("closing");
    }, 1700);

    // 6) Clean up the curtain elements so they don't block clicks
    setTimeout(() => {
      curtainL.style.display = "none";
      curtainR.style.display = "none";
    }, 3200);
  }
  startBtn.addEventListener("click", reveal);
})();
