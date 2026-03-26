/* ============================================================
   MAVUSO WILLIAMS — main.js
   ============================================================ */

// ── Nav: mobile toggle ────────────────────────────────────────
const navToggle = document.querySelector('.nav__toggle');
const navLinks  = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  // Close when a link is clicked
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ── Nav: mark active link ────────────────────────────────────
(function markActive() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Fade-up on scroll ────────────────────────────────────────
function initFadeUp() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger children within the same parent
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

// ── Contact form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn--primary');
    const original = btn.textContent;
    btn.textContent = 'Sent ✓';
    btn.style.background = 'var(--teal)';
    btn.disabled = true;

    // Reset after 3s (replace with real form handler like Formspree)
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}

// ── Typed cursor effect on hero ──────────────────────────────
function initTyped() {
  const el = document.getElementById('typed-role');
  if (!el) return;

  const roles = [
    'SOC Analyst',
    'Threat Hunter',
    'SIEM Engineer',
    'Security Blogger',
    'Cape Town Native',
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIdx];
    if (deleting) {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 45);
    } else {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 80);
    }
  }
  setTimeout(tick, 800);
}

// ── Init all ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFadeUp();
  initContactForm();
  initTyped();
});
