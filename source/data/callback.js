import {getFormContent} from './index.js';

export default {
  callback: {
    content: `<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>
      ${getFormContent('callback')}`,
    image: {
      default: 'img/airplane.png',
      default2x: 'img/airplane@2x.png',
      webp: 'img/airplane.webp',
      webp2x: 'img/airplane@2x.webp',
    },
  },
  callbackLink: null, // Переопределяем общие данные из _common.js
};
