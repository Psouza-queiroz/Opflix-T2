using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Senai.OpFlix.WebApi.Domains
{
    public partial class Usuarios
    {
        public int IdUsuario { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
        public string Permissao { get; set; }
        public byte[] Imagem { get; set; }
    }
}
