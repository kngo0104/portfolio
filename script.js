$(document).ready(function(){
    $('.skills').hide();
    $('#aboutMeNav').click(function(){
        $('.skills').fadeOut();
        setTimeout(function(){
            $('.aboutMe').fadeIn()
        }, 500);
    });
    $('#skillsNav').click(function(){
        $('.aboutMe').fadeOut();
        setTimeout(function(){
            $('.skills').fadeIn()
        }, 500);

    });

});