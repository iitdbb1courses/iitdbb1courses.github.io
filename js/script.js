/**
 * script.js  —  Main Application Logic
 * ─────────────────────────────────────────────────────────────
 * Depends on:
 *   courses.js → CURRICULA, SEMESTER_ORDER
 *   theme.js   → ThemeManager
 *
 * Managers:
 *   SidebarManager    — builds & manages left semester nav
 *   TableManager      — renders course rows into <tbody>
 *   CurriculumManager — switches between "new" / "old" curricula
 *   AnimationManager  — smooth panel transition on semester change
 *   MobileManager     — hamburger + overlay for ≤768px
 *   App               — bootstrap entry point
 * ─────────────────────────────────────────────────────────────
 */

'use strict';

/* ════════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════════ */
const State = {
  curriculum:     'new',               // 'new' | 'old'
  activeSemester: SEMESTER_ORDER[0],   // 'III' … 'VIII'
  isAnimating:    false
};

/* Persist keys */
const CURR_KEY = 'bb1-curriculum';


/* ════════════════════════════════════════════════════════════
   UTILITIES
════════════════════════════════════════════════════════════ */

/** Escape HTML to prevent XSS */
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Format a credit number:
 *   4   → "4"   (no trailing zero)
 *   4.5 → "4.5"
 */
function fmtCr(n) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

/** Simple debounce */
function debounce(fn, ms) {
  let t;
  return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

/** Get cached element references */
const el = id => document.getElementById(id);


/* ════════════════════════════════════════════════════════════
   SIDEBAR MANAGER
   Builds the semester list and manages active highlight.
════════════════════════════════════════════════════════════ */
const SidebarManager = {

  /** Build/rebuild the list of semester items */
  build() {
    const list     = el('semList');
    const currData = CURRICULA[State.curriculum];
    if (!list || !currData) return;

    list.innerHTML = '';
    const frag = document.createDocumentFragment();

    SEMESTER_ORDER.forEach(semKey => {
      const sem = currData[semKey];
      if (!sem) return;

      const li  = document.createElement('li');
      li.className   = 'sem-item';
      li.dataset.sem = semKey;
      li.tabIndex    = 0;
      li.setAttribute('role', 'button');
      li.setAttribute('aria-label', sem.label);
      li.textContent = sem.label;

      li.addEventListener('click', () => SidebarManager.select(semKey));
      li.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          SidebarManager.select(semKey);
        }
      });

      frag.appendChild(li);
    });

    list.appendChild(frag);
    this.setActive(State.activeSemester);
  },

  /** Highlight the active semester item */
  setActive(semKey) {
    document.querySelectorAll('.sem-item').forEach(item => {
      item.classList.toggle('active', item.dataset.sem === semKey);
    });
  },

  /** Select a semester (with animation guard) */
  select(semKey) {
    if (State.isAnimating) return;
    if (semKey === State.activeSemester) {
      MobileManager.closeSidebar();
      return;
    }
    State.activeSemester = semKey;
    this.setActive(semKey);
    DetailManager.reset();                              // clear detail panel on semester change
    AnimationManager.run(() => TableManager.render(semKey));
    MobileManager.closeSidebar();
  }
};


/* ════════════════════════════════════════════════════════════
   TABLE MANAGER
   Renders course rows into #courseBody and updates header info.
════════════════════════════════════════════════════════════ */
const TableManager = {

  /** Build one <tr> HTML string */
  buildRow(course, idx) {
    const delay  = (idx * 30).toFixed(0);
    const ltpStr = `${course.l}-${course.t}-${course.p}`;

    return `
      <tr class="clickable-row" data-code="${esc(course.code)}"
          style="animation-delay:${delay}ms"
          aria-label="${esc(course.code)}: ${esc(course.name)}"
          tabindex="0">
        <td class="td-code">
          <span class="code-chip">${esc(course.code)}</span>
        </td>
        <td class="td-name">
          <span class="course-name">${esc(course.name)}</span>
        </td>
        <td class="td-credits">
          <span class="credit-num">${fmtCr(course.credits)}</span>
        </td>
        <td class="td-slot">${course.slot ? esc(course.slot) : '—'}</td>
      </tr>`.trim();
  },

  /** Render all courses for a semester + update header */
  render(semKey) {
    const sem    = CURRICULA[State.curriculum]?.[semKey];
    const body   = el('courseBody');
    if (!body) return;

    if (!sem || !sem.courses?.length) {
      body.innerHTML = `
        <tr class="empty-row">
          <td colspan="4">
            <span class="empty-icon">📭</span>
            No data for this semester.
          </td>
        </tr>`;
      this.updateHeader(null, 0);
      return;
    }

    /* Render rows */
    body.innerHTML = sem.courses.map((c, i) => this.buildRow(c, i)).join('');

    /* Bind row click → detail panel */
    const courses = sem.courses;
    body.querySelectorAll('.clickable-row').forEach((row, idx) => {
      row.addEventListener('click', () => {
        body.querySelectorAll('.clickable-row').forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
        DetailManager.show(courses[idx].code, courses[idx]);
      });
      /* Keyboard: Enter / Space also triggers click */
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); row.click(); }
      });
    });

    /* Compute totals */
    const totalCredits = sem.courses.reduce((s, c) => s + c.credits, 0);

    this.updateHeader(sem.label, totalCredits);
  },

  /** Update panel title, subtitle, credit badge */
  updateHeader(semLabel, credits, subtitle) {
    const title    = el('panelTitle');
    const sub      = el('panelSubtitle');
    const badge    = el('creditValue');

    if (title) title.textContent = semLabel || '—';
    if (sub)   sub.textContent   = subtitle  || '';

    if (badge) {
      badge.textContent = credits ? fmtCr(credits) : '—';
      /* Pop animation on value change */
      badge.classList.remove('credit-pop');
      void badge.offsetWidth; // force reflow
      badge.classList.add('credit-pop');
    }
  }
};


