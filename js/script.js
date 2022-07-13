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
                breakpoint: 391,
                settings: {
                    arrows: true,
                    
                }
            }
        ]
        
        
    });
});