$('.autocomplete').atwho({
  at: "Pr",
  displayTpl: "<li>Primeiro nome</li>",
  data: ["imeiro nome"],
}).atwho({
  at: "Nom",
  displayTpl: "<li>Nome completo</li>",
  data: ["e completo"],
}).atwho({
    at: "Ap",
    displayTpl: "<li>Apelido</li>",
    data: ["elido"]
});

var textarea = $('#mensagem-texto').text()
var primeiroNome = textarea.includes("Primeiro nome");
if (primeiroNome) {
	$(primeiroNome).html("<span>Primeiro nome</span>");
}