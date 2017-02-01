$(document).ready(function() {
	$('#schedule .radio').bind('click', function () {
		if ($('#schedule input').is(':checked')) {
			$('#send-message').fadeToggle();
		}
	});

	$("input[type='file']").bind("change", function(){
		$(".how-to").hide();
		$(".file-name").show().text($("input[type='file']").val().replace(/^.*\\/, ""));
		$(".icon-upload").text($(".icon-upload").attr("data-after-chosen"));
		$(".search-input").css({
			'opacity' : '0.3',
			'pointer-events' : 'none'
		});
	})

	$(".file-name").bind('click', function(){
		document.getElementById("form-choose-file").reset();
		$(".file-name").hide();
		$(".how-to").show();
		var oldLabel = $(".icon-upload").attr("data-before-chosen");
		$(".icon-upload").text(oldLabel);
		$(".search-input").css({
			'opacity' : '1',
			'pointer-events' : 'auto'
		});
	})
	
});

// DONE:
// 2. Ao escolher arquivo para importação, mostrar o nome do arquivo abaixo do botão

// TO DO:
// 3. Desativar busca ou importação dependendo do que a pessoa escolher. Mostrar mensagem abaixo do item inativo explicando porque ele ficou desse jeito
// 4. Modais de "veja como fazer" e a tooltip do Flash SMS
// 5. Dependendo do que a pessoa escolher ^ mudar o texto explicativo em "Escreva sua mensagem". Os campos podem vir do arquivo ou dos contatos/grupos selecionados
// 6. Se pessoa escrever mensagem com acento, mudar o limite de caracteres para 70
// 7. Se pessoa escrever mais que 160/70 caracteres, dar feedback de quantas mensagens serão cobradas
// 8. Reconhecer onde está o caret no textarea e conseguir adicionar os campos customizados ali. Tentar fazer isso com seleção também. (talvez tenha que mudar para contenteditable)
// 9. Prévia da mensagem fica fixa depois da altura