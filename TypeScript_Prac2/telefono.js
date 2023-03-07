"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    //METODOS
    //GETTERS Y SETTERS
    //Tipo
    Telefono.prototype.getTipoTel = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipoTel = function (tipo) {
        this.tipo = tipo;
    };
    //Numero
    Telefono.prototype.getNumeroTel = function () {
        return this.numero;
    };
    Telefono.prototype.setNumeroTel = function (numero) {
        this.numero = numero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
;
