// Initialize Swiper
var swiper = new Swiper(".banners", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30
});
var swiper = new Swiper(".featured", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});