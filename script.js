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

// === CONNECT BUTTON POPUP ===
document.querySelectorAll('.connect-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Thanks for reaching out! 🚀 I’ll connect with you soon.");

    const linkedinURL = btn.getAttribute('data-link');
    window.location.href = linkedinURL;
  });
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_g1v3nvn", "template_a7lajve", this)
    .then(() => {
      alert("✅ Message sent successfully!");
    }, (err) => {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", err);
    });
});








