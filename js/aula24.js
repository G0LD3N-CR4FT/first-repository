$(document).ready(function(){

$('p').hide()

// Monitorar o click no botão "read"
$('#read').click(function(e){
    e.preventDefault()
    
    $('p').toggle(1500, function(){
        // Criar uma váriavel para receber o status
        let status = $('#read').attr('data-status')
        // Limpando label do btn
        $('#read').empty()
        // Testando o status 
        if(status == 1){
           $('#read').append('Esconder resumo')
           $('#read').attr('data-status','2')
        }
        else {
           $('#read').append('Ver resumo')
           $('#read').attr('data-status','1')
        }
    })

  })
})