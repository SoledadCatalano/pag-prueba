var swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 4,
    loop: true,
    autoplay: true,
    paginationClickable: true,
    spaceBetween: 16,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
       
        767: {
            slidesPerView: 2,
            spaceBetween: 15
        },
     
        1023: {
            slidesPerView: 4,
            spaceBetween: 15
        }
    }
});