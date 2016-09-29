var previousDiv = "";

$(document).ready(function(){

    $('#aboutMeNav').click(function(){
        divFade();
        setTimeout(function(){
            $('.aboutMe').fadeIn()
        }, 700);
    });

    $('#skillsNav').click(function(){
        divFade();
        setTimeout(function(){
            $('.skills').addClass('active');
            $('.active').fadeIn();
        }, 700);
        previousDiv = "skills";
    });

    $('#expNav').click(function(){
        divFade();
        setTimeout(function(){
            $('.exp').addClass('active');
            $('.active').fadeIn();
        }, 700);
        previousDiv = "exp";
    });

    $('#projectsNav').click(function(){
        divFade();
        setTimeout(function(){
            $('.projects').addClass('active');
            $('.active').fadeIn();
        }, 700);
        previousDiv = "projects";
    });

    // $('#resumeNav').click(function(){
    //     divFade();
    //     // $('.active').removeClass('active').addClass(previousDiv);
    //     setTimeout(function(){
    //         $('.resume').addClass('active');
    //         $('.active').fadeIn();
    //     }, 700);
    //     previousDiv = "resume";
    // });
});

function divFade (){
    $('.active').fadeOut(400, function(){
       $('.active').removeClass('active');
    });

    $('.aboutMe').fadeOut();


}