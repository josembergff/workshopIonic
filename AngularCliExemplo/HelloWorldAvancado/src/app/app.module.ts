import { ClienteModule } from './cliente/cliente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app.routing.module";
import { AutorizacaoService } from "app/sistema/autorizacao.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClienteModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-BR" },
    AutorizacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
