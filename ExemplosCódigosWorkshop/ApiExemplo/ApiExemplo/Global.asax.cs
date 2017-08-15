using Infra.IOC;
using System;
using System.Globalization;
using System.Threading;
using System.Web.Http;

namespace ApiExemplo
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            ResolveDependencia.ConfigurarDependencias();
        }

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            if (Request.UserLanguages != null)
            {
                CultureInfo cultura = CultureInfo.CreateSpecificCulture(Request.UserLanguages[0]);
                Thread.CurrentThread.CurrentCulture = cultura;
            }
            else
            {
                Thread.CurrentThread.CurrentCulture = new CultureInfo("pt-BR");
            }
            Thread.CurrentThread.CurrentUICulture = Thread.CurrentThread.CurrentCulture;

        }
    }
}
