using Dominio.Interfaces.Dominio;
using System;
using Dominio.Modelos;
using Dominio.Enum;
using Dominio.Customizado;

namespace Dominio.Implementacoes.Dominio
{
    public class DominioSeguranca : IDominioSeguranca
    {
        ControleUsuario _controleAtual;

        public DominioSeguranca()
        {
            _controleAtual = new ControleUsuario
            {
                Chave = "tokenPotenteDaquelesQuabraLinha",
                Codigo = 2,
                DataCriacao = DateTime.Now
            };
        }

        public ControleUsuario EntrarSistema(Usuario usuario, string ip, string navegador, string sessionId)
        {
            _controleAtual.Ip = ip;
            _controleAtual.Navegador = navegador;
            _controleAtual.Usuario = usuario;
            return _controleAtual;
        }

        public ControleUsuario ValidarChave(string chave)
        {
            if(chave == "ChaveCerta")
            {
                return _controleAtual;
            }
            else
            {
                throw new ExcecaoGenerica(SituacaoSistemaEnum.DadosNaoEncontrados, "Não foi localizado o acesso do usuário.", chave);
            }
        }
    }
}