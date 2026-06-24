const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) el.target.style.opacity = '1';
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skill-card, .project, .tl-item').forEach(el => {
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    observer.observe(el);
  });

  // Trigger already-visible elements on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.skill-card, .project, .tl-item').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  });

  // Add translateY reset on intersection
  const obs2 = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.style.opacity = '1';
        el.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.skill-card, .project, .tl-item').forEach(el => obs2.observe(el));