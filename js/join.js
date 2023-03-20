$(document).ready(function(){
    var youtput = '';
    
    var today = new Date();
    
    var year = today.getFullYear();
    
    for(var i=year;i>=1900;i--){
        youtput += '<option>' + i + '</option>';
    }
    
    $('#joinyear').html(youtput);
    
    var moutput = '';
    
    for(var i=1;i<=12;i++){
        moutput += '<option>' + i + '</option>';
    }
    
    $('#joinmonth').html(moutput);
    
    var doutput = '';
    
    $('#joinyear, #joinmonth').change(function(){
        var y = $('#joinyear').val(); 
        var m = $('#joinmonth').val(); 
        
        var date = [31,28,31,30,31,30,31,31,30,31,30,31];
        
        
        if(y % 4 == 0 && y % 100 != 0 || y % 400 == 0){
           date[1] = 29;
        }
        
        
        doutput = '';
        for(var i=1;i<=date[m-1];i++){
            doutput += '<option>' + i + '</option>';
        }
        
        $('#joindate').html(doutput);
    });
    
    //초기실행 - change이벤트를 문서가 준비하자마자 강제발생
    $('#joinyear, #joinmonth').trigger('change');
});