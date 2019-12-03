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

    inserirDadosForm();

    $('#edit-form').submit(function() {
        editarPerfil($(this).serialize());
        return false;
    });

    $('.btn-excluir').click(function() {
        excluirPerfil($('#idProfissional').val());
    });

});

function inserirDadosForm() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    const dataNascimento = new Date(usuario.data_nasc);
    dataNascimento.setHours(dataNascimento.getHours()+5);

    $('#idProfissional').val(usuario.id_profissional);
    $('#emailInput').val(usuario.email);
    $('#sexoInput').val(usuario.sexo);
    $('#nomeInput').val(usuario.nome);
    $('#sobrenomeInput').val(usuario.sobrenome);
    $('#nomeUsuarioInput').attr('value', usuario.nome_usuario);
    $('#nascimentoInput').datepicker('setDate', dataNascimento);
    $('#cpfInput').val(usuario.cpf);
    $('#rgInput').val(usuario.rg);
    $('#telefoneInput').val(usuario.telefone);
    $('#cepInput').val(usuario.cep);
    $('#estadoInput').val(usuario.estado);
    $('#cidadeInput').val(usuario.cidade);
    $('#ruaInput').val(usuario.rua);
    $('#numeroInput').val(usuario.num_res);
    $('#servicoInput').val(usuario.id_servico);
    $('#valorInput').val(usuario.preco_hora);
    $('#descricaoInput').val(usuario.descricao);
    $('#senhaInput').val(usuario.senha);
    $('#confirmarSenhaInput').val(usuario.senha);
}

function editarPerfil(data) {
    $.ajax({
        url: '/api/profissional/update',
        type: 'POST',
        data: data,
        success:function(res){
            sessionStorage.setItem('usuario', JSON.stringify(res));
            $('#modal-sucesso').modal('show');
        },
        error:function(res){
            alert(res.responseJSON.error);
        }
    });
}

function excluirPerfil(id) {
    $.ajax({
        url: '/api/profissional/delete',
        type: 'POST',
        data: {
            id_profissional: id
        },
        success:function(res){
            window.location = '/';
        },
        error:function(res){
            alert(res.responseJSON.error);
        }
    })
}
