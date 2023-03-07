class Direccion{
    calle: string;
    numero: number;
    piso: string;
    letra: string;
    codigoPostal: number;
    poblacion: string;
    provincia: string; 

    constructor(
        calle: string,
        numero: number,
        piso: string,
        letra: string,
        codigoPostal: number,
        poblacion: string,
        provincia: string
    ){
        this.calle = calle;
        this.numero = numero;
        this.piso = piso; 
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }


    
    //METODOS
    //GETTERS Y SETTERS
    
    //Calle
    getCalle(): string{
        return this.calle;
    }

    setCalle(calle:string):void{
        this.calle = calle;
    }

    //Numero
    getNumero(): number{
        return this.numero;
    }

    setNumero(numero:number):void{
        this.numero = numero;
    }

    //Piso
    getPiso(): string{
        return this.piso;
    }

    setPiso(piso: string):void{
        this.piso = piso;
    }

    //Letra
    getLetra():string{
        return this.letra;
    }

    setLetra(letra:string):void{
        this.letra = letra;
    }

    //Codigo Postal
    getCodigoPostal():number{
        return this.codigoPostal;
    }

    setCodigoPostal(codigoPostal:number):void{
        this.codigoPostal = codigoPostal;
    }

    //Poblacion
    getPoblacion():string{
        return this.poblacion;
    }

    setPoblacion(poblacion:string):void{
        this.poblacion = poblacion;
    }

    //Provincia
    getProvincia():string{
        return this.provincia;
    }

    setProvincia(provincia:string):void{
        this.provincia = provincia;
    }

};