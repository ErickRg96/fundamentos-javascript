var x = 4, y = '4';

x == y // True
x === y // False

var erick = {
    nombre: 'Erick'
}

// var otraPersona = {
//     nombre: 'Erick'
// }

var otraPersona = erick

var otraPersona = {
    ...erick
}