import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AutorizacaoService } from "app/sistema/autorizacao.service";

const objetivosRotas = [
    { path: ':codigo', component: DetalheClienteComponent, canActivate: [AutorizacaoService] },
    { path: '', component: ListaComponent, canActivate: [AutorizacaoService] }

];

@NgModule({
    imports: [RouterModule.forChild(objetivosRotas)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
