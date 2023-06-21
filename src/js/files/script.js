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
