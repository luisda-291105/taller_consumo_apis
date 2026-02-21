export async function ObtenerClima(city) {
    const apiKey = `625da1110932688dd5055a71d021ca41`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const imgCodigo =  data.weather[0].icon;

        ObtenerImagen(imgCodigo);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export function ObtenerImagen(data) {
    if (!data) {
        console.log("no se recivio el codigo de la imagen ");
        return null;
    }
    const iconCodigo = data;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCodigo}@2x.png`;
    return iconUrl;
}
