const switchDegree = document.querySelector("#color_mode");

const curTemp = document.querySelector("#cur-temp");
const curWind = document.querySelector("#cur-wind");

const hourForecast = document.querySelectorAll(".hour-forecast");
const dfTemp = document.querySelectorAll(".df-temp");

// Takes in a value in km/h and converts it to mph and returns it
function toMiles(kms) {
  kms = Number(kms);
  return `${(kms / 1.6093446).toFixed(1)} mph`;
}

// Takes in a value in mph and converts it to km/h and returns it
function toKilometers(miles) {
  miles = Number(miles);
  return `${(miles * 1.6093446).toFixed(1)} km/h`;
}

// Takes in a value in celsius and converts it to fahrenheit and returns it
function toFahrenheit(celTemp) {
  celTemp = Number(celTemp);
  return `${((celTemp * 9) / 5 + 32).toFixed(1)}°F`;
}

// Takes in a value in fahrenheit and converts it to celsius and returns it
function toCelsius(fahTemp) {
  fahTemp = Number(fahTemp);
  return `${(((fahTemp - 32) * 5) / 9).toFixed(1)}°C`;
}

export function changeDegree() {
  if (switchDegree.checked) {
    // Checks if switchDegree is switched/on
    // If yes,
    let temp = curTemp.textContent.slice(0, -2); // Takes curTemp and stores it in "temp"
    let wind = curWind.textContent.slice(0, -4); // Takes curWind and stores it in "wind"
    curWind.textContent = toMiles(wind); // Converts wind km/h to mph and displays it
    curTemp.textContent = toFahrenheit(temp); // Converts temp celsius to fahrenheit and displays it

    for (const hour of hourForecast) {
      // Looping over the hours of hourly forecast
      let temp2 = hour.nextElementSibling.textContent.slice(0, -2); // Takes the temp of each hour and stores it in
      hour.nextElementSibling.textContent = toFahrenheit(temp2); // Converts temps to fahrenheit and displays it
    }

    for (const temp of dfTemp) {
      let temp2 = temp.textContent.slice(0, -2);
      temp.textContent = toFahrenheit(temp2);
    }
  } else if (!switchDegree.checked) {
    let temp = curTemp.textContent.slice(0, -2);
    let wind = curWind.textContent.slice(0, -3);
    curWind.textContent = toKilometers(wind);
    curTemp.textContent = toCelsius(temp);

    for (const hour of hourForecast) {
      let temp2 = hour.nextElementSibling.textContent.slice(0, -2);
      hour.nextElementSibling.textContent = toCelsius(temp2);
    }
    for (const temp of dfTemp) {
      let temp2 = temp.textContent.slice(0, -2);
      temp.textContent = toCelsius(temp2);
    }
  }
}
