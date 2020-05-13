let signo = prompt('¿Cual es tu signo?');

switch (signo) {
    case 'acuario':
    case 'Acuario':
        console.log('Eres ACUARIO');
        break;

    case 'piscis':
    case 'Piscis':
        console.log('Eres PISCIS');
        break;

    case 'cancer':
    case 'Cancer':
        console.log('Eres CANCER');
        break;

    default:
        console.log('No se tu signo');
        break;
}