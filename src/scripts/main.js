'use strict';

(function() {
  // Funkcja kapitalizująca pierwszy znak
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Pobranie wszystkich formularzy
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    Array.from(form.elements).forEach((input) => {
      if (!input.name) return; // pomijamy inputy bez name

      // Tworzymy label
      const lbl = document.createElement('label');
      lbl.className = 'field-label';
      lbl.setAttribute('for', input.id);
      lbl.textContent = capitalize(input.name);

      // Wstawiamy label **przed** input
      input.parentNode.insertBefore(lbl, input);

      // Ustawiamy placeholder
      input.placeholder = capitalize(input.name);
    });
  });

  // Funkcja dostępna globalnie dla testów
  window.fixForm = function() {
    // Funkcja może być wywołana ponownie, np. w testach
    forms.forEach((form) => {
      Array.from(form.elements).forEach((input) => {
        if (!input.name) return;
        // Sprawdzenie czy label już istnieje, by nie dublować
        if (!input.previousElementSibling || input.previousElementSibling.tagName.toLowerCase() !== 'label') {
          const lbl = document.createElement('label');
          lbl.className = 'field-label';
          lbl.setAttribute('for', input.id);
          lbl.textContent = capitalize(input.name);
          input.parentNode.insertBefore(lbl, input);
        }
        input.placeholder = capitalize(input.name);
      });
    });
  };
})();
