import { ObtenerClima, ObtenerImagen } from "./obtenerClima.js";

const searchINPUT = document.querySelector("#ciudad-input");
const searchBTN = document.querySelector("#buscar-btn");
const contentClima = document.querySelector("#clima-info")
const mensajeError = document.querySelector("#error-mensaje")

searchBTN.addEventListener("click", initAPP);
searchINPUT.addEventListener("keydown" , (even) => {
    if (even.key === "Enter") {
        initAPP()
    }
})

async function initAPP() {

    const ciudad = searchINPUT.value.trim();
    
    // Validar que haya ingresado una ciudad
    if (!ciudad) {
        alert('Por favor ingresa una ciudad');
        return;
    }
    
    // Ocultar todo mientras carga
    contentClima.classList.add("d-none");
    mensajeError.classList.add("d-none");


    try {
        // ✅ UNA SOLA llamada a la API
        const data = await ObtenerClima(ciudad);
        
        // ✅ Validar si hay error
        if (!data || data.error) {
            mostrarError();
            return;
        }
        
        // ✅ Actualizar toda la UI con los datos
        actualizarUI(data);
        
    } catch (error) {
        console.error('Error inesperado:', error);
        mostrarError();
    }



}

function actualizarUI(clima) {
    // Actualizar textos
    document.querySelector("#temperatura").textContent = `${Math.round(clima.main.temp)}°C`;
    document.querySelector("#tiempo-atmosferico").textContent = clima.weather[0].description;
    document.querySelector("#ciudad-nombre").textContent = clima.name;
    document.querySelector("#humedad").textContent = `${clima.main.humidity}%`;
    document.querySelector("#viento").textContent = `${Math.round(clima.wind.speed * 3.6)} km/h`;
    
    // Actualizar imagen
    const urlImagen = ObtenerImagen(clima.weather[0].icon);
    if (urlImagen) {
        document.querySelector("#clima-icono").src = urlImagen;
    }
    
    // Mostrar clima y ocultar error
    contentClima.classList.remove("d-none");
    mensajeError.classList.add("d-none");
}

function mostrarError() {
    // Mostrar error y ocultar clima
    mensajeError.classList.remove("d-none");
    contentClima.classList.add("d-none");
}