$(document).ready(function() {
	$('#schedule .radio').on('click', function () {
		if ($('#schedule input').is(':checked')) {
			$('#send-message').fadeToggle();
		}
	});

	$("input[type='file']").on("change", function(){
		$(".how-to").hide();
		$(".file-name").css("display","block");
		$(".file-name span").text($("input[type='file']").val().replace(/^.*\\/, ""));
		// $(".icon-upload").text($(".icon-upload").attr("data-after-chosen")).removeClass("icon-upload").addClass("icon-refresh--gray");
		if (!$(this).val()) {
			$('.file-name').hide();
			activeOption(".search-input");
		} else {
		// $(".search-input").css({
		// 	'opacity' : '0.3',
		// 	'pointer-events' : 'none'
		// });
		deactiveOption(".search-input");
		}
	})

	$(".file-name a").on('click', function(){
		document.getElementById("form-choose-file").reset();
		$(".file-name").hide();
		$(".how-to").show();
		$(".icon-refresh--gray").text($(".icon-refresh--gray").attr("data-before-chosen")).removeClass("icon-refresh--gray").addClass("icon-upload");
		activeOption(".search-input");
	})
	
// Closes a dropdown that is already opened if you click on another one

	$('.input-envio').on('click', function () {
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$('.upper-bar-menu').removeClass('upper-bar-menu--active');
		$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
		$(this).siblings('.dropdown').find("input[type='search']").focus();
	});	

	// Closes the dropdown by clicking out of it
	$(document).on('click', function(toggleDropdown) {
		// If the click on the document is not a .dropdown, an .input or .upper-bar-menu--active, closes all dropdowns
		if (!$(toggleDropdown.target).closest('.dropdown, .input, .input-envio,  .upper-bar-menu--active').length) {
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$('.upper-bar-menu').removeClass('upper-bar-menu--active');
		}
	});

	//Closes opened menu dropdowns if you click on its trigger again
	// $('.upper-bar-menu').on('click', function () {
	// 	$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
	// 	$(this).toggleClass('upper-bar-menu--active');
	// 	$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
	// });

	//Get text from the selection within dropdowns and put it on the respective input
	$('.dropdown li').on('click', function() {
		var data_id = $(this).find("span").attr("data-id");
		var data_origin = $(this).parents(".gruposecontatos").attr("data-origin");
		// console.log(data_origin);
		if ($(this).hasClass("name-selected")) {
			$(this).removeClass("name-selected has-icon-left icon-check accent");
			$("span[data-id='"+data_id+"'][data-origin='"+data_origin+"']").parent().remove();
			// $(".contatos").find("[data-id='"+data_id+"']" && "[data-origin='"+data_origin+"']").parent().remove();
			if ( ($(".remove-item").length) == 0) {
				$('.clear-all').fadeOut();
				activeOption("div.choose-file");
			}
		}
		else {
			$('.contatos').show();
			$('.contatos').append("<li class='bg-medium-accent f7 b accent fl lh-title pa2 mr2 mb2'><span data-id="+data_id+" data-origin="+data_origin+" class='has-icon has-icon-left icon-close-blue remove-item'>"+$(this).find('span').text()+"</span></li>");
			if ( ($(".remove-item").length) > 0) {
				deactiveOption("div.choose-file");
			}
			$(this).addClass("name-selected has-icon-left icon-check accent");
			$('.clear-all').fadeIn();
		}
	});

	$('.contatos').on('click', '.remove-item', function() {
		var data_id = $(this).attr("data-id");
		var data_origin = $(this).attr("data-origin");
		$(".dropdown ."+data_origin).find("span[data-id='"+data_id+"']").parent().removeClass("name-selected has-icon-left icon-check accent");
		$(this).parent().remove();
		if ( ($(".remove-item").length) == 0) {
			activeOption("div.choose-file");
			$('.clear-all').fadeOut();
		}
		
	});

	$('.clear-all').on('click', function(){
		$('.clear-all').fadeOut(400);
		$('.contatos').slideUp(400);
		setTimeout(function(){
			$('.remove-item').parent().remove();
		}, 400);
		$('.name-selected').removeClass("name-selected has-icon-left icon-check accent");
		activeOption("div.choose-file");
	});

	$(document).on('scroll', function(){
		var h = $('.messages').parent().parent().offset().top - $(window).scrollTop();
		if (h <= 0) {
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
				bottomPreviewPosition();
			} else {
				getPreviewPosition();
			}
		} else {
			clearPreviewPosition()
		}
	});

});

