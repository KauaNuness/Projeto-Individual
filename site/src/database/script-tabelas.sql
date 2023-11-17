-- CRIANDO O BANCO DE DADOS
CREATE DATABASE cosKAU;
USE cosKAU;


-- CRIANDO AS TABELAS
CREATE TABLE PersonagemFav(
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
franquia VARCHAR(45),
icone VARCHAR(2000),
fundo VARCHAR(2000)
);

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
fkPersonagemFav INT,
CONSTRAINT fkPersonagemFav FOREIGN KEY (fkPersonagemFav) REFERENCES PersonagemFav(idPersonagem)
) AUTO_INCREMENT = 100;

CREATE TABLE Cosplan(
idCosplan INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
nome VARCHAR(45),
franquia VARCHAR(45),
versao VARCHAR(45),
CONSTRAINT ForeignKeyUsuarioCosplan FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Endereco(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
estado VARCHAR(45),
cidade VARCHAR(45),
bairro VARCHAR(45),
rua VARCHAR(45),
numero INT,
cep CHAR(9)) AUTO_INCREMENT = 100;

CREATE TABLE Eventos(
idEventos INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dtEvento DATETIME,
valor DECIMAL(3,2),
fkEndereco INT,
CONSTRAINT ForeignKeyEnderecoEventos FOREIGN KEY (fkEndereco) REFERENCES Endereco(idEndereco)
) AUTO_INCREMENT = 50;

-- INSERT
INSERT INTO personagemFav VALUES
(null, 'Satoru Gojo', 'Jujutsu Kaisen', null, null),
(null, 'Yuta Okkotsu', 'Jujutsu Kaissen', '../assets/img/profile/icons/yuta.jpg', '../assets/img/profile/banner/yuta.jpg'),
(null, 'Monkey D.Luffy', 'One Piece', null, null),
(null, 'Roronoa Zoro', 'One Piece', null, null),
(null, 'Makima', 'Chainsaw Man', null, null),
(null, 'Denji', 'Chainsaw Man', null, null),
(null, 'Jinx', 'League Of Legends', null, null),
(null, 'Caitlyn', 'League Of Legends', null, null),
(null, 'Joel Miller', 'The Last Of Us', null, null),
(null, 'Ellie Williams', 'The Last Of Us',null, null);

-- SELECT
SELECT * FROM usuario;
