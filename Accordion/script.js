const accodionHeaders = document.querySelectorAll('.accordion-header');

accodionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const currentItem = header.parentElement;
    const isOpen = currentItem.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(item => {
      item.classList.remove('active');
      const button = item.querySelector('.accordion-header');

      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
    });

    if (!isOpen) {
      currentItem.classList.add('active')
      header.setAttribute('aria-expanded', 'true')
    }
  });
});