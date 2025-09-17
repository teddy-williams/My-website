function toggleTheme() {
  document.body.classList.toggle("dark");

}
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = '☀️';
} else {
  toggleBtn.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  toggleBtn.textContent = isLight ? '☀️' : '🌙';
});
