import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarDirective } from "app/sistema/confirmar.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConfirmarDirective],
  exports: [ConfirmarDirective]
})
export class ComumModule { }
