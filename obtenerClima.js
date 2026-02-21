export async function ObtenerClima(city) {
    const apiKey = `625da1110932688dd5055a71d021ca41`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        ObtenerImagen(data.weather[0].icon);

        return data;
    } catch (error) {
        console.error(error);
    }
}

export function ObtenerImagen(data) {
    try {
        const iconCodigo = data;
        console.log(iconCodigo);
        const iconUrl = `https://openweathermap.org/img/wn/${iconCodigo}@2x.png`;

        return iconUrl;
    } catch (error) {
        console.error(error);
    }
}
