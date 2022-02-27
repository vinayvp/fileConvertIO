$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.navbar').addClass('bg-light');
        }
        else {
            $('.navbar').removeClass('transparent bg-light');
        }
    });
});