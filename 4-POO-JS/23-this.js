function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar =  function () {
    console.log(`Hola, me llamo ${this.nombre}`);
}

Persona.prototype.soyAlto =  function () {
    if(this.altura >= 1.8){
        console.log(`Soy alto`);
    } else {
        console.log(`No soy alto`);
    }
}

// Persona.prototype.soyAlto = () => {
//     return this.altura >= 1.8
// }

var erick = new Persona('Erick', 'Reyes', 1.67);
var sacha = new Persona('Sacha', 'Lifszyc', 1.81)