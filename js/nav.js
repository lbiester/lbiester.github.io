var mobile;

$(document).ready(function() {
    mobile = $(window).width() <= 768;

    $("a#show-links").click(function() {
        if (mobile) {
            $("span.mobile-links").hide();
            $("nav").addClass("transparent");
            $("nav ul").fadeIn("fast");
        }
    });

    $('a.nav-link').click(function() {
        if (mobile) {
            $("nav ul").fadeOut("normal").promise().then(function() {
                $("span.mobile-links").show();
            });
        }
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $("nav ul").show();
            $("span.mobile-links").hide();
            mobile = false;
        } else {
            $("span.mobile-links").show();
            $("nav ul").hide();
            mobile = true;
        }
    });
})
