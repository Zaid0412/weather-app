const switchDegree = document.querySelector("#color_mode");
const curTemp = document.querySelector("#cur-temp");
const hourForecast = document.querySelectorAll(".hour-forecast");

function toFahrenheit(celTemp) {
  celTemp = Number(celTemp);
  return `${((celTemp * 9) / 5 + 32).toFixed(1)}°F`;
}

function toCelsius(fahTemp) {
  fahTemp = Number(fahTemp);
  return `${(((fahTemp - 32) * 5) / 9).toFixed(1)}°C`;
}

export function changeDegree() {
  if (switchDegree.checked) {
    let temp = curTemp.textContent.slice(0, -2);
    curTemp.textContent = toFahrenheit(temp);

    for (const hour of hourForecast) {
      let temp2 = hour.nextElementSibling.textContent.slice(0, -2);
      hour.nextElementSibling.textContent = toFahrenheit(temp2);
    }
  } else if (!switchDegree.checked) {
    let temp = curTemp.textContent.slice(0, -2);
    curTemp.textContent = toCelsius(temp);

    for (const hour of hourForecast) {
      let temp2 = hour.nextElementSibling.textContent.slice(0, -2);
      hour.nextElementSibling.textContent = toCelsius(temp2);
    }
  }
}
