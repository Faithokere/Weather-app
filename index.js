let now = new Date();
document.getElementById("date-time").innerHTML = now.toUTCString();

function displayWeatherCondition(response) {
    console.log(response.data);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector(".temperature").innerHTML = Math.round(
        response.data.main.temp
    );

    document.querySelector(".humidity").innerHTML = `Humidity: ${response.data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `Wind: ${Math.round(
        response.data.wind.speed
    )}km/h`;
    document.querySelector(".description").innerHTML =
        response.data.weather[0].description;
    document.querySelector(".icon").setAttribute = ("src", `https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png`)
    document.querySelector(".temperatures").innerHTML = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        // document.querySelector(".temperatures").innerHTML = Math.round(response.data.main.temp);
}

function searchCity(city) {
    let apiKey = "a1ab3b15b4abf1ad094b36230d2fb290";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-input").value;
    searchCity(city);
}

function searchLocation(position) {
    let apiKey = "a1ab3b15b4abf1ad094b36230d2fb290";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#fahrenheit");
    temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#celsius");
    temperatureElement.innerHTML = 19;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Lagos");