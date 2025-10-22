'use strict';

// Funkcja kapitalizująca tekst
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funkcja naprawiająca formularz: dodaje label i placeholder
function fixForm(formElement) {
  const inputs = formElement.querySelectorAll('input');

  inputs.forEach((input) => {
    const parentContainer = input.parentNode;

    // Tworzymy label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);

    // Wstawiamy label przed input
    parentContainer.insertBefore(label, input);

    // Ustawiamy placeholder
    input.placeholder = capitalize(input.name);
  });
}

// Pobranie wszystkich formularzy na stronie
const forms = document.querySelectorAll('form');

// Wywołanie funkcji dla każdego formularza
forms.forEach((form) => fixForm(form));

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;

