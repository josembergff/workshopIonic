import { FormularioClienteComponent } from '../formulario-cliente/formulario-cliente.component';
import { DetalheClienteComponent } from '../detalhe-cliente/detalhe-cliente.component';
import { Cliente } from '../../../modelo/cliente';

import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import * as _lodash from 'lodash';
import { ModalController } from "ionic-angular";


@Component({
  selector: 'page-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  nomeLista: string;
  listagem: Array<Cliente>;
  clienteAtual: Cliente;
  mostrarFormulario: Boolean;
  filtroAtual: String;

  constructor(private servicoCliente: ClienteService, private _modalCtrl: ModalController) {
    this.nomeLista = "Lista de Clientes";

    this.listagem = this.servicoCliente.listaCliente();
  }

  ngOnInit() { }

  abrirCliente(cliente: Cliente) {
    let modal = this._modalCtrl.create(DetalheClienteComponent, { cliente: cliente });
    modal.onDidDismiss((data: Cliente) => {
      if (data) {
        this.excluirCliente(data);
      }
    });
    modal.present();
  }

  excluirCliente(cliente: Cliente) {
    // let busca = this.listagem.indexOf(cliente);
    // this.listagem.splice(busca, 1);

    this.listagem = _lodash.remove(this.listagem, function (n) {
      return n == cliente;
    });

    this.clienteAtual = null;
  }

  adicionarCliente(): void {
    let modal = this._modalCtrl.create(FormularioClienteComponent);
    modal.onDidDismiss((data: Cliente) => {
      if (data) {
        this.cadastroCliente(data);
      }
    });
    modal.present();
  }

  cadastroCliente(cliente: Cliente): void {
    cliente.DataCriacao = new Date();
    cliente.Codigo = Math.floor((Math.random() * 100) + 1);
    this.listagem.push(cliente);
    this.filtroAtual = "";
  }

}