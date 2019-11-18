CREATE DATABASE T_OpFlix

USE T_OpFlix
go

CREATE TABLE Usuarios 
(
IdUsuario INT PRIMARY KEY IDENTITY 
,Nome VarChar (255) NOT NULL
,Email VarChar(255) NOT NULL UNIQUE
,Senha VarChar(255) NOT NULL
);

CREATE TABLE Tipos
(
IdTipo INT PRIMARY KEY IDENTITY 
,Tipo VarChar(255) NOT NULL
);

Create table Categorias
(
IdCategoria INT PRIMARY KEY IDENTITY
,Categoria VARCHAR (255) NOT NULL
);

CREATE TABLE Plataforma 
(
IdPlataforma INT PRIMARY KEY IDENTITY
,Nome VARCHAR (255) NOT NULL
);

CREATE TABLE Classificacao
(
IdClassificacao INT PRIMARY KEY IDENTITY
,Classificacao VARCHAR (255)
);

CREATE TABLE Lancamentos
(
IdLancamento INT PRIMARY KEY IDENTITY
,Nome VARCHAR (255) NOT NULL
,Sinopse TEXT 
,DuracaoMin INT NOT NULL
,DataDeLancamento DATE NOT NULL
,IdPlataforma INT FOREIGN KEY REFERENCES Plataforma (IdPlataforma)
,IdCategoria INT FOREIGN KEY REFERENCES Categorias (IdCategoria)
,IdTipo INT FOREIGN KEY REFERENCES Tipos (Idtipo)
,IdClassificacao INT FOREIGN KEY REFERENCES Classificacao (IdClassificacao)
);

ALTER TABLE Usuarios ADD Permissao VARCHAR(255)
ALTER TABLE Usuarios DROP column Permissao

alter table Lancamentos add Imagem text  default ('https://image.flaticon.com/icons/png/512/83/83519.png')

select * from usuarios


update Lancamentos set Imagem = 'https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg'where idLancamento = 10










