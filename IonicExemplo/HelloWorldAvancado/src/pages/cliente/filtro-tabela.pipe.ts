import { Cliente } from '../../modelo/cliente';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from "@angular/common";
import * as _lodash from 'lodash';

@Pipe({
  name: 'filtroTabela'
})
export class FiltroTabelaPipe implements PipeTransform {
  transform(lista: Array<Cliente>, filtroGeral: String): any {
    let retorno: Array<Cliente> = lista;
    let dataPipe = new DatePipe("pt-BR");
    if (filtroGeral && filtroGeral.length > 0) {
      let filtroRecebido = filtroGeral.toString().toLowerCase();
      retorno = retorno.filter(item => item.Nome.toLowerCase().indexOf(filtroRecebido) >= 0
        || item.Sobrenome.toLowerCase().indexOf(filtroRecebido) >= 0
        || dataPipe.transform(item.DataCriacao, 'dd MMMM yyyy').toLowerCase().indexOf(filtroRecebido) >= 0
      );
    }

    retorno = _lodash.orderBy(retorno, ['Nome'], ['asc']);
    return retorno;
  }
}
