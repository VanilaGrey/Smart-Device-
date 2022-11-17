export const getFormContent = (id, buttonText = 'Отправить') => `<form
  class="form" action="https://echo.htmlacademy.ru"
  >
  <input
    id="${id}-name"
    name="name"
    type="text"
    placeholder="Имя"
    pattern="^[A-Za-zА-Яа-яЁё\\- ]+$"
    required
  />
  <label for="${id}-name">Имя</label>
  <input
    id="${id}-phone"
    name="phone"
    type="tel"
    placeholder="Телефон"
    pattern="^\\+[\\d\\-() ]{10,17}$"
    required
  />
  <label for="${id}-phone">Телефон</label>
  <textarea id="${id}-message" name="message" placeholder="Ваш вопрос">
    Ваш вопрос
  </textarea>
  <label for="${id}-message">Ваш вопрос</label>
  <button type="submit">${buttonText}</button>
  <label>
    <input name="agree" type="checkbox" checked required />
    Я согласен на обработку персональных данных
  </label>
</form>`;

export default {
  advantagesHeading: 'Преимущества.',
  callback: {
    content: `<h2>Закажите звонок</h2>
      <p>
        Оставьте контакты, мы проконсультируем вас бесплатно в удобное время
      </p>
      ${getFormContent('callback')}`,
    modalId: 'callback',
  },
  promo: {
    content:
      '<h2>Печатные платы</h2><p>производство и монтаж, поставка комплектующих, блоков и модулей</p>',
    image: {
      default: 'img/background-promo.jpg',
      default2x: 'img/background-promo@2x.jpg',
      webp: 'img/background-promo.webp',
      webp2x: 'img/background-promo@2x.webp',
    },
    link: {
      mobileTitle: 'бесплатная консультация',
      title: 'Получить бесплатную консультацию',
      url: '#feedback-name',
    },
  },
  advantages: [
    '<img src="img/svg/watch.svg" width="35" height="35" alt=""><h3>Оперативные сроки</h3><p>Усовершенствованная логистическая система позволяет нам просчитывать стоимость, производить и доставлять заказы плат и комплектующих в самые короткие сроки</p>',
    '<img src="img/svg/people.svg" width="35" height="35" alt=""><h3>Крупные поставщики</h3><p>Нашими поставщиками являются такие крупные мировые компании как: OSRAM, CREE, HOLGLITRONIC, REFOND. Сотрудничество с такими компаниями обеспечивает хорошее качество нашей продукции.</p>',
    '<img src="img/svg/detective.svg" width="35" height="35" alt=""><h3>Полная конфиденциальность</h3><p>По желанию клиента&nbsp; мы обеспечиваем полную конфиденциальность.</p>',
    '<img src="img/svg/tag.svg" width="35" height="35" alt=""><h3>Персонализация стоимости</h3><p>Мы&nbsp; подбираем определенную фабрику, поставщиков, вид доставки, чтобы установить ту цену, которая Вас устраивает.</p>',
  ],
  aboutCompany: {
    content: `<h2>О компании</h2>
      <p>
        Мы поставляем электронные комплектующие, производим печатные платы и
        предоставляем мировые технологии с 1997 года. Выполняем срочные заказы и
        пилотные образцы до 10 дней.
      </p>
      <p>
        Наши поставщики - мировые производители электронных компонентов: OSRAM,
        CREE, HOLGLITRONIC, REFOND.
        <span class="mobile-hide"
          >Печатные платы и комплектующие Service Devices применяются на
          предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ,
          АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие
          Производители светотехники России.</span
        >
      </p>
      <p>
        Smart Device - это команда профессионалов. Через нас прошло более 1 000
        000 клиентов, 70% из которых продолжают сотрудничество по сей день. На
        данный момент насчитывается более 14 офисов по всей стране и 20 городов
        присутствия.
      </p>
      <p>
        Мы стремимся к постоянному развитию и повышению уровня качества
        продукции, производимой внутри компании. Использование инновационных
        технологий помогает экономить деньги и время наших клиентов
      </p>`,
    image: {
      default: 'img/year.png',
      default2x: 'img/year@2x.png',
      webp: 'img/year.webp',
      webp2x: 'img/year@2x.webp',
    },
  },
  services: {
    heading: 'Smart Device предлагает следующие товары и услуги',
    list: [
      'Производство печатных плат',
      'Монтаж печатных плат',
      'Комплектующие для светотехники',
    ].map((title, i) => {
      const index = i + 1;

      return {
        image: {
          default: `img/services-photo-${index}.jpg`,
          default2x: `img/services-photo-${index}@2x.jpg`,
          webp: `img/services-photo-${index}.webp`,
          webp2x: `img/services-photo-${index}@2x.webp`,
          webpMobile: `img/services-photo-${index}-mobile.webp`,
          webpMobile2x: `img/services-photo-${index}-mobile@2x.webp`,
          webpTablet: `img/services-photo-${index}-tablet.webp`,
          webpTablet2x: `img/services-photo-${index}-tablet@2x.webp`,
        },
        link: {
          title,
          url: '#!',
        },
      };
    }),
    mobileHeading: 'Товары и услуги Smart Device',
  },
  feedback: {
    content: `<h2>Остались вопросы? Задайте их нам!</h2>
      <p>Мы проконсультируем Вас бесплатно</p>
      ${getFormContent('feedback', 'Задать вопрос')}`,
    image: {
      default: 'img/airplane.png',
      default2x: 'img/airplane@2x.png',
      webp: 'img/airplane.webp',
      webp2x: 'img/airplane@2x.webp',
    },
  },
};
