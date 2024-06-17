// function getCelciusTemperature(response) {
//   celsiusTemperature = document.querySelector(".app-temperature-unit");
//   let celsiusTemp = Math.round(
//     ((response.data.temperature.current - 32) * 5) / 9
//   );
//   celsiusTemperature.innerHTML = celsiusTemp;
// }

// let celsiusTemperature = document.querySelector("#app-temperature-unit");
// celsiusTemperature.addEventListener("click", getCelciusTemperature);

// function getWeather(response) {
//   let temperatureElement = document.querySelector("#app-temperature-value");
//   let temperature = Math.round(response.data.temperature.current);
//   let cityElement = document.querySelector("#app-city");

//   cityElement.innerHTML = response.data.city;
//   temperatureElement.innerHTML = temperature;
// }

// function searchCity(city) {
//   let apiKey = "58f3tbaa2acbfcb0981e0ecb4ba2453o";
//   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
//   axios.get(apiUrl).then(getWeather);
// }

// function handleSearchSubmit(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-form-input");

//   searchCity(searchInput.value);
// }

// let searchFormElement = document.querySelector("#search-form");
// searchFormElement.addEventListener("submit", handleSearchSubmit);

function getCelsiusTemperature(event) {
  event.preventDefault();
  units = "metric";
  searchCity(lastSearchedCity);
}

let celsiusTemperature = document.querySelector("#app-temperature-unit");
celsiusTemperature.addEventListener("click", getCelsiusTemperature);

function getWeather(response) {
  let temperatureElement = document.querySelector("#app-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#app-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "58f3tbaa2acbfcb0981e0ecb4ba2453o";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
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

let units = "imperial";
let lastSearchedCity = "Orlando";

searchCity(lastSearchedCity);
