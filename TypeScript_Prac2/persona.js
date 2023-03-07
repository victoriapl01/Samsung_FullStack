"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    //Inicializa los valores de los atributos
    function Persona(nombre, //No hay valor por defecto es obligatorio pasarlo
    apellido, //Valor por defecto 
    edad, dni, cumpleaños, colorFavorito, sexo, direcciones, //Lista Clase Direccion
    mails, //Lista Clase  Mail  
    telefonos, //Lista Clase Telefono   
    notas) {
        if (apellido === void 0) { apellido = ""; }
        if (edad === void 0) { edad = 0; }
        if (dni === void 0) { dni = ""; }
        if (cumpleaños === void 0) { cumpleaños = '0/0/0'; }
        if (colorFavorito === void 0) { colorFavorito = ""; }
        if (sexo === void 0) { sexo = ""; }
        if (direcciones === void 0) { direcciones = []; }
        if (mails === void 0) { mails = []; }
        if (telefonos === void 0) { telefonos = []; }
        if (notas === void 0) { notas = []; }
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    //METODOS
    //GETTERS Y SETTERS
    //Nombre
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    //Apellido
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    //Edad
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    //DNI
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.setDNI = function (dni) {
        this.dni = dni;
    };
    //Cumpleaños
    Persona.prototype.getCumpleaños = function () {
        return this.cumpleaños;
    };
    Persona.prototype.setCumpleaños = function (cumpleaños) {
        this.cumpleaños = cumpleaños;
    };
    //Color Favorito
    Persona.prototype.getColorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.setColorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    //Sexo
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    //Debería incluir una no modificar todas... set??
    //Direcciones
    Persona.prototype.getDirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.eliminarDireccion = function (indice) {
        this.direcciones.splice(indice, 1);
    };
    //Mails
    Persona.prototype.getMails = function () {
        return this.mails;
    };
    Persona.prototype.agregarMail = function (correo) {
        this.mails.push(correo);
    };
    Persona.prototype.eliminarMail = function (indice) {
        this.mails.splice(indice, 1);
    };
    //Telefono
    Persona.prototype.getTelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    Persona.prototype.eliminarTelefono = function (indice) {
        this.telefonos.splice(indice, 1);
    };
    //Notas
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    return Persona;
}());
exports.Persona = Persona;
;
