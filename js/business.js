$(document).ready(function(){
    /*$('.subcontent > .mwrap > div').each(function(index){
        var top = $(this).offset().top;
        
        $(this).children().html(function(index,text){
            return text + ' : ' + top;
        });
    });*/
    
    $('.subcontent > .mwrap > .time01 > img').addClass('on');
    
    $(window).scroll(function(){
        var st = $(window).scrollTop();
        
        $('.subcontent > .mwrap > div').each(function(index){
            var divTop = $(this).offset().top;
            
            if(divTop - 700 < st){
                $(this).children().addClass('on');
            }
        });
    });
});