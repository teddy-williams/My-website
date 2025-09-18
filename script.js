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

// === HIRE ME BUTTON NOTIFICATION ===
function sendMessage() {
  window.location.href = "mailto:williamsmavuso@gmail.com?subject=Hire Me&body=Hello!%0A%0AI am interested in working with you.%0A%0ABest regards";

  const notification = document.getElementById("notification");
  notification.textContent = "Your email client should now open!";
  notification.classList.add("visible");

  // Hide after 3 seconds
  setTimeout(() => {
    notification.classList.remove("visible");
  }, 3000);
}

// === CONNECT LINK POPUP ===
document.querySelectorAll('a.connect-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // optional, if you don't want immediate navigation
    const notification = document.getElementById("notification");
    notification.textContent = "Thanks for reaching out! 🚀 I’ll connect with you soon.";
    notification.classList.add("visible");

    setTimeout(() => {
      notification.classList.remove("visible");
    }, 3000);
  });
});
