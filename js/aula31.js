$(document).ready(function(){

$('#button').click(function(e){
    e.preventDefault();

    let cep = $('#CEP').val()

    let url = `https://viacep.com.br/ws/${cep}/json/`

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: url,
        success: function(dados){
            $('#LOGRADOURO').val(dados.logradouro)
            $('#BAIRRO').val(dados.bairro)
            $('#LOCALIDADE').val(dados.localidade)
            $('#UF').val(dados.uf)
        }
    })
})
})