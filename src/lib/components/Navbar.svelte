<script>
  import { theme } from '$lib/stores/theme.svelte.js';

  let menuOpen = $state(false);
  function closeMenu() { menuOpen = false; }
</script>

<nav>
  <div class="nav-inner">
    <a href="/" class="logo">Levi Menor</a>
    <div class="nav-right">
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/works" class="nav-link">Works</a>
        <a href="/#contact" class="nav-link">Contact</a>
      </div>

      <button
        class="theme-toggle"
        onclick={() => theme.toggle()}
        aria-label="Toggle light/dark mode"
      >
        {#if theme.current === 'dark'}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1"  x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1"  y1="12" x2="3"  y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
          </svg>
          <span class="toggle-label">Light</span>
        {:else}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
          <span class="toggle-label">Dark</span>
        {/if}
      </button>

      <button
        class="hamburger"
        onclick={() => menuOpen = !menuOpen}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span class="bar" class:open={menuOpen}></span>
        <span class="bar" class:open={menuOpen}></span>
        <span class="bar" class:open={menuOpen}></span>
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div class="mobile-menu">
      <a href="/" class="mobile-link" onclick={closeMenu}>Home</a>
      <a href="/works" class="mobile-link" onclick={closeMenu}>Works</a>
      <a href="/#contact" class="mobile-link" onclick={closeMenu}>Contact</a>
    </div>
  {/if}
</nav>

<style>
  @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700&display=swap');

  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: var(--color-nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-nav-border);
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.10);
    transition: background 0.35s ease, border-color 0.35s ease;
  }

  .nav-inner {
    height: 60px;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-family: 'ClashDisplay', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.35s ease;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-text);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color 0.2s ease;
  }

  .nav-link:hover {
    color: var(--color-text-muted);
  }

  /* ── Theme toggle ── */
  .theme-toggle {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: var(--color-toggle-bg);
    color: var(--color-toggle-text);
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    cursor: pointer;
    transition:
      background 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      transform 0.15s ease;
  }

  .theme-toggle:hover {
    background: var(--color-toggle-hover-bg);
    transform: translateY(-1px);
  }

  .theme-toggle:active {
    transform: translateY(0);
  }

  .toggle-label {
    line-height: 1;
  }

  /* ── Hamburger ── */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    padding: 6px;
    background: var(--color-toggle-bg);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .hamburger:hover {
    background: var(--color-toggle-hover-bg);
  }

  .bar {
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background: var(--color-text);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Animate to X when open */
  .hamburger .bar:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
  .hamburger .bar:nth-child(2).open { opacity: 0; }
  .hamburger .bar:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

  /* ── Mobile dropdown menu ── */
  .mobile-menu {
    display: flex;
    flex-direction: column;
    padding: 0.75rem 1.5rem 1rem;
    border-top: 1px solid var(--color-nav-border);
    background: var(--color-nav-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .mobile-link {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text);
    text-decoration: none;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-divider-weak);
    letter-spacing: 0.02em;
    transition: color 0.2s ease;
  }

  .mobile-link:last-child {
    border-bottom: none;
  }

  .mobile-link:hover {
    color: var(--color-text-muted);
  }

  /* ── Breakpoints ── */
  @media (max-width: 480px) {
    .nav-inner { padding: 0 1rem; max-width: 100%; margin: 0; }
    .nav-links  { display: none; }
    .hamburger  { display: flex; }
    .logo       { font-size: 1.1rem; }
    .toggle-label { display: none; }
    .theme-toggle { padding: 0.4rem; }
    .nav-right  { gap: 0.75rem; }
  }
</style>