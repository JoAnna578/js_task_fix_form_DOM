'use strict';

function fixForm(form) {
  // pobierz tylko inputy z name (bez checkboxów itp. bez name)
  const inputs = Array.from(form.querySelectorAll('input[name]'));

  inputs.forEach((input) => {
    const name = input.name;
    if (!name) return;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);

    const text = name.charAt(0).toUpperCase() + name.slice(1);
    label.textContent = text;

    // Wstaw label bezpośrednio przed input (nie używamy parent/parentNode)
    input.insertAdjacentElement('beforebegin', label);

    // ustaw placeholder
    input.placeholder = text;
  });
}

// Naprawa wszystkich formularzy na stronie
document.querySelectorAll('form').forEach(fixForm);

// Udostępnienie funkcji globalnie dla testów
window.fixForm = fixForm;
