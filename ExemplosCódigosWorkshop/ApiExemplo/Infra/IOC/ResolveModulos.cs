using Ninject;
using Ninject.Modules;

namespace Infra.IOC
{
    public class ResolveModulos
    {
        INinjectModule[] _modulos;
        public ResolveModulos()
        {
            _modulos = new INinjectModule[]
               {
                    new CamadaDominio()
               };
        }

        public IKernel InjecaoMVC()
        {
            IKernel kernel = new StandardKernel(_modulos);
            return kernel;
        }

        public IKernel InjecaoAPI(IKernel kernel)
        {
            kernel.Load(_modulos);
            return kernel;
        }
    }
}
