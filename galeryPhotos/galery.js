const galeria = document.querySelector("#galeria");
const btn = document.querySelector("button");

function odtenerDatos() {
    const url = "https://jsonplaceholder.typicode.com/photos";

    fetch(url)
        .then((dato) => dato.json())
        .then((fotos) => {
            const primerasDiez = fotos.slice(0 , 10)
            primerasDiez.forEach(foto => {
                galeria.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${foto.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${foto.title}</p>
                        </div>
                    </div>
                `;
            })
        })
        .catch((e) => {
            console.error(e);
        });
}

document.addEventListener("DOMContentLoaded", () => {
    odtenerDatos();
});
