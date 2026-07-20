// ===== Dark Mode Toggle =====
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('preferredTheme', isDark ? 'dark' : 'light');
});

// Respect a previously chosen theme on load
(function restoreTheme() {
  const saved = localStorage.getItem('preferredTheme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }
})();

// ===== Live Data: Random Quote =====
const quoteBtn = document.getElementById('quote-btn');
const quoteOutput = document.getElementById('quote-output');

quoteBtn.addEventListener('click', () => {
  quoteOutput.textContent = 'Loading...';

  fetch('https://api.quotable.io/random')
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then((data) => {
      quoteOutput.textContent = `"${data.content}" — ${data.author}`;
    })
    .catch(() => {
      quoteOutput.textContent = 'Could not fetch a quote right now. Please try again in a moment.';
    });
});

// ===== Live Data: Random Joke (Bonus second API) =====
const jokeBtn = document.getElementById('joke-btn');
const jokeOutput = document.getElementById('joke-output');

jokeBtn.addEventListener('click', () => {
  jokeOutput.textContent = 'Loading...';

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res) => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then((data) => {
      jokeOutput.textContent = `${data.setup} — ${data.punchline}`;
    })
    .catch(() => {
      jokeOutput.textContent = 'Could not fetch a joke right now. Please try again in a moment.';
    });
});

// ===== Contact Form (client-side only) =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = `Thanks for reaching out! I'll reply to you soon.`;
  contactForm.reset();
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();
