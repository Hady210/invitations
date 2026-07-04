// ===== Wedding invitation #2 — interactions =====
(function () {
  const TARGET = new Date("2026-05-23T22:00:00").getTime();

  // ----- Countdown -----
  const pad = (n) => String(Math.max(0, n)).padStart(2, "0");
  const cd = {
    d: document.getElementById("cd-days"),
    h: document.getElementById("cd-hours"),
    m: document.getElementById("cd-mins"),
    s: document.getElementById("cd-secs"),
  };
  function tickCountdown() {
    const diff = TARGET - Date.now();
    if (diff <= 0) { cd.d.textContent = cd.h.textContent = cd.m.textContent = cd.s.textContent = "00"; return; }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    cd.d.textContent = pad(d); cd.h.textContent = pad(h);
    cd.m.textContent = pad(m); cd.s.textContent = pad(s);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  // ----- Build Love Story timeline -----
  const STORY = [
    { year: "2019", title: "First Met",         text: "A chance encounter at a mutual friend's garden party changed everything." },
    { year: "2020", title: "First Date",        text: "A candlelit dinner at a little Italian place downtown — we talked until they closed." },
    { year: "2022", title: "Moved In Together", text: "We found our cozy apartment and started building a home filled with love." },
    { year: "2025", title: "The Proposal",      text: "Under a sky full of stars, Jonathan got down on one knee and asked the question." },
    { year: "2026", title: "The Wedding",       text: "And now, we invite you to celebrate the next chapter of our love story." },
  ];
  const heartSvg =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';

  const timeline = document.getElementById("timeline");
  STORY.forEach((s, i) => {
    const side = i % 2 === 0 ? "left" : "right";
    const item = document.createElement("div");
    item.className = "timeline-item " + side;
    item.innerHTML =
      '<div class="side text">' +
        '<span class="year">' + s.year + '</span>' +
        '<h3>' + s.title + '</h3>' +
        '<p>' + s.text + '</p>' +
      '</div>' +
      '<div class="dot"><div class="circle">' + heartSvg + '</div></div>' +
      '<div class="side empty"></div>';
    timeline.appendChild(item);
  });

  // ----- IntersectionObserver: reveal on scroll -----
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(
    ".cd-item, .event-card, .timeline-item, .gallery-img, .dress, .location"
  ).forEach((el) => io.observe(el));

  // ----- Per-letter stagger for intro quote -----
  const quote = document.getElementById("intro-quote");
  if (quote) {
    const text = quote.textContent;
    quote.textContent = "";
    [...text].forEach((ch) => {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      quote.appendChild(span);
    });
    const qObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const spans = quote.querySelectorAll("span");
          spans.forEach((sp, idx) => {
            setTimeout(() => { sp.style.opacity = "1"; }, idx * 30);
          });
          qObserver.unobserve(quote);
        });
      },
      { threshold: 0.3 }
    );
    qObserver.observe(quote);
  }

  // ----- Smooth scroll for in-page anchors -----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (ev) => {
      const id = a.getAttribute("href").slice(1);
      const t = document.getElementById(id);
      if (!t) return;
      ev.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
