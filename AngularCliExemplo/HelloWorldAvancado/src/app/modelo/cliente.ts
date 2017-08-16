export class Cliente {
    Nome:String;
    Sobrenome:String;
    NomeComposto:Boolean;
    Codigo:Number;
    DataCriacao:Date;

    constructor(valores:any = null){
        Object.assign(this, valores);
    }

    
}
