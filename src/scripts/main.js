'use strict';

// Funkcja do poprawienia formularza
function fixForm(form) {
  Array.from(form.elements).forEach((input) => {
    // Pomijamy elementy bez nazwy
    if (!input.name) return;

    // Pobranie kontenera inputa
    const fieldContainer = input.parentNode;

    // Tworzenie label
    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    // Wstaw label przed input
    fieldContainer.insertBefore(label, input);

    // Ustawienie placeholdera
    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  });
}

// Pobranie wszystkich formularzy na stronie
const forms = document.querySelectorAll('form');

// Wywołanie funkcji dla każdego formularza
forms.forEach((form) => fixForm(form));

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;
