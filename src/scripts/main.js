'use strict';

(function () {
  // Zamienia camelCase → First Name
  function formatLabel(str) {
    return str
      .replace(/([A-Z])/g, ' $1')   // wstawia spację przed dużymi literami
      .replace(/^./, (c) => c.toUpperCase()); // pierwsza litera duża
  }

  // Funkcja poprawiająca pojedynczy formularz
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const inputs = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    inputs.forEach((input) => {
      const nameAttr = input.getAttribute('name');
      if (!nameAttr) return;

      // Sprawdzamy, czy label już istnieje
      const existingLabel = input.parentElement.querySelector(
        `label[for="${input.id}"]`
      );
      if (existingLabel) {
        if (!input.placeholder) input.placeholder = formatLabel(nameAttr);
        return;
      }

      // Tworzymy label
      const label = document.createElement('label');
      label.className = 'field-label';
      if (input.id) label.setAttribute('for', input.id);
      label.textContent = formatLabel(nameAttr);

      // Dodajemy label jako dziecko rodzica inputa
      input.parentElement.appendChild(label);

      // Ustawiamy placeholder
      input.placeholder = formatLabel(nameAttr);
    });
  }

  // Udostępniamy funkcję globalnie dla testów Mate Academy
  window.fixForm = fixForm;
})();
