var erick = {
    nombre: 'Erick',
    apellido: 'Reyes',
    edad: 24,
    ingeniero: false,
    cocinero: true,
    cantante: false,
    dj:true
}

const MAYORIA_DE_EDAD =18

function esMayorDeEdad(edad) {
    return edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad({ nombre, edad }) {
    if (esMayorDeEdad(edad)){
        console.log(`${nombre} es mayor de edad`);
    } else {
        console.log(`${nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(erick);