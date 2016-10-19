$(document).ready(function () {
	$('.automatic-msg > p').each(function() {
		var paragraphLength = $(this).text().length;
		if (paragraphLength == 159) {
			$(this).next().find('p').text(160 - paragraphLength + " caractere restante");
		} else {
			$(this).next().find('p').text(160 - paragraphLength + " caracteres restantes");
		}
	});	

	$('.automatic-msg__details a').on('click', function () {
		var automaticMessageText = $(this).parents('.automatic-msg').find('> p').text();
		var automaticMessageCounter = $(this).parents('.automatic-msg__details').find('p').text();
		$('#mensagem-texto').text(automaticMessageText);
		//Transfers remaining characters to textarea counter
		$('.mensagem-texto').text(automaticMessageCounter);
		//Closes the sidemodal
		$('body').css('overflow-y', 'auto');
		$('#sidemodal').animate({right: '-480px'}, 300);
		$('.sidemodal__bg').fadeOut();
	});
});
