var erick = {
    nombre: 'Erick',
    apellido: 'Reyes',
    edad: 24,
    peso: 65
}

const DIFERENCIA_PESO = 0.3

const aumentarDePeso = (persona) => persona.peso += DIFERENCIA_PESO;
const disminuyeDePeso = (persona) => persona.peso -= DIFERENCIA_PESO;

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = erick.peso -3
var dias = 0

while(erick.peso > META){
    if (comeMucho()) {
        aumentarDePeso(erick)
    }
    if (realizaDeporte) {
        disminuyeDePeso(erick)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${erick.nombre} bajo 3 kg`);

