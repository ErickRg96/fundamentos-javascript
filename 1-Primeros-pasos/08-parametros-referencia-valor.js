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

// Por referencia: Se modifica fuera de la funcion
// function cumpleaños(persona) {
//     persona.edad += 1;
// }

// Por valor: Se crea un obj nuevo y no se modifica el obj original
function cumpleaños(persona) {
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

var nuevaPersona = cumpleaños(erick);
