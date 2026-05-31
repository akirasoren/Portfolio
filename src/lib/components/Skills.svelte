<script>
  import { onMount } from 'svelte';

  const categories = [
    {
      label: 'Automation Platforms',
      desc: 'No-code & low-code workflow builders',
      icon: 'wrench',
      color: '#ea4b35',
      neonGradient: 'linear-gradient(135deg, #ea4b35, #ff4a00)',
      neonA: '#ea4b35',
      neonB: '#ff4a00',
      tools: [
        { name: 'n8n',    slug: 'n8n' },
        { name: 'Zapier', slug: 'zapier' },
        { name: 'Make',   slug: 'make' },
        { name: 'Pipedream', slug: null },
        { name: 'ActivePieces', slug: null },
      ],
    },
    {
      label: 'AI & LLMs',
      desc: 'Language models and AI reasoning layers',
      icon: 'cpu',
      color: '#1CC8C8',
      neonGradient: 'linear-gradient(135deg, #1CC8C8, #7F77DD)',
      neonA: '#1CC8C8',
      neonB: '#7F77DD',
      tools: [
        { name: 'OpenAI',    slug: 'openai' },
        { name: 'Claude',    slug: 'anthropic' },
        { name: 'Langchain', slug: null },
        { name: 'Pinecone',  slug: null },
        { name: 'Ollama',    slug: null },
      ],
    },
    {
      label: 'CRMs & Sales Tools',
      desc: 'Pipeline and customer relationship management',
      icon: 'settings',
      color: '#7F77DD',
      neonGradient: 'linear-gradient(135deg, #7F77DD, #1CC8C8)',
      neonA: '#7F77DD',
      neonB: '#1CC8C8',
      tools: [
        { name: 'GoHighLevel', slug: null },
        { name: 'HubSpot',     slug: 'hubspot' },
        { name: 'Pipedrive',   slug: 'pipedrive' },
        { name: 'Salesforce',  slug: 'salesforce' },
        { name: 'Calendly',    slug: null },
      ],
    },
    {
      label: 'Dev & Infrastructure',
      desc: 'Code, APIs, and backend tooling',
      icon: 'wrench',
      color: '#888780',
      neonGradient: 'linear-gradient(135deg, #888780, #ea4b35)',
      neonA: '#888780',
      neonB: '#ea4b35',
      tools: [
        { name: 'Python',     slug: 'python' },
        { name: 'Supabase',   slug: 'supabase' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'GitHub',     slug: 'github' },
        { name: 'Vercel',     slug: 'vercel' },
      ],
    },
  ];

  onMount(() => {
    const els = document.querySelectorAll('.s-reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
</script>

<section class="skills-section">
  <div class="section-inner">

    <div class="skills-header s-reveal">
      <h2 class="section-title">Tools I work with</h2>
    </div>

    <div class="skills-grid">
      {#each categories as cat, i}
        <div
          class="skill-card s-reveal"
          style="animation-delay: {i * 0.1}s;
                 --neon-gradient: {cat.neonGradient};
                 --neon-color-a: {cat.neonA};
                 --neon-color-b: {cat.neonB};"
        >
          <div class="card-header">
            <div class="card-icon" style="background: {cat.color}22; border-color: {cat.color}33;">
              {#if cat.icon === 'wrench'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={cat.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              {:else if cat.icon === 'settings'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={cat.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              {:else if cat.icon === 'cpu'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={cat.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
              {:else}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={cat.color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12m0 0V2m0 10h10m-10 0H2"/></svg>
              {/if}
            </div>
            <div>
              <h3 class="card-title">{cat.label}</h3>
              <p class="card-desc">{cat.desc}</p>
            </div>
          </div>

          <div class="tools-list">
            {#each cat.tools as tool}
              <div class="tool-pill">
                {#if tool.slug}
                  <img
                    src="https://cdn.simpleicons.org/{tool.slug}/ffffff"
                    alt={tool.name}
                    width="14"
                    height="14"
                    class="tool-icon"
                    onerror={(e) => e.currentTarget.style.display = 'none'} />
                {:else}
                  <div class="tool-dot"></div>
                {/if}
                <span>{tool.name}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>

<style>
  .skills-section {
    width: 100%;
    padding: 4rem 1.5rem;
    transition: background 0.35s ease;
  }

  .section-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .skills-header {
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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .skill-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--color-card-border);
    background: var(--color-card-bg);
    box-shadow: var(--color-card-shadow);
    transition: border-color 0.3s ease, transform 0.2s ease, box-shadow 0.35s ease, background 0.35s ease;
  }

  .skill-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: var(--neon-gradient);
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

  .skill-card:hover {
    transform: translateY(-2px);
    border-color: transparent;
    box-shadow:
      0 0 16px 3px color-mix(in srgb, var(--neon-color-a) calc(40% * var(--glow-opacity)), transparent),
      0 0 40px 8px color-mix(in srgb, var(--neon-color-b) calc(25% * var(--glow-opacity)), transparent),
      4px 4px 12px rgba(0, 0, 0, 0.10);
  }

  .skill-card:hover::before { opacity: 1; }

  .card-header {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .card-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .card-title {
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text);
    margin: 0 0 0.25rem;
    letter-spacing: -0.01em;
  }

  .card-desc {
    font-family: var(--font-body);
    font-size: 0.78rem;
    line-height: 1.5;
    color: var(--color-text-subtle);
    margin: 0;
  }

  .tools-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tool-pill {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 10px;
    border-radius: 999px;
    border: 1px solid var(--color-pill-border);
    background: var(--color-pill-bg);
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-pill-text);
    transition: border-color 0.2s ease, color 0.2s ease, background 0.35s ease;
  }

  .tool-pill:hover {
    border-color: var(--color-toggle-border);
    color: var(--color-text);
  }

  /* In light mode, simpleicons are white — invert them to black */
  :global([data-theme="light"]) .tool-icon {
    filter: invert(1);
  }

  .tool-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-text-subtle);
    flex-shrink: 0;
  }

  @media (max-width: 680px) {
    .skills-grid { grid-template-columns: 1fr; }
  }

  .s-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  :global(.s-reveal.in) {
    opacity: 1;
    transform: translateY(0);
  }
</style>