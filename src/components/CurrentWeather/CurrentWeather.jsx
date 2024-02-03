import React from 'react';
import 'weather-icons/css/weather-icons.css'
import { CurrentInfo } from './CurrentWeather.styled';


const CurrentWeather = ({ weatherData, tempUnit }) => {
  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };
  return (
    <CurrentInfo>
      <h2>Current Weather <br />
        <span>{formatDateTime(weatherData.current.time)}, Zaporizhzhia</span>
      </h2>

      <ul>
        <li>
          <i className={`wi wi-wmo4680-${weatherData.current.weather_code}`}></i>
        </li>
        <li>
          Temperature: {weatherData.current.temperature_2m.toFixed(0)}° {tempUnit}
        </li>
        <li>
          Cloudiness: {weatherData.current.cloud_cover.toFixed(0)}{' '}
          {weatherData.current_units.cloud_cover}
        </li>
        <li>
          Precipitation: {weatherData.current.precipitation.toFixed(1)}{' '}
          {weatherData.current_units.precipitation}
        </li>
        <li>
          Wind Speed: {weatherData.current.wind_speed_10m.toFixed(0)}{' '}
          {weatherData.current_units.wind_speed_10m}
        </li>
      </ul>
    </CurrentInfo>
  );
};

export default CurrentWeather;