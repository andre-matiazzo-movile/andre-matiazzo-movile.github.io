$( document ).ready(function() {
  $('#menu__trigger--platform').hover(function () {
    if ( ($(window).width()) > '960') {
      $('#menu__platform').fadeToggle(150);
    }
  });

  // Open and close mobile menu
  $('#menu-open').on('click', function () {
    $('#menu__container').fadeIn(150);
    $(this).hide();
    $('#menu-close').show();
  });

  $('#menu-close').on('click', function () {
    $('#menu__container').fadeOut(150);
    $(this).hide();
    $('#menu-open').show();
  });

  // Scroll anchor points
  var $root = $('html, body');
  $('a[href$="#who"]').click(function () {
    $root.animate({
      scrollTop:$($.attr(this,'href')).offset().top
    }, 500);
    return false;
  });

  // Accordions
  $('.accordion h3').on('click', function() {
    $('.accordion h3').removeClass('black');
    $('.accordion h3').addClass('gray');
    $('.accordion p').slideUp();
    $(this).parent().find('p').slideToggle();
    $(this).removeClass('gray');
    $(this).addClass('black');
    $('.sms_example').hide();
    if ($(this).is('#sms_trigger--corp')) {
      $('.sms_example--corp').fadeIn(150);
    } else if ($(this).is('#sms_trigger--mkt')) {
      $('.sms_example--mkt').fadeIn(150);
    } else if ($(this).is('#sms_trigger--conc')) {
      $('.sms_example--conc').fadeIn(150);
    } else if ($(this).is('#sms_trigger--flash')) {
      $('.sms_example--flash').fadeIn(150);
    }
  });

  // Menu is fixed after scroll
  // if (($(window).width()) > '960') {
  //   $('nav').before($('nav').clone().addClass('animateMenu'));
  //   $(window).on("scroll", function () {
  //     $("body").toggleClass("down", ($(window).scrollTop() > 300));
  //     $('.animateMenu').addClass('bg-white bb b--black-10');
  //     $('.animateMenu .brand img').attr('src', '../../img/logo.svg');
  //     $('.animateMenu #menu__container a').not('#menu__platform a').addClass('black-ns');
  //     $('.animateMenu .cta-menu').removeClass('dn-ns');
  //   });
  // } else {
  //   $('nav').removeClass('bg-white bb b--black-10');
  //   $('.brand img').attr('src', '../../img/logo-branco.svg');
  //   $('#menu__container a').removeClass('black-ns');
  //   $('.cta-menu').addClass('dn-ns');
  // }



      $(window).scroll(function(){
        var sticky = $('nav');
        scroll = $(window).scrollTop();
        sticky.css('top', '-78px');

        if (($(window).width()) > '960' && scroll >= 150) {
          sticky.addClass('fixed bg-white bb b--black-10');
          sticky.animate({top: 0}, 500);
          $('.brand img').attr('src', '../../img/logo.svg');
          $('#menu__container a').not('#menu__platform a').addClass('black-ns');
          $('.cta-menu').removeClass('dn-ns');
        } else {
          $(sticky).removeClass('fixed bg-white bb b--black-10');
          // $(sticky).animate({top: '-156'}, 500);
          $('.brand img').attr('src', '../../img/logo-branco.svg');
          $('#menu__container a').removeClass('black-ns');
          $('.cta-menu').addClass('dn-ns');
        }
      });
    });