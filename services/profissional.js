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

    insert(profissional) {
        return new Promise((resolve, reject) => {
            this._connection.query('INSERT INTO usuario SET ?', profissional, (err, data) => {
                if(err) return reject(err);
                this._connection.query('INSERT INTO profissional (id_profissional) VALUES (?)', data.insertId, (err, data) => {
                    if(err) return reject(err);
                    resolve(data);
                });
            })
        });
    }
}

module.exports = ProfissionalService;