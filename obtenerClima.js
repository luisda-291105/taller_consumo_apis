export function ObtenerClima(city) {
    const apiKey = `625da1110932688dd5055a71d021ca41`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then((d) => d.json())
        .then((dato) => {
            let datos = dato;
            console.log(datos);
        })
        .catch((e) => console.error(e));
}