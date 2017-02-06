$(document).ready(function() {
	$('#schedule .radio').bind('click', function () {
		if ($('#schedule input').is(':checked')) {
			$('#send-message').fadeToggle();
		}
	});

	$("input[type='file']").bind("change", function(){
		$(".how-to").hide();
		$(".file-name").css("display","block");
		$(".file-name span").text($("input[type='file']").val().replace(/^.*\\/, ""));
		$(".icon-upload").text($(".icon-upload").attr("data-after-chosen")).removeClass("icon-upload").addClass("icon-refresh--gray");
		$(".search-input").css({
			'opacity' : '0.3',
			'pointer-events' : 'none'
		});
	})

	$(".file-name a").bind('click', function(){
		document.getElementById("form-choose-file").reset();
		$(".file-name").hide();
		$(".how-to").show();
		$(".icon-refresh--gray").text($(".icon-refresh--gray").attr("data-before-chosen")).removeClass("icon-refresh--gray").addClass("icon-upload");
		$(".search-input").css({
			'opacity' : '1',
			'pointer-events' : 'auto'
		});
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
		$('.upper-bar-menu').on('click', function () {
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$(this).toggleClass('upper-bar-menu--active');
			$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
		})

	//Get text from the selection within dropdowns and put it on the respective input
	$('.dropdown li').not('.dropdown li.search__subheading, .outro-genero').on('click', function() {
		// var textFromDropdown = $(this).find('span').text();
		// $('.contatos').append("<div class='dib cb file-name bg-medium-accent pa2 mr2 mb2 mt2'><a class='has-icon-left icon-close-blue remove-item mb4'></a><span class='f7 accent b'>"+$(this).find('span').text()+"</span>");
		$('.contatos').append("<li class='bg-medium-accent f7 b accent fl lh-title pa2 mr2 mb2'><span class='has-icon has-icon-left icon-close-blue remove-item'>"+$(this).find('span').text()+"</span></li>");
		console.log("oie");
		if ( ($(".remove-item").length) > 0) {
			$("div.choose-file").css({
				'opacity' : '0.3',
				'pointer-events' : 'none'
			});
		}
	});

	$('.contatos').on('click', '.remove-item', function() {
		$(this).parent().fadeOut().remove();
		if ( ($(".remove-item").length) == 0) {
			$("div.choose-file").css({
				'opacity' : '1',
				'pointer-events' : 'auto'
			});
		}
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

	// $(document).on('scroll', function(){
	//    if($(window).scrollTop() + $(window).height() == $(document).height()) {
	//    	bottomPreviewPosition();
	//    } else {
	//    	// getPreviewPosition()
	//    }
	// });

});

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