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

    selectByUsername(username) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM profissional WHERE nome_usuario = ?', username, (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }

    selectById(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM profissional WHERE id_profissional = ?', id, (err, data) => {
                if(err) return reject(err);
                resolve(data[0]);
            })
        });
    }

    selectAllByCategoria(idCategoria) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM profissional p INNER JOIN servico s ON p.id_servico = s.id_servico AND s.id_categoria = ?', idCategoria, (err, data) => {
                if(err) return reject(err);
                resolve(data[0]);
            })
        });
    }

    insert(profissional) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM profissional WHERE nome_usuario = ?', profissional['nome_usuario'], (err, data) => {
                if(err) return reject(err);
                if(data.length) return reject ('Usuário já existe');
                let newProfissional = {
                    nome: profissional.nome,
                    sobrenome: profissional.email,
                    email: profissional.email,
                    nome_usuario: profissional.nome_usuario,
                    senha: profissional.senha,
                    rg: profissional.rg,
                    cpf: profissional.cpf,
                    telefone: profissional.telefone,
                    data_nasc: profissional.data_nasc,
                    sexo: profissional.sexo,
                    cep: profissional.cep,
                    estado: profissional.estado,
                    cidade: profissional.cidade,
                    rua: profissional.rua,
                    num_res: profissional.num_res,
                    id_servico: profissional.id_servico,
                    preco_hora: profissional.preco_hora,
                    descricao: profissional.descricao
                }
                this._connection.query('INSERT INTO profissional SET ?', newProfissional, (err, profissionalInserido) => {
                    if(err) return reject(err);
                    let pagamentoProfissional = [];

                    if (Array.isArray(profissional.formas_pagamento)) {
                        profissional.formas_pagamento.forEach((id_pagamento) => {
                            pagamentoProfissional.push([id_pagamento, profissionalInserido.insertId]);
                        });
                    } else {
                        pagamentoProfissional.push([profissional.formas_pagamento, profissionalInserido.insertId]);
                    }
                    

                    this._connection.query('INSERT INTO pagamento_profissional(id_pgto, cod_profissional) VALUES ?', [pagamentoProfissional], (err,data) => {
                        if(err) return reject(err);
                        resolve(profissionalInserido);
                    });
                })
            })
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._connection.query('DELETE FROM profissional WHERE id_profissional = ?', id, (err, data) => {
                if(err) return reject(err);
                resolve(data);
            })
        });
    }

    update(profissional) {
        return new Promise((resolve, reject) => {
            this._connection.query('UPDATE profissional SET ? WHERE id_profissional = ?', [profissional, profissional['id_profissional']], (err, data) => {
                if(err) return reject(err);
                resolve(data)
            })
        });
    }

    login(loginData) {
        return new Promise((resolve, reject) => {
            this._connection.query('SELECT * FROM profissional WHERE nome_usuario = ? AND senha=?', [loginData['nome_usuario'],loginData['senha']], (err, profissional) => {
                if(err) return reject(err);
                if(!profissional.length) return reject('Usuário inválido');
                profissional = profissional[0];
                this._connection.query('SELECT * FROM pagamento_profissional WHERE cod_profissional = ?', profissional['id_profissional'], (err, data) => {
                    if(err) return reject(err);
                    profissional.formas_pagamento = [];
                    data.forEach((pagamento) => {
                        profissional.formas_pagamento.push(pagamento);
                    });
                    resolve(profissional);
                })
            })
        });
    }
}

module.exports = ProfissionalService;