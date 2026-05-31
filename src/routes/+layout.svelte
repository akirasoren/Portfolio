<script lang="ts">
  import './layout.css';
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme.svelte.js';

  let { children } = $props();
  let canvas: HTMLCanvasElement;

  onMount(() => {
    theme.init();

    const ctx = canvas.getContext('2d')!;

    const stars = Array.from({ length: 300 }, () => ({
      x: 0,
      y: 0,
      r: Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.5 + 0.35,
      speed: Math.random() * 0.004 + 0.002,
      offset: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      canvas.width = document.documentElement.clientWidth;
      canvas.height = document.body.scrollHeight;
      for (const s of stars) {
        s.x = Math.random() * canvas.width;
        s.y = Math.random() * canvas.height;
      }
    };

    requestAnimationFrame(resize);

    type ShootingStar = {
      x: number; y: number;
      vx: number; vy: number;
      len: number; alpha: number;
      life: number; maxLife: number;
    };
    let shooters: ShootingStar[] = [];

    function spawnShooter() {
      const angle = Math.PI / 5;
      const speed = Math.random() * 6 + 5;
      shooters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: Math.random() * 120 + 80,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 40 + 30,
      });
    }

    let spawnTimer = 0;
    let nextSpawn = 150;
    let frame: number;
    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;
      spawnTimer++;

      if (spawnTimer >= nextSpawn) {
        spawnShooter();
        spawnTimer = 0;
        nextSpawn = Math.random() * 150 + 150;
      }

      for (const s of stars) {
        const pulse = Math.sin(t * s.speed * 60 + s.offset);
        const a = s.alpha + pulse * 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, a))})`;
        ctx.fill();
      }

      shooters = shooters.filter(s => s.life < s.maxLife);
      for (const s of shooters) {
        const progress = s.life / s.maxLife;
        const a = s.alpha * (1 - progress);

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * (s.len / 8),
          s.y - s.vy * (s.len / 8)
        );
        grad.addColorStop(0, `rgba(255,255,255,${a})`);
        grad.addColorStop(1, `rgba(255,255,255,0)`);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (s.len / 8), s.y - s.vy * (s.len / 8));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;
        s.life++;
      }

      frame = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Primary meta -->
  <title>Levi Menor — AI Automation Systems Engineer</title>
  <meta name="description" content="I'm enthusiastic about using tech to solve business problems and automate manual workflows. I have a keen interest in learning AI technologies and building cool projects with what I learn." />
  <meta name="author" content="Levi Menor" />

  <!-- Open Graph (link previews on LinkedIn, Discord, etc.) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Levi Menor — AI Automation Systems Engineer" />
  <meta property="og:description" content="I'm enthusiastic about using tech to solve business problems and automate manual workflows. I have a keen interest in learning AI technologies and building cool projects with what I learn." />
  <meta property="og:url" content="https://levimenor.vercel.app" />

  <!-- Twitter / X card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Levi Menor — AI Automation Systems Engineer" />
  <meta name="twitter:description" content="I'm enthusiastic about using tech to solve business problems and automate manual workflows. I have a keen interest in learning AI technologies and building cool projects with what I learn." />
</svelte:head>

<canvas bind:this={canvas} class="star-canvas"></canvas>
<div class="page-wrapper">
  {@render children()}
</div>

<style>
  .star-canvas {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    display: var(--star-display);
    transition: opacity 0.35s ease;
    max-width: 100%
  }

  .page-wrapper {
    min-height: 100vh;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  :global(body) {
    animation: fadeIn 1.2s ease forwards;
  }
</style>