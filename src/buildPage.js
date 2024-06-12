const curDay = document.querySelector("#today-day");
const curDate = document.querySelector("#today");
const curLocation = document.querySelector("#cur-location");
const curTemp = document.querySelector("#cur-temp");
const curCondition = document.querySelector("#cur-condition");

const curPrecipitation = document.querySelector("#cur-precipitation");
const curHumidity = document.querySelector("#cur-humidity");
const curWind = document.querySelector("#cur-wind");

const switchDegree = document.querySelector("#color_mode");

const hourForecast = document.querySelectorAll(".hour-forecast");

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let tempUnit = "temp_c";
let tempSymbol = "°C";

switchDegree.addEventListener("click", () => {
  if (switchDegree.checked) {
    tempUnit = "temp_f";
    tempSymbol = "°F";
  } else if (!switchDegree.checked) {
    tempUnit = "temp_c";
    tempSymbol = "°C";
  }
});

export function buildPage(weatherData) {
  let [yearNum, monthNum, dayNum] = weatherData.location.localtime.split("-");
  let time = dayNum.split(" ")[1];
  dayNum = dayNum.split(" ")[0];
  const today = `${monthNum}/${dayNum}/${yearNum}, ${time} `;
  curDay.textContent = weekdays[new Date().getDay()];
  curDate.textContent = today;

  const region = weatherData.location.region;
  const country = weatherData.location.country;
  curLocation.textContent = `${region}, ${country}`;

  const tempC = weatherData.current[tempUnit];
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
      weatherData.forecast.forecastday[0].hour[hour.dataset.hour][tempUnit];
    hour.nextElementSibling.textContent = `${curHourTemp}${tempSymbol}`;
  }
}
