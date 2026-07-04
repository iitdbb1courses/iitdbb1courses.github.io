/**
 * theme.js  —  Dark / Light Mode Manager
 * ─────────────────────────────────────────────────────────────
 * Responsibilities:
 *   • Detect saved preference from localStorage
 *   • Detect OS preference (prefers-color-scheme)
 *   • Apply theme to <html data-theme="...">
 *   • Update button icon and label
 *   • Persist preference to localStorage
 * ─────────────────────────────────────────────────────────────
 * Usage:  ThemeManager.init()   ← called once on DOMContentLoaded
 *         ThemeManager.toggle() ← called by button click
 */

'use strict';

const ThemeManager = (() => {
  const STORAGE_KEY = 'bb1-theme';

  /** Detect best initial theme */
  function detect() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    // Fall back to OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /** Apply a theme ('light' | 'dark') */
  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const icon  = document.getElementById('themeIcon');
    const label = document.getElementById('themeText');

    if (theme === 'dark') {
      if (icon)  icon.textContent  = '☀️';
      if (label) label.textContent = 'Light Mode';
    } else {
      if (icon)  icon.textContent  = '🌙';
      if (label) label.textContent = 'Dark Mode';
    }
  }

  /** Toggle between light and dark */
  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    apply(current === 'dark' ? 'light' : 'dark');
  }

  /** Initialise: apply saved/detected theme and bind button */
  function init() {
    apply(detect());

    const btn = document.getElementById('darkModeBtn');
    if (btn) btn.addEventListener('click', toggle);

    // Watch OS preference changes (e.g. user switches system theme)
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        // Only follow OS if no user preference is saved
        if (!localStorage.getItem(STORAGE_KEY)) {
          apply(e.matches ? 'dark' : 'light');
        }
      });
  }

  /* Public API */
  return { init, toggle, apply };
})();
