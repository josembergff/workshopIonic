using ApiExemplo.Models;
using Dominio.Customizado;
using Dominio.Enum;
using Dominio.Interfaces.Dominio;
using Dominio.Modelos;
using System.Web.Mvc;

namespace ApiExemplo.Customizado
{
    public class FiltroSessao : ActionFilterAttribute
    {

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            ///Valida sessao atual
            if (filterContext.ActionDescriptor != null)
            {
                string actionName = filterContext.ActionDescriptor.ActionName;
                string controllerName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName;
                string chave = filterContext.HttpContext.Request.Headers["Authorization"];
                bool autenticar = (actionName == "Post" && controllerName == "SistemaApi");

                if (!autenticar)
                {
                    if (string.IsNullOrEmpty(chave))
                    {
                        throw new ExcecaoGenerica(SituacaoSistemaEnum.ErroAutenticacao, "Chave de autenticação não informada", filterContext.Controller.ViewData.Model);
                    }
                    else
                    {
                        IDominioSeguranca servSeguranca = DependencyResolver.Current.GetService(typeof(IDominioSeguranca)) as IDominioSeguranca;
                        ControleUsuario controle = servSeguranca.ValidarChave(chave);
                        ObjetoSessaoApi.UsuarioAtual = controle;
                    }
                }
            }
        }
    }
}