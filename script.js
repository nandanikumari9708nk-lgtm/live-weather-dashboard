const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weather = document.getElementById("weather");
const forecast = document.getElementById("forecast");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        weather.innerHTML = "<p>Please enter a city name.</p>";
        forecast.innerHTML = "";
        return;
    }

    weather.innerHTML = `<p>Searching weather for ${city}...</p>`;
});
