class Telefono{
    tipo: string;
    numero: number;

    constructor(tipo: string, numero: number){
        this.tipo = tipo;
        this.numero = numero;
    }

    //METODOS
    //GETTERS Y SETTERS
    

    //Tipo
    getTipoTel():string{
        return this.tipo;
    }
    
    setTipoTel(tipo:string):void{
        this.tipo = tipo;
    }

    //Numero
    getNumeroTel():number{
        return this.numero;
    }

    setNumeroTel(numero:number):void{
        this.numero = numero;
    }

};