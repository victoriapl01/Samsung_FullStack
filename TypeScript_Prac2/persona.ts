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
};