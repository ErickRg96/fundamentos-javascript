var erick = {
    nombre: 'Erick',
    apellido: 'Reyes',
    edad: 24,
    ingeniero: false,
    cocinero: true,
    cantante: false,
    dj:true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);

    if(persona.ingeniero) {
        console.log('Ingeniero');
    } else {
        console.log('No es ingeniero');
    }
    if(persona.cocinero) {
        console.log('Cocinero');
    }
    if(persona.cantante) {
        console.log('Cantane');
    }
    if(persona.dj) {
        console.log('Dj');
    }
}

imprimirProfesiones(erick);

function imprimirSiEsMayorDeEdad({ nombre, edad }) {
    if (edad >= 24){
        console.log(`${nombre} es mayor de edad`);
    } else {
        console.log(`${nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(erick);