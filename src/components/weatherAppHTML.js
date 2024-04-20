import DOMPurify from "dompurify";

export const weatherAppHTML = `
<button id="findCityBtn" type="button"><i class="fas fa-bars"></i></button> 
        <div class="cityMenu" style="display: none;">
        <div class="cityMenuContainer">
        <div class="addCities">
            <input id="addCityInput" type="text" placeholder="Add City">
            <button id="addCityBtn" type="button"><i class="fas fa-plus"></i></button> 
        </div>
        <div class="cityList"></div>
        <div class="menuBtns">
        <button id="toggleUnitBtn" type="button">°C</button>
         <button id="closeCityMenuBtn" type="button"><i class="fas fa-check"></i></button> 
        </div>
    </div>
    </div>
    <div class="weatherContainer">
    <div class="anotherWeatherContainer">
    <div class="weatherAppMain">
        <h3 id="cityName"></h3> 
        <h1 id="temp"></h1>
        <img id="weatherIcon" src="" alt="weather icon">
        <p id="weatherDesc"></p>
        <span id="highTemp"></span>
        <span id="lowTemp"></span>
    </div>
    <div class="hourlyForecast">
        <div class="hourlyForecastDescContainer">
        <p id="hourlyForecastDesc"></p>
        </div>
        <div class="hours">
        <div id="hour">
            <p id="currentHourTime"></p>
            <p id="currentHourTemp"></p> 
        </div>
        <div id="hour">
            <p id="hour2Time"></p>
            <p id="hour2Temp"></p> 
        </div>
        <div id="hour">
            <p id="hour3Time"></p>
            <p id="hour3Temp"></p>
        </div>
        <div id="hour">
            <p id="hour4Time"></p>
            <p id="hour4Temp"></p>
        </div>
        <div id="hour">
            <p id="hour5Time"></p>
            <p id="hour5Temp"></p>
        </div>
        <div id="hour">
            <p id="hour6Time"></p>
            <p id="hour6Temp"></p>
        </div>
        <div id="hour">
            <p id="hour7Time"></p>
            <p id="hour7Temp"></p>
        </div>
        <div id="hour">
            <p id="hour8Time"></p>
            <p id="hour8Temp"></p>
        </div>
        <div id="hour">
            <p id="hour9Time"></p>
            <p id="hour9Temp"></p>
        </div>
        <div id="hour">
            <p id="hour10Time"></p>
            <p id="hour10Temp"></p>
        </div>
        <div id="hour">
            <p id="hour11Time"></p>
            <p id="hour11Temp"></p>
        </div>
        <div id="hour">
            <p id="hour12Time"></p>
            <p id="hour12Temp"></p>
        </div>
        <div id="hour">
            <p id="hour13Time"></p>
            <p id="hour13Temp"></p>
        </div>
        <div id="hour">
            <p id="hour14Time"></p>
            <p id="hour14Temp"></p>
        </div>
        <div id="hour">
            <p id="hour15Time"></p>
            <p id="hour15Temp"></p>
        </div>
        <div id="hour">
            <p id="hour16Time"></p>
            <p id="hour16Temp"></p>
        </div>
        <div id="hour">
            <p id="hour17Time"></p>
            <p id="hour17Temp"></p>
        </div>
        <div id="hour">
            <p id="hour18Time"></p>
            <p id="hour18Temp"></p>
        </div>
        <div id="hour">
            <p id="hour19Time"></p>
            <p id="hour19Temp"></p>
        </div>
        <div id="hour">
            <p id="hour20Time"></p>
            <p id="hour20Temp"></p>
        </div>
        <div id="hour">
            <p id="hour21Time"></p>
            <p id="hour21Temp"></p>
        </div>
        <div id="hour">
            <p id="hour22Time"></p>
            <p id="hour22Temp"></p>
        </div>
        <div id="hour">
            <p id="hour23Time"></p>
            <p id="hour23Temp"></p>
        </div>
        <div id="hour">
            <p id="hour24Time"></p>
            <p id="hour24Temp"></p>
        </div>
        </div>
    </div>
    <div class="threeDayForecast">
        <span id="threeDayForecastTitle"><i class="fas fa-calendar"></i> 3-DAY FORECAST</span>
        <div class="todayForecast">
            <span id="todayDay"></span>
            <img id="todayIcon" src="" alt="weather icon">
            <span id="todayHigh"></span>
            <span id="todayLow"></span>
        </div>
        <div class="tomorrowForecast">
            <span id="tomorrowDay"></span>
            <img id="tomorrowIcon" src="" alt="weather icon">
            <span id="tomorrowHigh"></span>
            <span id="tomorrowLow"></span>
        </div>
        <div class="dayAfterTomorrowForecast">
            <span id="dayAfterTomorrowDay"></span>
            <img id="dayAfterTomorrowIcon" src="" alt="weather icon">
            <span id="dayAfterTomorrowHigh"></span>
            <span id="dayAfterTomorrowLow"></span>
        </div>
    </div>
    <div class="wind">
        <div class="windSpeed">
            <p id="windSpeed"></p>
            <p id="windDirection"></p>    
        </div>
        <div class="windGusts">
            <p id="windGusts"></p>
        </div>
    </div>
    <div class="sunrise">
        <span id="sunriseTitle"><i class="fas fa-sun"></i> SUNRISE</span>
        <div class="sunriseTime">
            <p id="sunrise"></p>
        </div> 
        <p id="sunset">Sunset: </p>
    </div>
    <div class="feelsLike">
        <p id="feelsLikeTitle"><i class="fas fa-thermometer-half"></i> FEELS LIKE</p>
         <p id="feelsLikeTemp"></p>
    </div>
    <div id="visibility">
        <p id="visibilityTitle"><i class="fas fa-eye"></i> VISIBILITY</p> 
        <p id="visibilityDistance"></p>
    </div>
    <div id="humidity">
        <p id="humidityTitle"><i class="fas fa-tint"></i> HUMIDITY</p>
        <p id="humidityPercentage"></p>
    </div>
    </div>
    </div>
`;

export const cleanWeatherAppHTML = DOMPurify.sanitize(weatherAppHTML);
