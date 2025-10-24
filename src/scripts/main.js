'use strict';

(function () {
  // Funkcja konwertuje camelCase, znak "-" lub "_" → Title Case
  function formatLabel(str) {
    if (!str) return '';
    // Usuń prefiks przed "-" lub "_", jeśli istnieje
    const parts = str.split(/[-_]/);
    const lastPart = parts[parts.length - 1];
    // Zamień "_" lub "-" na spację i kapitalizuj każde słowo
    return lastPart
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Funkcja poprawiająca pojedynczy formularz
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const inputs = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    inputs.forEach((inputEl) => {
      const inputName = inputEl.getAttribute('name');
      if (!inputName) return;

      // Sprawdzenie, czy label już istnieje dla tego inputa
      let existingLabel = inputEl.previousElementSibling;
      if (
        existingLabel &&
        existingLabel.tagName.toLowerCase() === 'label' &&
        existingLabel.getAttribute('for') === inputEl.id
      ) {
        // Zaktualizuj placeholder, jeśli jest pusty
        if (!inputEl.placeholder) {
          inputEl.placeholder = formatLabel(inputName);
        }
        return;
      }

      // Tworzymy nowy label
      const label = document.createElement('label');
      label.className = 'field-label';
      label.setAttribute('for', inputEl.id);
      label.textContent = formatLabel(inputName);

      // Wstawiamy label przed input
      inputEl.parentElement.insertBefore(label, inputEl);

      // Ustawiamy placeholder taki sam jak label
      inputEl.placeholder = formatLabel(inputName);
    });
  }

  // Udostępniamy funkcję globalnie dla testów Mate Academy
  window.fixForm = fixForm;
})();
