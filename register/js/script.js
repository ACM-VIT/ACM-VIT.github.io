$(document).ready(function() {
    $('.collapsible').collapsible();
});
var radiovalue = 0;
//$('#radio_button').is(':checked')
$(document).ready(function() {
    
    // $("#first-year-section").prop("checked", true).trigger("click");

    // $("#first-year-section").click(function() {
    //     alert("clicked");
    // });

    function uncheckall(){
        $('#test1,#test2,#test3,#test4').prop('checked', false);
    }
    function swall(){
        swal({
            title: "Select your year First"
        })
        setTimeout(uncheckall, 2000);
        
    }

    $('#test1,#test2,#test3,#test4').click(function(){
        if($('#first-year-section').is(':not(:checked)') && $('#second-year-section').is(':not(:checked)') ) {
            swall(); 
        }   
    });

    



    $('#first-year-section').click(function(){
        $('#tech-hide-for-first').hide();
        $('#management-radio-section').fadeIn();
        $('.tech_options').hide();
        $('.research_options').hide();
        $('.design_options').hide();
        $('.management_options').hide();
        $('.research-hide-in-first').hide();
        $('#test1,#test2,#test3,#test4').prop('checked', false);
    });

    $('#second-year-section').click(function(){
        
        $('#management-radio-section').fadeOut();
        $('#tech-hide-for-first').show();
        $('.tech_options').hide();
        $('.research_options').hide();
        $('.design_options').hide();
        $('.management_options').hide();
        $('.research-hide-in-first').show();
        $('#test1,#test2,#test3,#test4').prop('checked', false);
        
    });

    //////////////////////////////
    function technical(){
        if($('#first-year-section').is(':checked') || $('#second-year-section').is(':checked'))
        {
            $('.tech_options').fadeIn(1500);
            $('.research_options').hide();
            $('.design_options').hide();
            $('.management_options').hide();
        }
    }
    function design(){
        if($('#first-year-section').is(':checked') || $('#second-year-section').is(':checked'))
        {
            $('.tech_options').hide();
            $('.research_options').hide();
            $('.design_options').fadeIn(1500);
            $('.management_options').hide();
        }
    }

    function management(){
        if($('#first-year-section').is(':checked') || $('#second-year-section').is(':checked'))
        {
            $('.tech_options').hide();
            $('.research_options').hide();
            $('.design_options').hide();
            $('.management_options').fadeIn(1500);
        }
    }

    function research(){
         if($('#first-year-section').is(':checked') || $('#second-year-section').is(':checked'))
        {
            $('.tech_options').hide();
            $('.research_options').fadeIn(1500);
            $('.design_options').hide();
            $('.management_options').hide();
        }
    }
    
        $('#tests1').on('click', function() {
            technical();   
        });
        $('#tests2').on('click', function() {
            design();
        });
        $('#tests3').on('click', function() {
            management();
        });
        $('#tests4').on('click', function() {
            research();
        });
    

    ///////////////////////////////
});
$(document).ready(function() {
    $('form').submit(function(event) {
        var year = $('input[name="year-section"]:checked').val();
        var checkboxValues = [];
        $('input[name=subdomain]:checked').map(function() {
            checkboxValues.push($(this).val());
        });
        var input_ids = {
            "test1": "textarea1",
            "test2": "textarea12",
            "test3": "textarea13",
            "test4": "textarea2"
        }
        var checkboxId = $('input[name="domain"]:checked').attr('id');
        var inputId = input_ids[checkboxId];
        var formData = {
            'year': year,
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'regno': $('input[name=regno]').val(),
            'phoneno': $('input[name=phoneno]').val(),
            'domain': $('input[name=domain]:checked').val(),
            'subdomain': checkboxValues,
            'textfield': $("#" + inputId).val()
        };
        $.ajax({
            type: 'POST',
            url: 'https://acmrecruitment.herokuapp.com/submit/form',
            data: formData,
            dataType: 'json',
            encode: true,
            beforeSend: function() {
                $('#loadinggif').show();
                $('.final_submit').hide();
            }
        }).done(function(data) {
            console.log(data);
            $('#loadinggif').hide();
            $('.final_submit').show();
            document.getElementById('mainform').reset();
            swal({
                title: "Thanks for registering!",
                text: "Stay tuned!!",
                timer: 2000,
                showConfirmButton: false,
                imageUrl: "sweetalert-master/example/images/thumbs-up.jpg"
            });
            // window.location.href = "#section3";
            }).catch(function(err) {
            console.log(err);
        });
        event.preventDefault();
    });
});
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});



/* ****


   $('#second-year-section').click(function(){
        $('#mainform').trigger("reset");
        $('#management-radio-section').fadeOut();
        $('.frontend-backend').css('display','none');
        $('#tech-hide-for-first').css('display','block');
        $('#ios').show();
    });

    $('#first-year-section').click(function(){
        $('#myform')[0].reset();
        $('#management-radio-section').fadeIn();
        $('#tech-hide-for-first').css('display','none');

    });

    $('#tests1').on('click', function() {
        $('.tech_options').fadeIn(1500);
        $('.research_options').hide();
        $('.design_options').hide();
        $('.management_options').hide();
        console.log('sauravbhagat');
    });
    $('#tests2').on('click', function() {
        $('.tech_options').hide();
        $('.research_options').hide();
        $('.design_options').fadeIn(1500);
        $('.management_options').hide();
    });
    $('#tests3').on('click', function() {
        $('.tech_options').hide();
        $('.research_options').hide();
        $('.design_options').hide();
        $('.management_options').fadeIn(1500);
    });
    $('#tests4').on('click', function() {
        $('.tech_options').hide();
        $('.research_options').fadeIn(1500);
        $('.design_options').hide();
        $('.management_options').hide();
    });
    $('#tests5').on('click', function() {
        $('.tech_options').hide();
        $('.research_options').hide();
        $('.design_options').hide();
        $('.management_options').hide();
    });

    // to validate if any year is selcted or not before selecting any domain


    $('#test1,#test2,#test3,#test4').click(function(){
        if($('#first-year-section').is(':not(:checked)') || $('#second-year-section').is(':not(:checked)') ) {
            swal({
                title: "Select year First"
            });
        }
        
    });
 **** */