﻿using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interface
{
    public interface ILocalizacaoRepository
    {
        List<Localizacao> Listar();
        void Cadastrar(Localizacao localizacao);

    }
}
