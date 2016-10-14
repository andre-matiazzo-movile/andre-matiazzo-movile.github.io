// Allow only Envio em massa or Envio único to be selected
$('.input .checkbox input').bind('click', function () {
	if ($('.input .radio input').is(':checked')) {
		$('.input .radio input').prop('checked', false);
		$(this).parents('.column__half').animate({opacity: 1}, 15);
	}
	$('.second-column').animate({opacity: 0.4}, 15);
});

$('.input .radio input').bind('click', function () {
	if ($('.input .checkbox input').is(':checked')) {
		$('.input .checkbox input').prop('checked', false);
		$(this).parents('.column__half').animate({opacity: 1}, 15);
	}
	$('.first-column').animate({opacity: 0.4}, 15);
});