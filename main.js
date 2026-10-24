'use strict';

document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

function closeMenu() {
  if (!menuButton || !mainNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mainNav.classList.remove('is-open');
}

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav.classList.toggle('is-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', (event) => {
    if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Sem mídia ainda: preserva a composição de placeholder até o visitante adicionar o arquivo.
document.querySelectorAll('.image-frame img').forEach((image) => {
  const frame = image.closest('.image-frame');
  if (!frame) return;

  const showFallback = () => frame.setAttribute('data-empty', 'true');
  const showImage = () => frame.setAttribute('data-empty', 'false');

  image.addEventListener('error', showFallback);
  image.addEventListener('load', showImage);
  if (image.complete) image.naturalWidth > 0 ? showImage() : showFallback();
});

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const bounds = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
  }, { passive: true });
});

const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());
