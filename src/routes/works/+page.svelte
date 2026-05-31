<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const featured = [
    {
      slug: 'leadflow-ai',
      name: 'LeadFlow AI',
      role: 'Automation Engineer',
      year: '2024',
      description: 'Built an end-to-end lead qualification system using n8n and GPT-4 that automatically scores, tags, and routes inbound leads into GHL pipelines — cutting manual triage time by 80%.',
      tags: ['n8n', 'GPT-4', 'GHL', 'Webhooks'],
      color: '#ea4b35',
    },
    {
      slug: 'langchain-doc-bot',
      name: 'Langchain Doc Bot',
      role: 'AI Systems Engineer',
      year: '2024',
      description: 'Designed a Langchain-powered document assistant that ingests PDFs and internal wikis, allowing teams to query their own knowledge base in natural language with cited responses.',
      tags: ['Langchain', 'Python', 'Pinecone', 'Claude'],
      color: '#1CC8C8',
    },
    {
      slug: 'zapier-revenue-ops',
      name: 'Zapier Revenue Ops',
      role: 'Automation Consultant',
      year: '2023',
      description: 'Architected a multi-step Zapier automation connecting HubSpot, Slack, and Google Sheets to give sales teams a real-time revenue dashboard without any manual data entry.',
      tags: ['Zapier', 'HubSpot', 'Slack', 'Google Sheets'],
      color: '#ff4a00',
    },
    {
      slug: 'ai-onboarding-engine',
      name: 'AI Onboarding Engine',
      role: 'Systems Architect',
      year: '2023',
      description: 'Created a fully automated client onboarding workflow that sends personalized sequences, fills CRM fields, and schedules kickoff calls — all triggered from a single form submission.',
      tags: ['Make', 'Pipedrive', 'Claude API', 'Calendly'],
      color: '#7F77DD',
    },
  ];

  const others = [
    {
      slug: 'slack-alert-bot',
      name: 'Slack Alert Bot',
      role: 'Automation Engineer',
      year: '2024',
      description: 'A lightweight bot that monitors key business metrics and fires real-time Slack alerts when thresholds are breached — no more checking dashboards manually.',
      tags: ['Slack API', 'n8n', 'Webhooks'],
      color: '#5865F2',
    },
    {
      slug: 'gpt-email-responder',
      name: 'GPT Email Responder',
      role: 'AI Engineer',
      year: '2024',
      description: 'Automated email triage and draft generation using GPT-4, cutting response time by 60% for a high-volume client support inbox.',
      tags: ['GPT-4', 'Gmail API', 'Python'],
      color: '#10B981',
    },
    {
      slug: 'notion-sync-engine',
      name: 'Notion Sync Engine',
      role: 'Systems Engineer',
      year: '2023',
      description: 'Built a two-way sync between Notion databases and a client CRM, keeping project statuses, contacts, and tasks always up to date without manual effort.',
      tags: ['Notion API', 'Make', 'Airtable'],
      color: '#F59E0B',
    },
    {
      slug: 'ai-seo-pipeline',
      name: 'AI SEO Pipeline',
      role: 'Automation Consultant',
      year: '2023',
      description: 'End-to-end content pipeline that researches keywords, generates SEO-optimized drafts with Claude, and publishes directly to a CMS on a schedule.',
      tags: ['Claude API', 'Zapier', 'WordPress'],
      color: '#EC4899',
    },
  ];

  let current = $state(0);

  function prev() {
    current = (current - 1 + featured.length) % featured.length;
  }

  function next() {
    current = (current + 1) % featured.length;
  }
</script>

<svelte:head>
  <title>Works — Levi Menor</title>
</svelte:head>

<Navbar />

