class AvaliacaoService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAllByProfissional(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT av.*, c.nome as nome_cliente, c.sobrenome as sobrenome_cliente FROM avaliacao av INNER JOIN cliente c on av.id_cliente = c.id_cliente WHERE id_profissional = ?', id, (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }
}

module.exports = AvaliacaoService;