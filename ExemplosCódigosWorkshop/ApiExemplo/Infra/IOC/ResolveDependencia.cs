using Ninject;
using Ninject.Syntax;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Infra.IOC
{
    public class ResolveDependencia : IDependencyResolver
    {
        private readonly IResolutionRoot _resolutionRoot;

        public ResolveDependencia(IResolutionRoot kernel)
        {
            _resolutionRoot = kernel;
        }

        public object GetService(Type serviceType)
        {
            return _resolutionRoot.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _resolutionRoot.GetAll(serviceType);
        }

        public static void ConfigurarDependencias()
        {
            ResolveModulos resolve = new ResolveModulos();
            DependencyResolver.SetResolver(new ResolveDependencia(resolve.InjecaoMVC()));
        }
    }
}
