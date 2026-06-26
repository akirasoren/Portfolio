<script>
  import { onMount } from 'svelte';

  const projects = [
    {
      id: 0,
      name: 'LeadFlow AI',
      role: 'Automation Engineer',
      description: 'Built an end-to-end lead qualification system using n8n and GPT-4 that automatically scores, tags, and routes inbound leads into GHL pipelines — cutting manual triage time by 80%.',
      tags: ['n8n', 'GPT-4', 'GHL', 'Webhooks'],
      color: '#ea4b35',
      caseStudy: '/works/leadflow-ai',
      loomId: 'b819c73a2359489aab2479cc9bd67a07',
    },
    {
      id: 1,
      name: 'Langchain Doc Bot',
      role: 'AI Systems Engineer',
      description: 'Designed a Langchain-powered document assistant that ingests PDFs and internal wikis, allowing teams to query their own knowledge base in natural language with cited responses.',
      tags: ['Langchain', 'Python', 'Pinecone', 'Claude'],
      color: '#1CC8C8',
      caseStudy: '/works/langchain-doc-bot',
    },
    {
      id: 2,
      name: 'Zapier Revenue Ops',
      role: 'Automation Consultant',
      description: 'Architected a multi-step Zapier automation connecting HubSpot, Slack, and Google Sheets to give sales teams a real-time revenue dashboard without any manual data entry.',
      tags: ['Zapier', 'HubSpot', 'Slack', 'Google Sheets'],
      color: '#ff4a00',
      caseStudy: '/works/zapier-revenue-ops',
    },
    {
      id: 3,
      name: 'AI Onboarding Engine',
      role: 'Systems Architect',
      description: 'Created a fully automated client onboarding workflow that sends personalized sequences, fills CRM fields, and schedules kickoff calls — all triggered from a single form submission.',
      tags: ['Make', 'Pipedrive', 'Claude API', 'Calendly'],
      color: '#7F77DD',
      caseStudy: '/works/ai-onboarding-engine',
    },
  ];

  let activeIndex = $state(0);
  let leftCol;
  let modalOpen = $state(false);
  let modalLoomId = $state('');
  let hoveredLoom = $state(false);

  function openModal(loomId) {
    modalLoomId = loomId;
    modalOpen = true;
  }

  function closeModal() {
    modalOpen = false;
    modalLoomId = '';
  }

  onMount(() => {
    const items = leftCol.querySelectorAll('.project-item');

    function onScroll() {
      const center = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(itemCenter - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      activeIndex = closest;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(el => obs.observe(el));

    function onKeydown(e) {
      if (e.key === 'Escape') closeModal();
    }
    window.addEventListener('keydown', onKeydown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeydown);
      obs.disconnect();
    };
  });
</script>

<!-- Modal -->
{#if modalOpen}
  <div class="modal-backdrop" onclick={closeModal} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && closeModal()}>
    <div class="modal-content" onclick={(e) => e.stopPropagation()} role="dialog">
      <button class="modal-close" onclick={closeModal}>✕</button>
      <div class="modal-video">
        <iframe
          src="https://www.loom.com/embed/{modalLoomId}"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
{/if}

<section class="projects-section">
  <div class="section-inner">

    <div class="projects-header reveal">
      <h2 class="section-title">Featured Projects</h2>
    </div>

    <div class="projects-layout">

      <div class="left-col" bind:this={leftCol}>
        {#each projects as project, i}
          <div
            class="project-item"
            class:active={activeIndex === i}
            data-index={i}
          >
            <p class="project-number">0{i + 1}</p>
            <h3 class="project-name">{project.name}</h3>
            <p class="project-role">{project.role}</p>
            <p class="project-desc">{project.description}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <a href={project.caseStudy} class="case-study-btn">
              View Case Study →
            </a>
          </div>
        {/each}
      </div>

      <div class="right-col">
        <div class="sticky-frame">
          {#each projects as project, i}
            <div
              class="project-visual"
              class:visible={activeIndex === i}
              style="--accent: {project.color};"
            >
              <div class="visual-glow"></div>
              <div class="visual-placeholder">
                {#if project.loomId}
                  <!-- svelte-ignore a11y_click_events_have_key_events -->
                  <!-- svelte-ignore a11y_no_static_element_interactions -->
                  <div
                    class="loom-preview"
                    class:hovered={hoveredLoom}
                    onclick={() => openModal(project.loomId)}
                    onmouseenter={() => hoveredLoom = true}
                    onmouseleave={() => hoveredLoom = false}
                  >
                    <!-- Thumbnail -->
                    <img
                      src="https://cdn.loom.com/sessions/thumbnails/{project.loomId}-with-play.gif"
                      alt="Project preview"
                      class="loom-thumbnail"
                      class:hidden={hoveredLoom}
                    />
                    <!-- Hover GIF preview -->
                    <img
                      src="https://cdn.loom.com/sessions/thumbnails/{project.loomId}-with-play.gif"
                      alt="Project preview animated"
                      class="loom-gif"
                      class:visible={hoveredLoom}
                    />
                    <!-- Play button overlay -->
                    <div class="play-overlay" class:hovered={hoveredLoom}>
                      <div class="play-btn">▶</div>
                      <span class="play-label">Watch Demo</span>
                    </div>
                  </div>
                {:else}
                  <div class="visual-dot"></div>
                  <p class="visual-name">{project.name}</p>
                  <p class="visual-sub">Project preview</p>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>

    </div>

    <div class="collection-btn-wrapper reveal">
      <a href="/works" class="collection-btn">View project collection →</a>
    </div>

  </div>
</section>

<style>
  /* ── Modal ─────────────────────────────────────────── */
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

  .modal-close:hover {
    opacity: 1;
  }

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

  /* ── Loom preview ──────────────────────────────────── */
  .loom-preview {
    position: absolute;
    inset: 0;
    cursor: pointer;
    overflow: hidden;
  }

  .loom-thumbnail,
  .loom-gif {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  .loom-thumbnail { opacity: 1; }
  .loom-thumbnail.hidden { opacity: 0; }

  .loom-gif { opacity: 0; }
  .loom-gif.visible { opacity: 1; }

  .play-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: rgba(0, 0, 0, 0.3);
    transition: background 0.3s ease;
  }

  .play-overlay.hovered {
    background: rgba(0, 0, 0, 0.5);
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
    transition: transform 0.2s ease;
  }

  .play-overlay.hovered .play-btn {
    transform: scale(1.1);
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

  /* ── Section ───────────────────────────────────────── */
  .projects-section {
    width: 100%;
    padding: 4rem 1.5rem;
    background: var(--color-bg);
    transition: background 0.35s ease;
  }

  .section-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .projects-header {
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

  .projects-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  .left-col {
    display: flex;
    flex-direction: column;
  }

  .project-item {
    padding: 2.5rem 0;
    border-top: 1px solid var(--color-divider-weak);
    transition: opacity 0.4s ease;
    opacity: 0.25;
    cursor: default;
  }

  .project-item.active {
    opacity: 1;
  }

  .project-number {
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--color-text-subtle);
    margin-bottom: 0.6rem;
  }

  .project-name {
    font-family: var(--font-body);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-text);
    letter-spacing: -0.02em;
    margin-bottom: 0.3rem;
  }

  .project-role {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--color-text-subtle);
    letter-spacing: 0.04em;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .project-desc {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-text-muted);
    line-height: 1.75;
    margin-bottom: 1.2rem;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--color-tag-text);
    border: 1px solid var(--color-tag-border);
    border-radius: 999px;
    padding: 0.25rem 0.75rem;
    letter-spacing: 0.03em;
    transition: color 0.35s ease, border-color 0.35s ease;
  }

  .case-study-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 1.2rem;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-bg);
    background: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 999px;
    padding: 0.45rem 1.1rem;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.35s ease;
  }

  .case-study-btn:hover {
    opacity: 0.85;
  }

  .right-col {
    position: sticky;
    top: 6rem;
  }

  .sticky-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    border-radius: 0;
    overflow: hidden;
    background: var(--color-pill-bg);
    border: 1px solid var(--color-card-border);
    box-shadow: var(--color-card-inset);
    transition: background 0.35s ease, border-color 0.35s ease;
  }

  .project-visual {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  .project-visual.visible {
    opacity: 1;
    pointer-events: auto;
  }

  .visual-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 60% 40%, var(--accent) 0%, transparent 65%);
    opacity: 0.12;
    pointer-events: none;
  }

  .visual-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    text-align: center;
  }

  .visual-dot {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.7;
  }

  .visual-name {
    font-family: var(--font-body);
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text-muted);
    letter-spacing: -0.01em;
  }

  .visual-sub {
    font-family: var(--font-body);
    font-size: 0.75rem;
    color: var(--color-text-subtle);
  }

  @media (max-width: 680px) {
    .projects-layout { grid-template-columns: 1fr; }
    .right-col { display: none; }
    .project-item { padding: 1.75rem 0; }
  }

  .collection-btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  .collection-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--color-bg);
    background: var(--color-text);
    border: 1px solid var(--color-text);
    border-radius: 999px;
    padding: 0.55rem 1.4rem;
    text-decoration: none;
    transition: opacity 0.2s ease, border-color 0.35s ease;
  }

  .collection-btn:hover {
    opacity: 0.8;
  }

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.in {
    opacity: 1;
    transform: translateY(0);
  }
</style>