// FUNCTIONS

function deactiveOption(el) {
	$(el+" > div").css({
		'opacity' : '0.3',
		'pointer-events' : 'none'
	});
	$(".how-to").slideUp();
	$(el+" .warning").fadeIn();
}

function activeOption(el) {
	$(el+" > div").css({
		'opacity' : '1',
		'pointer-events' : 'auto'
	});
	$(".how-to").slideDown();
	$(el+" .warning").fadeOut();
}

function getPreviewPosition() {
	var left = $(".messages").offset().left;
	$(".messages").css({
		'position' : 'fixed',
		'top' : '90px',
		'left' : left
	});
}

function clearPreviewPosition() {
	$(".messages").css({
		'position' : 'absolute',
		'right' : '0',
		'left' : 'initial',
		'top' : 'initial'
	});
}

function bottomPreviewPosition() {
	var translate = $("#schedule").offset().top - $(window).scrollTop();
	var translate = translate + 40;
	$(".messages").css({
		'position' : 'fixed',
		'top' : translate,
	});
}

function bottomPreviewPosition() {
	var translate = $("#schedule").offset().top - $(window).scrollTop();
	var translate = translate + 40;
	$(".messages").css({
		'position' : 'fixed',
		'top' : translate,
	});
}

function insertAtCaret(areaId, text) {
	var txtarea = document.getElementById(areaId);
	if (!txtarea) { return; }

	var scrollPos = txtarea.scrollTop;
	var strPos = 0;
	var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
		"ff" : (document.selection ? "ie" : false ) );
	if (br == "ie") {
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart ('character', -txtarea.value.length);
		strPos = range.text.length;
	} else if (br == "ff") {
		strPos = txtarea.selectionStart;
	}

	var front = (txtarea.value).substring(0, strPos);
	var back = (txtarea.value).substring(strPos, txtarea.value.length);
	txtarea.value = front + text + back;
	strPos = strPos + text.length;
	if (br == "ie") {
		txtarea.focus();
		var ieRange = document.selection.createRange();
		ieRange.moveStart ('character', -txtarea.value.length);
		ieRange.moveStart ('character', strPos);
		ieRange.moveEnd ('character', 0);
		ieRange.select();
	} else if (br == "ff") {
		txtarea.selectionStart = strPos;
		txtarea.selectionEnd = strPos;
		txtarea.focus();
	}

	txtarea.scrollTop = scrollPos;
}

// DONE:
// 2. Ao escolher arquivo para importação, mostrar o nome do arquivo abaixo do botão
// 3. Desativar busca ou importação dependendo do que a pessoa escolher. Mostrar mensagem abaixo do item inativo explicando porque ele ficou desse jeito

// 6. Se pessoa escrever mensagem com acento, mudar o limite de caracteres para 70
// 7. Se pessoa escrever mais que 160/70 caracteres, dar feedback de quantas mensagens serão cobradas

// TO DO:

// 4. Modais de "veja como fazer" e a tooltip do Flash SMS
// 5. Dependendo do que a pessoa escolher ^ mudar o texto explicativo em "Escreva sua mensagem". Os campos podem vir do arquivo ou dos contatos/grupos selecionados

// 8. Reconhecer onde está o caret no textarea e conseguir adicionar os campos customizados ali. Tentar fazer isso com seleção também. (talvez tenha que mudar para contenteditable)

// 9. Prévia da mensagem fica fixa depois da altura