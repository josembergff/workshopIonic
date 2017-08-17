import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizacaoService } from "app/sistema/autorizacao.service";

const appRotas: Routes = [
    { path: 'clientes', loadChildren: 'app/cliente/cliente.module#ClienteModule', canActivate: [AutorizacaoService] }
    //{ path: '', loadChildren: 'app/cliente/cliente.module#ClienteModule', canActivate: [AutorizacaoService] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRotas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
