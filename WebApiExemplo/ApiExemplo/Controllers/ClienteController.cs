using Dominio.Modelos;
using System.Collections.Generic;
using System.Web.Http;

namespace ApiExemplo.Controllers
{
    public class ClienteController : PadraoController
    {
        // GET: api/Cliente
        public List<Cliente> Get()
        {
            List<Cliente> listaClientes = new List<Cliente>();

            for (var i = 0; i < 5; i++)
            {
                Cliente clienteAtual = new Cliente();
                clienteAtual.Nome = "Francisca Tereza " + i;
                clienteAtual.Apelido = "Tereza " + i;
                clienteAtual.Codigo = i + 80;
                listaClientes.Add(clienteAtual);
            }

            return listaClientes;
        }

        // GET: api/Cliente/5
        public Cliente Get(int id)
        {
            Cliente clienteAtual = new Cliente();
            if (id == 71)
            {
                clienteAtual.Nome = "Maria Aparecida";
                clienteAtual.Apelido = "Aparecida";
                clienteAtual.Codigo = 71;
            }
            return clienteAtual;
        }

        // POST: api/Cliente
        public void Post([FromBody]Cliente value)
        {
        }

        // PUT: api/Cliente/5
        public void Put(int id, [FromBody]Cliente value)
        {
        }

        // DELETE: api/Cliente/5
        public void Delete(int id)
        {
        }
    }
}
