using System;

namespace Dominio.Modelos
{
    public class ControleUsuario
    {
        public ControleUsuario()
        {
            Usuario = new Usuario();
        }
        public int Codigo { get; set; }
        public Usuario Usuario { get; set; }
        public DateTime DataCriacao { get; set; }
        public string Chave { get; set; }
        public string Ip { get; set; }
        public string Navegador { get; set; }
    }
}