class PagamentoService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM pagamento ORDER BY nome', (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }
}

module.exports = PagamentoService;