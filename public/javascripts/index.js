$(document).ready(function(){
    $('#login-form').submit(function() {
        logarProfissional($(this).serialize());

        return false;
    });
})

function logarProfissional(data) {
    $.ajax({
        url: '/api/profissional/login',
        type: 'POST',
        data: data,
        success:function(res){
            sessionStorage.setItem('usuario', JSON.stringify(res));
            document.cookie = "id_profissional=" + res.id_profissional;
            window.location = "/agendamentos";
        },
        error:function(res){
            $('.invalid-user').text('Usuário inválido');
        }
    })
}