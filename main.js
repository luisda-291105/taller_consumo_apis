import { ObtenerClima } from "./obtenerClima.js";


const searchINPUT = document.querySelector("#ciudad-input");
const searchBTN = document.querySelector("#buscar-btn");
const errorMensaje = document.querySelector("#error-mensaje");
const climaIcono = document.querySelector("#clima-icono");

searchBTN.addEventListener("click" , () => {
    ObtenerClima(searchINPUT.value)
})