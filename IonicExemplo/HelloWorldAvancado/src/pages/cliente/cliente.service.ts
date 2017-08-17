import { Cliente } from '../../modelo/cliente';


import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

  constructor() { }

  listaCliente(): Array<Cliente> {
    let retorno: Array<Cliente> = new Array<Cliente>();
    retorno.push(new Cliente({ Codigo: Math.floor((Math.random() * 100) + 1), Nome: "Cliente 1", Sobrenome: "primeiro", DataCriacao: new Date() }));
    retorno.push(new Cliente({ Codigo: Math.floor((Math.random() * 100) + 1), Nome: "Cliente 2", Sobrenome: "segundo", DataCriacao: new Date() }));
    return retorno;
  }

}
