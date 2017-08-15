using Dominio.Enum;
using Dominio.Modelos;
using System;

namespace Dominio.Customizado
{
    public class ExcecaoGenerica : Exception
    {
        public ObjetoRetorno ObjetoRetorno { get; set; }

        public ExcecaoGenerica(SituacaoSistemaEnum situacao)
            : base(situacao.ToString())
        {
            ObjetoRetorno = new ObjetoRetorno();
            ObjetoRetorno.Situacao = situacao;
            ObjetoRetorno.Mensagem = situacao.ToString();
        }

        public ExcecaoGenerica(SituacaoSistemaEnum situacao, string mensagem = "", Object objeto = null)
            : base(situacao.ToString())
        {
            ObjetoRetorno = new ObjetoRetorno();
            ObjetoRetorno.Situacao = situacao;
            ObjetoRetorno.Mensagem = mensagem;
            ObjetoRetorno.DadosRecebidos = objeto;
        }

        public ExcecaoGenerica(ObjetoRetorno objetoRetorno)
            : base(objetoRetorno.Situacao.ToString())
        {
            ObjetoRetorno = objetoRetorno;
        }

        public ExcecaoGenerica(ExcecaoGenerica excecao)
            : base(excecao.ObjetoRetorno.Situacao.ToString())
        {
            ObjetoRetorno = new ObjetoRetorno();
            ObjetoRetorno.Situacao = (SituacaoSistemaEnum)excecao.ObjetoRetorno.Situacao;
            ObjetoRetorno.MensagemValidacao = excecao.ObjetoRetorno.MensagemValidacao;
            ObjetoRetorno.DadosRecebidos = excecao.ObjetoRetorno.DadosRecebidos;
            ObjetoRetorno.Mensagem = excecao.ObjetoRetorno.Mensagem;
        }

        public ExcecaoGenerica(Exception excecao)
            : base(excecao.Message)
        {
            ObjetoRetorno = new ObjetoRetorno();
            ObjetoRetorno.Mensagem = excecao.Message;
        }
    }
}