$(document).ready(function(){
    var swiper01 = new Swiper('.album .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        initialSlide: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    var swiper02 = new Swiper('.musicvideo .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function(){
                $('.player01').attr('src', 'https://www.youtube.com/embed/lpka6ymCkIY');
                $('.player02').attr('src', 'https://www.youtube.com/embed/nA3yfLs7jis');
                $('.player03').attr('src', 'https://www.youtube.com/embed/afxLaQiLu-o');
            },
        }
    });
});

