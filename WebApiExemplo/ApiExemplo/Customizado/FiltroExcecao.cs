using Dominio.Modelos;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http.Filters;

namespace ApiExemplo.Customizado
{
    public class FiltroExcecao : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            ObjetoRetorno retorno = TratamentoExcecaoGeral.TratarObjetoRetorno(context.Exception);
            string retornoString = JsonConvert.SerializeObject(retorno);
            context.Response = context.Request.CreateResponse(
                HttpStatusCode.OK,
                retorno,
                JsonMediaTypeFormatter.DefaultMediaType
            );
        }
    }
}