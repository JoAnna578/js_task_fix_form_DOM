'use strict';

function fixForm(form) {
  Array.from(form.elements).forEach((input) => {
    if (!input.name) return;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    // Wstawienie label przed input bez przypisywania parentNode do zmiennej
    input.parentNode.insertBefore(label, input);

    // Ustawienie placeholder
    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  });
}

document.querySelectorAll('form').forEach(fixForm);

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;
