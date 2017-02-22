
$(document).ready(function() {

	// INLINE DROPDOWNs
	// gives a min-width for every inline dropdown based on the longest content inside
	var n = $(".dropdown-item-box").length;
	$(document).find(".dropdown-item-box").each(function(){
		var w = $(this).width();
		var w2 = Math.round(w);
		var w2 = w2 + 18;
		$(this).parents(".has-dropdown").find(".view-box-close").not('.view-box-close.input--inline').css("min-width", w2+"px");
		$(this).children(".insert-criteria").not('.insert-criteria.input--inline').css("min-width", w2+"px");
	});
	$(".view-box-open").hide();
	$(".view-box-open").removeClass("o-0");

	// when clicked on the dropdown word, it opens the full box
	$(".view-box-close").on('click', function() {
		$(this).next(".view-box-open").fadeIn(15);
	});

	// when an option is selected on the inline dropdown, the full box fades and the option becomes blue
	$(".view-criteria").on('click', function() {
		var text = $(this).text();
		$(this).parents(".has-dropdown").find(".insert-criteria").text(text);
		$(this).parent().children(".view-criteria").css("color","#37474F")
		$(this).css("color","#84ADFF")
		$(".view-box-open").hide();
	});

	// The full inline dropdown closes when you click anywhere but on it
	$(document).mouseup(function (e) {
		var target = $(".view-box-open");
		    if (!target.is(e.target) // if the target of the click isn't the target...
		        && target.has(e.target).length === 0) // ... nor a descendant of the target
		    {
		    	target.fadeOut();
		    }
		});


	// BOX DROPDOWNS

	// Closes a dropdown that is already opened if you click on another one
	$('.input, .input-envio').on('click', function (activateDropdown) {
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$('.upper-bar-menu').removeClass('upper-bar-menu--active');
		$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
		$(this).siblings('.dropdown').find("input[type='search']").focus();
		var valueContent = $(this).siblings('.dropdown').find('input').val();
		if (valueContent.length != 0) {
			// console.log('sdfsdf');
			$(this).siblings('.dropdown').find('.input--clear').show();
		} else {
			$(this).siblings('.dropdown').find('.input--clear').hide();
		}
	});

		// Closes the dropdown by clicking out of it
		$(document).on('click', function(toggleDropdown) {
			// If the click on the document is not a .dropdown, an .input or .upper-bar-menu--active, closes all dropdowns
			if (!$(toggleDropdown.target).closest('.dropdown, .input, .input--inline--dropdown, .input-envio, .upper-bar-menu--active').length) {
				$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
				$('.upper-bar-menu').removeClass('upper-bar-menu--active');
				$('.input--inline--dropdown').removeClass('input--inline--active');
				$('.input--inline--dropdown').siblings('label').removeClass('accent');
				$('.input--inline').removeClass('input--inline--active');
			}
		});

		//Closes opened menu dropdowns if you click on its trigger again
		$('.upper-bar-menu').on('click', function () {
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$(this).toggleClass('upper-bar-menu--active');
			$(this).parent().find('.dropdown').toggleClass('dropdown--active').animate({opacity: 1}, 15);
		})

	//Get text from the selection within dropdowns and put it on the respective input
	$('.dropdown li').not('.dropdown li.search__subheading, .input-inside-list, .dropdown--multiple-lists li').on('click', function() {
		var textFromDropdown = $(this).find('span').text();
		$(this).parents('.dropdown').siblings('.input').find('span').text(textFromDropdown);
		$(this).parents('.dropdown').siblings('.input').val(textFromDropdown);
		$(this).parents('.dropdown').find('input').val('');
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$('.input--inline').next().removeClass('accent');
		$('.input--inline').removeClass('input--inline--active');
	});

	$('.input--done').on('click', function() {
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
	})

	//Shows add button "inside" input when you start typing on it
	$('.dropdown input').on('keyup', function() {
		if ($(this).val()) {
			$(this).siblings('.input--create').show();
		} else {
			$(this).siblings('.input--create').hide();
		}
	});

	//Clicking on add button, gets value from the input inside dropdown an puts on the input outside of it
	$('.dropdown .input--create').on('click', function() {
		var textFromInput = $(this).siblings('input').val();
		$(this).parents('.dropdown').siblings('.input').find('span').text(textFromInput);
		$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
		$(this).hide();
	});

	//Clear dropdown's input value
	$('.dropdown .input--clear').on('click', function () {
		$(this).siblings('input').val('').focus();
		$(this).parents('.dropdown').siblings('.input').find('span').html('&nbsp;')
		$(this).hide();
;	});


	//Specific for inputs inside dropdowns
	$('.input-inside-list button').on('click', function() {
		if ($(this).parents('.input-inside-list').find('input').val().length > 0) {
			var inputValue = $(this).parents('.input-inside-list').find('input').val();
			$('.input-inside-list').parents('.dropdown').siblings('.input').find('span').text(inputValue);
			$('.dropdown').removeClass('dropdown--active').animate({opacity: 0}, 15);
			$('.input--inline').removeClass('input--inline--active');
		}
	});

	// Dropdown with checkbox inside it
	$('.dropdown-checkbox').on('click', function() {
		var length = $(this).parents(".dropdown-item-box").find(".dropdown-checkbox:checked").length;
		var parent = $(this).parents(".dropdown-item-box");
		var empty_text = $(this).parents(".dropdown-item-box").attr("data-empty-text");
		if (length == 0) {
			if (parent.is(".dropdown--allows-empty")) {
				console.log(this);
				$(this).parents(".has-dropdown").find(".insert-criteria span").text(empty_text);
			} else {
				$(this).prop('checked', true);
			}
		} else {
			var selected = $('.dropdown-checkbox:checked').map(function() {
				return this.value;
			}).get().join(', ');
			$(this).parents(".has-dropdown").find(".insert-criteria span").text(selected);
		}
	});


	// Inline inputs on focus
	$('.input--inline').on('focus click, click', function() {
		$(this).addClass('input--inline--active');
		$(this).next().addClass('label--active accent');
	});

	// Inline inputs off focus
	$('.input--inline').on('blur', function() {
		if (!$(this).val()) {
			$(this).removeClass('input--inline--active');
			$(this).next().removeClass('accent');
			$(this).not('textarea').next().removeClass('label--active');
		} else {
			$(this).next().removeClass('accent');
			// $(this).removeClass('input--inline--active');
		}
	});

	//Edit created inputs
	$('.input--edit, .input--cancel').on('click', function () {
		$(this).parents('.inputs-infos').toggleClass('inputs-infos--active');
		if ($(this).hasClass('cta')) {
			// $(this).removeClass('input--edit').addClass('input--confirm')
			// $(this).find('span').removeClass('icon-edit--blue').addClass('icon-check').text('salvar');
			$(this).hide();
			$(this).siblings('.cta.input--confirm').show();
			$(this).siblings('.cta.input--confirm').show();
			$(this).siblings('.input--blacklist').hide();
		}
	});

	//Cancel edition on inputs
	$('.input--cancel').on('click', function() {
		$(this).parents('.inputs-infos').find('input').each(function () {
			var originalInputText = $(this).siblings('p.input--disabled').text();
			$(this).val(originalInputText);
		});
		$(this).siblings('.input--edit, .input--blacklist').show();
	});

	//Save edition on inputs
	$('.input--confirm').on('click', function() {
		// Get texts from inputs
		$(this).parents('.inputs-infos').find('input').each(function () {
			$(this).siblings('p.input--disabled').text($(this).val());
		});
		// Get texts from textarea
		$(this).parents('.inputs-infos').find('textarea').each(function () {
			$(this).siblings('p.input--disabled').text($(this).val());
		});		
		// Get texts from dropdowns
		$(this).parents('.inputs-infos').find('.input--inline--dropdown').each(function () {
			$(this).find('p.input--disabled').text($(this).find('.input--inline').text());
		});	
		// Confirm saving and return to original buttons
		$(this).parents('.inputs-infos').toggleClass('inputs-infos--active');
		if ($(this).hasClass('cta')) {
			$(this).siblings('.input--saved').show()
			$(this).hide();
			setTimeout(function(){
				$('.input--confirm').siblings('.input--edit, .input--blacklist').show();
				$('.input--confirm').siblings('.input--saved').hide();
			}, 2000);
		}

	});

	//Add existing contact to Blacklist
	$('.icon-blacklist').on('click', function () {
		$(this).parent().css('outline', 'none');
		$('.contact-name').toggleClass('contact--blacklist');
		if ($('.contact-name').hasClass('contact--blacklist')) {
			$(this).text('remover da blacklist');
		} else {
			$(this).text('inserir na blacklist');
		}
	});

	//Asks for confirmation on input delete
	$('.input--delete').on('click', function() {
		$('body').css('overflow-y', 'hidden');
		$('.modal').show();
		// For deleting inputs or cards
		$(this).parents('.inputs-infos, .card-container').addClass("deletable");
		setTimeout(function(){
			$('.modal--delete').css("opacity","1");
		}, 400);
	});

	// Confirm deletions
	$('.input--yes-delete').on('click', function(){
		setTimeout(function(){
			$('.deletable').slideUp();
			setTimeout(function(){
				$('.deletable').remove();
			}, 400);
		}, 400);
	});

	// Checks if input elements are filled so labels start already active
	$('.input--inline').each(function () {
		if ($(this).val()) {
			$(this).next('label').addClass('label--active');
		}
	});



});