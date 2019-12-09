function aceitarAgendamento(id) {
    mudarStatusAgendamento(id, 1);
}

function finalizarAgendamento(id) {
    mudarStatusAgendamento(id, 2);
}

function recusarAgendamento(id) {
    mudarStatusAgendamento(id, 3);
}

function mudarStatusAgendamento(id, status) {
    $.ajax({
        url: '/api/agendamento/updateStatus',
        type: 'POST',
        data: {
            id_agendamento: id,
            status: status
        },
        success:function(res){
            if (status == 2) {
                removerAgendamentoProximo(id);
            } else if (status == 3) {
                removerAgendamentoPendente(id);
            } else {
                window.location.reload();
            }
        },
        error:function(res){
            alert('Erro ao atualizar agendamento');
        }
    })
}

function removerAgendamentoProximo(id) {
    $('#' + id).remove();
    if (!$('.proximos-container-fluid').children().length) {
        $('#proximos-titulo').hide();
    }
}

function removerAgendamentoPendente(id) {
    $('#' + id).remove();
    if (!$('.agendamentos-pendentes-container').children().length) {
        $('#pendentes-titulo').hide();
    }
}