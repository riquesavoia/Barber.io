CREATE TABLE categoria (
	id_categoria INT(11) NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255),
	PRIMARY KEY (id_categoria)
);

CREATE TABLE servico (
	id_servico INT(11) NOT NULL AUTO_INCREMENT,
    id_categoria INT(11),
	nome VARCHAR(255),
	PRIMARY KEY (id_servico),
    FOREIGN KEY (id_categoria)
		REFERENCES categoria (id_categoria)
);

CREATE TABLE profissional (
	id_profissional INT(11) NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255),
    sobrenome VARCHAR(255),
	email VARCHAR(255),
    nome_usuario VARCHAR(255),
    senha VARCHAR(255),
	rg VARCHAR(255),
	cpf VARCHAR(255),
    telefone INT(12),
	data_nasc date,
	sexo VARCHAR(255),
	cep VARCHAR(255),
    estado VARCHAR(255),
    cidade VARCHAR(255),
    rua VARCHAR(255),
    num_res VARCHAR(255),
    id_servico INT(11),
	preco_hora INT,
	descricao VARCHAR(255),
	PRIMARY KEY(id_profissional),
	FOREIGN KEY(id_servico)
		REFERENCES servico(id_servico)
);

CREATE TABLE cliente (
	id_cliente INT(11) NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255),
    sobrenome VARCHAR(255),
	email VARCHAR(255),
    nome_usuario VARCHAR(255),
    senha VARCHAR(255),
	rg INT(12),
	cpf INT(14),
    telefone INT(12),
	data_nasc date,
	num_res INT(4),
	sexo VARCHAR(255),
	cep VARCHAR(255),
    estado VARCHAR(255),
    cidade VARCHAR(255),
    rua VARCHAR(255),
    numero VARCHAR(255),
	descricao VARCHAR(255),
	PRIMARY KEY(id_cliente)
);

CREATE TABLE avaliacao (
	id_avaliacao INT(3) NOT NULL AUTO_INCREMENT,
	data_avaliacao date,
	nota INT,
	id_profissional INT(11),
	id_cliente INT(11),
	PRIMARY KEY(id_avaliacao),
	FOREIGN KEY(id_profissional)
		REFERENCES profissional(id_profissional),
	FOREIGN KEY(id_cliente)
		REFERENCES cliente(id_cliente)
);

CREATE TABLE pagamento (
	id_pgto INT(11) NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255),
	PRIMARY KEY (id_pgto)
);

CREATE TABLE agendamento (
	id_agend INT(11) NOT NULL AUTO_INCREMENT,
	descricao VARCHAR(255),
	valor INT,
	data_ini datetime,
	data_fim datetime,
	local_atend VARCHAR(255),
    status INT(1),
	id_pgto INT(11),
	cod_profissional INT(11),
	cod_cliente INT(11),
	PRIMARY KEY (id_agend),
	FOREIGN KEY (id_pgto)
		REFERENCES pagamento(id_pgto),
	FOREIGN KEY (cod_profissional)
		REFERENCES profissional(id_profissional),
	FOREIGN KEY (cod_cliente)
		REFERENCES cliente(id_cliente)
);

CREATE TABLE pagamento_profissional(
	id_pgto INT(11),
	cod_profissional INT(11),
    FOREIGN KEY(id_pgto)
		REFERENCES pagamento(id_pgto),
	FOREIGN KEY(cod_profissional)
		REFERENCES profissional(id_profissional)
        ON DELETE CASCADE
);

INSERT INTO categoria() VALUES(1, 'Administração, negócios e serviços');
INSERT INTO categoria VALUES(2, 'Análise e Desenvolvimento de Sistemas');
INSERT INTO categoria VALUES(3, 'Artes e Design');
INSERT INTO categoria VALUES(4, 'Comunicação e Informação');
INSERT INTO categoria VALUES(5, 'Engenharia e Construção');
INSERT INTO categoria VALUES(6, 'Saúde e Bem-estar');

INSERT INTO servico(id_categoria, nome) VALUES(1, 'Administrador');
INSERT INTO servico(id_categoria, nome) VALUES(1, 'Advogado');
INSERT INTO servico(id_categoria, nome) VALUES(1, 'Contador');
INSERT INTO servico(id_categoria, nome) VALUES(1, 'Motorista');

INSERT INTO servico(id_categoria, nome) VALUES(2, 'Programador');
INSERT INTO servico(id_categoria, nome) VALUES(2, 'Analista de sistemas');
INSERT INTO servico(id_categoria, nome) VALUES(2, 'Analista de banco de dados');

