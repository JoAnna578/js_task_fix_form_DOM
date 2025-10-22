'use strict';

(function () {
  // Funkcja do kapitalizacji pierwszej litery
  function cap(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
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

      // Ustawiamy placeholder jeśli nie istnieje
      if (!field.placeholder) field.placeholder = cap(fldName);
    });
  }

  // Udostępniamy funkcję globalnie dla testów
  window.fixForm = fixForm;
})();
