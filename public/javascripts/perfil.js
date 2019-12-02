$(document).ready(function(){
    $('#nascimentoInput').datepicker({
        format: 'yyyy-mm-dd' 
    });

    inserirDadosForm();

    $('#edit-form').submit(function() {
        editarPerfil($(this).serialize());
        return false;
    });

    $('.btn-excluir').click(function() {
        excluirPerfil($('#idProfissional').val());
    })
});

function inserirDadosForm() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(usuario);
    $('#idProfissional').val(usuario.id_profissional);
    $('#emailInput').val(usuario.email);
    $('#sexoInput').val(usuario.sexo);
    $('#nomeInput').val(usuario.nome);
    $('#sobrenomeInput').val(usuario.sobrenome);
    $('#nomeUsuarioInput').attr('value', usuario.nome_usuario);
    $('#nascimentoInput').datepicker('update', usuario.data_nasc);
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
            alert('Perfil alterado com sucesso!');
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
