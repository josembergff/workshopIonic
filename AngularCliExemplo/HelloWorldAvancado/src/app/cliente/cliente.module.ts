import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaComponent, DetalheClienteComponent, FormularioClienteComponent],
  exports:[ListaComponent],
  providers:[ClienteService]
})
export class ClienteModule { }
