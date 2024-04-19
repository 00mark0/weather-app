export const toggleTempsFunc = (unit, elements, cheese) => {
  elements.temp.textContent = unit
    ? `${cheese.current.temp_c}°C`
    : `${cheese.current.temp_f}°F`;

  elements.highTemp.textContent = unit
    ? `H: ${cheese.forecast.forecastday[0].day.maxtemp_c}°C`
    : `H: ${cheese.forecast.forecastday[0].day.maxtemp_f}°F`;

  elements.lowTemp.textContent = unit
    ? `L: ${cheese.forecast.forecastday[0].day.mintemp_c}°C`
    : `L: ${cheese.forecast.forecastday[0].day.mintemp_f}°F`;

  elements.currentHourTemp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[0].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[0].temp_f}°F`;

  elements.hour2Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[1].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[1].temp_f}°F`;

  elements.hour3Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[2].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[2].temp_f}°F`;

  elements.hour4Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[3].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[3].temp_f}°F`;

  elements.hour5Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[4].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[4].temp_f}°F`;

  elements.hour6Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[5].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[5].temp_f}°F`;

  elements.hour7Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[6].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[6].temp_f}°F`;

  elements.hour8Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[7].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[7].temp_f}°F`;

  elements.hour9Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[8].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[8].temp_f}°F`;

  elements.hour10Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[9].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[9].temp_f}°F`;

  elements.hour11Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[10].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[10].temp_f}°F`;

  elements.hour12Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[11].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[11].temp_f}°F`;

  elements.hour13Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[12].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[12].temp_f}°F`;

  elements.hour14Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[13].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[13].temp_f}°F`;

  elements.hour15Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[14].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[14].temp_f}°F`;

  elements.hour16Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[15].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[15].temp_f}°F`;

  elements.hour17Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[16].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[16].temp_f}°F`;

  elements.hour18Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[17].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[17].temp_f}°F`;

  elements.hour19Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[18].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[18].temp_f}°F`;

  elements.hour20Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[19].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[19].temp_f}°F`;

  elements.hour21Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[20].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[20].temp_f}°F`;

  elements.hour22Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[21].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[21].temp_f}°F`;

  elements.hour23Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[22].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[22].temp_f}°F`;

  elements.hour24Temp.textContent = unit
    ? `${cheese.forecast.forecastday[0].hour[23].temp_c}°C`
    : `${cheese.forecast.forecastday[0].hour[23].temp_f}°F`;

  elements.todayHigh.textContent = unit
    ? `L: ${cheese.forecast.forecastday[0].day.mintemp_c}°C`
    : `L: ${cheese.forecast.forecastday[0].day.mintemp_f}°F`;

  elements.todayLow.textContent = unit
    ? `H: ${cheese.forecast.forecastday[0].day.maxtemp_c}°C`
    : `H: ${cheese.forecast.forecastday[0].day.maxtemp_f}°F`;

  elements.tomorrowHigh.textContent = unit
    ? `L: ${cheese.forecast.forecastday[1].day.mintemp_c}°C`
    : `L: ${cheese.forecast.forecastday[1].day.mintemp_f}°F`;

  elements.tomorrowLow.textContent = unit
    ? `H: ${cheese.forecast.forecastday[1].day.maxtemp_c}°C`
    : `H: ${cheese.forecast.forecastday[1].day.maxtemp_f}°F`;

  elements.dayAfterTomorrowHigh.textContent = unit
    ? `L: ${cheese.forecast.forecastday[2].day.mintemp_c}°C`
    : `L: ${cheese.forecast.forecastday[2].day.mintemp_f}°F`;

  elements.dayAfterTomorrowLow.textContent = unit
    ? `H: ${cheese.forecast.forecastday[2].day.maxtemp_c}°C`
    : `H: ${cheese.forecast.forecastday[2].day.maxtemp_f}°F`;

  elements.feelsLikeTemp.textContent = `Feels Like: ${
    unit ? `${cheese.current.feelslike_c}°C` : `${cheese.current.feelslike_f}°F`
  }`;
};
