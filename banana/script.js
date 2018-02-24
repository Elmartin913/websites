$(document).ready(function () {
    $('#toggle-btn').click(function () {
        $('.nav-links').slideToggle(3000);
    })
    //accordion
    $("#accordion").accordion({
        animate: 1000
    });
    //progress-barss
    $("#p-bar-1").progressbar({
        value: 37
    });
    $("#p-bar-2").progressbar({
        value: 70
    });
    $("#p-bar-3").progressbar({
        value: 60
    });
    $("#p-bar-4").progressbar({
        value: 80
    });
});

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $('#nav').addClass('new-nav');
    } else {
        $('#nav').removeClass('new-nav');
    }
})

$('nav a').click(function (link) {
    link.preventDefault();

    let target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).ofset().top
    }, 'slow')
})
