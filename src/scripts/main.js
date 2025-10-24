// scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
  // Pobierz wszystkie inputy z formularzy
  const inputs = document.querySelectorAll('form input');

  inputs.forEach(input => {
    const inputName = input.getAttribute('name');
    if (!inputName) return; // pomiń jeśli input nie ma "name"

    // Tworzymy czytelny tekst z "name", np. firstName -> First Name
    const labelText =
      inputName.charAt(0).toUpperCase() +
      inputName.slice(1).replace(/([A-Z])/g, ' $1');

    // Tworzymy element label
    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = labelText;

    // Dodajemy label do rodzica inputa (nad inputem)
    input.parentElement.prepend(label);

    // Ustawiamy placeholder na podstawie labelText
    input.setAttribute('placeholder', labelText);
  });
});
