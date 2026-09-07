const textarea = document.getElementById('user-message');
const currentCount = document.getElementById('current-count');
const wrapper = document.getElementById('wrapper');
const MAX_CHARS = 250;

textarea.addEventListener('input', () => {
  const typedLength = textarea.value.length;

  currentCount.textContent = typedLength;

  if (typedLength >= MAX_CHARS) {
    wrapper.classList.add('limit-reached');
  } else {
    wrapper.classList.remove('limit-reached');
  }
});