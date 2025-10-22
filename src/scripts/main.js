'use strict';

// Funkcja do kapitalizacji pierwszej litery
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funkcja do naprawy formularza
function fixForm(form) {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const container = input.parentElement;

    // Tworzymy element label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);

    // Wstawiamy label PRZED input
    container.insertBefore(label, input);

    // Ustawiamy placeholder
    input.placeholder = capitalize(input.name);
  });
}

// Udostępniamy funkcję globalnie dla testów
window.fixForm = fixForm;
window.capitalize = capitalize;


