export default (formElement, id = 0) => {
  const fieldElements = formElement.querySelectorAll('[name]');
  let storageSupported = false;

  fieldElements.forEach((fieldElement) => {
    const {name} = fieldElement;
    const fieldId = `form-${id}-${name}`;

    try {
      const value = localStorage.getItem(fieldId);
      storageSupported = true;

      if (value !== null) {
        fieldElement.value = value;
      }
    } catch (error) {
      // Do nothing
    }

    fieldElement.addEventListener('change', () => {
      if (fieldElement.checkValidity()) {
        if (storageSupported) {
          localStorage.setItem(fieldId, fieldElement.value);
        }
      } else {
        fieldElement.reportValidity();
      }
    });
  });
};
