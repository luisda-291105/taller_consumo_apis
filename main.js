import { ObtenerClima, ObtenerImagen } from "./obtenerClima.js";

const searchINPUT = document.querySelector("#ciudad-input");
const searchBTN = document.querySelector("#buscar-btn");


searchBTN.addEventListener("click", initAPP);
searchINPUT.addEventListener("keydown" , (even) => {
    if (even.key === "Enter") {
        initAPP()
    }
})

function initAPP() {
    // envio todos los datos del clima
    ObtenerClima(searchINPUT.value).then((clima) => {
        document.querySelector("#temperatura").textContent = `${Math.round(clima.main.temp)} -°C`;
        document.querySelector("#ciudad-nombre").textContent = clima.name;
        document.querySelector("#humedad").textContent = `${clima.main.humidity} -%`;
        document.querySelector("#viento").textContent = `${clima.wind.speed} -km/h`;
    })
    // info de la imagen usando la misma api
    let urlImagen = ObtenerImagen();
    document.querySelector("#clima-icono").src = urlImagen;
}