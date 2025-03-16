import data from "./data.js";
import WeatherCities from "./weather-cities.js";

let showFirst = document.querySelector("#show-first");
let showLast = document.querySelector("#show-last");
let exportWeather = document.querySelector("#export-weather");

let cityCountry = document.querySelector("#city-country");
let icon = document.querySelector("#icon");
let temperature = document.querySelector("#temperature");
let exportOutput = document.querySelector("#export-output");
let noDataImage =
  "https://basmilius.github.io/weather-icons/production/fill/all/haze-day.svg";

let weatherCities = new WeatherCities(data);

function render(city) {
  const cityName = city?.location?.name ?? "Город не выбран";
  const countryName = city?.location?.country ?? "";
  const weatherIcon = city?.current?.weather_icons[0] ?? noDataImage;
  const temp = city?.current?.temperature ?? "Температура не найдена";

  cityCountry.textContent = `${cityName} ${countryName}`;
  icon.src = weatherIcon;
  temperature.innerHTML = `${temp}&deg;C`;
}

showFirst.addEventListener("click", function () {
  let city = weatherCities.getFirst();
  render(city);
});

showLast.addEventListener("click", function () {
  let city = weatherCities.getLast();
  render(city);
});

exportWeather.addEventListener("click", function () {
  let csv = weatherCities.exportCsv();
  exportOutput.textContent = csv;

  let city = weatherCities.getLast();
  render(city);
});

render();
