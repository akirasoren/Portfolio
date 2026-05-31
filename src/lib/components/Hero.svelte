<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.svelte.js';

  let canvas;
  let open = $state(false);

  onMount(() => {
    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth * window.devicePixelRatio;
    const H = 200 * window.devicePixelRatio;
    canvas.width = W;
    canvas.height = H;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const cw = canvas.offsetWidth;
    const ch = 200;

    const nodes = [
      { x: cw*0.08,  y: ch*0.5,  label: 'Trigger',   sub: 'webhook / schedule', color: '#888780' },
      { x: cw*0.31,  y: ch*0.25, label: 'n8n',        sub: 'workflow builder',   color: '#ea4b35' },
      { x: cw*0.31,  y: ch*0.75, label: 'Zapier',     sub: 'app automation',     color: '#ff4a00' },
      { x: cw*0.58,  y: ch*0.5,  label: 'Langchain',  sub: 'AI reasoning',       color: '#1CC8C8' },
      { x: cw*0.88,  y: ch*0.5,  label: 'Output',     sub: 'action / result',    color: '#7F77DD' },
    ];

    const edges = [[0,1],[0,2],[1,3],[2,3],[3,4]];

    const pulses = edges.map(([a,b], i) => ({
      from: a, to: b,
      t: (i * 0.22) % 1,
      speed: 0.004 + Math.random() * 0.002
    }));

    function hexToRgb(hex) {
      const r = parseInt(hex.slice(1,3),16);
      const g = parseInt(hex.slice(3,5),16);
      const b = parseInt(hex.slice(5,7),16);
      return `${r},${g},${b}`;
    }

    let raf;
    function draw() {
      const isLight = theme.current === 'light';
      ctx.clearRect(0, 0, cw, ch);

      edges.forEach(([a,b]) => {
        const n1 = nodes[a], n2 = nodes[b];
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      pulses.forEach(p => {
        p.t = (p.t + p.speed) % 1;
        const n1 = nodes[p.from], n2 = nodes[p.to];
        const x = n1.x + (n2.x - n1.x) * p.t;
        const y = n1.y + (n2.y - n1.y) * p.t;
        const rgb = hexToRgb(n2.color);
        const grad = ctx.createRadialGradient(x,y,0,x,y,7);
        grad.addColorStop(0, `rgba(${rgb},1)`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        ctx.beginPath();
        ctx.arc(x, y, 7, 0, Math.PI*2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 24, 0, Math.PI*2);
        ctx.fillStyle = isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)';
        ctx.fill();
        ctx.strokeStyle = n.color + '55';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(n.x, n.y, 8, 0, Math.PI*2);
        ctx.fillStyle = n.color;
        ctx.fill();

        ctx.fillStyle = isLight ? 'rgba(0,0,0,0.80)' : 'rgba(255,255,255,0.85)';
        ctx.font = '600 11px Geist, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y + 38);

        ctx.fillStyle = isLight ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.28)';
        ctx.font = '10px Geist, sans-serif';
        ctx.fillText(n.sub, n.x, n.y + 51);
      });

      raf = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(raf);
  });
</script>

<div class="hero">
  <div class="glow-orb orb-1"></div>
  <div class="glow-orb orb-2"></div>

  <div class="hero-inner">
    <div class="card">
      <div class="graph-wrapper">
        <canvas bind:this={canvas} class="graph-canvas"></canvas>
      </div>

      <hr class="graph-divider" />

      <div class="greeting-row">
        <h1 class="hero-title">Hi 👋, I'm Levi</h1>

        <div class="avatar-area">
          <div class="avatar">
            <img src="/profile.png" alt="Levi Menor" class="avatar-img" />
          </div>

          <div class="chat-bubble" class:bubble-open={open}>
            <div class="bubble-tail"></div>

            <button class="bubble-trigger" onclick={() => open = !open}>
              {#if !open}
                <span class="bubble-prompt">Learn more about me? ›</span>
              {:else}
                <span class="bubble-close">Close ✕</span>
              {/if}
            </button>

            <div class="bubble-content">
              <p class="bubble-para">I am a Computer Science student from Manila 🇵🇭, with keen interest about using tech to solve real business problems and automate the boring stuff.</p>
              <hr class="bubble-divider" />
              <p class="bubble-para">I believe in the philosophy that AI is the way, but humans are the why. Technology can be pushed to its absolute limits, but its ultimate value depends entirely on how we choose to use it.</p>
              <hr class="bubble-divider" />
              <p class="bubble-para">I am a big Basketball fan and in my free time, i'm either upskilling or engaging with the sport on or off the court :)</p>
            </div>
          </div>
        </div>
      </div>

      <hr class="divider" />
      <p class="hero-role">Automation Systems Engineer</p>
      <p class="hero-location">📍 Based in the Philippines</p>

      <div class="socials">
        <a href="#contact" class="social-btn contact" aria-label="Contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M16 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M8 2v2" />
              <circle cx="12" cy="11" r="3" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
            </g>
          </svg>
          Contact
        </a>

        <a href="https://github.com/akirasoren" target="_blank" rel="noopener noreferrer" class="social-btn github" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
          </svg>
          GitHub
        </a>
      </div>

      <hr class="divider" />

      <p class="hero-bio">
        I specialize in <span class="highlight">engineering</span>,
        <span>and</span>
        <span class="highlight"> maintaining</span> custom AI systems
        that help businesses move faster and spend less time on
        repetitive work.
      </p>
    </div>
  </div>
</div>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    background: transparent;
    position: relative;
    overflow: hidden;
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 560px;
    overflow: visible;
  }

  .glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  .orb-1 {
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-60%, -60%);
  }

  .orb-2 {
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-30%, -20%);
  }

  :global([data-theme="light"]) .orb-1,
  :global([data-theme="light"]) .orb-2 {
    display: none;
  }

  .card {
    width: 100%;
    background: var(--color-hero-card-bg);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid var(--color-hero-card-border);
    border-radius: 16px;
    padding: 0;
    overflow: visible;
    box-shadow: var(--color-hero-card-shadow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  }

  .graph-wrapper {
    width: 100%;
    background: var(--color-graph-bg);
    padding: 1.2rem 0 0.8rem;
    border-radius: 16px 16px 0 0;
    overflow: hidden;
    transition: background 0.35s ease;
  }

  .graph-canvas {
    width: 100%;
    height: 200px;
    display: block;
  }

  .graph-divider {
    border: none;
    border-top: 1px solid var(--color-divider-weak);
    margin: 0;
  }

  .greeting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.8rem 2.2rem 0;
    position: relative;
  }

  .avatar-area {
    position: relative;
    flex-shrink: 0;
  }

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid var(--color-border);
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    flex-shrink: 0;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .avatar-img:not([src]),
  .avatar-img[src=""] { display: none; }

  .chat-bubble {
    position: absolute;
    top: 50%;
    left: calc(100% + 14px);
    transform: translateY(-50%);
    transform-origin: left center;
    background: #ffffff;
    color: #111;
    border-radius: 14px;
    outline: 3px solid #000;
    outline-offset: 0;
    box-shadow:
      0  3px 0 0 #000,
      0 -3px 0 0 #000,
      3px  0 0 0 #000,
      -3px 0 0 0 #000;
    width: auto;
    min-width: 0;
    z-index: 10;
    transition:
      width   0.45s cubic-bezier(0.16, 1, 0.3, 1),
      padding 0.45s cubic-bezier(0.16, 1, 0.3, 1),
      border-radius 0.3s ease;
  }

  .bubble-tail {
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 10px solid #000;
    z-index: 2;
  }

  .bubble-tail::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 8px solid #ffffff;
  }

  .bubble-trigger {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px 14px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 700;
    color: #111;
    white-space: nowrap;
    letter-spacing: 0.02em;
    width: 100%;
  }

  .bubble-prompt {
    display: block;
    animation: nudge 2.5s ease-in-out infinite;
  }

  @keyframes nudge {
    0%, 100% { transform: translateX(0); }
    50%       { transform: translateX(4px); }
  }

  .chat-bubble:not(.bubble-open):hover {
    transform: translateY(-50%) scale(1.04);
    transition: transform 0.15s ease;
  }

  .bubble-close {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    color: #111;
    text-align: right;
    margin-bottom: 0.75rem;
  }

  .bubble-content {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition:
      max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s,
      opacity    0.3s ease 0.25s;
  }

  .bubble-open {
    width: 280px;
    border-radius: 18px;
    animation: none;
  }

  .bubble-open .bubble-trigger {
    padding: 10px 14px 0;
  }

  .bubble-open .bubble-content {
    max-height: 500px;
    opacity: 1;
    padding: 0.5rem 18px 14px;
  }

  .bubble-para {
    font-size: 0.78rem;
    color: rgba(0, 0, 0, 0.8);
    margin: 0;
    line-height: 1.6;
    font-family: var(--font-body);
  }

  .bubble-divider {
    border: none;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0;
  }

  @media (max-width: 480px) {
    .greeting-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }

    .chat-bubble {
      position: relative;
      top: auto;
      left: auto;
      transform: none;
      transform-origin: top left;
    }

    .chat-bubble:not(.bubble-open):hover {
      transform: scale(1.04);
    }

    .bubble-tail {
      display: none;
    }

    .bubble-open {
      width: 100%;
    }
  }

  .socials {
    display: flex;
    gap: 0.6rem;
    padding: 0 2.2rem;
  }

  .social-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.9rem;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    border: 1px solid var(--color-border);
    background: var(--color-pill-bg);
    color: var(--color-text-muted);
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
    text-decoration: none;
  }

  .social-btn:hover {
    transform: translateY(-2px);
    background: var(--color-toggle-hover-bg);
    border-color: var(--color-toggle-border);
  }

  .hero-title {
    font-family: var(--font-body);
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 700;
    color: var(--color-text);
    margin: 0;
    line-height: 1.15;
    letter-spacing: -0.02em;
    transition: color 0.35s ease;
  }

  .divider {
    border: none;
    border-top: 1px solid var(--color-divider);
    margin: 0 2.2rem;
  }

  .hero-role {
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 400;
    color: var(--color-text-muted);
    margin: 0;
    padding: 0 2.2rem;
    letter-spacing: 0.01em;
  }

  .hero-location {
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-text-subtle);
    margin: 0;
    padding: 0 2.2rem 2rem;
    letter-spacing: 0.01em;
  }

  .hero-bio {
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color-text-muted);
    margin: 0;
    padding: 0 2.2rem 2rem;
    line-height: 1.75;
    letter-spacing: 0.01em;
    transition: color 0.35s ease;
  }

  .highlight {
    color: var(--color-text);
    font-weight: 600;
  }
</style>