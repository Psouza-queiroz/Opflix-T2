using MongoDB.Driver;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Repositories
{
    public class LocalizacaoRepository : ILocalizacaoRepository
    {
        private readonly IMongoCollection<Localizacao> _Localizacao;

        public LocalizacaoRepository()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("T_OpFlix");
            _Localizacao = database.GetCollection<Localizacao>("MapasLanc");
        }
        public void Cadastrar(Localizacao localizacao)
        {
            _Localizacao.InsertOne(localizacao);
        }

        public List<Localizacao> Listar()
        {
            return _Localizacao.Find(l => true).ToList();
        }
    }
}
