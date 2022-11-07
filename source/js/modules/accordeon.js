export default (accordeonElement) => {
  const togglerElements = accordeonElement.querySelectorAll('[aria-expanded]');

  togglerElements.forEach((togglerElement) => {
    togglerElement.removeAttribute('data-nojs');
  });

  accordeonElement.addEventListener('click', (evt) => {
    const expandedValue = evt.target.getAttribute('aria-expanded');

    if (!expandedValue) {
      // Если нет атрибута, то клик был не по кнопке
      return;
    }

    togglerElements.forEach((togglerElement) => {
      const newExpandedValue =
        togglerElement === evt.target && expandedValue === 'false'
          ? 'true'
          : 'false';

      togglerElement.setAttribute('aria-expanded', newExpandedValue);
    });
  });
};
