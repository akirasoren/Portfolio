<footer>
  <div class="footer-inner">
    <p class="copyright">© 2026 Levi Menor</p>

    <div class="socials">
      <span class="socials-label">Socials</span>

      <a href="https://instagram.com/p4xlee_?igsh=bmd4Z2NncWJjeXV6" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        <span class="social-name">Instagram</span>
      </a>

      <a href="https://github.com/akirasoren" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
        </svg>
        <span class="social-name">GitHub</span>
      </a>
    </div>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    background: var(--color-footer-bg);
    border-top: 1px solid var(--color-border);
    padding: 1.75rem 1.5rem;
    transition: background 0.35s ease, border-color 0.35s ease;
  }

  .footer-inner {
    max-width: 560px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    .footer-inner {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }

  .copyright {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--color-footer-text);
    margin: 0;
    letter-spacing: 0.02em;
    transition: color 0.35s ease;
  }

  .socials {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .socials a {
    color: var(--color-footer-text);
    display: flex;
    align-items: center;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .socials a:hover {
    color: var(--color-footer-text-hover);
    transform: translateY(-2px);
  }

  .socials-label {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin-right: 0.25rem;
  }

  .social-name {
    font-size: 0.8rem;
    color: var(--color-footer-text);
    margin-left: 0.35rem;
  }
</style>