import "./styles/style.css";
import { getWeatherBackground } from "./components/updateBackground";
import { cleanWeatherAppHTML } from "./components/weatherAppHTML";
import initDomElements from "./components/domElements";
import { toggleTempsFunc } from "./components/toggleTempsFunc";
import { getDayOfWeek } from "./components/getDayOfWeek";
import { createCityElements } from "./components/createCityElements";

export const getWeather = async (lat, lon, cityName) => {
  let searchCity = cityName || domElements.addCityInput.value.toLowerCase();

  let url;

  if (searchCity) {
    // if a city has been entered in the input, get the weather for this city
    url = `https://api.weatherapi.com/v1/forecast.json?key=3d42cff37e514b23a74143011241604&q=${searchCity}&days=3`;
  } else if (lat && lon) {
    // if latitude and longitude have been provided, get the weather for these coordinates
    url = `https://api.weatherapi.com/v1/forecast.json?key=3d42cff37e514b23a74143011241604&q=${lat},${lon}&days=3`;
  } else {
    // if no city has been entered in the input and no coordinates have been provided, get the weather for London
    url = `https://api.weatherapi.com/v1/forecast.json?key=3d42cff37e514b23a74143011241604&q=london&days=3`;
  }

  try {
    const response = await fetch(url);

    if (response.status === 400) {
      domElements.cityList.lastChild.remove();
      alert("City not found");
    }

    const data = await response.json();
    console.log(data);

    // background code
    let isDayTime = data.current.is_day;

    if (isDayTime === 1) {
      isDayTime = true;
    } else {
      isDayTime = false;
    }

    let weatherCode = data.current.condition.code;

    let imagePath = getWeatherBackground(weatherCode, isDayTime);

    app.style.backgroundImage = `url(${imagePath})`;

    let toggleUnit = true;

    // find cities menu
    domElements.findCityBtn.addEventListener("click", () => {
      domElements.cityMenu.style.display = "flex";
      domElements.weatherContainer.style.display = "none";
      domElements.findCityBtn.style.display = "none";
    });

    // toggle between celsius and fahrenheit
    domElements.toggleUnitBtn.addEventListener("click", () => {
      toggleUnit = !toggleUnit;
      domElements.toggleUnitBtn.textContent = toggleUnit ? "°C" : "°F";
      domElements.toggleUnitBtn.dataset.unit = toggleUnit ? "C" : "F";
      toggleTempsFunc(toggleUnit, domElements, data);
    });

    // close cities menu
    domElements.closeCityMenuBtn.addEventListener("click", () => {
      domElements.cityMenu.style.display = "none";
      domElements.weatherContainer.style.display = "block";
      domElements.findCityBtn.style.display = "block";
    });

    // current/main content
    domElements.cityName.textContent = data.location.name;
    domElements.temp.textContent = toggleUnit
      ? `${data.current.temp_c}°C`
      : `${data.current.temp_f}°F`;
    domElements.weatherIcon.src = data.current.condition.icon;
    domElements.weatherDesc.textContent = data.current.condition.text;
    domElements.highTemp.textContent = toggleUnit
      ? `H: ${data.forecast.forecastday[0].day.maxtemp_c}°C`
      : `H: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;
    domElements.lowTemp.textContent = toggleUnit
      ? `L: ${data.forecast.forecastday[0].day.mintemp_c}°C`
      : `L: ${data.forecast.forecastday[0].day.mintemp_f}°F`;

    // hourly forecast
    domElements.hourlyForecastDesc.textContent = "Hourly Forecast";
    domElements.currentHourTime.textContent = "12AM";
    domElements.currentHourTemp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[0].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[0].temp_f}°F`;
    domElements.hour2Time.textContent = "1AM";
    domElements.hour2Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[1].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[1].temp_f}°F`;
    domElements.hour3Time.textContent = "2AM";
    domElements.hour3Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[2].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[2].temp_f}°F`;
    domElements.hour4Time.textContent = "3AM";
    domElements.hour4Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[3].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[3].temp_f}°F`;
    domElements.hour5Time.textContent = "4AM";
    domElements.hour5Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[4].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[4].temp_f}°F`;
    domElements.hour6Time.textContent = "5AM";
    domElements.hour6Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[5].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[5].temp_f}°F`;
    domElements.hour7Time.textContent = "6AM";
    domElements.hour7Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[6].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[6].temp_f}°F`;
    domElements.hour8Time.textContent = "7AM";
    domElements.hour8Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[7].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[7].temp_f}°F`;
    domElements.hour9Time.textContent = "8AM";
    domElements.hour9Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[8].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[8].temp_f}°F`;
    domElements.hour10Time.textContent = "9AM";
    domElements.hour10Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[9].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[9].temp_f}°F`;
    domElements.hour11Time.textContent = "10AM";
    domElements.hour11Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[10].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[10].temp_f}°F`;
    domElements.hour12Time.textContent = "11AM";
    domElements.hour12Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[11].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[11].temp_f}°F`;
    domElements.hour13Time.textContent = "12PM";
    domElements.hour13Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[12].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[12].temp_f}°F`;
    domElements.hour14Time.textContent = "1PM";
    domElements.hour14Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[13].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[13].temp_f}°F`;
    domElements.hour15Time.textContent = "2PM";
    domElements.hour15Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[14].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[14].temp_f}°F`;
    domElements.hour16Time.textContent = "3PM";
    domElements.hour16Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[15].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[15].temp_f}°F`;
    domElements.hour17Time.textContent = "4PM";
    domElements.hour17Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[16].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[16].temp_f}°F`;
    domElements.hour18Time.textContent = "5PM";
    domElements.hour18Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[17].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[17].temp_f}°F`;
    domElements.hour19Time.textContent = "6PM";
    domElements.hour19Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[18].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[18].temp_f}°F`;
    domElements.hour20Time.textContent = "7PM";
    domElements.hour20Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[19].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[19].temp_f}°F`;
    domElements.hour21Time.textContent = "8PM";
    domElements.hour21Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[20].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[20].temp_f}°F`;
    domElements.hour22Time.textContent = "9PM";
    domElements.hour22Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[21].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[21].temp_f}°F`;
    domElements.hour23Time.textContent = "10PM";
    domElements.hour23Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[22].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[22].temp_f}°F`;
    domElements.hour24Time.textContent = "11PM";
    domElements.hour24Temp.textContent = toggleUnit
      ? `${data.forecast.forecastday[0].hour[23].temp_c}°C`
      : `${data.forecast.forecastday[0].hour[23].temp_f}°F`;

    // 3 day forecast
    // day 1
    domElements.todayDay.textContent = getDayOfWeek(
      data.forecast.forecastday[0].date
    );
    domElements.todayIcon.src = data.forecast.forecastday[0].day.condition.icon;
    domElements.todayHigh.textContent = toggleUnit
      ? `L: ${data.forecast.forecastday[0].day.mintemp_c}°C`
      : `L: ${data.forecast.forecastday[0].day.mintemp_f}°F`;
    domElements.todayLow.textContent = toggleUnit
      ? `H: ${data.forecast.forecastday[0].day.maxtemp_c}°C`
      : `H: ${data.forecast.forecastday[0].day.maxtemp_f}°F`;

    // day 2
    domElements.tomorrowDay.textContent = getDayOfWeek(
      data.forecast.forecastday[1].date
    );
    domElements.tomorrowIcon.src =
      data.forecast.forecastday[1].day.condition.icon;
    domElements.tomorrowHigh.textContent = toggleUnit
      ? `L: ${data.forecast.forecastday[1].day.mintemp_c}°C`
      : `L: ${data.forecast.forecastday[1].day.mintemp_f}°F`;
    domElements.tomorrowLow.textContent = toggleUnit
      ? `H: ${data.forecast.forecastday[1].day.maxtemp_c}°C`
      : `H: ${data.forecast.forecastday[1].day.maxtemp_f}°F`;

    // day 3
    domElements.dayAfterTomorrowDay.textContent = getDayOfWeek(
      data.forecast.forecastday[2].date
    );
    domElements.dayAfterTomorrowIcon.src =
      data.forecast.forecastday[2].day.condition.icon;
    domElements.dayAfterTomorrowHigh.textContent = toggleUnit
      ? `L: ${data.forecast.forecastday[2].day.mintemp_c}°C`
      : `L: ${data.forecast.forecastday[2].day.mintemp_f}°F`;
    domElements.dayAfterTomorrowLow.textContent = toggleUnit
      ? `H: ${data.forecast.forecastday[2].day.maxtemp_c}°C`
      : `H: ${data.forecast.forecastday[2].day.maxtemp_f}°F`;

    // wind card
    domElements.windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
    domElements.windDirection.textContent = `Wind Direction: ${data.current.wind_dir}`;
    domElements.windGusts.textContent = `Wind Gusts: ${data.current.gust_kph} km/h`;

    // sunrise
    domElements.sunrise.textContent = `Sunrise: ${data.forecast.forecastday[0].astro.sunrise}`;
    domElements.sunset.textContent = `Sunset: ${data.forecast.forecastday[0].astro.sunset}`;

    // feels like yo wat u doin
    domElements.feelsLikeTemp.textContent = `Feels Like: ${
      toggleUnit
        ? `${data.current.feelslike_c}°C`
        : `${data.current.feelslike_f}°F`
    }`;

    // m;y vision goood
    domElements.visibilityDistance.textContent = `Visibility: ${data.current.vis_km} km`;

    // ma last but not leas'
    domElements.humidityPercentage.textContent = `Humidity: ${data.current.humidity}%`;
  } catch (error) {
    console.error(error);
    alert("City not found");
  }
};

