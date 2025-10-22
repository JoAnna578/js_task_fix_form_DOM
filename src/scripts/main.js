'use strict';

function fixForm(form) {
  Array.from(form.elements).forEach(input => {
    if (!input.name) return;

    // Tworzymy label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = input.name[0].toUpperCase() + input.name.slice(1);

    // Wstawiamy label bezpośrednio przed input
    input.parentNode.insertBefore(label, input);

    // Ustawiamy placeholder
    input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  });
}

// Wywołanie dla wszystkich formularzy
document.querySelectorAll('form').forEach(fixForm);

// Udostępniamy funkcję globalnie
window.fixForm = fixForm;
