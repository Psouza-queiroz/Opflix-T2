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
VALUES ('O Rei Le�o','O Rei Leao Dirigido Jon Favreu...','118','2019-07-18','2','1','1','1')


INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao)
VALUES ('La Casa De Papel 3 Temp','Oito habilidosos ladr�es se trancam na Casa da Moeda da Espanha com o ambicioso plano de realizar...','650','19/07/2019','1','2','2','5')

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao)
VALUES ('Deuses Americanos','Shadow Moon � um ex-vigarista que serve como seguran�a e companheiro de viagem para o Sr. Wednesday, um homem fraudulento que �, na verdade, um dos velhos deuses, e est� na Terra em uma miss�o: reunir for�as para lutar contra as novas entidades.','620','30/04/2017','2','3','2','6')
       ,('Toy Story 4','Woody sempre teve certeza sobre o seu lugar no mundo e que sua prioridade � cuidar de sua crian�a, seja Andy ou Bonnie. Mas quando Bonnie adiciona um relutante novo brinquedo chamado Garfinho ao seu quarto, uma aventura na estrada ao lado de velhos e novos amigos mostrar� a Woody qu�o grande o mundo pode ser para um brinquedo.','100','20/06/2019','2','4','1','1')





																--ITENS EXTRAS--
Update Usuarios 
Set Permissao = 1
Where IdUsuario = 3

INSERT INTO Categorias VALUES ('Acao'),('Comedia'),('Documentario'),('Fic�ao Cientifica')

DELETE Lancamentos
WHERE IdLancamento = 4

Update lancamentos
set Nome =  'La Casa De Papel - 3� Temporada'
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

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao) Values ('Como Treinar Seu Drag�o 3','A trilogia da aclamada anima��o de Bangela e Solu�o chega ao fim com Como Treinar o Seu Drag�o 3.','104','17/01/2019','6','4','1','1')
							  ,('Alita: Anjo de Combate','Uma ciborgue adolescente precisa usar suas habilidades �nicas de luta para desvendar seu passado.','142','14/02/2019','6','6','1','4')
							  ,('Turma da M�nica: La�os','O Floquinho desaparece. Para encontrar seu cachorro de estima��o, Cebolinha conta com os amigos Casc�o, M�nica e Magali e, claro, um plano infal�vel.','97','27/07/2019','6','6','1','1')

INSERT INTO Lancamentos (Nome,Sinopse,DuracaoMin,DataDeLancamento,IdPlataforma,IdCategoria,IdTipo,IdClassificacao) Values ('Guardi�es da Gal�xia','O aventureiro do espa�o Peter Quill torna-se presa de ca�adores de recompensas depois que rouba a esfera de um vil�o trai�oeiro, Ronan. Para escapar do perigo, ele faz uma alian�a com um grupo de quatro extraterrestres.','145','31/07/2014','1','6','1','2')


Update Usuarios set Imagem = 'https://media.licdn.com/dms/image/C4D03AQGRui2aMUIQUA/profile-displayphoto-shrink_800_800/0?e=1579132800&v=beta&t=QY4_mz0epKObpoCNaY-yY41j_9jVEx2draxOmu16QiY' where IdUsuario = 1

update Usuarios
set  Permissao = 'administrador'
where IdUsuario = 3 

select * from Usuarios
