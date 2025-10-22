'use strict';

// Funkcja do kapitalizacji pierwszej litery
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funkcja poprawiająca pojedynczy formularz
function fixForm(form) {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    const parent = input.parentElement;

    // Tworzymy label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);

    // Wstawiamy label przed inputem
    parent.insertBefore(label, input);

    // Dodajemy placeholder
    input.placeholder = capitalize(input.name);
  });
}

// Pobranie wszystkich formularzy na stronie i ich poprawienie
const forms = document.querySelectorAll('form');
forms.forEach((form) => fixForm(form));

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;


