const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise ((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

obtenerPersonaje(1888)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`);
    })
    .catch(function(id) {
        console.log(`El id ${id} es invalido`);
    })