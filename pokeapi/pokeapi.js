let body = document.querySelector("#body");
const urlApi = `https://pokeapi.co/api/v2/pokemon/`;

for (let index = 1; index < 151; index++) {
    fetch(urlApi + index)
        .then((response) => response.json())
        .then((poke) => {
            
                body.innerHTML += `
                    <div class="card" id="pokemon-card">
                        <p class="card-id">#${poke.id}</p>

                        <div class="card-sprite">
                            <!-- Con imagen: reemplaza el div por <img src="url_sprite" alt="nombre" /> -->
                            <img  src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}"/>
                            
                        </div>

                        <p class="card-name">— ${poke.name} —</p>

                        <div class="card-types">
                            <span class="type">tipo</span>
                        </div>

                        <div class="card-stats">
                            <div class="stat">
                                <p class="stat-label">Altura</p>
                                <p class="stat-value">${poke.height}</p>
                            </div>
                            <div class="stat">
                                <p class="stat-label">Peso</p>
                                <p class="stat-value">${poke.weight}</p>
                            </div>
                            <div class="stat">
                                <p class="stat-label">HP</p>
                                <p class="stat-value">—</p>
                            </div>
                            <div class="stat">
                                <p class="stat-label">Exp. base</p>
                                <p class="stat-value">—</p>
                            </div>
                        </div>
                    </div>
                `;
            
        })
        .catch((e) => console.error(e));
}
