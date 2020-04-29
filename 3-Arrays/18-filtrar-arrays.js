var erick = {
    nombre: 'Erick',
    apellido: 'Reyes',
    edad: 24,
    altura: 1.67

}

var clifort = {
    nombre: 'Clifort',
    apellido: 'Collins',
    edad: 19,
    altura: 1.58

}

var paula = {
    nombre: 'Paula',
    apellido: 'Benavides',
    edad: 21,
    altura: 1.72

}

var natalia = {
    nombre: 'Natalia',
    apellido: 'Lizcano',
    edad: 18,
    altura: 1.82
}

var jhonatan = {
    nombre: 'Jhonatan',
    apellido: 'Lizcano',
    edad: 19,
    altura: 1.93
}

var personas = [erick, clifort, paula, natalia, jhonatan]

const esAlta = ({ altura }) => altura >= 1.80
const esBaja = persona => persona.altura < 1.80

var personasAltas = personas.filter(esAlta)

var personasBajas = personas.filter(esBaja)

console.log(personasAltas);
console.log(personasBajas);