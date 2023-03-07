class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    dni: string; 
    cumpleaños: Date;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[]; //Clase Direccion
    mails: Mail[];            //Clase  Mail  
    telefonos: Telefono[];    //Clase Telefono   
    notas: string[];          

    //Inicializa los valores de los atributos
    constructor(    
        nombre: string,
        apellido: string,
        edad: number,
        dni: string,
        cumpleaños: Date,
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion[], //Clase Direccion
        mails: Mail[],            //Clase  Mail  
        telefonos: Telefono[],    //Clase Telefono   
        notas: string[]  
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos=telefonos;
        this.notas = notas;
    }

    //METODOS
    //GETTERS Y SETTERS

    //Nombre
    getNombre(): string{
        return this.nombre;
    }

    setNombre(nombre : string): void{
        this.nombre = nombre;
    }
    
    //Apellido
    getApellido(): string{
        return this.apellido;
    }

    setApellido(apellido : string): void{
        this.apellido = apellido;
    }

    //Edad
    getEdad(): number{
        return this.edad;
    }

    setEdad(edad: number){
        this.edad = edad;
    }

    //DNI
    getDNI(): string{
        return this.dni;
    }

    setDNI(dni:string):void{
        this.dni = dni;
    }

    //Cumpleaños
    getCumpleaños(): Date{
        return this.cumpleaños;
    }

    setCumpleaños(cumpleaños:Date):void{
        this.cumpleaños = cumpleaños;
    }

    //Color Favorito
    getColorFavorito():string{
        return this.colorFavorito;
    }

    setColorFavorito(colorFavorito:string):void{
        this.colorFavorito = colorFavorito
    }

    //Sexo
    getSexo():string{
        return this.sexo;
    }

    setSexo(sexo:string):void{
        this.sexo = sexo;
    }
    

    //Debería incluir una no modificar todas... set??
    //Direcciones
    getDirecciones(): Direccion[]{
        return this.direcciones;
    }

    setDirecciones(direcciones: Direccion[]):void{
        this.direcciones = direcciones;
    }

    //Mails
    getMails(): Mail[]{
        return this.mails;
    }

    setMails(mails: Mail[]):void{
        this.mails = mails;
    }

    //Telefono
    getTelefonos(): Telefono[]{
        return this.telefonos;
    }

    setTelefono(telefonos: Telefono[]): void{
        this.telefonos = telefonos;
    }

    //Notas
    getNotas(): string[]{
        return this.notas;
    }

    setNotas(notas:string[]):void{
        this.notas = notas;
    }



};