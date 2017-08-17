webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClienteService = (function () {
    function ClienteService() {
    }
    ClienteService.prototype.listaCliente = function () {
        var retorno = new Array();
        retorno.push(new __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__["a" /* Cliente */]({ Codigo: Math.floor((Math.random() * 100) + 1), Nome: "Cliente 1", Sobrenome: "primeiro", DataCriacao: new Date() }));
        retorno.push(new __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__["a" /* Cliente */]({ Codigo: Math.floor((Math.random() * 100) + 1), Nome: "Cliente 2", Sobrenome: "segundo", DataCriacao: new Date() }));
        return retorno;
    };
    return ClienteService;
}());
ClienteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ClienteService);

//# sourceMappingURL=cliente.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formulario_cliente_formulario_cliente_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detalhe_cliente_detalhe_cliente_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListaComponent = (function () {
    function ListaComponent(servicoCliente, _modalCtrl) {
        this.servicoCliente = servicoCliente;
        this._modalCtrl = _modalCtrl;
        this.nomeLista = "Lista de Clientes";
        this.listagem = this.servicoCliente.listaCliente();
    }
    ListaComponent.prototype.ngOnInit = function () { };
    ListaComponent.prototype.abrirCliente = function (cliente) {
        var _this = this;
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__detalhe_cliente_detalhe_cliente_component__["a" /* DetalheClienteComponent */], { cliente: cliente });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.excluirCliente(data);
            }
        });
        modal.present();
    };
    ListaComponent.prototype.excluirCliente = function (cliente) {
        // let busca = this.listagem.indexOf(cliente);
        // this.listagem.splice(busca, 1);
        this.listagem = __WEBPACK_IMPORTED_MODULE_4_lodash__["remove"](this.listagem, function (n) {
            return n == cliente;
        });
        this.clienteAtual = null;
    };
    ListaComponent.prototype.adicionarCliente = function () {
        var _this = this;
        var modal = this._modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__formulario_cliente_formulario_cliente_component__["a" /* FormularioClienteComponent */]);
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.cadastroCliente(data);
            }
        });
        modal.present();
    };
    ListaComponent.prototype.cadastroCliente = function (cliente) {
        cliente.DataCriacao = new Date();
        cliente.Codigo = Math.floor((Math.random() * 100) + 1);
        this.listagem.push(cliente);
        this.filtroAtual = "";
    };
    return ListaComponent;
}());
ListaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-lista',template:/*ion-inline-start:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\cliente\lista\lista.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{nomeLista}}</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="adicionarCliente()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-searchbar [(ngModel)]="filtroAtual" [showCancelButton]="true">\n\n    </ion-searchbar>\n\n    <ion-list>\n\n        <button ion-item *ngFor=\'let cliente of listagem | filtroTabela:filtroAtual\' (click)="abrirCliente(cliente)">\n\n      \n\n      {{cliente.Nome}}\n\n      <div class="item-note" item-right>\n\n        {{cliente.DataCriacao | date:"dd MMMM yyyy"}}\n\n      </div>\n\n    </button>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="listagem.length <= 0">\n\n        Sem clientes\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\cliente\lista\lista.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cliente_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* ModalController */]])
], ListaComponent);

//# sourceMappingURL=lista.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormularioClienteComponent = (function () {
    function FormularioClienteComponent(_viewCtrl) {
        this._viewCtrl = _viewCtrl;
        this.cadastroCliente = new __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__["a" /* Cliente */]();
    }
    FormularioClienteComponent.prototype.ngOnInit = function () {
    };
    FormularioClienteComponent.prototype.fechar = function () {
        this._viewCtrl.dismiss();
    };
    FormularioClienteComponent.prototype.salvarCliente = function () {
        this._viewCtrl.dismiss(this.cadastroCliente);
    };
    return FormularioClienteComponent;
}());
FormularioClienteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-formulario-cliente',template:/*ion-inline-start:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\cliente\formulario-cliente\formulario-cliente.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="fechar()">\n\n            <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n        <ion-title>Cadastrar do cliente</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="padding">\n\n    <form #formularioCliente="ngForm" (ngSubmit)="salvarCliente()">\n\n        <ion-list>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Nome</ion-label>\n\n                <ion-input type="text" name="Nome" [(ngModel)]=\'cadastroCliente.Nome\' #Nome="ngModel"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Nome composto</ion-label>\n\n                <ion-toggle [(ngModel)]="cadastroCliente.NomeComposto" #NomeComposto="ngModel" [ngModelOptions]="{standalone:true}"></ion-toggle>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Sobernome</ion-label>\n\n                <ion-input type="text" name="Sobernome" [(ngModel)]=\'cadastroCliente.Sobernome\' [required]="cadastroCliente.NomeComposto" #Sobernome="ngModel"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <button ion-button color="default" [disabled]="formularioCliente.invalid">Salvar</button>\n\n            </ion-item>\n\n\n\n        </ion-list>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\cliente\formulario-cliente\formulario-cliente.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */]])
], FormularioClienteComponent);

