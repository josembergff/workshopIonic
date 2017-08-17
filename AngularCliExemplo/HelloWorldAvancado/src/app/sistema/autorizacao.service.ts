import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

@Injectable()
export class AutorizacaoService implements CanActivate, CanLoad {

    constructor(
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        return this.verificarAcesso(state.url);
    }

    private verificarAcesso(urlAtual?: string) {
        // if (!this.param.usuarioEstaAutenticado()) {
        //     this.router.navigate(['/usuarios/autenticar']);
        //     return false;
        // }

        return true;

    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        return this.verificarAcesso();
    }

}