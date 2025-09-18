// === THEME TOGGLE ===
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme preference on page load
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

// Switch between dark and light themes
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
});

// === CONNECT LINK POPUP ===
document.querySelectorAll('a.connect-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default navigation if needed
    alert("Thanks for reaching out! 🚀 I’ll connect with you soon.");
  });
});
