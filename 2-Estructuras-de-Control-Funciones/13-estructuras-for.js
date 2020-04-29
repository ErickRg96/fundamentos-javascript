var erick = {
    nombre: 'Erick',
    apellido: 'Reyes',
    edad: 24,
    peso: 65
}

console.log(`Al inicio del año ${erick.nombre} pesa ${erick.peso} kg`);

const DIFERENCIA_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = (persona) => persona.peso += DIFERENCIA_PESO;
const disminuyeDePeso = (persona) => persona.peso -= DIFERENCIA_PESO;


for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        // Aumenta peso
        aumentarDePeso(erick);

    } else if (random < 0.5){
        // Adelgaza
        disminuyeDePeso(erick)
    }
}

console.log(`Al final del año ${erick.nombre} pesa ${erick.peso.toFixed(1)} kg`);