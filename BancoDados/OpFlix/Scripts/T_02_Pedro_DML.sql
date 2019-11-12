USE T_OpFlix

INSERT INTO Usuarios (Nome,Email,Senha,Permissao) VALUES ('Erik','erik@gmail.com','123456','1')

INSERT INTO Usuarios (Nome,Email,Senha,Permissao) VALUES ('Cassiana' ,'cassiana@email.com','123456' ,'1')
														,('Helena' ,'helena@email.com','123456','')
														,('Roberto' ,'Rob@email.com','3110' ,'')
					

INSERT INTO Categorias VALUES ('Filme Musical'),('Suspense'),('Drama'),('Animacao'),('Terror')	

INSERT INTO Tipos VALUES ('Filmes'),('Series')

INSERT INTO Plataforma VALUES ('Netflix'),('Prime Video'),('Amazon Prime'),('HBO')

INSERT INTO Classificacao VALUES ('Livre'),('10+'),('12+'),('14+'),('16+'),('18+')

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao)
VALUES ('O Rei Leão','O Rei Leao Dirigido Jon Favreu...','118','2019-07-18','2','1','1','1')


INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao)
VALUES ('La Casa De Papel 3 Temp','Oito habilidosos ladrões se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar...','650','19/07/2019','1','2','2','5')

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao)
VALUES ('Deuses Americanos','Shadow Moon é um ex-vigarista que serve como segurança e companheiro de viagem para o Sr. Wednesday, um homem fraudulento que é, na verdade, um dos velhos deuses, e está na Terra em uma missão: reunir forças para lutar contra as novas entidades.','620','30/04/2017','2','3','2','6')
       ,('Toy Story 4','Woody sempre teve certeza sobre o seu lugar no mundo e que sua prioridade é cuidar de sua criança, seja Andy ou Bonnie. Mas quando Bonnie adiciona um relutante novo brinquedo chamado Garfinho ao seu quarto, uma aventura na estrada ao lado de velhos e novos amigos mostrará a Woody quão grande o mundo pode ser para um brinquedo.','100','20/06/2019','2','4','1','1')





																--ITENS EXTRAS--
Update Usuarios 
Set Permissao = 1
Where IdUsuario = 3

INSERT INTO Categorias VALUES ('Acao'),('Comedia'),('Documentario'),('Ficçao Cientifica')

DELETE Lancamentos
WHERE IdLancamento = 4

Update lancamentos
set Nome =  'La Casa De Papel - 3º Temporada'
WHERE IdLancamento = 3

INSERT INTO Plataforma VALUES ('VHS')

Update Lancamentos
set DataDeLancamento = '08/07/1994'
Where IdLancamento = 2

UPDATE Lancamentos
set IdPlataforma = 5
Where IdLancamento = 2


Update Lancamentos
set  IdCategoria = 9
where IdLancamento = 10

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao) Values ('Como Treinar Seu Dragão 3','A trilogia da aclamada animação de Bangela e Soluço chega ao fim com Como Treinar o Seu Dragão 3.','104','17/01/2019','6','4','1','1')
							  ,('Alita: Anjo de Combate','Uma ciborgue adolescente precisa usar suas habilidades únicas de luta para desvendar seu passado.','142','14/02/2019','6','6','1','4')
							  ,('Turma da Mônica: Laços','O Floquinho desaparece. Para encontrar seu cachorro de estimação, Cebolinha conta com os amigos Cascão, Mônica e Magali e, claro, um plano infalível.','97','27/07/2019','6','6','1','1')

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao) Values ('Guardiões da Galáxia','O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres.','145','31/07/2014','1','6','1','2')


Update Usuarios set Imagem = 'https://media.licdn.com/dms/image/C4D03AQGRui2aMUIQUA/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=QY4_mz0epKObpoCNaY-yY41j_9jVEx2draxOmu16QiY' where IdUsuario = 1

update Usuarios
set  Permissao = 'administrador'
where IdUsuario = 3 

select * from Usuarios
