$(document).ready(function() {
    $('a.nav-link').click(function() {
        var target = $($(this).attr('data-div'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return true;
    });
});
