import "./style.css";
import { buildPage } from "./buildPage";

const locationInput = document.querySelector("#location");
const locationBtn = document.querySelector("#submit-location");
const dailyForecasts = document.querySelectorAll(".d");
const switchDegree = document.querySelector("#color_mode");

/// Functions ///
async function getWeather(location) {
  const response = await fetch(
    // `http://api.weatherapi.com/v1/forecast.json?key=eb9092c644364c0aaf2114454241006&q=${location}&days=7&aqi=no&alerts=no`,
    `https://api.weatherapi.com/v1/forecast.json?key=eb9092c644364c0aaf2114454241006&q=${location}&days=10`,

    { mode: "cors", referrerPolicy: "unsafe-url" }
  );
  const data = await response.json();
  return data;
}

locationBtn.addEventListener("click", function (e) {
  // Loops over the days of the daily forecast and remove class "active" from them
  for (const d_ of dailyForecasts) {
    d_.classList.remove("active");
  }
  switchDegree.checked = false; // Switches off switchDegree if its on

  e.preventDefault();
  let location = locationInput.value; // Saving the input of "locationInput" in a variable
  locationInput.value = ""; // Clears the locationInput

  // Calls getWeather with "location" as an argument
  getWeather(location)
    .then((res) => {
      console.log(res);
      buildPage(res);
    })
    .catch((err) => console.log(`Error: ${err}`));
});

// Calls getWeather with the parameter ad "Spain" for the default weather when the page is first loaded
getWeather("Spain")
  .then((res) => {
    console.log(res);
    buildPage(res);
  })
  .catch((err) => console.log(`Error: ${err}`));
