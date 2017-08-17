import { Cliente } from '../../../modelo/cliente';
import { Component, OnInit } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html'
})
export class FormularioClienteComponent implements OnInit {

  cadastroCliente: Cliente;

  constructor(private _viewCtrl: ViewController) {
    this.cadastroCliente = new Cliente();
  }

  ngOnInit() {
  }

  fechar() {
    this._viewCtrl.dismiss();
  }

  salvarCliente() {
    this._viewCtrl.dismiss(this.cadastroCliente);
  }

}
