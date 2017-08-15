import { Cliente } from './../modelo/cliente';

import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {

  constructor() { }

  listaCliente():Array<Cliente>{
    let retorno:Array<Cliente> = new Array<Cliente>();
    retorno.push(new Cliente({ Nome:'Cliente 1' }));
    return retorno;
  }

}
