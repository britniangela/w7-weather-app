let temperature = null;
function getCelciusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#app-temperature-value");
  console.log({ temperature });
  temperatureElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
  celsiusTemperature.classList.add("disabled");
  fahrenheitTemperature.classList.remove("disabled");
}

let celsiusTemperature = document.querySelector(
  "#app-temperature-celsius-unit"
);
celsiusTemperature.addEventListener("click", getCelciusTemperature);

function getFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#app-temperature-value");

  temperatureElement.innerHTML = temperature;
  celsiusTemperature.classList.remove("disabled");
  fahrenheitTemperature.classList.add("disabled");
}

let fahrenheitTemperature = document.querySelector(
  "#app-temperature-fahrenheit-unit"
);
fahrenheitTemperature.addEventListener("click", getFahrenheitTemperature);

function getWeather(response) {
  let temperatureElement = document.querySelector("#app-temperature-value");
  temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#app-city");
  let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let currentDayTimeElement = document.querySelector("#current-day-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  currentDayTimeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}mph`;
  temperatureElement.innerHTML = temperature;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="app-temperature-icon" />`;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "58f3tbaa2acbfcb0981e0ecb4ba2453o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(getWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  lastSearchedCity = searchInput.value;

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

let lastSearchedCity = "Orlando";

searchCity(lastSearchedCity);
