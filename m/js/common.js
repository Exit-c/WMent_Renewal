/* panel */
$(document).ready(function(){
    $('.subnav').slideUp(0);
    
    var w = $('.panel').width();
    
    $('.panel').css('left', -w);
    
    $('header > span > a').click(function(){
        $('.panel').stop().animate({
            left: 0
        },0,function(){
            $('html, body').css({
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'fixed'
            });
        });
    });
    $('.panel > span > a').click(function(){
        w = $('.panel').width();
        
        $('.panel').stop().animate({
            left: -w
        },0,function(){
            $('html, body').css({
                width: '100%',
                height: 'auto',
                overflow: 'auto',
                position: 'static'
            });
        });
        $('.gnb > li > a').removeClass('on');
        $('.subnav').slideUp(0);
    });
    $('.gnb > li > a').click(function(){
        $(this).children().slideUp('fast');
        
        $('.gnb > li > a').removeClass('on');
        $(this).toggleClass('on');
        
        var is = $(this).next().is(':hidden');
        
        if(is){
            $('.subnav').slideUp(0);
            $(this).next().slideDown('fast');
        }else{
            $('.gnb > li > a').removeClass('on');
            $(this).next().slideUp('fast');
        }
    });
    
    $(window).resize(function(){
        $('.panel > span > a').trigger('click');
    });
});

/* toTop*/
$(document).ready(function(){
    $().UItoTop({ easingType:'easeOutQuart'});
});