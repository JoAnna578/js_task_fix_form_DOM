'use strict';

// Funkcja do kapitalizacji pierwszej litery
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fixForm(formElement) {
  const inputs = formElement.querySelectorAll('input');

  inputs.forEach((input) => {
    const parent = input.parentElement;

    // Tworzymy label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);

    // Dodajemy label do kontenera
    parent.appendChild(label);

    // Dodajemy placeholder
    input.placeholder = capitalize(input.name);
  });
}

// Pobranie wszystkich formularzy na stronie
const forms = document.querySelectorAll('form');

// Naprawa każdego formularza
forms.forEach((form) => fixForm(form));

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;
window.capitalize = capitalize;

