// SLIDER
$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 390,
                settings: {
                    arrows: true,
                    adaptiveHeight:true,
                    
                }
            }
        ]
    });
});
// замена изображений для мобильной версии слайдера
const windowSize = $(window).width();
const sliderImages = document.querySelectorAll('.img-slider');
$(function(){
    if(windowSize < 520) {
        sliderImages.forEach((img, index) => img.src = `./assets/img/slider-mob/img-${index + 1}.jpg`);
    }
})


// OPEN MENU
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.main-menu');
const menuLinks = document.querySelectorAll('.menu-item');
const overlay = document.querySelector('.mobile-overlay');


function toggleMenu(){
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
    overlay.classList.toggle('open');
}

overlay.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);
// CLOSE MENU
menuLinks.forEach(element => {
    element.addEventListener('click', toggleMenu) 
});