const app = document.getElementById("app");
app.innerHTML = cleanWeatherAppHTML;

let domElements;

// all other dom elements
domElements = initDomElements();

// if Geolocation is supported, get the user's location and use it as the default city
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      // get the weather for the user's location
      getWeather(lat, lon);
    },
    () => {
      // if the user denies permission to access their location, get the weather for the default city
      getWeather();
    }
  );
} else {
  // if Geolocation is not supported, get the weather for the default city
  getWeather();
}

// search for and add cities
domElements.addCityBtn.addEventListener("click", () => {
  let addedCityName = domElements.addCityInput.value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!addedCityName.trim()) {
    alert("Please enter a city name");
    return;
  }

  if (domElements.cityList.textContent.includes(addedCityName)) {
    alert("City already added");
    return;
  }

  getWeather(null, null, addedCityName);

  let newCityElement = createCityElements(addedCityName);
  domElements.cityList.appendChild(newCityElement);

  // store the city name in localStorage
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  cities.push(addedCityName);
  localStorage.setItem("cities", JSON.stringify(cities));
});

// do the same with enter key
domElements.addCityInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    domElements.addCityBtn.click();
  }
});

// click on a city name to get the weather for that city
domElements.cityList.addEventListener("click", (event) => {
  if (event.target.matches(".deleteCityBtn")) {
    event.stopPropagation();
  }

  let clickedCityElement = event.target.closest(".citySpan");
  if (!clickedCityElement) return;

  let clickedCityName = clickedCityElement.textContent.toLowerCase();
  getWeather(null, null, clickedCityName);
  domElements.cityMenu.style.display = "none";
  domElements.weatherContainer.style.display = "block";
  domElements.findCityBtn.style.display = "block";

  if (clickedCityElement.classList.contains("active")) return;
});

window.addEventListener("load", () => {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  cities.forEach((cityName) => {
    let cityElement = createCityElements(cityName);
    domElements.cityList.appendChild(cityElement);
  });
});
