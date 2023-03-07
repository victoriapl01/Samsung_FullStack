"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
//Buscar persona por DNI
function buscarPorDni(personas, dni) {
    for (var i = 0; i < personas.length; i++) {
        if (personas[i].dni === dni) {
            return personas[i];
        }
    }
    return null;
}
var personas = [];
// Creamos 3 registros de persona
var persona1 = new persona_1.Persona('Juan', 'Pérez', 35, '12345678A', '10/10/2001');
var persona2 = new persona_1.Persona('María', 'García', 28, '87654321B');
var persona3 = new persona_1.Persona('Pedro', 'López', 42, '56789012C');
// Añadimos direcciones, teléfonos y correos a las personas
persona1.agregarDireccion(new direccion_1.Direccion("Calle Mayor", 1, "", "", 28001, "Madrid", "Madrid"));
persona1.agregarTelefono(new telefono_1.Telefono("Móvil", 666555444));
persona1.agregarMail(new mail_1.Mail("Personal", "juan.perez@mail.com"));
persona2.agregarDireccion(new direccion_1.Direccion("Avenida de la Albufera", 100, "1º", "A", 28018, "Madrid", "Madrid"));
persona2.agregarTelefono(new telefono_1.Telefono("Trabajo", 912345678));
persona2.agregarMail(new mail_1.Mail("Trabajo", "maria.garcia@empresa.com"));
persona3.agregarDireccion(new direccion_1.Direccion("Plaza España", 5, "3º", "B", 50001, "Zaragoza", "Zaragoza"));
persona3.agregarTelefono(new telefono_1.Telefono("Casa", 976123456));
persona3.agregarMail(new mail_1.Mail("Personal", "pedro.lopez@mail.com"));
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
// Mostramos los datos de las personas en la consola
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
// Buscamos la persona por su DNI
var personaModificada = buscarPorDni(personas, "23456789B");
// Añadimos una nueva dirección, un nuevo teléfono y un nuevo correo a la persona encontrada
personaModificada.addDireccion(new direccion_1.Direccion("Calle Gran Vía", 100, "", "", 28013, "Madrid", "Madrid"));
personaModificada.addTelefono(new telefono_1.Telefono("Casa", 911234567));
personaModificada.addCorreo(new mail_1.Mail("Personal", "maria.garcia@mail.com"));
// Mostramos los datos de las personas en la consola
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
