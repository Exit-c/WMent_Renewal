/* main */
$(document).ready(function(){
    function bxResize(){
        var wh = $(window).outerHeight();
        var hh = $('header').outerHeight();
        
        $('main').outerHeight(wh - hh);
        $('main .bx-wrapper').outerHeight(wh - hh);
        $('main .bx-viewport').outerHeight(wh - hh);
        $('main .slider li').outerHeight(wh - hh);
    }
    
    
    
    $('.slider').bxSlider({
        speed: 600,
        auto: true,
        stopAutoOnClick: true,
        onSliderLoad: function(){
            bxResize();
        },
        onSliderResize: function(){
            bxResize();
        }
    });
});

/* artists */
$(document).ready(function(){
    var swiper01 = new Swiper('.artists .swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        }
    });
});

/* music video */
$(document).ready(function(){
    var galleryThumbs = new Swiper('.musicvideo .gallery-thumbs', {
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.musicvideo .gallery-top', {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs
        }
    });
});

/* album */
$(document).ready(function(){
    var swiper02 = new Swiper('.album .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 15,
        initialSlide: 1,
        loop: true,
        centeredSlides: true
    });
});

/* event */
$(document).ready(function(){
    var swiper03 = new Swiper('.event .swiper-container', {
        slidesPerView: 2.4,
        spaceBetween: 10,
        loop: true
    });
});