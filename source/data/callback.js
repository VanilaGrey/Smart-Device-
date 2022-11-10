import {getFormContent} from './index.js';

export default {
  callback: {
    content: `<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>
      ${getFormContent('callback')}`,
    image: {
      default: 'img/plane.png',
      default2x: 'img/plane@2x.png',
      webp: 'img/plane.webp',
      webp2x: 'img/plane@2x.webp',
    },
  },
  callbackLink: null, // Переопределяем общие данные из _common.js
};
