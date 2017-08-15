using Dominio.Customizado;
using Dominio.Enum;
using Dominio.Modelos;
using System;
using System.Web;

namespace ApiExemplo.Customizado
{
    public static class TratamentoExcecaoGeral
    {
        public static ObjetoRetorno TratarObjetoRetorno(Exception exception)
        {
            ObjetoRetorno retorno = new ObjetoRetorno();

            if (exception is HttpException)
            {
                HttpException http = exception as HttpException;
                switch (http.GetHttpCode())
                {
                    case 404:
                    case 501:
                        retorno.Mensagem = SituacaoSistemaEnum.ServicoInvalido.ToString();
                        retorno.Situacao = SituacaoSistemaEnum.ServicoInvalido;
                        break;
                    case 500:
                        retorno.Mensagem = SituacaoSistemaEnum.DadosInvalidos.ToString();
                        retorno.Situacao = SituacaoSistemaEnum.DadosInvalidos;
                        break;
                    default:
                        retorno.Mensagem = SituacaoSistemaEnum.Erro_Excecao_Padrao + http.Message;
                        retorno.Situacao = SituacaoSistemaEnum.ErroGeral;
                        break;
                }
            }
            else if (exception is ExcecaoGenerica)
            {
                ExcecaoGenerica exSistema = exception as ExcecaoGenerica;
                retorno.DadosRecebidos = exSistema.ObjetoRetorno.DadosRecebidos;
                SituacaoSistemaEnum situacao = (SituacaoSistemaEnum)exSistema.ObjetoRetorno.Situacao;
                retorno.Situacao = situacao;
                retorno.MensagemValidacao = exSistema.ObjetoRetorno.MensagemValidacao;
                retorno.Mensagem = exSistema.ObjetoRetorno.Mensagem;
            }
            else if (exception is ExcecaoGenerica)
            {
                ExcecaoGenerica exSistema = exception as ExcecaoGenerica;
                retorno.DadosRecebidos = exSistema.ObjetoRetorno.DadosRecebidos;
                retorno.Situacao = exSistema.ObjetoRetorno.Situacao;
                retorno.MensagemValidacao = exSistema.ObjetoRetorno.MensagemValidacao;
                retorno.Mensagem = exSistema.ObjetoRetorno.Mensagem;
            }
            else
            {
                retorno.Situacao = SituacaoSistemaEnum.ErroGeral;
                retorno.Mensagem = exception.Message;
            }

            return retorno;
        }
    }
}