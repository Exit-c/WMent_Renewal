$(document).ready(function(){
    $().UItoTop({ easingType:'easeOutQuart'});
});

$(document).ready(function(){
    var subbg = $('<div class="subbg"></div>')
    $('header').append(subbg);
    $('.subnav, .subbg').slideUp(0);
    
    $('header').hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    });
    
    $('.gnb').hover(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
    },function(){
        $('.subnav, .subbg').stop().slideUp('fast');
    });  
    
    $('header h1 a').focus(function(){
        $('header').removeClass('active');
        $('header').addClass('active');
    });
    
    $('header .gnb > ul > li> a').focus(function(){
        $('.subnav, .subbg').stop().slideDown('fast');
    });
    
    $('header .last li a').blur(function(){
        $('.subnav, .subbg').stop().slideUp('fast');
    });
    
    $('header .tnav .join a').blur(function(){
        $('header').removeClass('active');
    });
    
});

$(document).ready(function(){
   $(window).scroll(function(){
       var top = $(window).scrollTop();
       
       if( top > 0 ){
           $('header').addClass('on');
       }else{
           $('header').removeClass('on');
       }
   });
    
});

$(document).ready(function(){
    $('.fnav .iframe').colorbox({
        iframe: true,
        width: 740,
        height: 400,
        scrolling: false,
        onOpen: function(){
            $('html').css('overflow','hidden');
        },
        onClosed: function(){
            $('html').css('overflow','visible');
        }
    })
});

$(document).ready(function(){
    $('.language a').click(function(){
        alert('준비중입니다.');
    });
});