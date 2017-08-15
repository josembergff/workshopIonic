using Dominio.Modelos;

namespace Dominio.Interfaces.Dominio
{
    public interface IDominioSeguranca
    {
        ControleUsuario EntrarSistema(Usuario usuario, string ip, string navegador, string sessionId);

        ControleUsuario ValidarChave(string chave);
    }
}
