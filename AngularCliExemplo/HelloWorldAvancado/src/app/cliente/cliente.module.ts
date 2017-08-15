import { FormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaComponent],
  exports:[ListaComponent],
  providers:[ClienteService]
})
export class ClienteModule { }
