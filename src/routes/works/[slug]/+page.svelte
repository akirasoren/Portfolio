<script>
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const projects = {
    // ── Featured ──────────────────────────────────────
    'leadflow-ai': {
      name: 'LeadFlow AI',
      role: 'Automation Engineer',
      year: '2024',
      tags: ['n8n', 'GPT-4', 'GHL', 'Webhooks'],
      color: '#ea4b35',
      image: '', // e.g. '/images/leadflow-ai.jpg'
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Cut manual triage time by 80%. Placeholder outcome text will be replaced with real results.',
    },
    'langchain-doc-bot': {
      name: 'Langchain Doc Bot',
      role: 'AI Systems Engineer',
      year: '2024',
      tags: ['Langchain', 'Python', 'Pinecone', 'Claude'],
      color: '#1CC8C8',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },
    'zapier-revenue-ops': {
      name: 'Zapier Revenue Ops',
      role: 'Automation Consultant',
      year: '2023',
      tags: ['Zapier', 'HubSpot', 'Slack', 'Google Sheets'],
      color: '#ff4a00',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },
    'ai-onboarding-engine': {
      name: 'AI Onboarding Engine',
      role: 'Systems Architect',
      year: '2023',
      tags: ['Make', 'Pipedrive', 'Claude API', 'Calendly'],
      color: '#7F77DD',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },

    // ── Other Projects ────────────────────────────────
    'slack-alert-bot': {
      name: 'Slack Alert Bot',
      role: 'Automation Engineer',
      year: '2024',
      tags: ['Slack API', 'n8n', 'Webhooks'],
      color: '#5865F2',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },
    'gpt-email-responder': {
      name: 'GPT Email Responder',
      role: 'AI Engineer',
      year: '2024',
      tags: ['GPT-4', 'Gmail API', 'Python'],
      color: '#10B981',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },
    'notion-sync-engine': {
      name: 'Notion Sync Engine',
      role: 'Systems Engineer',
      year: '2023',
      tags: ['Notion API', 'Make', 'Airtable'],
      color: '#F59E0B',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },
    'ai-seo-pipeline': {
      name: 'AI SEO Pipeline',
      role: 'Automation Consultant',
      year: '2023',
      tags: ['Claude API', 'Zapier', 'WordPress'],
      color: '#EC4899',
      image: '',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      solution: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      outcome: 'Placeholder outcome text will be replaced with real results.',
    },
  };

  const slug = $derived($page.params.slug);
  const project = $derived(projects[slug]);
</script>

<svelte:head>
  <title>{project ? project.name : 'Case Study'} — Levi Menor</title>
</svelte:head>

<Navbar />

