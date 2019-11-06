using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Interface;
using Senai.OpFlix.WebApi.Repositories;

namespace Senai.OpFlix.WebApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiposController : ControllerBase
    {
        private ITiposRepository tiposRepository { get; set; }
        public TiposController()
        {
            tiposRepository = new TiposRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(tiposRepository.Listar());
        }
    }
}