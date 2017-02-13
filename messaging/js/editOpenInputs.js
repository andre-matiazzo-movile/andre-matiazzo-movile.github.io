$(document).ready(function() {
	$('.input--inline').on('focus click, click', function() {
		$(this).addClass('input--inline--active').next().addClass('label--active accent');
	});
	$('.input--inline').on('blur', function() {
		if (!$(this).val()) {
			$(this).removeClass('input--inline--active').next().removeClass('label--active accent')
		} else {
			$(this).removeClass('input--inline--active').next().removeClass('accent');
		}
	});
});