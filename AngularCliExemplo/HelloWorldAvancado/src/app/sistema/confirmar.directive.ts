import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmar]'
})
export class ConfirmarDirective {

  @HostListener('click', ['$event'])
  confirm(event: Event) {
    let confirmar = window.alert('Ação sem retorno!');
  }

}