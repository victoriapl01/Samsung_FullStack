import { Persona } from './persona';
import { Direccion } from './direccion';
import { Telefono } from './telefono';
import { Mail } from './mail';
    
    //Buscar persona por DNI
    function buscarPorDni(personas,dni) {
        for (let i = 0; i < personas.length; i++) {
          if (personas[i].dni === dni) {
            return personas[i];
          }
        }
        return null;
      }
      


let personas=[]
// Creamos 3 registros de persona
let persona1 = new Persona('Juan', 'Pérez', 35, '12345678A','10/10/2001');
let persona2 = new Persona('María', 'García', 28, '87654321B');
let persona3 = new Persona('Pedro', 'López', 42, '56789012C');
// Añadimos direcciones, teléfonos y correos a las personas
persona1.agregarDireccion(new Direccion("Calle Mayor", 1, "", "", 28001, "Madrid", "Madrid"));
persona1.agregarTelefono(new Telefono("Móvil", 666555444));
persona1.agregarMail(new Mail("Personal", "juan.perez@mail.com"));

persona2.agregarDireccion(new Direccion("Avenida de la Albufera", 100, "1º", "A", 28018, "Madrid", "Madrid"));
persona2.agregarTelefono(new Telefono("Trabajo", 912345678));
persona2.agregarMail(new Mail("Trabajo", "maria.garcia@empresa.com"));

persona3.agregarDireccion(new Direccion("Plaza España", 5, "3º", "B", 50001, "Zaragoza", "Zaragoza"));
persona3.agregarTelefono(new Telefono("Casa", 976123456));
persona3.agregarMail(new Mail("Personal", "pedro.lopez@mail.com"));


personas.push(persona1);
personas.push(persona2);
personas.push(persona3);
// Mostramos los datos de las personas en la consola
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

// Buscamos la persona por su DNI
let personaModificada = buscarPorDni(personas,"23456789B");

// Añadimos una nueva dirección, un nuevo teléfono y un nuevo correo a la persona encontrada
if (personaModificada !== null) {
    personaModificada.agregarDireccion(new Direccion("Calle Gran Vía", 100, "", "", 28013, "Madrid", "Madrid"));
    personaModificada.agregarTelefono(new Telefono("Casa", 911234567));
    personaModificada.agregarMail(new Mail("Personal", "maria.garcia@mail.com"));
  }
// Mostramos los datos de las personas en la consola
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
