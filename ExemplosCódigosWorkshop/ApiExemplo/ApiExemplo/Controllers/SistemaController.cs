using Dominio.Interfaces.Dominio;
using Dominio.Modelos;
using System.Web;
using System.Web.Http;

namespace ApiExemplo.Controllers
{
    public class SistemaController : PadraoController
    {

        IDominioSeguranca _dominioSeg;

        public SistemaController(IDominioSeguranca dominioSeg)
        {
            _dominioSeg = dominioSeg;
        }

        [HttpPost]
        public ControleUsuario Autenticar(Usuario usuario)
        {
            string ip = HttpContext.Current.Request.UserHostAddress;
            string navegador = HttpContext.Current.Request.Browser.Browser;
            ControleUsuario controle = new ControleUsuario();
            controle = _dominioSeg.EntrarSistema(usuario, ip, navegador, string.Empty);

            return controle;
        }
    }
}
