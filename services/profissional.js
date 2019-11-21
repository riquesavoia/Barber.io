class ProfissionalService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM profissional', (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }

}

module.exports = ProfissionalService;