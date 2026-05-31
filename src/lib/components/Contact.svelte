<script>
  import { onMount } from 'svelte';
  import { setupReveal } from '$lib/utils/reveal.js';

  let formName = $state('');
  let formEmail = $state('');
  let formMessage = $state('');
  let formSubmitted = $state(false);
  let formError = $state(false);
  let formLoading = $state(false);

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return setupReveal('.c-reveal');
  });
</script>

<section class="contact-section" id="contact">
  <div class="section-inner">

    <div class="contact-header c-reveal">
      <p class="section-label">Contact</p>
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-sub">Book a free 30-minute discovery call and let's talk about how I can help your business.</p>
    </div>

    <div class="calendly-wrapper c-reveal">
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/yumulsinclair/free-consultation"
        style="min-width: 320px; height: 700px;"
      ></div>
    </div>

    <div class="or-divider c-reveal">
      <span class="or-text">OR SEND ME A MAIL</span>
    </div>

    <div class="message-form-wrapper c-reveal">
      <h3 class="form-title">Send a Message</h3>
      <form class="message-form" onsubmit={async (e) => {
          e.preventDefault();
          formLoading = true;
          formError = false;
          try {
            const res = await fetch('https://formspree.io/f/mbdbeqgv', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify({ name: formName, email: formEmail, message: formMessage }),
            });
            if (res.ok) {
              formSubmitted = true;
            } else {
              formError = true;
            }
          } catch {
            formError = true;
          } finally {
            formLoading = false;
          }
        }}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            bind:value={formName}
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            bind:value={formEmail}
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="5"
            bind:value={formMessage}
            required
          ></textarea>
        </div>
        {#if formSubmitted}
          <p class="form-success">✓ Message sent! I'll get back to you soon.</p>
        {:else}
          {#if formError}
            <p class="form-error">Something went wrong. Please try again.</p>
          {/if}
          <button type="submit" class="form-btn" disabled={formLoading}>
            {formLoading ? 'Sending...' : 'Send Message →'}
          </button>
        {/if}
      </form>
    </div>

  </div>
</section>

<style>
  .contact-section {
    width: 100%;
    padding: 4rem 1.5rem 6rem;
    transition: background 0.35s ease;
  }

  .section-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .contact-header {
    margin-bottom: 3rem;
  }

  .section-label {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin-bottom: 0.5rem;
  }

  .section-title {
    font-family: var(--font-body);
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin: 0 0 0.75rem;
    transition: color 0.35s ease;
  }

  .section-sub {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--color-text-muted);
    margin: 0;
    max-width: 480px;
  }

  .calendly-wrapper {
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    box-shadow: var(--color-card-inset);
    transition: border-color 0.35s ease;
  }

  .c-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  :global(.c-reveal.in) {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── OR divider ── */
  .or-divider {
    display: flex;
    align-items: center;
    margin: 3rem 0;
  }

  .or-text {
    font-family: var(--font-display);
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--color-text);
    transition: color 0.35s ease;
  }

  /* ── Message form ── */
  .message-form-wrapper {
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    padding: 2rem 2.2rem;
    box-shadow: var(--color-card-inset);
    transition: background 0.35s ease, border-color 0.35s ease;
  }

  @media (max-width: 480px) {
    .message-form-wrapper { padding: 1.5rem 1.25rem; }
    .contact-section { padding: 3rem 1rem 4rem; }
  }

  .form-title {
    font-family: var(--font-body);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin: 0 0 1.75rem;
    transition: color 0.35s ease;
  }

  .message-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .form-group label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    transition: color 0.35s ease;
  }

  .form-group input,
  .form-group textarea {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--color-text);
    background: var(--color-pill-bg);
    border: 1px solid var(--color-card-border);
    border-radius: 8px;
    padding: 0.65rem 0.9rem;
    outline: none;
    resize: vertical;
    transition: border-color 0.2s ease, background 0.35s ease, color 0.35s ease;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--color-text-subtle);
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--color-text-muted);
  }

  .form-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-bg);
    background: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 999px;
    padding: 0.65rem 1.5rem;
    cursor: pointer;
    align-self: flex-start;
    transition: opacity 0.2s ease, border-color 0.35s ease;
  }

  .form-btn:hover {
    opacity: 0.8;
  }

  .form-success {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    font-weight: 500;
    margin: 0;
  }

  .form-error {
    font-size: 0.875rem;
    color: #e05555;
    font-weight: 500;
    margin: 0;
  }

  .form-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>