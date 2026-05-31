<script>
  import { onMount } from 'svelte';
  import { setupReveal } from '$lib/utils/reveal.js';

  const showTestimonials = false;
  const testimonials = [ /* keep your existing testimonials array here */ ];

  let current = $state(0);
  let visibleCount = $state(3);

  function prev() { if (current > 0) current--; }
  function next() { if (current < testimonials.length - visibleCount) current++; }
  function goTo(i) { current = i; }

  onMount(() => {
    const update = () => {
      const w = window.innerWidth;
      visibleCount = w < 680 ? 1 : w < 960 ? 2 : 3;
      current = Math.min(current, Math.max(0, testimonials.length - visibleCount));
    };
    update();
    window.addEventListener('resize', update);

    const cleanup = setupReveal('.t-reveal');
    return () => {
      window.removeEventListener('resize', update);
      cleanup();
    };
  });
</script>

{#if showTestimonials}
<section class="testimonials-section">
  <div class="section-inner">

    <div class="testimonials-header t-reveal">
      <h2 class="section-title">What Clients Say</h2>
    </div>

    <div class="carousel-outer t-reveal">
      <div
        class="carousel-track"
        style="--visible: {visibleCount}; transform: translateX(calc(-{current} * (100% / {visibleCount} + 1.25rem / {visibleCount} * ({visibleCount} - 1) / {visibleCount})))"
      >
        {#each testimonials as t}
          <div class="testimonial-card" style="--visible: {visibleCount}">
            <div class="card-body">
              <div class="quote-mark">&#x201C;</div>
              <p class="quote-text">{t.quote}</p>
            </div>
            <div class="client-row">
              <div class="avatar">
                {#if t.avatar}
                  <img src={t.avatar} alt={t.name} />
                {:else}
                  <div class="avatar-fallback">{t.name[0]}</div>
                {/if}
              </div>
              <div class="client-info">
                <p class="client-name">{t.name}</p>
                <p class="client-handle">{t.handle}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="carousel-controls">
      <button class="arrow" onclick={prev} disabled={current === 0} aria-label="Previous">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <div class="dots">
        {#each Array(Math.max(1, testimonials.length - visibleCount + 1)) as _, i}
          <button class="dot {i === current ? 'active' : ''}" onclick={() => goTo(i)} aria-label="Go to {i + 1}"></button>
        {/each}
      </div>
      <button class="arrow" onclick={next} disabled={current >= testimonials.length - visibleCount} aria-label="Next">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>
    </div>

  </div>
</section>
{/if}

<style>
  .testimonials-section {
    width: 100%;
    padding: 4rem 1.5rem;
    transition: background 0.35s ease;
  }

  .section-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .testimonials-header {
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
    margin: 0;
    transition: color 0.35s ease;
  }

  .carousel-outer {
    overflow: hidden;
    width: 100%;
  }

  .carousel-track {
    display: flex;
    gap: 1.25rem;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .testimonial-card {
    position: relative;
    flex: 0 0 calc((100% - (var(--visible) - 1) * 1.25rem) / var(--visible));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.75rem;
    border-radius: 16px;
    border: 1px solid var(--color-card-border);
    background: var(--color-card-bg);
    box-shadow: var(--color-card-shadow);
    min-height: 200px;
    transition: transform 0.2s ease, background 0.35s ease, border-color 0.35s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-2px);
  }

  .card-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .quote-mark {
    font-size: 5rem;
    line-height: 1;
    color: var(--color-text-subtle);
    font-weight: 700;
  }

  .quote-text {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.75;
    color: var(--color-text-muted);
    margin: 0;
  }

  .client-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-divider-weak);
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid var(--color-border);
  }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .avatar-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-pill-bg);
    color: var(--color-text-subtle);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .client-info {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .client-name {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text);
    margin: 0;
  }

  .client-handle {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-text-subtle);
    margin: 0;
  }

  .carousel-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    background: var(--color-pill-bg);
    color: var(--color-text-muted);
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  .arrow:hover:not(:disabled) {
    background: var(--color-toggle-hover-bg);
    border-color: var(--color-toggle-border);
    color: var(--color-text);
  }

  .arrow:disabled {
    opacity: 0.25;
    cursor: default;
  }

  .dots {
    display: flex;
    gap: 0.4rem;
    align-items: center;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: none;
    background: var(--color-text-subtle);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .dot.active {
    background: var(--color-text-muted);
    transform: scale(1.3);
  }

  .t-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  :global(.t-reveal.in) {
    opacity: 1;
    transform: translateY(0);
  }
</style>