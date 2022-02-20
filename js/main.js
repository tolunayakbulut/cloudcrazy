// SwiperJS for slider
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


// Accordion Menu
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 18 + "px";
            panel.style.height = panel.scrollHeight + 18 + "px";
        }
    });
}


// Change Color
let img = document.querySelector('#imgClickAndChange');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', () => {
    img.src = '/img/product-detail-1.png';
})
btn2.addEventListener('click', () => {
    img.src = '/img/product-detail-2.png';
})
btn3.addEventListener('click', () => {
    img.src = '/img/product-detail-3.png';
})
btn4.addEventListener('click', () => {
    img.src = '/img/product-detail-2.png';
})