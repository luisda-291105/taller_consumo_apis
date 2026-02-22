const urlApi = `https://pokeapi.co/api/v2/pokemon/`;

for (let index = 1; index < 151; index++) {
    fetch(urlApi + index)
        .then((response) => response.json())
        .then((data) => data)
        .catch((e) => console.error(e));
}
