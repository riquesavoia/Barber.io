class ClienteService {
    constructor(connection) {
        this._connection = connection;
    }

    selectAll() {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM cliente', (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }
}

module.exports = ClienteService;