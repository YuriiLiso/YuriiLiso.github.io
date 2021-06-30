const toggler = document.querySelector('#toggler');

const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger-line');

const menu = document.querySelector('.menu');

const bodyHidden = document.querySelector('.hidden');

toggler.addEventListener('click', () => {
  bodyHidden.classList.toggle('hidden--active');
  
  menu.classList.toggle('menu--active');
  
  burger.classList.toggle('burger--active');
  burgerLine.classList.toggle('burger-line--active');
});
