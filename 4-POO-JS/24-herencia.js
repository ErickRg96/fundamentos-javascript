function heredaDe (prototipoHijo, prototipoPadre) {
    var fn = function () {}

    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} y soy desarrollador/a`);
}

var erick = new Persona('Erick', 'Reyes', 1.67);
var sacha = new Persona('Sacha', 'Lifszyc', 1.81)
var arturo = new Desarrollador('Arturo', 'Lifszyc', 1.91)