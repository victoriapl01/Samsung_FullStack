import { Direccion } from './direccion.js';
import { Telefono } from './telefono.js';
import { Mail } from './mail.js';

export class Persona{
    nombre: string;
    apellido: string;
    edad: number;
    dni: string; 
    cumpleaños: string;
    colorFavorito: string;
    sexo: string;
    direcciones: Direccion[]; //Clase Direccion
    mails: Mail[];            //Clase  Mail  
    telefonos: Telefono[];    //Clase Telefono   
    notas: string[];          

    //Inicializa los valores de los atributos
    constructor(    
        nombre: string,      //No hay valor por defecto es obligatorio pasarlo
        apellido: string="", //Valor por defecto 
        edad: number=0,
        dni: string="",       
        cumpleaños: string='0/0/0',
        colorFavorito: string="",
        sexo: string="",
        direcciones: Direccion[]= [], //Lista Clase Direccion
        mails: Mail[] = [],            //Lista Clase  Mail  
        telefonos: Telefono[] = [],    //Lista Clase Telefono   
        notas: string[] =[] 
    ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
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
    getCumpleaños(): string{
        return this.cumpleaños;
    }

    setCumpleaños(cumpleaños:string):void{
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

    agregarDireccion(direccion:Direccion):void{
        this.direcciones.push(direccion);
    }
    eliminarDireccion(indice:number):void{
        this.direcciones.splice(indice, 1)
    }

    //Mails
    getMails(): Mail[]{
        return this.mails;
    }

    agregarMail(correo:Mail): void{
        this.mails.push(correo);
    }
    eliminarMail(indice:number):void{
        this.mails.splice(indice,1);
    }

    //Telefono
    getTelefonos(): Telefono[]{
        return this.telefonos;
    }

    agregarTelefono(telefono:Telefono):void{
        this.telefonos.push(telefono);
    }
    eliminarTelefono(indice:number):void{
        this.telefonos.splice(indice,1);
    }

    //Notas
    getNotas(): string[]{
        return this.notas;
    }

    setNotas(notas:string[]):void{
        this.notas = notas;
    }

};