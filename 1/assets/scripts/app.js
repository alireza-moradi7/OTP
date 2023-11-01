const codes = document.querySelectorAll('[type="number"]');

window.addEventListener('load', codes[0].focus());

for (const [index, code] of codes.entries()) {
  const nextInput = code.nextElementSibling;
  const prevInput = code.previousElementSibling;

  code.addEventListener('keyup', (e) => {
    if (
      code.value < 0 ||
      code.value.length > 1
    ) {
      code.value = null;
    }

    if (
      code.value &&
      nextInput &&
      nextInput.hasAttribute('disabled')
    ) {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    if (code.value && index === 3) {
      code.blur();
    }

    if (
      index !== 0 &&
      e.key === 'Backspace'
    ) {
      code.setAttribute('disabled', true);
      prevInput.focus();
    }
  });
}