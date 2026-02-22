const galeria = document.querySelector("#galeria");
const btnCargarMas = document.querySelector("#cargar-mas-btn");
const btnLimpiar = document.querySelector("#limpiar-btn");
const fotosCount = document.querySelector("#fotos-count");

function odtenerDatos() {
    const url = "https://jsonplaceholder.typicode.com/photos";

    fetch(url)
        .then((dato) => dato.json())
        .then((fotos) => {
            const primerasDiez = fotos.slice(0, 10);
            ContadorFotosLocalStorage(primerasDiez.length);
            primerasDiez.forEach((foto) => {
                galeria.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${foto.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${foto.title}</p>
                        </div>
                    </div>
                `;
            });
        })
        .catch((e) => {
            console.error(e);
        });
}

function ContadorFotosLocalStorage(cantidad) {
    let cantidadFotos = JSON.parse(localStorage.getItem("cantidadFotos")) || [];
    cantidadFotos.push(cantidad);

    localStorage.setItem("cantidadFotos", JSON.stringify(cantidadFotos));
}

function TotalCantidadFotos() {
    let cantidadFotos = JSON.parse(localStorage.getItem("cantidadFotos"));

    let sumaFotos = cantidadFotos.reduce((total, fotos) => total + fotos, 0);

    return sumaFotos;
}

function Limpiar() {
    galeria.innerHTML = "";
    let cantidadFotos = JSON.parse(localStorage.getItem("cantidadFotos"));

    cantidadFotos = localStorage.clear();

    fotosCount.innerHTML = "0"
}

btnCargarMas.addEventListener("click", () => {
    odtenerDatos();
    setTimeout(() => {
        let totalFotos = TotalCantidadFotos();
        fotosCount.innerHTML = totalFotos;
    }, 100);
});

btnLimpiar.addEventListener("click", () => {
    Limpiar();
});
