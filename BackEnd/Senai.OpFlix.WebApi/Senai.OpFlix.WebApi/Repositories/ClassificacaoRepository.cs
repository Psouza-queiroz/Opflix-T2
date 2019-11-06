using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class ClassificacaoRepository : IClassificacaoRepository
    {
        public List<Classificacao> Listar()
        {
            using (opflixContext ctx = new opflixContext())
            {
                return ctx.Classificacao.ToList();
            }
        }
    }
}
