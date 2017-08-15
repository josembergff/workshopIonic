using Dominio.Enum;
using System;
using System.Web.Script.Serialization;
using System.Xml.Serialization;

namespace Dominio.Modelos
{
    public class ObjetoRetorno
    {
        [XmlIgnore]
        [ScriptIgnore]
        public SituacaoSistemaEnum Situacao { get; set; }
        public string NomeSituacao
        {
            get
            {
                return this.Situacao.ToString();
            }
        }
        public int CodigoSituacao
        {
            get
            {
                return (int)this.Situacao;
            }
        }
        public string Mensagem { get; set; }
        public Object DadosRecebidos { get; set; }
        public string MensagemValidacao { get; set; }
    }
}