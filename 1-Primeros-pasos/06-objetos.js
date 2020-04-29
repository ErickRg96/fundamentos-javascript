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


function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());  
}

imprimirNombreEnMayusculas(erick);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({ nombre : 'Pepito' });
