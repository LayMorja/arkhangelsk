// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

$('.examples__slider').slick({
  slidesToShow: 1,
  nextArrow: '.examples__arrow-next',
  prevArrow: '.examples__arrow-prev',
  dots: false,
  variableWidth: true,
  infinite: true,
  mobileFirst: true,
});

$('.reviews__slider').slick({
  slidesToShow: 1,
  nextArrow: '.reviews__arrow-next',
  prevArrow: '.reviews__arrow-prev',
  dots: false,
  infinite: true,
});

$('.works__slider').slick({
  slidesToShow: 1,
  prevArrow: '',
  variableWidth: true,
  dots: false,
  infinite: true,
  nextArrow:
    '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="39" height="16" viewBox="0 0 39 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.9145 0.928882L38.2784 7.29284C38.669 7.68337 38.669 8.31653 38.2784 8.70706L31.9145 15.071C31.5239 15.4615 30.8908 15.4615 30.5003 15.071C30.1097 14.6805 30.1097 14.0473 30.5003 13.6568L35.1571 8.99995L0.428466 8.99995L0.428466 6.99995L35.1571 6.99995L30.5003 2.3431C30.1097 1.95257 30.1097 1.31941 30.5003 0.928882C30.8908 0.538358 31.5239 0.538358 31.9145 0.928882Z" fill="#108ED5"/></svg></button>',
});

let myMap;
function mapInit() {
  if (!ymaps) throw new Error('Карты не инициализированы');

  const viewerCb = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ymaps.ready(function () {
          myMap = new ymaps.Map('map', {
            center: [64.531183, 40.539127],
            zoom: 15,
          });

          const myPlacemark = new ymaps.Placemark(
            myMap.getCenter(),
            {
              hintContent: 'Домино Плюс в Архангельске',
              balloonContentHeader: 'Архангельск',
              balloonContentBody: 'ул. Выучейского д. 14',
            },
            {
              iconLayout: 'default#image',
              iconImageHref: 'img/map_icon.png',
              iconImageSize: [28, 34],
              iconImageOffset: [-5, -38],
            }
          );
          const myPlacemark2 = new ymaps.Placemark(
            [64.559205, 39.800509],
            {
              hintContent: 'Домино Плюс в Северодвинске',
              balloonContentHeader: 'Северодвинск',
              balloonContentBody: 'ул. Карла Маркса д. 19',
            },
            {
              iconLayout: 'default#image',
              iconImageHref: 'img/map_icon.png',
              iconImageSize: [28, 34],
              iconImageOffset: [-5, -38],
            }
          );

          myMap.geoObjects.add(myPlacemark).add(myPlacemark2);
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(viewerCb, {
    root: null,
    threshold: 0.05,
  });
  observer.observe(document.querySelector('#map'));
}
function changeMap() {
  const arkhBlock = document.querySelector('.placement__block--arkh');
  const sevBlock = document.querySelector('.placement__block--sev');

  arkhBlock.addEventListener('click', () => {
    myMap.setCenter([64.531183, 40.539127]);
    sevBlock.classList.contains('placement__block--current')
      ? sevBlock.classList.remove('placement__block--current')
      : null;
    !arkhBlock.classList.contains('placement__block--current')
      ? arkhBlock.classList.add('placement__block--current')
      : null;
  });
  sevBlock.addEventListener('click', () => {
    myMap.setCenter([64.559205, 39.800509]);
    arkhBlock.classList.contains('placement__block--current')
      ? arkhBlock.classList.remove('placement__block--current')
      : null;
    !sevBlock.classList.contains('placement__block--current')
      ? sevBlock.classList.add('placement__block--current')
      : null;
  });
}

if (document.querySelector('#map')) {
  try {
    mapInit();
    changeMap();
  } catch (e) {
    console.error(`Something got wrong, ${e.message}`);
  }
}

const homeHeader = function () {
  const header = document.querySelector('header.header');
  const homeMenu = document.querySelector('.hero__menu');
  const windowHeight = window.innerHeight;
  const point = homeMenu.offsetTop + homeMenu.offsetHeight / 2;

  window.addEventListener('scroll', () => {
    if (window.scrollY > point) {
      header.classList.contains('header--home-scrolled')
        ? header.classList.remove('header--home-scrolled')
        : null;
    } else {
      !header.classList.contains('header--home-scrolled')
        ? header.classList.add('header--home-scrolled')
        : null;
    }
  });
};

if (document.querySelector('.hero__menu')) {
  homeHeader();
}
