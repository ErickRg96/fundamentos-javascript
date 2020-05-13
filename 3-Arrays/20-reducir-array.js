var erick = {
    nombre: 'Erick',
    apellido: 'Reyes',
    edad: 24,
    altura: 1.67,
    cantidadDeLibros: 78
}

var clifort = {
    nombre: 'Clifort',
    apellido: 'Collins',
    edad: 19,
    altura: 1.58,
    cantidadDeLibros: 68
}

var paula = {
    nombre: 'Paula',
    apellido: 'Benavides',
    edad: 21,
    altura: 1.72,
    cantidadDeLibros: 159
}

var natalia = {
    nombre: 'Natalia',
    apellido: 'Lizcano',
    edad: 18,
    altura: 1.82,
    cantidadDeLibros: 34
}

var jhonatan = {
    nombre: 'Jhonatan',
    apellido: 'Lizcano',
    edad: 19,
    altura: 1.93,
    cantidadDeLibros: 101
}

var personas = [erick, clifort, paula, natalia, jhonatan]

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`);