/* ════════════════════════════════════════════════════════════
   DETAIL MANAGER
   Renders course detail card in #detailPanel when a row is clicked.
   Content is read from COURSE_CONTENT (js/courseContent.js).
   To update content, edit courseContent.js — no other changes needed.
════════════════════════════════════════════════════════════ */
const DetailManager = {

  /** Show detail card for a given course */
  show(code, course) {
    const panel = el('detailPanel');
    if (!panel) return;

    /* Read from user-editable courseContent.js */
    const content  = (typeof window.COURSE_CONTENT !== 'undefined' && window.COURSE_CONTENT[code]) || {};
    const desc     = content.description  || null;
    const obj      = content.objectives   || null;
    const topics   = Array.isArray(content.topics)    ? content.topics    : [];
    const books    = Array.isArray(content.textbooks)  ? content.textbooks : [];
    const prereqs  = content.prerequisites || null;
    const noData   = !desc && !obj && !topics.length && !books.length;

    panel.innerHTML = `
      <div class="detail-card">

        <!-- Header: code + name + chips -->
        <div class="dc-header">
          <span class="dc-badge">${esc(code)}</span>
          <h3 class="dc-title">${esc(course.name)}</h3>
          <div class="dc-chips">
            <span class="dc-chip">${course.l}-${course.t}-${course.p}&nbsp;(L-T-P)</span>
            <span class="dc-chip">${fmtCr(course.credits)} Credits</span>
            ${prereqs ? `<span class="dc-chip">Pre: ${esc(prereqs)}</span>` : ''}
          </div>
        </div>

        ${noData ? `
        <div class="dc-empty">
          <p>No content added for this course yet.</p>
        </div>` : ''}

        ${obj ? `
        <div class="dc-section">
          <h4 class="dc-section-title">&#128204; Objectives</h4>
          <p class="dc-text">${esc(obj)}</p>
        </div>` : ''}

        ${desc ? `
        <div class="dc-section">
          <h4 class="dc-section-title">&#128221; Description</h4>
          <p class="dc-text">${esc(desc)}</p>
        </div>` : ''}

        ${topics.length ? `
        <div class="dc-section">
          <h4 class="dc-section-title">&#128203; Topics / Syllabus</h4>
          <ol class="dc-list dc-topics">${topics.map(t => `<li>${esc(t)}</li>`).join('')}</ol>
        </div>` : ''}

        ${books.length ? `
        <div class="dc-section">
          <h4 class="dc-section-title">&#128218; Textbooks</h4>
          <ul class="dc-list dc-books">${books.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
        </div>` : ''}

        <p class="dc-edit-note">
          &#9998; To update this content, edit <code>js/courseContent.js</code> in any text editor.
        </p>

      </div>`;
  },

  /** Reset to placeholder state */
  reset() {
    const panel = el('detailPanel');
    if (!panel) return;
    panel.innerHTML = `
      <div class="detail-placeholder">
        <span class="detail-ph-icon">&#9757;&#65039;</span>
        <p class="detail-ph-text">Click any course row to view its details</p>
      </div>`;
  }
};


/* ════════════════════════════════════════════════════════════
   CURRICULUM MANAGER
   Handles the toggle switch between "new" and "old" curricula.
════════════════════════════════════════════════════════════ */
const CurriculumManager = {

  /** Apply a curriculum (no animation on initial load, animated on toggle) */
  apply(curr, animate = false) {
    if (!CURRICULA[curr]) return;
    State.curriculum = curr;
    localStorage.setItem(CURR_KEY, curr);

    /* Update toggle UI */
    const toggle = el('currToggle');
    const label  = el('currLabel');
    if (toggle) {
      toggle.checked = (curr === 'new');
      toggle.setAttribute('aria-checked', String(curr === 'new'));
    }
    if (label) {
      label.textContent = CURRICULA[curr].meta.label;
    }

    /* Rebuild sidebar (credit totals may differ between curricula) */
    SidebarManager.build();
    SidebarManager.setActive(State.activeSemester);

    /* Re-render table */
    if (animate) {
      AnimationManager.run(() => TableManager.render(State.activeSemester));
    } else {
      TableManager.render(State.activeSemester);
    }
  },

  /** Detect saved or default curriculum */
  detect() {
    const s = localStorage.getItem(CURR_KEY);
    return (s === 'new' || s === 'old') ? s : 'new';
  },

  /** Bind the toggle checkbox */
  init() {
    const toggle = el('currToggle');
    if (!toggle) return;
    toggle.addEventListener('change', () => {
      this.apply(toggle.checked ? 'new' : 'old', true);
    });
  }
};


/* ════════════════════════════════════════════════════════════
   ANIMATION MANAGER
   3-step transition: fade-out → update → fade-in
════════════════════════════════════════════════════════════ */
const AnimationManager = {
  DUR: 190, // ms

  run(updateFn) {
    if (State.isAnimating) return;
    State.isAnimating = true;

    const main = el('mainContent');
    if (!main) { updateFn(); State.isAnimating = false; return; }

    main.classList.add('panel-animating-out');

    setTimeout(() => {
      updateFn();
      main.classList.remove('panel-animating-out');
      main.classList.add('panel-animating-in');

      // A tiny delay ensures the browser registers the new class
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          main.classList.remove('panel-animating-in');
          setTimeout(() => { State.isAnimating = false; }, this.DUR);
        });
      });
    }, this.DUR);
  }
};


