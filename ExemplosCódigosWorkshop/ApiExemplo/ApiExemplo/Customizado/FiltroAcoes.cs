using Dominio.Customizado;
using Dominio.Enum;
using System.Web.Mvc;

namespace ApiExemplo.Customizado
{
    public class FiltroAcoes : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            ///Valida objeto recebido
            if (filterContext.Controller.ViewData.ModelState.IsValid == false)
            {
                string textoErros = string.Empty;
                int contador = 1;
                foreach (ModelState state in filterContext.Controller.ViewData.ModelState.Values)
                {
                    if (state != null && state.Errors.Count > 0)
                    {
                        string mensagensErro = string.Empty;
                        foreach (ModelError erro in state.Errors)
                        {
                            mensagensErro += (mensagensErro != string.Empty ? "; " : "");
                            mensagensErro += erro.ErrorMessage;
                        }
                        string nome = contador + "º validação";
                        textoErros += nome + ": " + mensagensErro + ". ";
                        contador++;
                    }

                }
                throw new ExcecaoGenerica(SituacaoSistemaEnum.ModeloInvalido, textoErros, filterContext.Controller.ViewData.Model);
            }
        }
    }
}