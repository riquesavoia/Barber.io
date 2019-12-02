$(document).ready(function(){
    $('#nascimentoInput').datepicker({
        format: 'yyyy-mm-dd' 
    });

    $('#signup-form').submit(function() {
        cadastrarProfissional($(this).serialize());
        return false;
    });

    $('#pagamentoInput').selectpicker();
});

function cadastrarProfissional(data) {
    $.ajax({
        url: '/api/profissional/insert',
        type: 'POST',
        data: data,
        success:function(res){
            alert('Perfil cadastrado com sucesso!');
            window.location = '/';
        },
        error:function(res){
            alert(res.responseJSON.error);
        }
    })
}