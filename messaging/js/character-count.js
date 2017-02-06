$(document).ready(function() {
    var n = $(".characterCount").length;
    var IDs = [];
    $('body').find(".characterCount").each(function(){ IDs.push(this.id); });
    var n = n-1;
    while (n >= 0 ) {
      textLengthforAll(IDs[n]);
      n--;
    }

});
function textLengthforAll(initial_id){
    // set the counter when page is loaded
    var text_max = parseInt($('#mensagem-texto').attr('data-length'));
    $('.' + initial_id).html(text_max + ' caracteres restantes');

    //check the counter every keyup
    $('#' + initial_id).on('keyup', function() {
        if(/^[a-zA-Z0-9- ]*$/.test( $(this).val() ) == false) {
            $(this).attr("data-length","70");
        } else {
            $(this).attr("data-length","160");
            1}
        var text_max = parseInt($('#mensagem-texto').attr('data-length'));
        var text_length = $('#mensagem-texto').val().length;
        var text_remaining = text_max - text_length;
        if (text_remaining < 0) {
            amount_msg = Math.ceil(text_length / text_max);
        	$('.' + initial_id).css("color","rgba(255,0,80,0.5)");
        	$('.' + initial_id).html('Limite atingido: serão cobradas '+amount_msg+' mensagens');
            $(this).css("border-color","rgba(255,0,80,0.5)");
        } else if (text_remaining <= 1){
        	$('.' + initial_id).css("color","#a2b7c1");
        	$(this).css("border-color","#a2b7c1");
        	$('.' + initial_id).html(text_remaining + ' caracter restante');
        } else {
        	$('.' + initial_id).css("color","#a2b7c1");
        	$(this).css("border-color","#a2b7c1");
        	$('.' + initial_id).html(text_remaining + ' caracteres restantes');
        }
    });
}