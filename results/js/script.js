 
$(document).ready(function(){
	$(".button-collapse").sideNav();
	

	$('.reg_text').css({'color':'white','text-align':'center','font-weight':'bold'});

	$(".regno").focus(function(){
        $(".reg_text").css({'color':'#424242','padding-bottom':'20px !important'});
    });
    $(".regno").blur(function(){
        $(".reg_text").css({'color':'white','text-align':'center','font-weight':'bold'});
    });


    //form-validation

    $('.sub_btn').on('click', function(e) {
		e.preventDefault();
		var str = $('#regno').val();
		var patt = /^([0-9]{2})([a-zA-Z]{3})([0-9]{4})$/i;
		var reg_result = patt.test(str);
		if(!reg_result)
    	{
    		alert('Registration number is not valid');
    		return false;
    	}

    });

});
 