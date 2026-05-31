<script>
  import { onMount } from 'svelte';
  import { setupReveal } from '$lib/utils/reveal.js';

  onMount(() => { return setupReveal('.reveal'); });
</script>

<section class="about-section">
  <div class="section-inner">

    <div class="about-header reveal">
      <h2 class="section-title">What I can do for you</h2>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <p class="service-label">Service</p>
        <h3 class="service-name">Workflow Automation</h3>
        <div class="service-image">
          <img src="/services/workflow.png" alt="Workflow Automation" />
        </div>
        <p class="service-desc">
          I design and build end-to-end automation pipelines that eliminate repetitive manual work — connecting your tools, triggering actions, and keeping your business running on autopilot.
        </p>
      </div>

      <div class="service-card">
        <p class="service-label">Service</p>
        <h3 class="service-name">System Integration</h3>
        <div class="service-image">
          <img src="/services/integration.png" alt="System Integration" />
        </div>
        <p class="service-desc">
          I connect your CRMs, APIs, databases, and third-party platforms into a single cohesive system — so your data flows where it needs to go without manual intervention.
        </p>
      </div>

      <div class="service-card">
        <p class="service-label">Service</p>
        <h3 class="service-name">Maintenance & Support</h3>
        <div class="service-image">
          <img src="/services/maintenance.png" alt="Maintenance and Support" />
        </div>
        <p class="service-desc">
          I take over broken or underperforming systems, troubleshoot issues, optimize for speed and reliability, and keep everything running smoothly long after launch.
        </p>
      </div>
    </div>

    <div class="hiw-header reveal">
      <h2 class="section-title">How it works</h2>
    </div>

    <div class="hiw-list">
      <div class="hiw-item">
        <div class="hiw-line-col">
          <div class="hiw-dot"></div>
          <div class="hiw-line"></div>
        </div>
        <div class="hiw-card reveal">
          <div class="hiw-image-placeholder">
            <span class="hiw-image-label">Image placeholder</span>
          </div>
          <div class="hiw-content">
            <p class="hiw-number">01</p>
            <h3 class="hiw-title">Diagnose</h3>
            <p class="hiw-desc">We map out your current workflow, find where time is being lost and where leads are slipping through the cracks.</p>
          </div>
        </div>
      </div>

      <div class="hiw-item">
        <div class="hiw-line-col">
          <div class="hiw-dot"></div>
          <div class="hiw-line"></div>
        </div>
        <div class="hiw-card reveal">
          <div class="hiw-image-placeholder">
            <span class="hiw-image-label">Image placeholder</span>
          </div>
          <div class="hiw-content">
            <p class="hiw-number">02</p>
            <h3 class="hiw-title">Build</h3>
            <p class="hiw-desc">I engineer the automation system end-to-end — tested and documented before it ever touches your business.</p>
          </div>
        </div>
      </div>

      <div class="hiw-item">
        <div class="hiw-line-col">
          <div class="hiw-dot"></div>
        </div>
        <div class="hiw-card reveal">
          <div class="hiw-image-placeholder">
            <span class="hiw-image-label">Image placeholder</span>
          </div>
          <div class="hiw-content">
            <p class="hiw-number">03</p>
            <h3 class="hiw-title">Deploy</h3>
            <p class="hiw-desc">You get a hands-off system that runs itself, with full handover so your team knows exactly what's happening.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<style>
  .about-section {
    width: 100%;
    padding: 4rem 1.5rem;
    background: var(--color-bg);
    transition: background 0.35s ease;
  }

  .section-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .about-header {
    max-width: 560px;
    margin: 0 auto 3rem;
  }

  .section-title {
    font-family: var(--font-body);
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin: 0;
    transition: color 0.35s ease;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .service-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--color-card-border);
    background: var(--color-card-bg);
    box-shadow: var(--color-card-shadow);
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s ease, box-shadow 0.35s ease, background 0.35s ease;
  }

  .service-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: linear-gradient(135deg, #ea4b35, #7F77DD, #1CC8C8);
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 2px;
    pointer-events: none;
  }

  .service-card:hover {
    transform: scale(1.03);
    border-color: transparent;
    box-shadow:
      0 0 16px 3px rgba(234, 75, 53, calc(0.4 * var(--glow-opacity))),
      0 0 40px 8px rgba(127, 119, 221, calc(0.2 * var(--glow-opacity))),
      4px 4px 12px rgba(0, 0, 0, 0.15);
  }

  .service-card:hover::before { opacity: 1; }

  .service-label {
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin: 0;
  }

  .service-name {
    font-family: var(--font-body);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin: 0;
    line-height: 1.2;
  }

  .service-image {
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 10px;
    background: var(--color-pill-bg);
    border: 1px solid var(--color-card-border);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem 0;
  }

  .service-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.85;
  }

  .service-desc {
    font-family: var(--font-body);
    font-size: 0.85rem;
    line-height: 1.75;
    color: var(--color-text-muted);
    margin: 0;
  }

  @media (max-width: 680px) {
    .services-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 960px) and (min-width: 681px) {
    .services-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* ── How It Works ── */
  .hiw-header {
    max-width: 960px;
    margin: 5rem auto 2.5rem;
  }

  .hiw-list {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .hiw-item {
    display: flex;
    gap: 1.5rem;
    align-items: stretch;
  }

  .hiw-line-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.75rem;
    flex-shrink: 0;
    width: 24px;
  }

  .hiw-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-text-muted);
    border: 2px solid var(--color-border);
    flex-shrink: 0;
  }

  .hiw-line {
    width: 1px;
    flex: 1;
    background: var(--color-divider-weak);
    margin-top: 0.5rem;
    min-height: 2rem;
  }

  .hiw-card {
    position: relative;
    flex: 1;
    display: flex;
    gap: 1.25rem;
    padding: 1.5rem;
    margin-bottom: 1.25rem;
    border-radius: 16px;
    border: 1px solid var(--color-card-border);
    background: var(--color-card-bg);
    box-shadow: var(--color-card-shadow);
    transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.35s ease, background 0.35s ease;
  }

  .hiw-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: linear-gradient(135deg, #1CC8C8, #7F77DD, #ea4b35);
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 2px;
    pointer-events: none;
  }

  .hiw-card:hover {
    border-color: transparent;
    transform: translateY(-2px);
    box-shadow:
      0 0 16px 3px rgba(28, 200, 200, calc(0.4 * var(--glow-opacity))),
      0 0 40px 8px rgba(127, 119, 221, calc(0.2 * var(--glow-opacity))),
      4px 4px 12px rgba(0, 0, 0, 0.10);
  }

  .hiw-card:hover::before { opacity: 1; }

  .hiw-image-placeholder {
    width: 120px;
    min-width: 120px;
    border-radius: 10px;
    background: var(--color-pill-bg);
    border: 1px solid var(--color-card-border);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .hiw-image-label {
    font-family: var(--font-body);
    font-size: 0.65rem;
    color: var(--color-text-subtle);
    text-align: center;
    letter-spacing: 0.05em;
  }

  .hiw-content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    justify-content: center;
  }

  .hiw-number {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--color-text-subtle);
    margin: 0;
  }

  .hiw-title {
    font-family: var(--font-body);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin: 0;
    line-height: 1.2;
  }

  .hiw-desc {
    font-family: var(--font-body);
    font-size: 0.875rem;
    line-height: 1.75;
    color: var(--color-text-muted);
    margin: 0;
  }

  @media (max-width: 680px) {
    .hiw-card {
      flex-direction: column;
      align-items: flex-start;
    }
    .hiw-image-placeholder {
      width: 100%;
      min-width: unset;
      aspect-ratio: 16/6;
    }
    .services-grid { grid-template-columns: 1fr; }
  }

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 1.2s ease, transform 1.2s ease;
    transition-delay: 0.10s;
  }

  :global(.reveal.in) {
    opacity: 1;
    transform: translateY(0);
  }
</style>