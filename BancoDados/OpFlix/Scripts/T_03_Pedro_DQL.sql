Use T_OpFlix

SELECT *
FROM Usuarios

delete from Usuarios where IdUsuario = 66

SELECT *
FROM Tipos

SELECT *
FROM Categorias

SELECT *
FROM Plataforma

SELECT *
FROM Classificacao

SELECT *
FROM Lancamentos

create procedure PesquisarNome @Nome VarChar(255)
as

select Lancamentos. *, Categorias.Categoria
from Lancamentos
join Categorias
on Lancamentos.IdCategoria = Categorias.IdCategoria
where @nome = Categorias.Categoria 

exec PesquisarNome  'Suspense'


Drop Procedure PesquisarNome


create procedure PesquisarPorId @IdCategoria INT
as
select Nome, IdCategoria
from Lancamentos 
where IdCategoria = @IdCategoria

exec PesquisarPorId  '66'





