import React from 'react';

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
                <li>WMO Code: {weatherData.daily.weather_code[index]}</li>
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