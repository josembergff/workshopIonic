import { Cliente } from './../../modelo/cliente';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import * as _lodash from 'lodash';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  nomeLista: string;
  listagem: Array<Cliente>;
  clienteAtual: Cliente;
  mostrarFormulario: Boolean;
  filtroAtual: String;

  constructor(private servicoCliente: ClienteService) {
    this.nomeLista = "Lista de Clientes";
    this.mostrarFormulario = false;

    this.listagem = servicoCliente.listaCliente();
  }

  ngOnInit() { }

  abrirCliente(cliente: Cliente) {
    this.clienteAtual = cliente;
  }

  excluirCliente(cliente: Cliente) {
    // let busca = this.listagem.indexOf(cliente);
    // this.listagem.splice(busca, 1);

    _lodash.remove(this.listagem, function (n) {
      return n == cliente;
    });

    this.clienteAtual = null;
  }

  adicionarCliente(): void {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  cadastroCliente(cliente: Cliente): void {
    this.clienteAtual = null;
    cliente.DataCriacao = new Date();
    cliente.Codigo = Math.floor((Math.random() * 100) + 1);
    this.listagem.push(cliente);
  }

}
