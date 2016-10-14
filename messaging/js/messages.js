$(document).ready(function () {
	$('.automatic-msg > p').each(function() {
		var paragraphLength = $(this).text().length;
		if (paragraphLength == 159) {
			$(this).next().find('p').text(160 - paragraphLength + " caractere restante");
		} else {
			$(this).next().find('p').text(160 - paragraphLength + " caracteres restantes");
		}
	});

	

	// $('#mensagem-texto').keyup(function(e){
	// 	if (e.keyCode == 8) {
	// 		alert('backspace trapped');
	// 	}
	// });
});
