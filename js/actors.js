$(document).ready(function(){
    $('.subcontent .mwrap a.more').focus(function(){
        $(this).parent().addClass('on');
    });
    $('.subcontent .mwrap a.more').blur(function(){
        $(this).parent().removeClass('on');
    });
});