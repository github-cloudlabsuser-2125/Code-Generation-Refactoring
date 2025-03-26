const apiKey = '77b3c9ee14bef7b6097ec01a833c37e8'; // Reemplaza con tu API key de OpenWeatherMap
const city = 'Madrid'; // Puedes cambiar la ciudad

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(`El clima en ${city} es:`);
        console.log(`Temperatura: ${data.main.temp}°C`);
        console.log(`Humedad: ${data.main.humidity}%`);
        console.log(`Descripción: ${data.weather[0].description}`);
    } catch (error) {
        console.error('Hubo un problema con la solicitud de fetch:', error);
    }
}

getWeather(city);