$(document).ready(function() {
	$("textarea").keyup(function(){
		var text = $("textarea").val();
		$(".phone-preview p").text(text);
		if ($('.speak-bubble p').text() == "") {
			$('.speak-bubble p').text("Digite sua mensagem ao lado e veja como funciona");
		}
	})
});