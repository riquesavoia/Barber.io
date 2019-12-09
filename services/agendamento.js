class AgendamentoService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT ag.*, c.nome as nome_cliente, c.sobrenome sobrenome_cliente FROM agendamento ag INNER JOIN cliente c ON ag.cod_cliente = c.id_cliente', (err, agendamentos) => {
                if(err) return reject(err);
                resolve(agendamentos);
            });
        });
    }

    updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            this._connection.query('UPDATE agendamento SET status = ? WHERE id_agend = ?', [status, id], (err, data) => {
                if(err) return reject(err);
                resolve(data);
            });
        });
    }
}

module.exports = AgendamentoService;