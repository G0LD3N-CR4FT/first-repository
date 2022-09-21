$(document).ready(function(){

    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        success: function(dados){
            $.each(dados, function(indexInArray, valueOfElement){
            var ufs = "<option>"+valueOfElement.sigla+"</option>"
            $("#estado").append(ufs)
            });
        }
    });
$("#estado").change (function(e){
    e.preventDefault();
    $("#cidade").empty();
    var uf = $("#estado").val();

$.ajax({
    type: 'GET',
    dataType: 'JSON',
    url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+uf+"/municipios",
    data: {orderBy: "nome"},
    success: function(dados){
        $.each(dados, function(indexInArray, valueOfElement){
        var cidade = "<option>"+valueOfElement.nome+"</option>"
        $("#cidade").append(cidade)
        });
    }
});
});
});