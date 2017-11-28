$(document).ready(function() {

  var scrollPosition = $(window).scrollTop();
  if (scrollPosition > '1') {
    $("nav").addClass("bg-white bb b--black-10");
    $('.brand img').attr('src', '../../../img/chatclub.svg');
    $('.menu__container a').not('.menu__dropdown a').addClass('black-ns');
    $('.cta-menu').removeClass('dn-ns');
    $('#menu-open span').addClass('bg-black');
  }

  $('.menu__trigger').hover(function () {
    if ( ($(window).width()) > '960') {
      $(this).find('.menu__dropdown').toggle();
    }
  });

  // Open and close mobile menu
  $('#menu-open').on('click', function () {
    $('body').css('overflow-y', 'hidden');
    $('#menu__container').fadeIn(50);
    $(this).hide();
    $('#menu-close').show();
    $('nav').addClass('bg-transparent');
  });

  $('#menu-close').on('click', function () {
    $('body').css('overflow-y', 'auto');
    $('#menu__container').fadeOut(150);
    $(this).hide();
    $('#menu-open').show();
    $('nav').removeClass('bg-transparent');
  });

  //Language dropdown
  $('#lang-trigger').hover(function () {
    if ( ($(window).width()) > '960') {
      $('#menu__lang').toggle();
    }
  });

  // Scroll anchor points
  var $root = $('html, body');
  $('a[href$="#who"], a[href$="#vantagens"], a[href$="#tipos"]' ).click(function () {
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
  $(window).scroll(function(){
    var scrollNow = $(window).scrollTop();
    setTimeout(function(){
      var scrollAfter = $(window).scrollTop();
      setTimeout(function(){
        if (scrollAfter > scrollNow) {
            $("nav").addClass("bg-white bb b--black-10");
            $('.brand img').attr('src', '../../../img/chatclub.svg');
            $('#menu__container a').not('.menu__dropdown a').addClass('black-ns');
            $('#menu-open span').addClass('bg-black');
            $('.has-caret').addClass('caret--black');
            $('.is-external').not('.menu__dropdown .is-external').addClass('external--black');
          // Changes color of menu on top of document
        } else if (scrollAfter == 0) {
          $('.brand img').attr('src', '../../../img/chatclub-wh.svg');
          $("nav").removeClass("bg-white bb b--black-10");
          $('.menu__container a').not('.menu__dropdown a').removeClass('black-ns');
          $('#menu-open span').removeClass('bg-black');
          $('.has-caret').removeClass('caret--black');
          $('.is-external').not('.menu__dropdown .is-external').removeClass('external--black');
        } else {
          return;
        }
      }, 50);
    }, 50);
  });
});