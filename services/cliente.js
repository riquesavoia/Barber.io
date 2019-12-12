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

    login(loginData) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM cliente WHERE email = ? AND senha=?', [loginData['email'],loginData['senha']], (err, cliente) => {
                if(err) return reject(err);
                if(!cliente.length) return reject('Usuário inválido');
                resolve(cliente[0]);
            })
        });
    }

    insert(cliente) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM cliente WHERE email = ?', cliente['email'], (err, data) => {
                if(err) return reject(err);
                if(data.length) return reject ('Usuário já existe');
                this._connection.query('INSERT INTO cliente SET ?', cliente, (err, clienteInserido) => {
                    if(err) return reject(err);
                    resolve(clienteInserido);
                })
            })
        });
    }
}

module.exports = ClienteService;