$(document).ready(function(){
   $('.collapsible').collapsible();

 });


 var radiovalue = 0;

 $(document).ready(function() {
   $('#tests1').on('click',function() {

     $('.tech_options').fadeIn(1500);
     $('.research_options').hide();
     $('.design_options').hide();
     $('.management_options').hide();
     console.log('sauravbhagat');
   });
   $('#tests2').on('click',function() {
     $('.tech_options').hide();
     $('.research_options').hide();
     $('.design_options').fadeIn(1500);
     $('.management_options').hide();
   });
   $('#tests3').on('click',function() {
     $('.tech_options').hide();
     $('.research_options').hide();
     $('.design_options').hide();
     $('.management_options').fadeIn(1500);
   });
   $('#tests4').on('click',function() {
     $('.tech_options').hide();
     $('.research_options').fadeIn(1500);
     $('.design_options').hide();
     $('.management_options').hide();
   });
 });






 $(document).ready(function() {
    $('form').submit(function(event) {


        var checkboxValues = [];
        $('input[name=subdomain]:checked').map(function() {
              checkboxValues.push($(this).val());
            });
        var formData = {

            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'regno'             : $('input[name=regno]').val(),
            'phoneno'           : $('input[name=phoneno]').val(),
            'domain'            : $('input[name=domain]:checked').val(),
            'subdomain'         : checkboxValues,

            'textfield'         :$('input[name=textfield]').val()

        };

        $.ajax({
            type        : 'POST',
            url         : 'https://acmrecruitment.herokuapp.com/submit/form',
            data        : formData,
            dataType    : 'json',
            encode          : true,
            beforeSend : function(){
              $('#loadinggif').show();
              $('.final_submit').hide();
            }
            // success: function(result) {
            //   console.log("Acm-vit");
            // }
        })
        .done(function(data) {
              console.log(data);
              $('#loadinggif').hide();
              $('.final_submit').show();
              swal({
                title: "Thanks for registering!",
                text: "Stay tuned!!",
                timer: 2000,
                showConfirmButton: false,
                imageUrl: "sweetalert-master/example/images/thumbs-up.jpg"

              });

        }).catch(function(err){
          console.log(err);
        })
        ;

        event.preventDefault();
    });

});
