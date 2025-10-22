'use strict';

function fixForm(form) {
  const inputs = Array.from(form.querySelectorAll('input[name]'));

  inputs.forEach((input) => {
    const inputName = input.name;
    if (!inputName) return;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const text = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    label.textContent = text;

    // Wstaw label bezpośrednio przed input
    input.insertAdjacentElement('beforebegin', label);

    // Ustaw placeholder
    input.placeholder = text;
  });
}

document.querySelectorAll('form').forEach(fixForm);

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;
