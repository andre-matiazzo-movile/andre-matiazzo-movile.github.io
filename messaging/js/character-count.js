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
	var text_max = document.getElementById(initial_id).maxLength;
    $('.' + initial_id).html(text_max + ' caracteres restantes');
    $('#' + initial_id).keyup(function() {
    	var text_max = $(this).attr('maxLength');
        var text_length = $(this).val().length;
        var text_remaining = text_max - text_length;
        if (text_remaining == 0) {
        	$('.' + initial_id).css("color","rgba(255,0,80,0.5)");
        	$('.' + initial_id).html('Limite atingido');
        	$(this).css("border-color","rgba(255,0,80,0.5)");
        } else if (text_remaining == 1){
        	$('.' + initial_id).css("color","#a2b7c1");
        	$(this).css("border-color","#a2b7c1");
        	$('.' + initial_id).html(text_remaining + ' caractere restante');
        } else {
        	$('.' + initial_id).css("color","#a2b7c1");
        	$(this).css("border-color","#a2b7c1");
        	$('.' + initial_id).html(text_remaining + ' caracteres restantes');
        }
    });
}