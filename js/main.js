const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener('click', ()=> {
	menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__slider', {
	slidesPerView: 'auto',
	spaceBetween: 20,
	simulateTouch: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  });

  const swiperTwo = new Swiper('.certificates__slider', {
	slidesPerView: 3,
	spaceBetween: 20,
	slidesOffsetAfter: 395,
	
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	
  });
  document.querySelector('.swiper-wrapper').style.width = '100%';
 