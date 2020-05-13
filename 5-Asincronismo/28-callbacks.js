const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 10)}`;
const opts = { crossDomain: true }

const onPeopleResponse = (data) => {
    console.log(`Hola, yo soy ${data.name}`);
}

$.get(lukeUrl, opts, onPeopleResponse);