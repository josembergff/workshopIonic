import { Cliente } from './../../modelo/cliente';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nomeLista:string;
  listagem:Array<Cliente>;

  constructor(private servicoCliente:ClienteService) { 
    this.nomeLista = "Lista de Clientes";

    this.listagem = servicoCliente.listaCliente();
  }

  adicionarCliente(){
    this.listagem.push(new Cliente({ Nome:"Cliente clicado"}));
  }

  ngOnInit() {

  }

}
