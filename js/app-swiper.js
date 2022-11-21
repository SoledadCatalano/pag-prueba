var swiper = new Swiper('.swiper-container', {
	loop:true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	  },
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 4,
	spaceBetween: 16,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  //ancho menor a:
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 3,
		spaceBetween: 0,
	  },
	} 
    });