<main class="case-study-page">
  {#if project}
    <div class="page-inner" style="--accent: {project.color};">

      <!-- Hero -->
      <header class="cs-header">
        <a href="/works" class="back-link">← All Works</a>

        <div class="cs-meta">
          <span class="cs-role">{project.role}</span>
          <span class="cs-divider">·</span>
          <span class="cs-year">{project.year}</span>
        </div>

        <h1 class="cs-title">{project.name}</h1>

        <div class="cs-tags">
          {#each project.tags as tag}
            <span class="tag">{tag}</span>
          {/each}
        </div>

        <div class="cs-banner">
          <div class="banner-glow"></div>
          {#if project.image}
            <img src={project.image} alt={project.name} class="banner-img" />
          {:else}
            <div class="banner-dot"></div>
            <p class="banner-label">Project Preview</p>
          {/if}
        </div>
      </header>

      <!-- Coming Soon notice -->
      <div class="coming-soon-bar">
        <span class="cs-pill">🚧 Case study coming soon</span>
        <p>Full write-up is in progress. The content below is a placeholder.</p>
      </div>

      <!-- Content sections -->
      <div class="cs-sections">

        <div class="cs-section">
          <p class="section-label">Overview</p>
          <p class="section-body">{project.overview}</p>
        </div>

        <div class="cs-divider-line"></div>

        <div class="cs-section">
          <p class="section-label">The Problem</p>
          <p class="section-body">{project.problem}</p>
        </div>

        <div class="cs-divider-line"></div>

        <div class="cs-section">
          <p class="section-label">The Solution</p>
          <p class="section-body">{project.solution}</p>
        </div>

        <div class="cs-divider-line"></div>

        <div class="cs-section">
          <p class="section-label">Outcome</p>
          <p class="section-body">{project.outcome}</p>
        </div>

      </div>

      <!-- Footer nav -->
      <div class="cs-footer-nav">
        <a href="/works" class="back-btn">← Back to Works</a>
      </div>

    </div>

  {:else}
    <div class="not-found">
      <h1>Project not found</h1>
      <a href="/works">← Back to Works</a>
    </div>
  {/if}
</main>

<Footer />

<style>
  .case-study-page {
    min-height: 100vh;
    padding-top: 60px;
    background: var(--color-bg);
    transition: background 0.35s ease;
  }

  .page-inner {
    max-width: 680px;
    margin: 0 auto;
    padding: 4rem 1.5rem 6rem;
  }

  /* ── Header ── */
  .back-link {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--color-text-subtle);
    text-decoration: none;
    letter-spacing: 0.03em;
    margin-bottom: 2.5rem;
    transition: color 0.2s ease;
  }

  .back-link:hover {
    color: var(--color-text);
  }

  .cs-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .cs-role, .cs-year {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-subtle);
  }

  .cs-divider {
    color: var(--color-text-subtle);
    font-size: 0.75rem;
  }

  .cs-title {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 1.25rem;
    transition: color 0.35s ease;
  }

  .cs-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2.5rem;
  }

  .tag {
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--color-tag-text);
    border: 1px solid var(--color-tag-border);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    letter-spacing: 0.03em;
    transition: color 0.35s ease, border-color 0.35s ease;
  }

  /* ── Banner visual ── */
  .cs-banner {
    position: relative;
    width: 100%;
    height: 220px;
    border-radius: 16px;
    background: var(--color-pill-bg);
    border: 1px solid var(--color-card-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    overflow: hidden;
    margin-bottom: 2.5rem;
    transition: border-color 0.35s ease;
  }

  .banner-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 60%, var(--accent) 0%, transparent 65%);
    opacity: 0.15;
  }

  .banner-dot {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.65;
    position: relative;
    z-index: 1;
  }

  .banner-label {
    font-size: 0.75rem;
    color: var(--color-text-subtle);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }

  .banner-img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ── Coming soon bar ── */
  .coming-soon-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    border-radius: 10px;
    padding: 0.85rem 1.25rem;
    margin-bottom: 3rem;
    transition: background 0.35s ease, border-color 0.35s ease;
  }

  .cs-pill {
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    color: var(--color-text-muted);
  }

  .coming-soon-bar p {
    font-size: 0.8rem;
    color: var(--color-text-subtle);
    margin: 0;
  }

  /* ── Content sections ── */
  .cs-sections {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .cs-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .section-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin: 0;
  }

  .section-body {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    margin: 0;
  }

  .cs-divider-line {
    width: 100%;
    height: 1px;
    background: var(--color-divider-weak);
  }

  /* ── Footer nav ── */
  .cs-footer-nav {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-divider-weak);
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-bg);
    background: var(--color-text);
    border: 1px solid var(--color-text);
    padding: 0.45rem 1.1rem;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .back-btn:hover {
    opacity: 0.8;
  }

  /* ── Not found ── */
  .not-found {
    max-width: 480px;
    margin: 0 auto;
    padding: 6rem 1.5rem;
    text-align: center;
  }

  .not-found h1 {
    font-size: 1.5rem;
    color: var(--color-text);
    margin-bottom: 1.5rem;
  }

  .not-found a {
    font-size: 0.85rem;
    color: var(--color-text-muted);
    text-decoration: none;
  }

  @media (max-width: 480px) {
    .coming-soon-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;
    }
  }
</style>