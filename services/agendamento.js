class AgendamentoService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM agendamento', (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }
}

module.exports = AgendamentoService;