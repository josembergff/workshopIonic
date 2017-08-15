using Dominio.Modelos;
using System.Web;

namespace ApiExemplo.Models
{
    public class ObjetoSessaoApi
    {
        public static ControleUsuario UsuarioAtual
        {
            get
            {
                return HttpContext.Current.Session["usuarioAtual"] as ControleUsuario;
            }

            set
            {
                HttpContext.Current.Session["usuarioAtual"] = value;
            }
        }
    }
}