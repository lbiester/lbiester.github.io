$(document).ready(function() {
	$(window).scroll(function() {
			if (window.pageYOffset < $('div#about').offset().top - 5) {
				$('a.selected').removeClass('selected');
				$('a#home-link').addClass('selected');
			} else if (window.pageYOffset < $('div#skills').offset().top - 5) {
				$('a.selected').removeClass('selected');
				$('a#about-link').addClass('selected');
			} else if (window.pageYOffset < $('div#education').offset().top - 5) {
				$('a.selected').removeClass('selected');
				$('a#skills-link').addClass('selected');
				if ($(window).width() < 768 && !colorFadedIn) {
					fadeInColor();
				}
			} else if (window.pageYOffset < $('div#contact').offset().top - 5) {
				$('a.selected').removeClass('selected');
				$('a#education-link').addClass('selected');
			}
			// allows contact to be highlighted when the user is (approximately)
			// at the bottom of the page
			if ($(window).scrollTop() + $(window).height() > getDocHeight() - 10) {
				$('a.selected').removeClass('selected');
				$('a#contact-link').addClass('selected');
			}
	});
});

// thanks to http://stackoverflow.com/questions/3898130/how-to-check-if-a-user-has-scrolled-to-the-bottom
function getDocHeight() {
	var D = document;
	return Math.max(
		D.body.scrollHeight, D.documentElement.scrollHeight,
		D.body.offsetHeight, D.documentElement.offsetHeight,
		D.body.clientHeight, D.documentElement.clientHeight);
}
