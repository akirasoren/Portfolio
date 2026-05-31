export function setupReveal(selector = '.reveal') {
  const els = document.querySelectorAll(selector);

  // Wait for paint before checking positions
  requestAnimationFrame(() => {
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('in');
    });
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    if (!el.classList.contains('in')) obs.observe(el);
  });

  return () => obs.disconnect();
}