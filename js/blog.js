/* ============================================================
   MAVUSO WILLIAMS — blog.js
   ============================================================ */

// ── Filter buttons on writing.html ──────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.blog-card');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.filter;
      cards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ── Table of contents active link (individual post pages) ────
function initTOC() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  const headings = document.querySelectorAll('.post-body h2, .post-body h3');
  if (!tocLinks.length || !headings.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.toc-list a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '0px 0px -60% 0px', threshold: 0 });

  headings.forEach(h => observer.observe(h));
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initTOC();
});