INSERT INTO servico(id_categoria, nome) VALUES(3, 'Designer');

INSERT INTO servico(id_categoria, nome) VALUES(4, 'Publicitário');
INSERT INTO servico(id_categoria, nome) VALUES(4, 'Jornalista');

INSERT INTO servico(id_categoria, nome) VALUES(5, 'Engenheiro civil');
INSERT INTO servico(id_categoria, nome) VALUES(5, 'Pedreiro');
INSERT INTO servico(id_categoria, nome) VALUES(5, 'Pintor');

INSERT INTO servico(id_categoria, nome) VALUES(6, 'Psicólogo');
INSERT INTO servico(id_categoria, nome) VALUES(6, 'Massagista');
INSERT INTO servico(id_categoria, nome) VALUES(6, 'Cabeleireiro');
INSERT INTO servico(id_categoria, nome) VALUES(6, 'Faxineiro');
INSERT INTO servico(id_categoria, nome) VALUES(6, 'Cozinheiro');

INSERT INTO pagamento(nome) VALUES('Cartão de crédito');
INSERT INTO pagamento(nome) VALUES('Cartão de débito');
INSERT INTO pagamento(nome) VALUES('Dinheiro');
INSERT INTO pagamento(nome) VALUES('Mercado pago');
INSERT INTO pagamento(nome) VALUES('Paypal');

INSERT INTO profissional (`nome`, `sobrenome`, `email`, `nome_usuario`, `senha`, `rg`, `cpf`, `telefone`, `data_nasc`, `sexo`, `cep`, `estado`, `cidade`, `rua`, `num_res`, `id_servico`, `preco_hora`, `descricao`) VALUES ('João', 'Silva', 'joaosilva@gmail.com', 'joao', 'senha123', '584928394', '49382938492', '983948323', '1980-04-08', 'M', '13849283', 'São Paulo', 'Campinas', 'Rua Alfredo Jose', '32', '1', '70', 'Olá, meu nome é joão');
INSERT INTO cliente (`nome`, `sobrenome`, `email`, `nome_usuario`, `senha`, `rg`, `cpf`, `telefone`, `data_nasc`, `num_res`, `sexo`, `cep`, `estado`, `cidade`, `rua`, `numero`, `descricao`) VALUES ('Marcelo', 'Andrade', 'marceloandrade@gmail.com', 'marcelo', 'senha123', '48594839', '4958493', '86758493', '1984-06-02', '12', 'M', '1349283', 'São Paulo', 'Campinas', 'Rua Paulo Silva', '14', 'Olá, meu nome é Marcelo');
INSERT INTO cliente (`nome`, `sobrenome`, `email`, `nome_usuario`, `senha`, `rg`, `cpf`, `telefone`, `data_nasc`, `num_res`, `sexo`, `cep`, `estado`, `cidade`, `rua`, `numero`, `descricao`) VALUES ('Roberto', 'Carvalho', 'roberto@gmail.com', 'roberto', 'senha123', '4124124', '523525235', '235235235', '1982-03-02', '12', 'M', '1349283', 'São Paulo', 'Campinas', 'Rua Treze', '14', 'Olá, meu nome é Roberto');
INSERT INTO agendamento (`descricao`, `valor`, `data_ini`, `data_fim`, `local_atend`, `status`, `id_pgto`, `cod_profissional`, `cod_cliente`) VALUES ('Bom dia João, gostaria de seus serviços', '90', '2019-06-07 08:00:00', '2019-06-04 10:00:00', 'Rua Maria Souza', '0', '1', '1', '1');
INSERT INTO agendamento (`descricao`, `valor`, `data_ini`, `data_fim`, `local_atend`, `status`, `id_pgto`, `cod_profissional`, `cod_cliente`) VALUES ('Olá, gostaria de seu serviço', '90', '2019-06-05 14:00:00', '2019-06-05 16:00:00', 'Rua Paulo José', '0', '1', '1', '1');
INSERT INTO agendamento (`descricao`, `valor`, `data_ini`, `data_fim`, `local_atend`, `status`, `id_pgto`, `cod_profissional`, `cod_cliente`) VALUES ('Bom dia, tudo bem? preciso de seu serviço', '90', '2019-03-02 16:00:00', '2019-03-02 17:30:00', 'Rua Paulo Silva', '0', '1', '1', '2');

INSERT INTO pagamento_profissional VALUES(1, 1);
INSERT INTO pagamento_profissional VALUES(2, 1);