//# sourceMappingURL=formulario-cliente.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalheClienteComponent = (function () {
    function DetalheClienteComponent(_params, _viewCtrl) {
        this._params = _params;
        this._viewCtrl = _viewCtrl;
        this.clienteAtual = this._params.get('cliente') ? this._params.get('cliente') : new __WEBPACK_IMPORTED_MODULE_0__modelo_cliente__["a" /* Cliente */]();
    }
    DetalheClienteComponent.prototype.ngOnInit = function () {
    };
    DetalheClienteComponent.prototype.fechar = function () {
        this._viewCtrl.dismiss();
    };
    DetalheClienteComponent.prototype.excluir = function () {
        this._viewCtrl.dismiss(this.clienteAtual);
    };
    return DetalheClienteComponent;
}());
DetalheClienteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-detalhe-cliente',template:/*ion-inline-start:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\cliente\detalhe-cliente\detalhe-cliente.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons left>\n\n            <button ion-button icon-only (click)="fechar()">\n\n            <ion-icon name="arrow-round-back"></ion-icon>\n\n      </button>\n\n        </ion-buttons>\n\n        <ion-title>Detalhes do cliente</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="padding">\n\n\n\n    <ion-list>\n\n        <ion-item> {{clienteAtual?.Nome}}</ion-item>\n\n        <ion-item> {{clienteAtual?.Sobrenome}}</ion-item>\n\n        <ion-item> {{clienteAtual?.DataCriacao | date:"dd MMMM yyyy"}}}}</ion-item>\n\n\n\n        <ion-item> <button ion-button color="danger" (click)="excluir($event)">Remover</button></ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\cliente\detalhe-cliente\detalhe-cliente.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */]])
], DetalheClienteComponent);

//# sourceMappingURL=detalhe-cliente.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, geolocation, alertCtrl) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.atualizarLocalizacao();
    }
    HomePage.prototype.atualizarLocalizacao = function (refresh) {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            if (refresh) {
                refresh.complete();
            }
        }).catch(function (error) {
            console.log('Error getting location', error);
            var alert = _this.alertCtrl.create({
                title: 'Falha na localização',
                subTitle: 'Falha ao obter a sua localização atual.',
                buttons: ['Entendido']
            });
            alert.present();
            if (refresh) {
                refresh.complete();
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Inicio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Aplicativo workshop Autotrac</h3>\n    <ion-refresher (ionRefresh)="atualizarLocalizacao($event)">\n        buscando localização...\n    </ion-refresher>\n    <ion-list>\n        <ion-item>Latitude: {{latitude}}</ion-item>\n        <ion-item>Longitude: {{longitude}}</ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cliente_cliente_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__pages_cliente_cliente_module__["a" /* ClienteModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* LOCALE_ID */], useValue: "pt-BR" },
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cliente_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_lista_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_cliente_detalhe_cliente_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulario_cliente_formulario_cliente_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filtro_tabela_pipe__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ClienteModule = (function () {
    function ClienteModule() {
    }
    return ClienteModule;
}());
ClienteModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__lista_lista_component__["a" /* ListaComponent */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__lista_lista_component__["a" /* ListaComponent */], __WEBPACK_IMPORTED_MODULE_3__detalhe_cliente_detalhe_cliente_component__["a" /* DetalheClienteComponent */], __WEBPACK_IMPORTED_MODULE_4__formulario_cliente_formulario_cliente_component__["a" /* FormularioClienteComponent */], __WEBPACK_IMPORTED_MODULE_5__filtro_tabela_pipe__["a" /* FiltroTabelaPipe */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__lista_lista_component__["a" /* ListaComponent */], __WEBPACK_IMPORTED_MODULE_3__detalhe_cliente_detalhe_cliente_component__["a" /* DetalheClienteComponent */], __WEBPACK_IMPORTED_MODULE_4__formulario_cliente_formulario_cliente_component__["a" /* FormularioClienteComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_0__cliente_service__["a" /* ClienteService */]]
    })
], ClienteModule);

//# sourceMappingURL=cliente.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroTabelaPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiltroTabelaPipe = (function () {
    function FiltroTabelaPipe() {
    }
    FiltroTabelaPipe.prototype.transform = function (lista, filtroGeral) {
        var retorno = lista;
        var dataPipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */]("pt-BR");
        if (filtroGeral && filtroGeral.length > 0) {
            var filtroRecebido_1 = filtroGeral.toString().toLowerCase();
            retorno = retorno.filter(function (item) { return item.Nome.toLowerCase().indexOf(filtroRecebido_1) >= 0
                || item.Sobrenome.toLowerCase().indexOf(filtroRecebido_1) >= 0
                || dataPipe.transform(item.DataCriacao, 'dd MMMM yyyy').toLowerCase().indexOf(filtroRecebido_1) >= 0; });
        }
        retorno = __WEBPACK_IMPORTED_MODULE_2_lodash__["orderBy"](retorno, ['Nome'], ['asc']);
        return retorno;
    };
    return FiltroTabelaPipe;
}());
FiltroTabelaPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filtroTabela'
    })
], FiltroTabelaPipe);

//# sourceMappingURL=filtro-tabela.pipe.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cliente_lista_lista_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: "Cliente", component: __WEBPACK_IMPORTED_MODULE_0__pages_cliente_lista_lista_component__["a" /* ListaComponent */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Fonte\workshop\IonicExemplo\HelloWorldAvancado\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = (function () {
    function Cliente(valores) {
        if (valores === void 0) { valores = null; }
        Object.assign(this, valores);
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map