<main class="works-page">
  <div class="page-inner">

    <!-- Header -->
    <header class="page-header">
      <a href="/" class="back-link">← Back</a>
      <p class="page-label">Selected Works</p>
      <h1 class="page-title">All Projects</h1>
      <p class="page-sub">A collection of automation systems, AI tooling, and revenue infrastructure built for real clients.</p>
    </header>

    <!-- Featured Carousel -->
    <div class="carousel-wrapper">
      <button class="arrow arrow-left" onclick={prev} aria-label="Previous">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>

      <div class="carousel-track">
        {#each featured as project, i}
          <div
            class="carousel-card"
            class:active={current === i}
            class:prev={current === (i + 1) % featured.length}
            class:next={current === (i - 1 + featured.length) % featured.length}
            style="--accent: {project.color};"
          >
            <div class="card-visual">
              <div class="card-glow"></div>
              <div class="card-dot"></div>
            </div>
            <div class="card-body">
              <div class="card-meta">
                <span class="card-number">0{i + 1}</span>
                <span class="card-year">{project.year}</span>
              </div>
              <h2 class="card-name">{project.name}</h2>
              <p class="card-role">{project.role}</p>
              <p class="card-desc">{project.description}</p>
              <div class="card-tags">
                {#each project.tags as tag}
                  <span class="tag">{tag}</span>
                {/each}
              </div>
              <a href="/works/{project.slug}" class="card-btn">View Case Study →</a>
            </div>
          </div>
        {/each}
      </div>

      <button class="arrow arrow-right" onclick={next} aria-label="Next">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      <!-- Dots -->
      <div class="carousel-dots">
        {#each featured as _, i}
          <button
            class="dot"
            class:active={current === i}
            onclick={() => current = i}
            aria-label="Go to slide {i + 1}"
          ></button>
        {/each}
      </div>
    </div>

    <!-- Other Projects -->
    <div class="other-header">
      <h2 class="other-title">Other Projects</h2>
    </div>

    <div class="bento-grid">
      {#each others as project, i}
        <article
          class="bento-card"
          style="--accent: {project.color}; animation-delay: {i * 80}ms"
        >
          <div class="bento-visual">
            <div class="bento-glow"></div>
            <div class="bento-dot"></div>
          </div>
          <div class="bento-body">
            <div class="bento-meta">
              <span class="bento-role">{project.role}</span>
              <span class="bento-year">{project.year}</span>
            </div>
            <h3 class="bento-name">{project.name}</h3>
            <p class="bento-desc">{project.description}</p>
            <div class="bento-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <a href="/works/{project.slug}" class="bento-btn">View Case Study →</a>
          </div>
        </article>
      {/each}
    </div>

  </div>
</main>

<Footer />

<style>
  .works-page {
    min-height: 100vh;
    padding-top: 60px;
    background: var(--color-bg);
    transition: background 0.35s ease;
  }

  .page-inner {
    max-width: 960px;
    margin: 0 auto;
    padding: 4rem 1.5rem 6rem;
  }

  /* ── Header ── */
  .page-header {
    margin-bottom: 3rem;
    animation: fadeUp 0.55s ease both;
  }

  .back-link {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--color-text-subtle);
    text-decoration: none;
    letter-spacing: 0.03em;
    margin-bottom: 2rem;
    transition: color 0.2s ease;
  }

  .back-link:hover { color: var(--color-text); }

  .page-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.03em;
    margin-bottom: 1rem;
    line-height: 1.1;
    transition: color 0.35s ease;
  }

  .page-sub {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    max-width: 480px;
    line-height: 1.7;
  }

  /* ── Carousel ── */
  .carousel-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 5rem;
    animation: fadeUp 0.55s ease 0.1s both;
  }

  .carousel-track {
    flex: 1;
    position: relative;
    height: 420px;
    overflow: hidden;
    border-radius: 16px;
  }

  .carousel-card {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: row;
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    overflow: hidden;
    opacity: 0;
    transform: translateX(60px) scale(0.97);
    transition: opacity 0.45s ease, transform 0.45s ease, border-color 0.35s ease;
    pointer-events: none;
    box-shadow: var(--color-card-shadow);
  }

  .carousel-card.active {
    opacity: 1;
    transform: translateX(0) scale(1);
    pointer-events: all;
  }

  .carousel-card.prev {
    opacity: 0;
    transform: translateX(-60px) scale(0.97);
  }

  /* Visual panel - left side */
  .card-visual {
    position: relative;
    width: 280px;
    flex-shrink: 0;
    background: var(--color-pill-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .card-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 65%);
    opacity: 0.18;
    transition: opacity 0.3s ease;
  }

  .carousel-card.active:hover .card-glow { opacity: 0.28; }

  .card-dot {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.65;
    position: relative;
    z-index: 1;
  }

  /* Content panel - right side */
  .card-body {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .card-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  .card-number {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--color-text-subtle);
  }

  .card-year {
    font-size: 0.7rem;
    color: var(--color-text-subtle);
    letter-spacing: 0.04em;
  }

  .card-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin-bottom: 0.3rem;
    transition: color 0.35s ease;
  }

  .card-role {
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--color-text-subtle);
    margin-bottom: 1rem;
  }

  .card-desc {
    font-size: 0.875rem;
    color: var(--color-text-muted);
    line-height: 1.75;
    margin-bottom: 1.25rem;
    flex: 1;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  .tag {
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--color-tag-text);
    border: 1px solid var(--color-tag-border);
    border-radius: 999px;
    padding: 0.2rem 0.65rem;
    letter-spacing: 0.03em;
    transition: color 0.35s ease, border-color 0.35s ease;
  }

  .card-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-bg);
    background: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 999px;
    padding: 0.45rem 1.1rem;
    text-decoration: none;
    align-self: flex-start;
    transition: opacity 0.2s ease, border-color 0.35s ease;
  }

  .card-btn:hover { opacity: 0.8; }

  /* ── Arrows ── */
  .arrow {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--color-card-border);
    background: var(--color-card-bg);
    color: var(--color-text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, border-color 0.35s ease;
    z-index: 2;
  }

  .arrow:hover {
    background: var(--color-toggle-hover-bg);
    color: var(--color-text);
    transform: scale(1.08);
  }

  /* ── Dots ── */
  .carousel-dots {
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
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
    background: var(--color-text);
    transform: scale(1.3);
  }

  /* ── Other Projects ── */
  .other-header {
    margin-bottom: 1.75rem;
    animation: fadeUp 0.55s ease 0.2s both;
  }

  .other-title {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    transition: color 0.35s ease;
  }

  /* ── Bento Grid ── */
  .bento-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .bento-card {
    background: var(--color-card-bg);
    border: 1px solid var(--color-card-border);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    box-shadow: var(--color-card-shadow);
    animation: fadeUp 0.55s ease both;
  }

  .bento-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    border-color: var(--accent);
  }

  .bento-visual {
    position: relative;
    height: 100px;
    background: var(--color-pill-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .bento-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 60%, var(--accent) 0%, transparent 65%);
    opacity: 0.14;
    transition: opacity 0.3s ease;
  }

  .bento-card:hover .bento-glow { opacity: 0.24; }

  .bento-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.6;
    position: relative;
    z-index: 1;
  }

  .bento-body {
    padding: 1.25rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .bento-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .bento-role {
    font-size: 0.68rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--color-text-subtle);
  }

  .bento-year {
    font-size: 0.68rem;
    color: var(--color-text-subtle);
    letter-spacing: 0.04em;
  }

  .bento-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin-bottom: 0.6rem;
    transition: color 0.35s ease;
  }

  .bento-desc {
    font-size: 0.83rem;
    color: var(--color-text-muted);
    line-height: 1.7;
    margin-bottom: 1rem;
    flex: 1;
  }

  .bento-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }

  .bento-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-bg);
    background: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 999px;
    padding: 0.4rem 1rem;
    text-decoration: none;
    align-self: flex-start;
    transition: opacity 0.2s ease, border-color 0.35s ease;
  }

  .bento-btn:hover { opacity: 0.8; }

  /* ── Animations ── */
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* ── Responsive ── */
  @media (max-width: 720px) {
    .carousel-track { height: auto; }
    .carousel-card {
      position: relative;
      flex-direction: column;
      transform: none !important;
      opacity: 0;
      display: none;
    }
    .carousel-card.active {
      display: flex;
      opacity: 1;
    }
    .card-visual { width: 100%; height: 120px; }
    .bento-grid { grid-template-columns: 1fr; }
    .arrow { display: none; }
  }
</style>