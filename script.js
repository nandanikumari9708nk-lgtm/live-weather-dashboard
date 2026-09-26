const API_KEY = "";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weather = document.getElementById("weather");
const forecast = document.getElementById("forecast");

searchBtn.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        weather.innerHTML = "<p>Please enter a city name.</p>";
        forecast.innerHTML = "";
        return;
    }

    weather.innerHTML = "<p>Loading weather...</p>";

    try {
        const currentURL =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await fetch(currentURL);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        weather.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
            <h3>${data.main.temp}°C</h3>
            <p>${data.weather[0].description}</p>
        `;

        forecast.innerHTML = "<h2>5-Day Forecast</h2>";

    } catch (error) {
        weather.innerHTML = `<p>${error.message}</p>`;
        forecast.innerHTML = "";
    }
}
