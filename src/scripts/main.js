'use strict';

(function () {
  // Funkcja konwertuje camelCase, snake_case i kebab-case → Title Case
  function formatLabel(str) {
    if (!str) return '';
    return str
      .replace(/[-_]/g, ' ') // zamiana "_" i "-" na spacje
      .replace(/([A-Z])/g, ' $1') // wstawienie spacji 
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
      .trim();
  }

  // Funkcja poprawiająca pojedynczy formularz
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const inputs = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    inputs.forEach(input => {
      const inputName = input.getAttribute('name');
      if (!inputName) return;

      // Tworzymy poprawny label
      const label = document.createElement('label');
      label.className = 'field-label';
      if (input.id) label.setAttribute('for', input.id);
      label.textContent = formatLabel(inputName);

      // Sprawdzenie: jeśli label już istnieje, usuń go (aby uniknąć duplikatów)
      const existingLabel = input.parentElement.querySelector('label');
      if (existingLabel) existingLabel.remove();

      // Wstaw label przed inputem
      input.parentElement.insertBefore(label, input);

      // Ustaw placeholder
      input.placeholder = formatLabel(inputName);
    });
  }

  // Udostępniamy funkcję globalnie dla testów Mate Academy
  window.fixForm = fixForm;

  // Popraw wszystkie formularze po załadowaniu DOM
  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(fixForm);
  });
})();

