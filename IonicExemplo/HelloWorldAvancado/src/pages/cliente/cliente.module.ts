import { ClienteService } from './cliente.service';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { FiltroTabelaPipe } from './filtro-tabela.pipe';
import { IonicModule } from "ionic-angular";

@NgModule({
  imports: [
    IonicModule.forRoot(ListaComponent)
  ],
  declarations: [ListaComponent, DetalheClienteComponent, FormularioClienteComponent, FiltroTabelaPipe],
  entryComponents: [ListaComponent, DetalheClienteComponent, FormularioClienteComponent],
  providers: [ClienteService]
})
export class ClienteModule { }