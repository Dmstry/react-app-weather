import React from 'react';
import 'weather-icons/css/weather-icons.css'

const WeatherForecast = ({ weatherData, tempUnit }) => {
  return (
    <div>
      <h2>Weather Forecast</h2>
      <ul>
        {weatherData &&
          weatherData.daily &&
          weatherData.daily.time.map((day, index) => (
            <li key={day}>
              <h3>{day}</h3>
              <ul>
                <li><i className={`wi wi-wmo4680-${weatherData.daily.weather_code[index]}`}></i></li>
                <li>
                  Max Temperature: {weatherData.daily.temperature_2m_max[index]}°{tempUnit}
                </li>
                <li>
                  Min Temperature: {weatherData.daily.temperature_2m_min[index]}°{tempUnit}
                </li>
                <li>Precipitation: {weatherData.daily.precipitation_sum[index]} mm</li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;