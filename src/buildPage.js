import { changeDegree } from "./changeDegree";

const body = document.querySelector("body");

const curDay = document.querySelector("#today-day");
const curDate = document.querySelector("#today");
const curLocation = document.querySelector("#cur-location");
const curTemp = document.querySelector("#cur-temp");
const curCondition = document.querySelector("#cur-condition");

const curPrecipitation = document.querySelector("#cur-precipitation");
const curHumidity = document.querySelector("#cur-humidity");
const curWind = document.querySelector("#cur-wind");

const switchDegree = document.querySelector("#color_mode");
const switchTheme = document.querySelector("#theme-switch");

const hourForecast = document.querySelectorAll(".hour-forecast");
const dailyForecasts = document.querySelectorAll(".d");

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function changeTheme() {
  body.classList.toggle("dark");
}

export function buildPage(weatherData) {
  if (weatherData != "") {
    let [yearNum, monthNum, dayNum] = weatherData.location.localtime.split("-");
    let time = dayNum.split(" ")[1];
    dayNum = dayNum.split(" ")[0];
    const today = `${monthNum}/${dayNum}/${yearNum}, ${time} `;
    curDay.textContent = weekdays[new Date().getDay()];
    curDate.textContent = today;

    let region;
    if (weatherData.location.region == "") {
      region = weatherData.location.name;
    } else {
      region = weatherData.location.region;
    }

    const country = weatherData.location.country;
    curLocation.textContent = `${region}, ${country}`;

    const tempC = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;
    curTemp.textContent = `${tempC}°C`;
    curCondition.textContent = condition;

    const precipitation = weatherData.current.precip_in;
    const humidity = weatherData.current.humidity;
    const windKph = weatherData.current.wind_kph;

    curPrecipitation.textContent = `${precipitation}mm`;
    curHumidity.textContent = `${humidity}%`;
    curWind.textContent = `${windKph} km/h`;

    for (const hour of hourForecast) {
      const curHourTemp =
        weatherData.forecast.forecastday[0].hour[hour.dataset.hour].temp_c;
      hour.nextElementSibling.textContent = `${curHourTemp}°C`;
    }

    for (const [i, _] of dailyForecasts.entries()) {
      const fd_temp = weatherData.forecast.forecastday[i].day.avgtemp_c;
      const fd_humidity = weatherData.forecast.forecastday[i].day.avghumidity;
      const fd_WeatherIcon =
        weatherData.forecast.forecastday[i].day.condition.icon;
      const fd_ChanceOfRain =
        weatherData.forecast.forecastday[i].day.daily_chance_of_rain;

      const fd_date = weatherData.forecast.forecastday[i].date;
      const day = weekdays[new Date(fd_date).getDay()];

      dailyForecasts[i].childNodes[1].textContent = day;
      dailyForecasts[
        i
      ].childNodes[3].childNodes[1].src = `https:${fd_WeatherIcon}`;
      dailyForecasts[i].childNodes[5].textContent = `${fd_ChanceOfRain}%`;
      dailyForecasts[i].childNodes[7].textContent = `${fd_humidity}%`;
      dailyForecasts[i].childNodes[9].textContent = `${fd_temp}°C`;
    }
  }
}

switchDegree.addEventListener("click", changeDegree);

switchTheme.addEventListener("click", changeTheme);
