'use strict';

// Funkcja do kapitalizacji pierwszej litery
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Funkcja poprawiająca formularz
function fixForm(formElement) {
  const inputs = formElement.querySelectorAll('input');

  inputs.forEach((input) => {
    const container = input.parentElement; // unikalna nazwa, nie parent

    // Tworzymy label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = capitalize(input.name);

    // Wstawiamy label przed inputem
    container.insertBefore(label, input);

    // Dodajemy placeholder
    input.placeholder = capitalize(input.name);
  });
}

// Pobranie wszystkich formularzy na stronie
const forms = document.querySelectorAll('form');

// Wywołanie funkcji dla każdego formularza
forms.forEach((form) => fixForm(form));

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;

