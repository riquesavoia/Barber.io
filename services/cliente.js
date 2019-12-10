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
            this._connection.query('SELECT * FROM cliente WHERE nome_usuario = ? AND senha=?', [loginData['nome_usuario'],loginData['senha']], (err, cliente) => {
                if(err) return reject(err);
                if(!cliente.length) return reject('Usuário inválido');
                resolve(cliente[0]);
            })
        });
    }
}

module.exports = ClienteService;