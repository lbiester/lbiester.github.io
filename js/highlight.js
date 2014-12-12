$(document).ready(function() {
	$(window).scroll(function() {
			if (window.pageYOffset < $('div#about').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#home-link').addClass('selected');
			} else if (window.pageYOffset < $('div#contact').offset().top) {
				$('a.selected').removeClass('selected');
				$('a#about-link').addClass('selected');
			} else {
				$('a.selected').removeClass('selected');
				$('a#contact-link').addClass('selected');
			}
	});
});
