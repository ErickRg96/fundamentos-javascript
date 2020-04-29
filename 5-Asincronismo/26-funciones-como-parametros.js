class Persona{
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var { nombre, apellido } = this
        // var nombre = this.nombre
        // var apelllido = this.apelllido
        
        console.log(`Hola, me llamo ${nombre}`);

        if (fn) {
            fn(nombre, apellido, null);
        }
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

    saludar(fn) {
        var { nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} y soy desarrollador/a`);

        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

function responerSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre}`);

    if (esDev){
        console.log('No sabia que eras developer');
    }
}

var erick = new Persona('Erick', 'Reyes', 1.67)
var sacha = new Persona('Sacha', 'Lifszyc', 1.81)
var arturo = new Desarrollador('Arturo', 'Lifszyc', 1.91)

erick.saludar();
sacha.saludar(responerSaludo);
arturo.saludar(responerSaludo);