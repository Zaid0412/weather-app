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

let curClickedDay = 0;

// Adds class "dark" to body when called
function changeTheme() {
  body.classList.toggle("dark");
  console.log(curClickedDay);
}

// Takes the "time" as an argument and converts it to 12 hour format and returns it
function hourTo12(time) {
  let curHour = Number(time.split(":")[0]);
  if (curHour > 12) {
    return (time = `${curHour - 12}:00 pm`);
    console.log(time);
  } else {
    return (time = `${time} am`);
  }
}

// Takes the data from weather API as an argument and builds the page
export function buildPage(weatherData) {
  if (weatherData != "") {
    // Checking if data is valid
    let [yearNum, monthNum, dayNum] = weatherData.location.localtime.split("-"); // Extracting current year, month and day from data
    let time = dayNum.split(" ")[1]; // Taking out the current time from the data and storing it in "time"

    dayNum = dayNum.split(" ")[0];
    const today = `${monthNum}/${dayNum}/${yearNum}, ${hourTo12(time)} `; // Putting all the values together and make current Date and Time
    curDay.textContent = weekdays[new Date().getDay()]; // Getting the current day of the week and setting it as curDay's textContent
    curDate.textContent = today;

    let region;
    if (weatherData.location.region == "") {
      region = weatherData.location.name;
    } else {
      region = weatherData.location.region;
    }

    const country = weatherData.location.country; // Getting the country from the data and storing it in "country"
    curLocation.textContent = `${region}, ${country}`;

    const tempC = weatherData.current.temp_c; // Getting the current temperature (in celsius) and storing it in tempC
    const condition = weatherData.current.condition.text; // Getting the current condition from the data
    curTemp.textContent = `${tempC}°C`; // Displaying current temperature
    curCondition.textContent = condition; // Displaying current condition

    const precipitation = weatherData.current.precip_mm; // Getting current precip.
    const humidity = weatherData.current.humidity; // Getting current humidity level
    const windKph = weatherData.current.wind_kph; // Getting current wind speed (in km/h)

    curPrecipitation.textContent = `${precipitation}mm`; // Displaying current precip.
    curHumidity.textContent = `${humidity}%`; // Displaying current humidity level
    curWind.textContent = `${windKph} km/h`; // Displaying current wind speed

    for (const hour of hourForecast) {
      hour.parentElement.addEventListener("click", function () {
        switchDegree.checked = false; // Switching off "switchDegree" if its on

        for (const h of hourForecast) {
          // Looping over hourForecast and removing class "active" from all of them
          h.parentElement.classList.remove("active");
        }
        hour.parentElement.classList.add("active"); // Adding class "active" to div that was just clicked

        const curHourWeather = // Storing weather condition of hour that was clicked in curHourWeather
          weatherData.forecast.forecastday[curClickedDay].hour[
            hour.dataset.hour
          ];

        let [yearNum, monthNum, dayNum] = curHourWeather.time.split("-"); // Extracting year, month and day
        let time = dayNum.split(" ")[1]; // Extracting time from dayNum

        dayNum = dayNum.split(" ")[0];
        const today = `${monthNum}/${dayNum}/${yearNum}, ${hourTo12(time)} `;
        curDate.textContent = today;

        const tempC = curHourWeather.temp_c;
        const condition = curHourWeather.condition.text;
        curTemp.textContent = `${tempC}°C`;
        curCondition.textContent = condition;

        const precipitation = curHourWeather.precip_mm;
        const humidity = curHourWeather.humidity;
        const windKph = curHourWeather.wind_kph;

        curPrecipitation.textContent = `${precipitation}mm`;
        curHumidity.textContent = `${humidity}%`;
        curWind.textContent = `${windKph} km/h`;
      });
      const curHourTemp = // Getting temperature (in celsius) of each hour and storing it in "curHourTemp"
        weatherData.forecast.forecastday[0].hour[hour.dataset.hour].temp_c;
      hour.nextElementSibling.textContent = `${curHourTemp}°C`;
    }

    for (const [i, d] of dailyForecasts.entries()) {
      // Looping over "dailyForecasts"
      const fd_temp = weatherData.forecast.forecastday[i].day.avgtemp_c; // Getting the temperature of the day that was click
      const fd_humidity = weatherData.forecast.forecastday[i].day.avghumidity; // Getting the humidity level of the day that was click
      const fd_WeatherIcon =
        weatherData.forecast.forecastday[i].day.condition.icon; // Getting the url of the condition icon of the day that was click
      const fd_ChanceOfRain =
        weatherData.forecast.forecastday[i].day.daily_chance_of_rain; // Getting the chance of it raining on the day that  was clicked

      const fd_date = weatherData.forecast.forecastday[i].date; // Getting the date of the day that was clicked
      const day = weekdays[new Date(fd_date).getDay()]; // Getting the day of the week of the day that was clicked

      dailyForecasts[i].childNodes[1].textContent = day; // Displaying the day of the week for the day that was clicked
      dailyForecasts[
        i
      ].childNodes[3].childNodes[1].src = `https:${fd_WeatherIcon}`; // Displaying the weather icon for the day that was clicked
      dailyForecasts[i].childNodes[5].textContent = `${fd_ChanceOfRain}%`; // Displaying the chance of it raining for that day that was clicked
      dailyForecasts[i].childNodes[7].textContent = `${fd_humidity}%`; // Displaying the humidity level of the day that was clicked
      dailyForecasts[i].childNodes[9].textContent = `${fd_temp}°C`; // Displaying the temperature (in celsius) of the day that was clicked

      d.addEventListener("click", (e) => {
        for (const h of hourForecast) {
          // Looping over the hours in the hourly forecast and removing class "active" from them
          h.parentElement.classList.remove("active");
        }

        curClickedDay = Number(d.dataset.fd); // Getting the number of the day that was clicked and storing it in curClickedDay
        // Adding .active class to the day that was clicked
        for (const d_ of dailyForecasts) {
          // Looping over the days in daily forecast and removing class "active" from them
          d_.classList.remove("active");
        }
        d.classList.add("active"); //  Adding  class "active" to the day that was clicked

        switchDegree.checked = false; // Switching off the switchDegree if its on

        curDay.textContent = day; // Displaying the current day that was clicked
        curTemp.textContent = `${fd_temp}°C`; // Displaying the current temperature (in celsius) of the day that was clicked
        curCondition.textContent =
          weatherData.forecast.forecastday[i].day.condition.text; // Displaying the condition of the day that as clickedf

        curPrecipitation.textContent = `${weatherData.forecast.forecastday[i].day.totalprecip_mm}mm`; // Displaying the total precip. of the day that was clicked
        curHumidity.textContent = `${fd_humidity}%`; // Displaying the humidity level of the day that was clicked
        curWind.textContent = `${weatherData.forecast.forecastday[i].day.maxwind_kph} km/h`; // Displaying the wind speed (in km/h) of the day that was clicked

        let [yearNum, monthNum, dayNum] =
          weatherData.forecast.forecastday[i].date.split("-"); // Getting the date of the day that was clcked
        curDate.textContent = `${monthNum}/${dayNum}/${yearNum}`; // Displaying the date

        for (const hour of hourForecast) {
          // Looping over the hours of the hourly forecast
          const curHourTemp = // Getting the temps. of all the hours of the day that as clicked
            weatherData.forecast.forecastday[i].hour[hour.dataset.hour].temp_c;
          hour.nextElementSibling.textContent = `${curHourTemp}°C`; // Displaying all the temps. of all the hours (in celsius)
        }
      });
    }
  }
}

// Calling changeDegree() when switchDegree is clicked
switchDegree.addEventListener("click", changeDegree);

// Calling changeTheme() when switchTheme is clicked
switchTheme.addEventListener("click", changeTheme);
