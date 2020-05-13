var erick = {
    nombre: 'Erick',
    apeliido: 'Reyes',
    edad: 24
}

var dario = {
    nombre : 'Dario',
    apellido : 'Esteban',
    edad: 27
}


function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());  
}

imprimirNombreEnMayusculas(erick);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre : 'Pepito' });

function imprimirNombreYedad(persona) {
    //Hola, me llamo Erick y tengo 24 años
    var { nombre, edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYedad(erick);