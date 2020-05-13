class Persona{
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }

    soyAlto() {
        if(this.altura >= 1.8){
            console.log(`Soy alto`);
        } else {
            console.log(`No soy alto`);
        }
    }
}

class Desarrollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y soy desarrollador/a`);
    }
}

var erick = new Persona('Erick', 'Reyes', 1.67);
var sacha = new Persona('Sacha', 'Lifszyc', 1.81)
var arturo = new Desarrollador('Arturo', 'Lifszyc', 1.91)