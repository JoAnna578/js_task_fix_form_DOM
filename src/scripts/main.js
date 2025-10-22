'use strict';

(function () {
  // pomocnicza funkcja: kapitalizacja pierwszej litery
  function cap(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
  }

  // główna funkcja przyjmująca element <form>
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    // wybieramy tylko realne pola (text, email, password, tel, number)
    const fields = formEl.querySelectorAll(
      'input[name]:not([type="submit"]):not([type="button"])' +
      ':not([type="hidden"]), textarea[name], select[name]'
    );

    Array.from(fields).forEach((fld) => {
      const fldName = fld.getAttribute('name');
      if (!fldName) return;

      // jeśli przed polem już jest label z odpowiednim for, pomijamy
      const prev = fld.previousElementSibling;
      if (
        prev &&
        prev.tagName &&
        prev.tagName.toLowerCase() === 'label' &&
        prev.getAttribute('for') === fld.id
      ) {
        if (!fld.placeholder) fld.placeholder = cap(fldName);
        return;
      }

      const lbl = document.createElement('label');
      lbl.className = 'field-label';
      if (fld.id) lbl.setAttribute('for', fld.id);
      lbl.textContent = cap(fldName);

      // wstaw label przed polem
      fld.insertAdjacentElement('beforebegin', lbl);

      // ustaw placeholder jeśli nie ma
      if (!fld.placeholder) fld.placeholder = cap(fldName);
    });
  }

  // expose function for tests
  window.fixForm = fixForm;
})();


