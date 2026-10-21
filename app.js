/**
 * AIR-CPES 2027 — Interactive Frontend Application
 * Pure Vanilla JS (Zero Backend / Ready for GitHub Pages + GoDaddy Custom Domain)
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileNav();
    initStickyHeader();
    initHeroCanvas();
    initCountdown();
    renderTopics();
    renderTracks();
    renderSpeakers();
    renderDeadlines();
    renderVolumeEditors();
    renderRegistrationTable();
    renderSchedule();
    renderOrganizingCommittee();
    renderDirectoryBoards();
    renderVenues();
    initSearchHiddenContentFallback();
    initModalsAndActions();
  });

  /* 1. Dark / Light Theme Toggle */
  function initTheme() {
    const toggleBtn = document.getElementById("theme-toggle-btn");
    const saved = localStorage.getItem("aircpes_theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", initial);
    updateThemeIcon(initial);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", current);
        localStorage.setItem("aircpes_theme", current);
        updateThemeIcon(current);
      });
    }
  }

  function updateThemeIcon(theme) {
    const iconSpan = document.getElementById("theme-icon");
    if (!iconSpan) return;
    iconSpan.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  /* 2. Mobile Navigation */
  function initMobileNav() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const nav = document.getElementById("primary-nav");
    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* 3. Sticky Header Shadow & Active Section Spy */
  function initStickyHeader() {
    const header = document.querySelector("header.site-header");
    if (!header) return;

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 24) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      },
      { passive: true }
    );
  }

  /* 4. Interactive Cyber-Physical Smart Grid Hero Canvas */
  function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const nodeCount = 38;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 2.2 + 1.4,
      type: Math.random() > 0.75 ? "amber" : "cyan"
    }));

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!prefersReducedMotion) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > width) a.vx *= -1;
          if (a.y < 0 || a.y > height) a.vy *= -1;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 155) {
            const alpha = (1 - dist / 155) * 0.28;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.type === "amber" ? "#FBBF24" : "#38BDF8";
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        requestAnimationFrame(drawFrame);
      }
    }

    drawFrame();

    window.addEventListener("resize", () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      if (prefersReducedMotion) drawFrame();
    });
  }

  /* 5. Live Countdown Timer to Paper Submission Deadline / Conference */
  function initCountdown() {
    const daysEl = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");
    const targetLabelEl = document.getElementById("cd-target-label");

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    const subTarget = new Date("2027-01-10T23:59:59+05:30").getTime();
    const confTarget = new Date("2027-03-08T09:00:00+05:30").getTime();

    function updateTimer() {
      const now = Date.now();
      let target = subTarget;
      if (now > subTarget) {
        target = confTarget;
        if (targetLabelEl) targetLabelEl.textContent = "Countdown to Conference Kickoff (March 8, 2027)";
      }

      const diff = Math.max(0, target - now);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      daysEl.textContent = String(d).padStart(2, "0");
      hoursEl.textContent = String(h).padStart(2, "0");
      minsEl.textContent = String(m).padStart(2, "0");
      secsEl.textContent = String(s).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  /* 6. Render 19 Call for Papers Topics */
  function renderTopics() {
    const container = document.getElementById("topics-grid");
    if (!container || !window.TOPICS_LIST) return;

    container.innerHTML = window.TOPICS_LIST.map(
      (topic, idx) => `
      <li class="topic-pill">
        <span class="topic-num">${String(idx + 1).padStart(2, "0")}</span>
        <span>${topic}</span>
      </li>
    `
    ).join("");
  }

  /* 7. Render 8 Thematic Tracks with Filter & Search */
  function renderTracks() {
    const grid = document.getElementById("tracks-grid");
    const searchInput = document.getElementById("track-search");
    const filterBtns = document.querySelectorAll("[data-track-filter]");
    if (!grid || !window.TRACKS_DATA) return;

    let activeVol = "all";
    let query = "";

    function draw() {
      const filtered = window.TRACKS_DATA.filter((t) => {
        const matchesVol = activeVol === "all" || t.volume.toLowerCase().includes(activeVol.toLowerCase());
        const matchesQuery =
          !query ||
          t.title.toLowerCase().includes(query) ||
          t.description.toLowerCase().includes(query) ||
          t.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesVol && matchesQuery;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="comm-box" style="grid-column: 1 / -1; text-align:center; padding: 36px;">
          <p>No tracks matched your search criteria. Try clearing the search filter.</p>
        </div>`;
        return;
      }

      grid.innerHTML = filtered
        .map(
          (track) => `
        <article class="track-card">
          <div>
            <div class="track-top">
              <span class="track-id">${track.number}</span>
              <span class="track-vol">Springer LNEE · ${track.volume}</span>
            </div>
            <h3>${track.title}</h3>
            <p>${track.description}</p>
          </div>
          <div class="track-tags">
            ${track.tags.map((tag) => `<span class="track-tag">${tag}</span>`).join("")}
          </div>
        </article>
      `
        )
        .join("");
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeVol = btn.getAttribute("data-track-filter") || "all";
        draw();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        query = e.target.value.trim().toLowerCase();
        draw();
      });
    }

    draw();
  }

  /* 8. Render Keynote & Plenary Speakers (Placeholder Profiles) */
  function renderSpeakers() {
    const grid = document.getElementById("speakers-grid");
    if (!grid || !window.KEYNOTE_SPEAKERS) return;

    grid.innerHTML = window.KEYNOTE_SPEAKERS.map(
      (spk) => `
      <article class="speaker-card">
        <div class="speaker-top">
          <img class="speaker-avatar" src="${spk.image}" alt="${spk.name}" loading="lazy" />
          <div class="speaker-meta">
            <span class="spk-badge">${spk.badge}</span>
            <h3>${spk.name}</h3>
            <div class="spk-affil">${spk.affiliation}</div>
          </div>
        </div>
        <div class="speaker-body">
          <div class="spk-topic-box">
            <div class="spk-topic-label">Tentative Keynote Theme</div>
            <div class="spk-topic-title">“${spk.topic}”</div>
          </div>
          <div class="spk-footer">
            <span><strong>Session:</strong> ${spk.session}</span>
            <span>${spk.role}</span>
          </div>
        </div>
      </article>
    `
    ).join("");
  }

  /* 9. Render Important Dates */
  function renderDeadlines() {
    const grid = document.getElementById("dates-grid");
    if (!grid || !window.CONFERENCE_CONFIG) return;

    grid.innerHTML = window.CONFERENCE_CONFIG.deadlines
      .map(
        (d) => `
      <div class="date-card ${d.status}">
        <span class="date-badge">${d.badge}</span>
        <div class="date-val">${d.date}</div>
        ${d.subDate ? `<div class="date-sub">${d.subDate}</div>` : ""}
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
      </div>
    `
      )
      .join("");
  }

  /* 10. Render Springer Volume Editors */
  function renderVolumeEditors() {
    const grid = document.getElementById("editors-grid");
    if (!grid || !window.VOLUME_EDITORS) return;

    grid.innerHTML = window.VOLUME_EDITORS.map(
      (ed) => `
      <div class="editor-card">
        <img class="editor-avatar" src="${ed.avatar}" alt="${ed.name}" loading="lazy" />
        <div class="editor-info">
          <h4>${ed.name}</h4>
          <div class="ed-role">${ed.title}</div>
          <div class="ed-inst">${ed.institution}</div>
          <a href="mailto:${ed.email}">${ed.email}</a>
        </div>
      </div>
    `
    ).join("");
  }

  /* 11. Render Registration Fee Table with Currency Switcher */
  function renderRegistrationTable() {
    const tbody = document.getElementById("reg-tbody");
    const currencyBtns = document.querySelectorAll("[data-currency-mode]");
    if (!tbody || !window.REGISTRATION_FEES) return;

    let mode = "all";

    function draw() {
      tbody.innerHTML = window.REGISTRATION_FEES.map((row) => {
        const earlyVal =
          mode === "inr"
            ? row.earlyInr
            : mode === "intl"
            ? row.earlyIntl
            : `${row.earlyInr} <span style="color:var(--text-muted);font-weight:400;">(${row.earlyIntl})</span>`;
        const regVal =
          mode === "inr"
            ? row.regularInr
            : mode === "intl"
            ? row.regularIntl
            : `${row.regularInr} <span style="color:var(--text-muted);font-weight:400;">(${row.regularIntl})</span>`;

        return `
          <tr>
            <td><strong>${row.category}</strong></td>
            <td class="fee-highlight">${earlyVal}</td>
            <td>${regVal}</td>
            <td style="font-size:0.8rem;color:var(--text-dim);">${row.perks}</td>
          </tr>
        `;
      }).join("");
    }

    currencyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currencyBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        mode = btn.getAttribute("data-currency-mode") || "all";
        draw();
      });
    });

    draw();
  }

  /* 12. Render Two-Day Hybrid Program Schedule */
  function renderSchedule() {
    const container = document.getElementById("schedule-grid");
    const tzBtns = document.querySelectorAll("[data-tz-mode]");
    if (!container || !window.SCHEDULE_DATA) return;

    let tzMode = "both";

    function formatTime(ev) {
      if (tzMode === "ist") return `<div>${ev.ist}</div><span>Delhi Local Time</span>`;
      if (tzMode === "gmt") return `<div>${ev.gmt}</div><span>Birmingham Local Time</span>`;
      return `<div>${ev.ist}</div><span>${ev.gmt} (UK)</span>`;
    }

    function draw() {
      const days = [window.SCHEDULE_DATA.day1, window.SCHEDULE_DATA.day2];
      container.innerHTML = days
        .map(
          (day) => `
        <div class="day-column">
          <div class="day-header">
            <span>${day.dateLabel}</span>
            <span style="font-size:0.75rem;color:#38BDF8;font-weight:500;">Hybrid Live</span>
          </div>
          <ul class="sched-list">
            ${day.events
              .map(
                (ev) => `
              <li class="sched-item">
                <div class="sched-time">${formatTime(ev)}</div>
                <div class="sched-details">
                  <h4>${ev.title}</h4>
                  <p><strong>Venue:</strong> ${ev.venue}</p>
                  ${ev.speaker ? `<p>${ev.speaker}</p>` : ""}
                </div>
              </li>
            `
              )
              .join("")}
          </ul>
        </div>
      `
        )
        .join("");
    }

    tzBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tzBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        tzMode = btn.getAttribute("data-tz-mode") || "both";
        draw();
      });
    });

    draw();
  }

  /* 13. Render Organizing Committee */
  function renderOrganizingCommittee() {
    const grid = document.getElementById("organizing-grid");
    if (!grid || !window.ORGANIZING_COMMITTEE) return;

    grid.innerHTML = window.ORGANIZING_COMMITTEE.map(
      (group) => `
      <div class="comm-box ${group.featured ? "featured" : ""}">
        <div class="comm-role">${group.role}</div>
        <ul class="comm-list">
          ${group.members
            .map(
              (m) => `
            <li>
              <strong>${m.name}</strong>
              <span>${m.affiliation}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    `
    ).join("");
  }

  /* 14. Render Advisory, TPC & 112-Reviewer Directory with Search & Tabs */
  function renderDirectoryBoards() {
    const intlGrid = document.getElementById("dir-intl-grid");
    const natlGrid = document.getElementById("dir-natl-grid");
    const tpcGrid = document.getElementById("dir-tpc-grid");
    const revGrid = document.getElementById("dir-rev-grid");
    const searchInput = document.getElementById("directory-search");
    const tabBtns = document.querySelectorAll("[data-dir-tab]");
    const panels = document.querySelectorAll(".directory-panel");
    const directoryRoot = document.getElementById("boards-directory-root");

    function renderList(el, list, query) {
      if (!el || !list) return 0;
      const filtered = list.filter(
        (item) =>
          !query ||
          item.name.toLowerCase().includes(query) ||
          item.affiliation.toLowerCase().includes(query)
      );
      el.innerHTML = filtered
        .map(
          (item) => `
        <div class="dir-card">
          <strong>${item.name}</strong>
          <span>${item.affiliation}</span>
        </div>
      `
        )
        .join("");
      return filtered.length;
    }

    function updateAll(query = "") {
      const c1 = renderList(intlGrid, window.ADVISORY_INTERNATIONAL, query);
      const c2 = renderList(natlGrid, window.ADVISORY_NATIONAL, query);
      const c3 = renderList(tpcGrid, window.TPC_MEMBERS, query);
      const c4 = renderList(revGrid, window.REVIEWERS_LIST, query);

      const badgeIntl = document.getElementById("count-intl");
      const badgeNatl = document.getElementById("count-natl");
      const badgeTpc = document.getElementById("count-tpc");
      const badgeRev = document.getElementById("count-rev");

      if (badgeIntl) badgeIntl.textContent = `(${c1})`;
      if (badgeNatl) badgeNatl.textContent = `(${c2})`;
      if (badgeTpc) badgeTpc.textContent = `(${c3})`;
      if (badgeRev) badgeRev.textContent = `(${c4})`;
    }

    function activateTab(targetId) {
      panels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.removeAttribute("hidden");
        } else {
          panel.setAttribute("hidden", "until-found");
        }
      });
      tabBtns.forEach((btn) => {
        const isMatch = btn.getAttribute("aria-controls") === targetId;
        btn.classList.toggle("active", isMatch);
        btn.setAttribute("aria-expanded", String(isMatch));
      });
    }

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("aria-controls");
        if (targetId) activateTab(targetId);
      });
    });

    // Synchronize hidden="until-found" when user uses Ctrl+F / Cmd+F native browser search
    if (directoryRoot) {
      directoryRoot.addEventListener("beforematch", (e) => {
        const matchedPanel = e.target.closest(".directory-panel");
        if (matchedPanel && matchedPanel.id) {
          activateTab(matchedPanel.id);
        }
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        updateAll(q);
      });
    }

    updateAll("");
  }

  /* 15. Render Dual Venues (MAIT Delhi & BCU Birmingham) */
  function renderVenues() {
    const grid = document.getElementById("venues-grid");
    if (!grid || !window.CONFERENCE_CONFIG) return;

    const { india, uk } = window.CONFERENCE_CONFIG.venues;
    const list = [
      { flag: "🇮🇳 Host Venue — New Delhi, India", data: india },
      { flag: "🇬🇧 Co-Host Venue — Birmingham, UK", data: uk }
    ];

    grid.innerHTML = list
      .map(
        (v) => `
      <article class="venue-card">
        <div class="venue-img-wrap">
          <img src="${v.data.image}" alt="${v.data.name}" loading="lazy" />
          <span class="venue-flag">${v.flag}</span>
        </div>
        <div class="venue-body">
          <div>
            <h3>${v.data.name}</h3>
            <div class="venue-affil">${v.data.affiliation}</div>
            <p class="venue-desc">${v.data.description}</p>
            <ul class="venue-highlights">
              <li><strong>Address:</strong> ${v.data.address}</li>
              <li><strong>Timezone:</strong> ${v.data.timezone} (${v.data.coordinates})</li>
              ${v.data.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <a class="btn btn-outline btn-sm" href="${v.data.mapUrl}" target="_blank" rel="noopener">
              📍 View on Google Maps
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  /* 16. Fallback for hidden="until-found" per Modern Web Guidance */
  function initSearchHiddenContentFallback() {
    if (!("onbeforematch" in HTMLElement.prototype)) {
      document.querySelectorAll('[hidden="until-found"]').forEach((el) => {
        el.removeAttribute("hidden");
      });
    }
  }

  /* 17. Modals, Microsoft CMT Link Handler, Copy Link & .ics Calendar Download */
  function initModalsAndActions() {
    const cmtModal = document.getElementById("cmt-modal");
    const openCmtBtns = document.querySelectorAll("[data-open-cmt-modal]");
    const closeCmtBtn = document.getElementById("close-cmt-modal");
    const copyCmtBtn = document.getElementById("copy-cmt-url-btn");
    const printCfpBtns = document.querySelectorAll("[data-print-cfp]");
    const downloadIcsBtn = document.getElementById("download-ics-btn");

    // Set CMT URL text dynamically from config
    const cmtUrlDisplays = document.querySelectorAll(".js-cmt-url");
    const directCmtLinks = document.querySelectorAll(".js-cmt-direct-link");
    const cmtUrl = (window.CONFERENCE_CONFIG && window.CONFERENCE_CONFIG.cmtSubmissionUrl) || "https://cmt3.research.microsoft.com/AIRCPES2027";

    cmtUrlDisplays.forEach((el) => {
      el.textContent = cmtUrl;
    });

    directCmtLinks.forEach((el) => {
      el.setAttribute("href", cmtUrl);
    });

    openCmtBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (cmtModal && typeof cmtModal.showModal === "function") {
          cmtModal.showModal();
        } else {
          window.open(cmtUrl, "_blank", "noopener");
        }
      });
    });

    if (closeCmtBtn && cmtModal) {
      closeCmtBtn.addEventListener("click", () => cmtModal.close());
      cmtModal.addEventListener("click", (e) => {
        if (e.target === cmtModal) cmtModal.close();
      });
    }

    if (copyCmtBtn) {
      copyCmtBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(cmtUrl).then(() => {
          const orig = copyCmtBtn.textContent;
          copyCmtBtn.textContent = "Copied!";
          setTimeout(() => {
            copyCmtBtn.textContent = orig;
          }, 1800);
        });
      });
    }

    printCfpBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        window.print();
      });
    });

    if (downloadIcsBtn) {
      downloadIcsBtn.addEventListener("click", () => {
        const icsContent = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//AIR-CPES 2027//MAIT & BCU//EN",
          "BEGIN:VEVENT",
          "UID:aircpes2027-sub@air-cpes.com",
          "DTSTAMP:20261021T000000Z",
          "DTSTART;VALUE=DATE:20270110",
          "DTEND;VALUE=DATE:20270111",
          "SUMMARY:AIR-CPES 2027 - Paper Submission Deadline (Microsoft CMT)",
          "DESCRIPTION:Submit up to 8-page paper in Springer LNEE format via Microsoft CMT.",
          "END:VEVENT",
          "BEGIN:VEVENT",
          "UID:aircpes2027-conf@air-cpes.com",
          "DTSTAMP:20261021T000000Z",
          "DTSTART;VALUE=DATE:20270308",
          "DTEND;VALUE=DATE:20270310",
          "SUMMARY:AIR-CPES 2027 - 1st International Conference (MAIT Delhi & BCU UK)",
          "LOCATION:MAIT Delhi, India & Birmingham City University, UK (Hybrid)",
          "DESCRIPTION:1st International Conference on Artificial Intelligence for Resilient Cyber-Physical Energy Systems.",
          "END:VEVENT",
          "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "AIR-CPES-2027-Deadlines.ics";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  }
})();
