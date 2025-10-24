'use strict';

(function () {
  // Funkcja do kapitalizacji pierwszej litery i rozdzielania nazw camelCase
  function cap(s) {
    // Zamienia firstName → First Name
    return String(s)
      .replace(/([A-Z])/g, ' $1')   // wstawia spacje przed dużymi literami
      .replace(/^./, (c) => c.toUpperCase()); // pierwsza litera duża
  }

  // Funkcja poprawiająca formularz
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    // Pobieramy wszystkie inputy z name, pomijamy buttony i hidden
    const fields = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    Array.from(fields).forEach((field) => {
      const fldName = field.getAttribute('name');
      if (!fldName) return;

      // Sprawdzenie, czy label już istnieje
      const prev = field.previousElementSibling;
      if (
        prev &&
        prev.tagName &&
        prev.tagName.toLowerCase() === 'label' &&
        prev.getAttribute('for') === field.id
      ) {
        if (!field.placeholder) field.placeholder = cap(fldName);
        return;
      }

      // Tworzymy label
      const lbl = document.createElement('label');
      lbl.className = 'field-label';
      if (field.id) lbl.setAttribute('for', field.id);
      lbl.textContent = cap(fldName);

      // Wstawiamy label przed input
      field.insertAdjacentElement('beforebegin', lbl);

      // Ustawiamy placeholder
      if (!field.placeholder) field.placeholder = cap(fldName);
    });
  }

  // Udostępniamy funkcję globalnie dla testów
  window.fixForm = fixForm;

  // 💡 Natychmiast poprawiamy wszystkie formularze po załadowaniu DOM
  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(fixForm);
  });
})();
