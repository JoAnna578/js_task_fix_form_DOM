'use strict';

(function () {
  // Funkcja konwertuje camelCase → First Name
  function formatLabel(str) {
    return str
      .replace(/([A-Z])/g, ' $1')   // wstawia spację przed dużą literą
      .replace(/^./, (c) => c.toUpperCase()); // pierwsza litera duża
  }

  // Funkcja poprawiająca pojedynczy formularz
  function fixForm(formEl) {
    if (!formEl || !formEl.querySelectorAll) return;

    const inputs = formEl.querySelectorAll(
      'input[name]:not([type=submit]):not([type=button]):not([type=hidden])'
    );

    inputs.forEach((inputEl) => {
      const inputName = inputEl.getAttribute('name'); // ✅ nie używamy 'name'
      if (!inputName) return;

      // Jeśli label już istnieje, ustaw tylko placeholder
      const prevLabel = inputEl.previousElementSibling;
      if (
        prevLabel &&
        prevLabel.tagName.toLowerCase() === 'label' &&
        prevLabel.getAttribute('for') === inputEl.id
      ) {
        if (!inputEl.placeholder) inputEl.placeholder = formatLabel(inputName);
        return;
      }

      // Tworzymy label
      const label = document.createElement('label');
      label.className = 'field-label';
      if (inputEl.id) label.setAttribute('for', inputEl.id);
      label.textContent = formatLabel(inputName);

      // Dodajemy label jako dziecko rodzica inputa
      inputEl.parentElement.appendChild(label);

      // Ustawiamy placeholder
      inputEl.placeholder = formatLabel(inputName);
    });
  }

  // Udostępniamy funkcję globalnie dla testów Mate Academy
  window.fixForm = fixForm;
})();
