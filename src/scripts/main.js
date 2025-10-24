'use strict';

(function () {
  function formatLabel(s) {
    return s
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (c) => c.toUpperCase());
  }

  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const inputs = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    inputs.forEach((input) => {
      const name = input.getAttribute('name');
      if (!name) return;

      const prev = input.previousElementSibling;
      if (prev && prev.tagName.toLowerCase() === 'label' && prev.getAttribute('for') === input.id) {
        if (!input.placeholder) input.placeholder = formatLabel(name);
        return;
      }

      const label = document.createElement('label');
      label.className = 'field-label';
      if (input.id) label.setAttribute('for', input.id);
      label.textContent = formatLabel(name);

      input.parentElement.prepend(label);

      input.placeholder = formatLabel(name);
    });
  }

  window.fixForm = fixForm;
})();
