$(document).ready(function(){

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: url,
        success: function(dados){
            $('#ufs').val(dados.nome)
        }
    })
$('#estado').on('change', function(e){
    e.preventDefault();

})

})