const galeria = document.querySelector("#galeria");
const btnCargarMas = document.querySelector("#cargar-mas-btn");
const btnLimpiar = document.querySelector("#limpiar-btn");
const fotosCount = document.querySelector("#fotos-count");

// ✅ FIX #1: Se usa el total de fotos guardadas para calcular el slice correcto
// y así no repetir siempre las mismas 10 fotos
function ObtenerFotos() {
    const url = "https://jsonplaceholder.typicode.com/photos";

    fetch(url)
        .then((dato) => dato.json())
        .then((fotos) => {
            const cargadas = TotalCantidadFotos();
            const siguientesDiez = fotos.slice(cargadas, cargadas + 10);

            if (siguientesDiez.length === 0) {
                alert("No hay más fotos para cargar.");
                return;
            }

            FotosLocalStorage(siguientesDiez);
            ContadorFotosLocalStorage(siguientesDiez.length);
            MostrarFotos(siguientesDiez);
            MostrarCantidad();
        })
        .catch((e) => {
            console.error(e);
        });
}

function MostrarFotos(fotos) {
    fotos.forEach((foto) => {
        galeria.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${foto.url}" class="card-img-top" alt="${foto.title}">
                <div class="card-body">
                    <p class="card-text">${foto.title}</p>
                </div>
            </div>
        `;
    });
}

function FotosLocalStorage(fotos) {
    let fotosGuardadas = JSON.parse(localStorage.getItem("fotos")) || [];
    fotosGuardadas = fotosGuardadas.concat(fotos);
    localStorage.setItem("fotos", JSON.stringify(fotosGuardadas));
}

function ContadorFotosLocalStorage(cantidad) {
    let cantidadFotos = JSON.parse(localStorage.getItem("cantidadFotos")) || [];
    cantidadFotos = cantidadFotos.concat(cantidad);
    localStorage.setItem("cantidadFotos", JSON.stringify(cantidadFotos));
}

function TotalCantidadFotos() {
    let cantidadFotos = JSON.parse(localStorage.getItem("cantidadFotos"));

    if (!cantidadFotos || !Array.isArray(cantidadFotos)) {
        return 0;
    }

    return cantidadFotos.reduce((total, cantidad) => total + cantidad, 0);
}


function Limpiar() {
    galeria.innerHTML = "";
    localStorage.clear();
    fotosCount.innerHTML = "0";
}

function MostrarCantidad() {
    fotosCount.innerHTML = TotalCantidadFotos();
}

function cargarPredeterminada() {
    let fotos = JSON.parse(localStorage.getItem("fotos"));

    if (!fotos || !Array.isArray(fotos)) {
        return;
    }

    fotosCount.innerHTML = TotalCantidadFotos();
    MostrarFotos(fotos);
}

btnCargarMas.addEventListener("click", () => {
    ObtenerFotos();
});

btnLimpiar.addEventListener("click", () => {
    Limpiar();
});

document.addEventListener("DOMContentLoaded", cargarPredeterminada);