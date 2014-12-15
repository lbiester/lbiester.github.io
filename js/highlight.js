$(document).ready(function() {
	$(window).scroll(function() {
			if (window.pageYOffset < $('div#about').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#home-link').addClass('selected');
			} else if (window.pageYOffset < $('div#skills').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#about-link').addClass('selected');
			} else if (window.pageYOffset < $('div#contact').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#skills-link').addClass('selected');
				if ($(window).width() < 768 && !colorFadedIn) {
					fadeInColor();
				}
			} else {
				$('a.selected').removeClass('selected');
				$('a#contact-link').addClass('selected');
			}
	});
});
