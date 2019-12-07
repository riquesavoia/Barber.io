class AvaliacaoService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAllByProfissional(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM avaliacao WHERE id_profissional = ?', id, (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }
}

module.exports = AvaliacaoService;