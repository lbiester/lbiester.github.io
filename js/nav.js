$(document).ready(function() {
    $("a#show-links").click(function() {
        $("span.mobile-links").hide();
        $("nav ul").fadeIn("fast");
    });

    $('a.nav-link').click(function() {
        $("span.mobile-links").show();
        $("nav ul").fadeOut("normal");
    });
})
