// Slick Slider
$(document).ready(function() {
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    });


    $('.slick-slider-banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

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
// I prefer use "addEventListener". The method may change according to backend preference.
let img = document.querySelector('#imgClickAndChange');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

if (img) {
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
}


// Searching
const search = document.getElementById("search");
const productName = document.querySelectorAll(".products-list-item .text-box span");
const brandName = document.querySelectorAll(".products-list-item .text-box h6");

search.addEventListener("keyup", filterProducts);


function filterProducts(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.parentElement.style.display = "none"
        }
    })
    brandName.forEach(function(product) {
        const item = product.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.parentElement.style.display = "block"
        } else {
            product.parentElement.parentElement.parentElement.style.display = "none"
        }
    })
}


// Product Counter
const divs = document.querySelectorAll('.product-list-content-items .products-list-item');
document.getElementById("productCount").innerHTML = "Showing " + divs.length + " Products";




// Filter Product
// let checkbox = document.querySelector('#checkbox')
// let product = document.querySelectorAll('.products-list-item');
// //console.log(product)
// //console.log(checkbox)

// for (i = 0; i < product.length; i++) {
//     checkbox.addEventListener('change', function(e) {
//         if (checkbox.checked) {
//             console.log("test")
//             product.style.display = "none";
//         } else {
//             product.style.display = "initial";
//         }
//     });
// }

// const checkboxes = document.querySelectorAll('.checkbox');
// const storeProduct = document.querySelectorAll('#brandA');
// const storeProductsAll = document.querySelectorAll('.products-list-item');

// for (i = 0; i < checkboxes.length; i++) {

//     checkboxes[i].addEventListener('change', (e) => {
//         e.preventDefault()

//         storeProduct.forEach((product) => {
//             if (checkbox.checked) {
//                 storeProductsAll.forEach((productAll) => {
//                     productAll.style.display = "none";
//                 });
//                 product.style.display = "initial";

//             } else {
//                 product.style.display = "none";
//             }
//         });
//     });
// };