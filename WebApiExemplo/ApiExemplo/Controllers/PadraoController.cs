using ApiExemplo.Customizado;
using System.Web.Http;

namespace ApiExemplo.Controllers
{
    [FiltroSessao]
    [FiltroExcecao]
    [FiltroAcoes]
    public class PadraoController : ApiController
    {
    }
}
