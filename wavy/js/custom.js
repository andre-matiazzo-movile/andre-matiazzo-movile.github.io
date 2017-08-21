$( document ).ready(function() {
  $('#menu__trigger--platform').hover(function () {
    $('#menu__platform').fadeToggle(150);
  });

  $('#menu-show').on('click', function () {
    $('#menu__container').fadeToggle(150);
  });
});