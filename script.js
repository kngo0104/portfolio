var previousDiv = "";

$(document).ready(function(){

    $('#aboutMeNav').click(function(){
        $('.active').removeClass('active').addClass(previousDiv);
        $('.skills').fadeOut();
        $('.exp').fadeOut();
        $('.projects').fadeOut();
        $('.resume').fadeOut();
        setTimeout(function(){
            $('.aboutMe').fadeIn()
        }, 500);
    });

    $('#skillsNav').click(function(){
        divFade();
        // $('.active').removeClass('active').addClass(previousDiv);
        setTimeout(function(){
            $('.skills').removeClass('skills').addClass('active');
            $('.active').fadeIn();
        }, 500);
        previousDiv = "skills";
    });

    $('#expNav').click(function(){
        divFade();
        // $('.active').removeClass('active').addClass(previousDiv);
        setTimeout(function(){
            $('.exp').removeClass('exp').addClass('active');
            $('.active').fadeIn();
        }, 500);
        previousDiv = "exp";
    });

    $('#projectsNav').click(function(){
        divFade();
        // $('.active').removeClass('active').addClass(previousDiv);
        setTimeout(function(){
            $('.projects').removeClass('projects').addClass('active');
            $('.active').fadeIn();
        }, 500);
        previousDiv = "projects";
    });

    $('#resumeNav').click(function(){
        divFade();
        // $('.active').removeClass('active').addClass(previousDiv);
        setTimeout(function(){
            $('.resume').removeClass('resume').addClass('active');
            $('.active').fadeIn();
        }, 500);
        previousDiv = "resume";
    });
});

function divFade (){
    $('.active').removeClass('active').addClass(previousDiv);
    $('.aboutMe').fadeOut();
    $('.skills').fadeOut();
    $('.exp').fadeOut();
    $('.projects').fadeOut();
    $('.resume').fadeOut();

}