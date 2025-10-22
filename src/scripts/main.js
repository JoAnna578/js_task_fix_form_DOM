'use strict';

// Define fixForm on window and do not auto-run anything in global scope.
window.fixForm = function (formElement) {
  // get inputs that have a name attribute
  const inputs = Array.from(formElement.querySelectorAll('input[name]'));

  inputs.forEach((inp) => {
    // avoid using variable names that shadow globals
    const inpName = inp.name;
    if (!inpName) return;

    // create label
    const lbl = document.createElement('label');
    lbl.className = 'field-label';
    lbl.setAttribute('for', inp.id);

    const labelText = inpName.charAt(0).toUpperCase() + inpName.slice(1);
    lbl.textContent = labelText;

    // insert label before input without assigning parent to a variable
    inp.insertAdjacentElement('beforebegin', lbl);

    // set placeholder
    inp.placeholder = labelText;
  });
};

