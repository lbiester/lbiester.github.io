$(document).ready(function() {
    $('a.scroll').click(function() {
        var target = $($(this).data('div'));
        ga('send', 'event', 'link', 'click', 'nav links' + target);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return true;
    });
});
