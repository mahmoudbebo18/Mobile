$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".navbar").addClass("navBg");
    } else {
        $(".navbar").removeClass("navBg");
    }
});

$('.fancybox').click(function(e) {
    e.preventDefault();
    $
})

$('.fancybox').click(function(e) {
    e.preventDefault();

    $('body, html').animate({

        scrollTop: $('.about').offset().top - $('.navbar').innerHeight()
    }, 500);

});