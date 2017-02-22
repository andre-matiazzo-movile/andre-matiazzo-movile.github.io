$(document).ready(function() {
	$('#schedule .radio').bind('click', function () {
		if ($('#schedule input').is(':checked')) {
		$('#send-message').fadeToggle();
	}
});
});


// 2. Ao escolher arquivo para importação, mostrar o nome do arquivo abaixo do botão
// 3. Desativar busca ou importação dependendo do que a pessoa escolher. Mostrar mensagem abaixo do item inativo explicando porque ele ficou desse jeito
// 4. Modais de "veja como fazer" e a tooltip do Flash SMS
// 5. Dependendo do que a pessoa escolher ^ mudar o texto explicativo em "Escreva sua mensagem". Os campos podem vir do arquivo ou dos contatos/grupos selecionados
// 6. Se pessoa escrever mensagem com acento, mudar o limite de caracteres para 70
// 7. Se pessoa escrever mais que 160/70 caracteres, dar feedback de quantas mensagens serão cobradas
// 8. Reconhecer onde está o caret no textarea e conseguir adicionar os campos customizados ali. Tentar fazer isso com seleção também. (talvez tenha que mudar para contenteditable)
// 9. Prévia da mensagem fica fixa depois da altura