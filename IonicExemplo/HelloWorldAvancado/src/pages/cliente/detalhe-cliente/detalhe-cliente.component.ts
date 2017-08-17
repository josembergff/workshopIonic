import { Cliente } from '../../../modelo/cliente';
import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html'
})
export class DetalheClienteComponent implements OnInit {

  clienteAtual: Cliente;

  constructor(private _params: NavParams, private _viewCtrl: ViewController) {
    this.clienteAtual = this._params.get('cliente') ? this._params.get('cliente') as Cliente : new Cliente();
  }

  ngOnInit() {
  }

  fechar() {
    this._viewCtrl.dismiss();
  }

  excluir() {
    this._viewCtrl.dismiss(this.clienteAtual);
  }

}
