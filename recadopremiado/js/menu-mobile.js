$(document).ready(function () {
	$('.nav-mobile__trigger').on('click', function () {
		var toggleText = $('.nav-mobile__trigger').text();
		// $('.nav-mobile').slideToggle(400, 'swing');
		// $('.nav-mobile__trigger').text(toggleText == "Mais" ? "Menos" : "Mais");
		if (toggleText == "Mais") {
			$('.nav-mobile__trigger').text("Menos");
			$('.nav-mobile').css({
				'height': '212px',
				'opacity': '1'
			});
		} else {
			$('.nav-mobile__trigger').text("Mais");
			$('.nav-mobile').css({
				'height': '0',
				'opacity': '0'
			});
		}
	});	
});