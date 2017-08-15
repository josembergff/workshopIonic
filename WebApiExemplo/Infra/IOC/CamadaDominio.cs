using Dominio.Implementacoes.Dominio;
using Dominio.Interfaces.Dominio;
using Ninject.Modules;

namespace Infra.IOC
{
    public class CamadaDominio : NinjectModule
    {
        public override void Load()
        {
            Bind<IDominioSeguranca>().To<DominioSeguranca>();
        }
    }
}
