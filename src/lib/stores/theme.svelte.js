// theme.svelte.js  — lives at src/lib/stores/theme.svelte.js
// Session-only: intentionally never touches localStorage.

let _theme = $state('dark');

export const theme = {
  get current() { return _theme; },
  toggle() {
    _theme = _theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', _theme);
  },
  init() {
    // Always starts dark on every page load
    document.documentElement.removeAttribute('data-theme');
    _theme = 'dark';
  }
};