<script>
  import { page } from '$app/stores';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';

  const projects = {
    'leadflow-ai': {
      name: 'AI-Powered Commercial Real Estate Lead Management System',
      role: 'Automation Engineer',
      year: '2026',
      tags: ['n8n', 'GHL', 'OpenAI', 'Airtable', 'Telegram'],
      color: '#ea4b35',
      youtubeId: '1QkVXAgWu1w',
      preview: '/project_preview.png',
      gallery: [
        { src: '/project_preview.png', caption: 'Main Workflow — Lead Capture & Pipeline Routing' },
        { src: '/ai_matching_engine.png', caption: 'AI Matching Engine — Property Matching Sub-Workflow' },
        { src: '/task.png', caption: 'GHL Task — Broker Notification with Match Details' },
        { src: '/airtable_bases.png', caption: 'Airtable Base — Match Logging & Property Records' },
        { src: '/telegram_alert.png', caption: 'Telegram Alert — Instant Broker Notification' },
      ],
      overview: 'An AI-powered commercial real estate lead management system built on GHL and n8n. The system captures inbound buyer, seller, and investor leads through a custom lead gen form, processes them through a multi-workflow automation pipeline, and uses OpenAI to match requirements against available listings. Brokers are notified instantly via GHL tasks and Telegram with full match details.',
      problem: 'Commercial real estate brokers spend significant time manually reviewing buyer requirements and cross-referencing available listings to find viable matches. This process is slow, inconsistent, and heavily dependent on the broker\'s memory and availability. Leads that come in outside business hours are often missed entirely, and there is no structured system to track match history or notify both parties efficiently.',
      solution: 'Built a two-part automation system in n8n triggered by a GHL webhook on form submission. The main workflow captures lead data, creates or updates contacts in GHL with custom fields, and moves them through two custom pipelines with defined stages. It then calls an AI matching sub-workflow that fetches available property listings and buyer requirements from Airtable, aggregates them, and passes them to OpenAI which scores and ranks matches with reasoning. Match results are logged back to Airtable and two GHL tasks are created, one under the buyer contact and one under the seller contact, both assigned to the broker with full match details including property specs, pricing, size, location, timelines, and AI reasoning. An instant Telegram alert is also fired with a match summary and direct links to both contact pages in GHL.',
      outcome: 'Brokers receive instant, structured match notifications the moment a lead submits the form, regardless of the time of day. Manual property matching is eliminated entirely, match history is logged automatically in Airtable, and both sides of every match are tracked inside GHL with full context. Lead response time is reduced from hours to seconds.',
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

  let videoModalOpen = $state(false);
  let lightboxOpen = $state(false);
  let lightboxSrc = $state('');
  let lightboxCaption = $state('');
  let hoveredBanner = $state(false);

  function openVideo() {
    videoModalOpen = true;
  }

  function closeVideo() {
    videoModalOpen = false;
  }

  function openLightbox(src, caption) {
    lightboxSrc = src;
    lightboxCaption = caption;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
    lightboxSrc = '';
    lightboxCaption = '';
  }

  import { onMount } from 'svelte';
  onMount(() => {
    function onKeydown(e) {
      if (e.key === 'Escape') {
        closeVideo();
        closeLightbox();
      }
    }
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  });
</script>

<svelte:head>
  <title>{project ? project.name : 'Case Study'} — Levi Menor</title>
</svelte:head>

<!-- YouTube Modal -->
{#if videoModalOpen}
  <div class="modal-backdrop" onclick={closeVideo} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && closeVideo()}>
    <div class="modal-content" onclick={(e) => e.stopPropagation()} role="dialog">
      <button class="modal-close" onclick={closeVideo}>✕</button>
      <div class="modal-video">
        <iframe
          src="https://www.youtube.com/embed/{project.youtubeId}?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
{/if}

<!-- Lightbox -->
{#if lightboxOpen}
  <div class="modal-backdrop" onclick={closeLightbox} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && closeLightbox()}>
    <div class="lightbox-content" onclick={(e) => e.stopPropagation()} role="dialog">
      <button class="modal-close" onclick={closeLightbox}>✕</button>
      <img src={lightboxSrc} alt={lightboxCaption} class="lightbox-img" />
      {#if lightboxCaption}
        <p class="lightbox-caption">{lightboxCaption}</p>
      {/if}
    </div>
  </div>
{/if}

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

        <!-- Banner / Video Preview -->
        {#if project.youtubeId}
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <!-- svelte-ignore a11y_no_static_element_interactions -->
          <div
            class="cs-banner clickable"
            class:hovered={hoveredBanner}
            onclick={openVideo}
            onmouseenter={() => hoveredBanner = true}
            onmouseleave={() => hoveredBanner = false}
          >
            <div class="banner-glow"></div>
            <img src={project.preview} alt={project.name} class="banner-img" class:dimmed={hoveredBanner} />
            <div class="play-overlay" class:hovered={hoveredBanner}>
              <div class="play-btn">▶</div>
              <span class="play-label">Watch Demo</span>
            </div>
          </div>
        {:else if project.image}
          <div class="cs-banner">
            <div class="banner-glow"></div>
            <img src={project.image} alt={project.name} class="banner-img" />
          </div>
        {:else}
          <div class="cs-banner">
            <div class="banner-glow"></div>
            <div class="banner-dot"></div>
            <p class="banner-label">Project Preview</p>
          </div>
        {/if}

        <!-- Gallery -->
        {#if project.gallery}
          <div class="gallery-grid">
            {#each project.gallery as item}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <div class="gallery-item" onclick={() => openLightbox(item.src, item.caption)}>
                <img src={item.src} alt={item.caption} class="gallery-img" />
                <p class="gallery-caption">{item.caption}</p>
              </div>
            {/each}
          </div>
        {/if}

      </header>

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

  .back-link:hover { color: var(--color-text); }

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

  /* ── Banner ── */
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
    margin-bottom: 1.5rem;
    transition: border-color 0.35s ease;
  }

  .cs-banner.clickable {
    cursor: pointer;
  }

  .cs-banner.clickable:hover {
    border-color: var(--accent);
  }

  .banner-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 60%, var(--accent) 0%, transparent 65%);
    opacity: 0.15;
    pointer-events: none;
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
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease, transform 0.4s ease;
    z-index: 1;
  }

  .banner-img.dimmed {
    filter: brightness(0.5);
    transform: scale(1.03);
  }

  .play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    z-index: 2;
    pointer-events: none;
  }

  .play-btn {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: white;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    padding-left: 3px;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .play-overlay.hovered .play-btn {
    opacity: 1;
    transform: scale(1);
  }

  .play-label {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    letter-spacing: 0.05em;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .play-overlay.hovered .play-label {
    opacity: 1;
  }

  /* ── Gallery ── */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  .gallery-item {
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--color-card-border);
    background: var(--color-card-bg);
    transition: border-color 0.2s ease, transform 0.2s ease;
  }

  .gallery-item:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  .gallery-img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    display: block;
    transition: filter 0.2s ease;
  }

  .gallery-item:hover .gallery-img {
    filter: brightness(0.85);
  }

  .gallery-caption {
    font-size: 0.65rem;
    color: var(--color-text-subtle);
    padding: 0.5rem 0.6rem;
    line-height: 1.4;
    letter-spacing: 0.02em;
  }

  /* ── Modals ── */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(6px);
  }

  .modal-content {
    position: relative;
    width: 90%;
    max-width: 860px;
  }

  .modal-close {
    position: absolute;
    top: -2.5rem;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .modal-close:hover { opacity: 1; }

  .modal-video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: 12px;
    overflow: hidden;
  }

  .modal-video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .lightbox-img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 12px;
    object-fit: contain;
  }

  .lightbox-caption {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    letter-spacing: 0.03em;
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

  .back-btn:hover { opacity: 0.8; }

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

  @media (max-width: 600px) {
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .cs-title { font-size: 1.8rem; }
  }

  @media (max-width: 380px) {
    .gallery-grid { grid-template-columns: 1fr; }
  }
</style>