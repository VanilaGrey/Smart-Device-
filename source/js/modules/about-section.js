const ButtonText = {
  CLOSED: 'Подробнее',
  OPENED: 'Свернуть',
};
const BODY_SELECTOR = '.about-section__text';
const BTN_SELECTOR = '.about-section__btn';
const CLOSED_CLASS_NAME = 'about-section__text--closed';

const buttonTemplate = `<button class="about-section__btn btn">
  ${ButtonText.CLOSED}
</button>`;

export default (sectionElement) => {
  let isOpened = false;

  const bodyElement = sectionElement.querySelector(BODY_SELECTOR);
  bodyElement.classList.add(CLOSED_CLASS_NAME);
  bodyElement.insertAdjacentHTML('beforeend', buttonTemplate);

  const buttonElement = bodyElement.querySelector(BTN_SELECTOR);
  buttonElement.addEventListener('click', () => {
    isOpened = !isOpened;
    bodyElement.classList.toggle(CLOSED_CLASS_NAME);

    buttonElement.textContent = isOpened
      ? ButtonText.OPENED
      : ButtonText.CLOSED;
  });
};
