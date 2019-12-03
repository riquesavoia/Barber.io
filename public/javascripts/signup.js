$(document).ready(function(){
    $('#nascimentoInputReal').datepicker({
        language: 'pt-BR',
        format: 'yyyy-mm-dd'
    });

    $('#nascimentoInput').datepicker({
        language: 'pt-BR',
        format: 'dd/mm/yyyy'
    }).on('changeDate', function(e){
        $('#nascimentoInputReal').datepicker('update', e.date);
    });

    $('#signup-form').submit(function() {
        cadastrarProfissional($(this).serialize());
        return false;
    });

    $('#pagamentoInput').selectpicker();

    $('#confirmarSenhaInput').change(verificarSenhas);
    $('#senhaInput').change(verificarSenhas);
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

function verificarSenhas() {
    const senha = $('#senhaInput').val();
    const confirmarSenha = $('#confirmarSenhaInput').val();
    if(senha && confirmarSenha) {
        if (senha === confirmarSenha) {
            $('#senha-feedback').hide();
            $('#confirmarSenhaInput').removeClass('is-invalid');
            return;
        }
        $('#confirmarSenhaInput').addClass('is-invalid');
        $('#senha-feedback').show();
    }
}