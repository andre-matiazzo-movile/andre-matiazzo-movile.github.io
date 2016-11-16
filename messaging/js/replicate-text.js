$(document).ready(function() {
	$("#mensagem-texto").keyup(function(){
		phonePreview();
	});
	$('.atwho-view').click(function(){
		phonePreview();
	});
	$('.automatic-msg__details a').click(function(){
		phonePreview();
	});
	function phonePreview() {
		var text = $("#mensagem-texto").text();
		$(".phone-preview p").text(text);
		if ($('.speak-bubble p').text() == "") {
			$('.speak-bubble p').text("Digite sua mensagem ao lado e veja como funciona");
		} else if ($('.speak-bubble p').text().length > 160) {
			var textTotal = $('.phone-preview p').text();
			var textReal = textTotal.substring(0, 160);
			$(".phone-preview p").text(textReal);
		}
	}
});