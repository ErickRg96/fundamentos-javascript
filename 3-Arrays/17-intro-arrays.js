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

for (var i = 0; i < personas.length; i++){
    let persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura}`);
}