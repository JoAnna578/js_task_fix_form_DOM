'use strict';

(function () {
  function cap(str) {
    const s = String(str);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const selector =
      'input[name]:not([type="submit"]):not([type="button"])' +
      ':not([type="hidden"]), textarea[name], select[name]';

    const fields = formEl.querySelectorAll(selector);

    Array.from(fields).forEach((fld) => {
      const fldName = fld.getAttribute('name');
      if (!fldName) return;

      const prev = fld.previousElementSibling;
      const prevIsLabel =
        prev &&
        prev.tagName &&
        prev.tagName.toLowerCase() === 'label' &&
        prev.getAttribute('for') === fld.id;

      if (prevIsLabel) {
        if (!fld.placeholder) fld.placeholder = cap(fldName);
        return;
      }

      const lbl = document.createElement('label');
      lbl.className = 'field-label';
      if (fld.id) lbl.setAttribute('for', fld.id);
      lbl.textContent = cap(fldName);

      fld.insertAdjacentElement('beforebegin', lbl);

      if (!fld.placeholder) fld.placeholder = cap(fldName);
    });
  }

  // automatyczne wywołanie dla wszystkich formularzy
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => fixForm(form));

  // eksport dla testów
  window.fixForm = fixForm;
})();

 


