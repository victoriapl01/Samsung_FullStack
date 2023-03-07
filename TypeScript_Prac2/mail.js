"use strict";
exports.__esModule = true;
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    //METODOS
    //GETTERS Y SETTERS
    //Tipo
    Mail.prototype.getTipoMail = function () {
        return this.tipo;
    };
    Mail.prototype.setTipoMail = function (tipo) {
        this.tipo = tipo;
    };
    //Direccion
    Mail.prototype.getDireccionMail = function () {
        return this.direccion;
    };
    Mail.prototype.setDireccionMail = function (direccion) {
        this.direccion = direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
;
