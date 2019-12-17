using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interface;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controller
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LocalizacoesController : ControllerBase
    {
        public ILocalizacaoRepository localizacaoRepository;

        public LocalizacoesController()
        {
            localizacaoRepository = new LocalizacaoRepository();
        }

        [HttpPost]
        public IActionResult Cadastrar(Localizacao localizacao)
        {
            try
            {
                localizacaoRepository.Cadastrar(localizacao);
                return Ok(new { mensagem = "foi, mas ainda to mal" });
            }
            catch (Exception e)
            {
                return BadRequest(new { error = e.Message});
            }
        }

        [HttpGet]
        public IEnumerable<Localizacao> Listar()
        {
            return localizacaoRepository.Listar();
        }
    }
}