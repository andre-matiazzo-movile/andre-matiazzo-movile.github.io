$( document ).ready(function() {
  $('#menu__trigger--platform').hover(function () {
    if ( ($(window).width()) > '479') {
      $('#menu__platform').fadeToggle(150);
    }
  });

  $('#menu-open').on('click', function () {
    $('#menu__container').fadeToggle(150);
  });
});