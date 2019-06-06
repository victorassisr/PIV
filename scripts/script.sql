
CREATE TABLE TipoProcesso (
                IDTipoProcesso TINYINT AUTO_INCREMENT NOT NULL,
                Descricao VARCHAR(100) NOT NULL,
                PRIMARY KEY (IDTipoProcesso)
);


CREATE TABLE Empilhadeira (
                IDEmpilhadeira TINYINT AUTO_INCREMENT NOT NULL,
                statusLiberado BOOLEAN NOT NULL,
                PRIMARY KEY (IDEmpilhadeira)
);


CREATE TABLE TipoUsuario (
                IDTipoUsuario TINYINT AUTO_INCREMENT NOT NULL,
                Descricao VARCHAR(50) NOT NULL,
                PRIMARY KEY (IDTipoUsuario)
);


CREATE TABLE Usuario (
                IDUsuario SMALLINT AUTO_INCREMENT NOT NULL,
                Nome VARCHAR(200) NOT NULL,
                User VARCHAR(50) NOT NULL,
                Email VARCHAR(250) NOT NULL,
                Senha VARCHAR(40) NOT NULL,
                IDTipoUsuario TINYINT NOT NULL,
                PRIMARY KEY (IDUsuario)
);


CREATE TABLE TipoCafe (
                IDTipo TINYINT AUTO_INCREMENT NOT NULL,
                Descricao VARCHAR(80) NOT NULL,
                PRIMARY KEY (IDTipo)
);


CREATE TABLE Proprietario (
                IDProprietario INT AUTO_INCREMENT NOT NULL,
                Nome VARCHAR(200) NOT NULL,
                PRIMARY KEY (IDProprietario)
);


CREATE TABLE Email (
                IDEmail INT NOT NULL,
                IDProprietario INT NOT NULL,
                Email VARCHAR(256) NOT NULL,
                PRIMARY KEY (IDEmail)
);


CREATE TABLE Telefone (
                IDTelefone INT NOT NULL,
                IDProprietario INT NOT NULL,
                NumeroTelefone BIGINT NOT NULL,
                PRIMARY KEY (IDTelefone)
);


CREATE TABLE Bag (
                IDBag INT AUTO_INCREMENT NOT NULL,
                IDProprietario INT NOT NULL,
                IDTipo TINYINT NOT NULL,
                RFID BIGINT NOT NULL,
                Lote VARCHAR(10) NOT NULL,
                DataEntrada DATETIME NOT NULL,
                DataSaida DATETIME,
                Peso SMALLINT NOT NULL,
                LocalizacaoFila VARCHAR(10) NOT NULL,
                LocalizacaoColuna TINYINT NOT NULL,
                LocalizacaoAltura TINYINT NOT NULL,
                LocalizacaoSetor CHAR(1) NOT NULL,
                statusProcessado BOOLEAN NOT NULL,
                PRIMARY KEY (IDBag)
);


CREATE TABLE TransporteBagEmpilhadeira (
                IDTransporte INT AUTO_INCREMENT NOT NULL,
                IDBag INT NOT NULL,
                IDEmpilhadeira TINYINT NOT NULL,
                DataTransporte DATE NOT NULL,
                IDUsuario SMALLINT NOT NULL,
                PRIMARY KEY (IDTransporte)
);


CREATE TABLE Processo (
                IDBag INT NOT NULL,
                IDTipoProcesso TINYINT NOT NULL,
                DataHoraEntrada DATETIME NOT NULL,
                DataHoraSaida DATETIME,
                PRIMARY KEY (IDBag, IDTipoProcesso)
);


ALTER TABLE Processo ADD CONSTRAINT tipoprocesso_processo_fk
FOREIGN KEY (IDTipoProcesso)
REFERENCES TipoProcesso (IDTipoProcesso)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE TransporteBagEmpilhadeira ADD CONSTRAINT empilhadeira_consultabag_fk
FOREIGN KEY (IDEmpilhadeira)
REFERENCES Empilhadeira (IDEmpilhadeira)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Usuario ADD CONSTRAINT tipousuario_usuario_fk
FOREIGN KEY (IDTipoUsuario)
REFERENCES TipoUsuario (IDTipoUsuario)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE TransporteBagEmpilhadeira ADD CONSTRAINT usuario_transportebagempilhadeira_fk
FOREIGN KEY (IDUsuario)
REFERENCES Usuario (IDUsuario)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Bag ADD CONSTRAINT tipo_bag_fk
FOREIGN KEY (IDTipo)
REFERENCES TipoCafe (IDTipo)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Bag ADD CONSTRAINT bag_produtor_fk
FOREIGN KEY (IDProprietario)
REFERENCES Proprietario (IDProprietario)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Telefone ADD CONSTRAINT produtor_telefone_fk
FOREIGN KEY (IDProprietario)
REFERENCES Proprietario (IDProprietario)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Email ADD CONSTRAINT produtor_email_fk
FOREIGN KEY (IDProprietario)
REFERENCES Proprietario (IDProprietario)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Processo ADD CONSTRAINT bag_processo_fk
FOREIGN KEY (IDBag)
REFERENCES Bag (IDBag)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE TransporteBagEmpilhadeira ADD CONSTRAINT bag_consultabag_fk
FOREIGN KEY (IDBag)
REFERENCES Bag (IDBag)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
