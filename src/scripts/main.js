function fixForm(form) {
  Array.from(form.elements).forEach((input) => {
    if (!input.name) return;

    const parent = input.parentNode;

    const label = document.createElement('label');
    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    // Wstaw label przed input
    parent.insertBefore(label, input);

    // Ustaw placeholder
    input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  });
}
