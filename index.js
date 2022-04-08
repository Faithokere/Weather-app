let now = new Date();
document.getElementById("date-time").innerHTML = now.toUTCString();


function displayWeatherCondition(response) {
    console.log(response.data);


    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector(".temperature");
    let humidityElement = document.querySelector(".humidity");
    let windElement = document.querySelector(".wind");
    let descriptionElement = document.querySelector(".description");
    let temperaturesElement = document.querySelector(".temperatures");
    // let iconElement = document.querySelector(".icon");
    celsiusTemperature = response.data.main.temp;

    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    humidityElement.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
    descriptionElement.innerHTML = response.data.weather[0].description;
    temperaturesElement.innerHTML = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    document.querySelector(".icon").setAttribute("src",
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
        // iconElement.setAttribute("src",
        //     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        // );
        // iconElement.setAttribute("alt", response.data.weather[0].description);

}

function searchCity(city) {
    let apiKey = "b37b587c92120cdb2ce8b541f6426713";
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

function showFahrenheitTemperture(event) {
    event.preventDefault();
    let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
    let currentDegree = document.querySelector("#temperature")
    currentDegree.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusTemperture(event) {
    event.preventDefault();
    let currentDegree = document.querySelector("#temperature");
    currentDegree.innerHTML = Math.round(celsiusTemperature);
}
let celsiusTemperature = null;

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFahrenheitTemperture)

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", showCelsiusTemperture);


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Lagos");


// function showFahrenheitTemperature(event) {
//     event.preventDefault();
//     let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
//     let temperatureElement = document.querySelector("#fahrenheit");
//     temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
//     celsiusLink.classList.remove("active");
//     fahrenheitLink.classList.add("active");
// }

// function showCelsius(event) {
//     event.preventDefault();
//     let temperatureElement = document.querySelector("#celsius");
//     temperatureElement.innerHTML = Math.round(celsiusTemperature);
//     celsiuslink.classList.add("active");
//     fahrenheitLink.classList.remove("active");
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", showCelsius);

// let celsiusTemperature = null;

// document.querySelector("#city").innerHTML = response.data.name;
// document.querySelector(".temperature").innerHTML = Math.round(
//     response.data.main.temp
// );

// document.querySelector(".humidity").innerHTML = `Humidity: ${response.data.main.humidity}%`;
// document.querySelector(".wind").innerHTML = `Wind: ${Math.round(
//     response.data.wind.speed
// )}km/h`;
// document.querySelector(".description").innerHTML =
//     response.data.weather[0].description;
// document.querySelector(".temperatures").innerHTML = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
// document.querySelector(".icon").setAttribute(
//     "src",
//     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
// );
// document.querySelector(".icon").setAttribute("alt", response.data.weather[0].description);
// document.querySelector(".temperatures").innerHTML = Math.round(response.data.main.temp);