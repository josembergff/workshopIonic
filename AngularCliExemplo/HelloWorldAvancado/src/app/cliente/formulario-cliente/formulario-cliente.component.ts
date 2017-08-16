import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cliente } from "app/modelo/cliente";
import { FormGroup, NgForm } from "@angular/forms";

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  @Input() clienteAtual: Cliente;
  @Output() acaoCriar: EventEmitter<Cliente> = new EventEmitter<Cliente>();
  cadastroCliente: Cliente;

  constructor() {
    this.cadastroCliente = new Cliente();
  }

  ngOnInit() {
  }

  salvarCliente(form: any) {
    this.acaoCriar.next(this.cadastroCliente);
    this.cadastroCliente = new Cliente();
    form.reset();
  }

}
