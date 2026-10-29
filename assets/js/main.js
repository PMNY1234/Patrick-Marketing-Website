// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('is-open', open);
}

toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

// Respect reduced-motion: hold the hero on its poster frame
const hero = document.querySelector('.hero-media');
if (hero && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  hero.removeAttribute('autoplay');
  hero.pause();
}

// Keep the copyright year current
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
