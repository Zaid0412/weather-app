import "./style.css";
import { buildPage } from "./buildPage";

const locationInput = document.querySelector("#location");
const locationBtn = document.querySelector("#submit-location");
const dailyForecasts = document.querySelectorAll(".d");
const switchDegree = document.querySelector("#color_mode");

/// Functions ///
async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=2bf105dba24d48bfb9363440241106&q=${location}&days=7&aqi=no&alerts=no`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data;
}

locationBtn.addEventListener("click", function (e) {
  for (const d_ of dailyForecasts) {
    d_.classList.remove("active");
  }
  switchDegree.checked = false;

  e.preventDefault();
  let location = locationInput.value;
  locationInput.value = "";

  getWeather(location)
    .then((res) => {
      console.log(res);
      buildPage(res);
    })
    .catch((err) => console.log(`Error: ${err}`));
});

getWeather("Spain")
  .then((res) => {
    console.log(res);
    buildPage(res);
  })
  .catch((err) => console.log(`Error: ${err}`));
