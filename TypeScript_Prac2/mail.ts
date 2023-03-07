class Mail{
    tipo: string;
    direccion: string; 

    constructor(tipo:string, direccion:string){
        this.tipo = tipo;
        this.direccion = direccion;
    }

    //METODOS
    //GETTERS Y SETTERS
    

    //Tipo
    getTipoMail():string{
        return this.tipo;
    }
    
    setTipoMail(tipo:string):void{
        this.tipo = tipo;
    }

    //Direccion
    getDireccionMail():string{
        return this.direccion;
    }

    setDireccionMail(direccion:string):void{
        this.direccion = direccion;
    }

};