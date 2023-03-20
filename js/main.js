$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: 'slide',
        slideshowSpeed: 5000,
        before: function(){ 
            $('#mslider .flexslider .slides > li').removeClass('on');
        },
        after: function(){ 
            $('#mslider .flexslider .slides > li').addClass('on');
        },
        start: function(){
            $('#mslider .flexslider .slides > li').addClass('on');
        }
    });
    
    $(window).resize(function(){
        var wh = $(window).outerHeight();
        
        $('#mslider .flexslider .slides > li').outerHeight(wh);
    });
    
    $(window).trigger('resize');
});

$(document).ready(function(){
    var swiper = new Swiper('#artists .swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '#artists .swiper-pagination',
            clickable: true,
        },
    });
});





$(document).ready(function(){
    
    var swiper = new Swiper('#musicvideo .swiper-container', {
        slidesPerView: 'auto',
        /*loopedSlides: 5,*/
        /*loop: true,*/
        initialSlide: 2,
        spaceBetween: 250,
        centeredSlides: true, 
        navigation: {
            nextEl: '#musicvideo .swiper-button-next',
            prevEl: '#musicvideo .swiper-button-prev',
        },
        
    });
    window.onYouTubeIframeAPIReady = function() {
        player01 = new YT.Player('player01', {});
        player02 = new YT.Player('player02', {});
        player03 = new YT.Player('player03', {});
        player04 = new YT.Player('player04', {});
        player05 = new YT.Player('player05', {});
    };
    
    /*$('.swiper-button-next').click(function(){
        player01.stopVideo();
        player02.stopVideo();
        player03.stopVideo();
        player04.stopVideo();
        player05.stopVideo();
    });*/
    
    swiper.on('slideChange',function(){
        player01.stopVideo();
        player02.stopVideo();
        player03.stopVideo();
        player04.stopVideo();
        player05.stopVideo();
    });
    /*swiper.on('slideChange',function(){
        $('.player01').attr('src','https://www.youtube.com/embed/QTD_yleCK9Y?controls=0');
        $('.player02').attr('src','https://www.youtube.com/embed/GQqyCeKf8rw?controls=0');
        $('.player03').attr('src','https://www.youtube.com/embed/afxLaQiLu-o?controls=0');
        $('.player04').attr('src','https://www.youtube.com/embed/OLiDzcE7YBE?controls=0');
        $('.player05').attr('src','https://www.youtube.com/embed/-zVL1JRDYxg?controls=0');
    });*/
});


$(document).ready(function(){
    var swiper = new Swiper('#newalbum .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '#newalbum .swiper-button-next',
            prevEl: '#newalbum .swiper-button-prev',
        },
        on: {
            init: function(){
                $('#newalbum .swiper-slide-active').after('<span></span>');
            },
            slideChangeTransitionStart: function(){
                $('#newalbum .swiper-slide').find('+ span').remove();
                $('#newalbum .swiper-slide-active').after('<span></span>');
            }
        }
    });
});


$(document).ready(function(){
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        
        $('#artists .swiper-slide li').each(function(index){
            var top = $(this).offset().top;
            
            if(top - 900 < st){
                $(this).addClass('on');
            }
        });
        
        $('#musicvideo .swiper-slide').each(function(index){
            var top = $(this).offset().top;
            
            if(top - 700 < st){
                $(this).addClass('on');
            }
        });
        
        $('#news li').each(function(index){
            var top = $(this).offset().top;
            
            if(top - 900 < st ){
                $(this).addClass('on');
            }
        });
        
        $('#newalbum').each(function(){
            var top = $(this).offset().top;
            
            if(top - 900 < st){
                $(this).addClass('on');
            }
        });
        
        $('#goodsshop li').each(function(index){
            var top = $(this).offset().top;
            
            if(top -800 < st){
                $(this).addClass('on');
            }
        });
        
        $('#event li').each(function(){
            var top = $(this).offset().top;
            
            if(top - 800 < st){
                $(this).addClass('on');
            }
        });
    });
});

/* popup */
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };
    
    $('.linebox .todayclose').click(function(){
        setCookie('maindiv','done',1);
        
        $('.popup').fadeOut('fast');
    });
    
    $('.linebox .close').click(function(){
        $('.popup').fadeOut('fast');
    });
    
    cookiedata = document.cookie; 
    if(cookiedata. indexOf('maindiv=done') < 0 ){
        $('.popup').css('display','block');
    }else{
        $('.popup').css('display','none');
    }
});

/* mobile 연결 */
$(document).ready(function(){
     var mobile_keys = new Array('iPhone','iPod','Android','BlackBerry','Windows Phone','Windows CE','LG','MOT','SAMSUNG','SonyEricsson','Nokia');
    
    if(document.URL.match('move_pc_screen')){
        mobile_keys = null; 
    }
    
    for(i in mobile_keys){
        if(navigator.userAgent.match(mobile_keys[i]) != null){
            location.assign('m/index.html');
        }
    }
    
});