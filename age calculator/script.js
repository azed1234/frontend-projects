const DateTime = luxon.DateTime;

const inputElement = document.getElementById('birthdate');
const datepicker = new Datepicker(inputElement, {
  format: 'dd/mm/yyyy',
  autohide: true,
  maxDate: new Date()
});

const form = document.getElementById('age-form');
const resultDisplay = document.getElementById('result');
const errorDisplay = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  errorDisplay.textContent = '';
  resultDisplay.innerHTML = '';

  const rawInput = inputElement.value.trim();

  if (!rawInput) {
    errorDisplay.textContent = 'Please select or enter a valid birth date.'
    return;
  }

  const birthDate = DateTime.fromFormat(rawInput, 'dd/MM/yyyy');
  const now = DateTime.now();

  if (!birthDate.isValid) {
    errorDisplay.textContent = 'Invalid date format. Use DD/MM/YYYY';
    return;
  }

  if (birthDate > now) {
    errorDisplay.textContent = 'Birth date cannot be in the future.'
    return;
  }

  const diff = now.diff(birthDate, ['years', 'months', 'days']).toObject();

  const years = Math.floor(diff.years);
  const months = Math.floor(diff.months);
  const days = Math.floor(diff.days);

  resultDisplay.innerHTML = `You are <strong>${years} years ${months} months</strong> old`;
});