/* ════════════════════════════════════════════════════════════
   MOBILE MANAGER
   Hamburger button + sidebar overlay for ≤768px
════════════════════════════════════════════════════════════ */
const MobileManager = {

  openSidebar() {
    const sidebar  = el('sidebar');
    const overlay  = el('sidebarOverlay');
    const btn      = el('hamburgerBtn');
    if (sidebar) { sidebar.classList.add('open'); }
    if (overlay) { overlay.classList.add('show'); }
    if (btn)     { btn.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    document.body.style.overflow = 'hidden';
  },

  closeSidebar() {
    const sidebar  = el('sidebar');
    const overlay  = el('sidebarOverlay');
    const btn      = el('hamburgerBtn');
    if (sidebar) { sidebar.classList.remove('open'); }
    if (overlay) { overlay.classList.remove('show'); }
    if (btn)     { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  },

  init() {
    const btn     = el('hamburgerBtn');
    const overlay = el('sidebarOverlay');

    if (btn) btn.addEventListener('click', () => {
      btn.classList.contains('open')
        ? this.closeSidebar()
        : this.openSidebar();
    });

    if (overlay) overlay.addEventListener('click', () => this.closeSidebar());

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeSidebar();
    });

    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth > 768) this.closeSidebar();
    }, 200));
  }
};


/* ════════════════════════════════════════════════════════════
   APP  —  Bootstrap entry point
════════════════════════════════════════════════════════════ */
const App = {
  init() {
    /* 1. Theme (reads localStorage / OS preference) */
    ThemeManager.init();

    /* 2. Detect saved curriculum */
    const savedCurr = CurriculumManager.detect();

    /* 3. Init curriculum toggle binding */
    CurriculumManager.init();

    /* 4. Apply saved curriculum (no animation on first load) */
    CurriculumManager.apply(savedCurr, false);

    /* 5. Mobile controls */
    MobileManager.init();

    /* 6. Dev log */
    console.info(
      '%c BB1 Web — IIT Delhi Course Repository ',
      'background:#1a56db;color:#fff;font-weight:700;padding:3px 8px;border-radius:4px;',
      `\nCurriculum: ${savedCurr} | Semester: ${State.activeSemester}`
    );
  }
};

/* Guard: script is at bottom of <body>, DOM is ready.
   addEventListener is a safety net for edge cases. */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
