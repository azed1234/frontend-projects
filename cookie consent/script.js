const cookieCard = document.getElementById('cookie-card');
const acceptBtn = document.getElementById('acceptBtn');
const closeBtn = document.getElementById('closeBtn');

window.addEventListener('DOMContentLoaded', () => {
  const hasConsented = localStorage.getItem('cookieConsent');

  if (hasConsented === 'true') {
    cookieCard.classList.add('hidden');
  }
});

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookieConsent', 'true');
  cookieCard.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  cookieCard.classList.add('hidden');
})