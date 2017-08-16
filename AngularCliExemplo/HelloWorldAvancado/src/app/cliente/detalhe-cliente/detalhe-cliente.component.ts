import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from "app/modelo/cliente";

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit {

  @Input() clienteAtual: Cliente;
  @Output() acaoExcluir: any = new EventEmitter<Cliente>();

  constructor() { }

  ngOnInit() {
  }

  excluir(evento: any) {
    console.log("evento ", evento.returnValue);
    this.acaoExcluir.next(this.clienteAtual);
    this.clienteAtual = null;
  }

}
