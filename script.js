
$('#cpf').mask('000.000.000-00', {reverse: true});

$('#telefone').mask('(00) 00000-0000');

$('#cep').mask('00000-000');

$.extend($.validator.messages, {
    required: "Por favor, preencha este campo."
});

$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    
});

