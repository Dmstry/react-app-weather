import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { ForecastForPeriod } from './WeatherForecast.styled';

const WeatherForecast = ({ weatherData, tempUnit, forecastPeriod }) => {
  let periodText;

  switch (forecastPeriod) {
    case '3days':
      periodText = 'for 3 days';
      break;
    case '7days':
      periodText = 'for 7 days';
      break;
    default:
      periodText = ''; // Додайте потрібні умови для інших варіантів періоду
      break;
  }
  return (
    <ForecastForPeriod>
      <h2>Forecast {periodText}</h2>
      <ul className='forecastForPeriod'>
        {weatherData &&
          weatherData.daily &&
          weatherData.daily.time.map((day, index) => {
            const currentDate = new Date(day);
            const dayOfWeekShort = currentDate.toLocaleDateString('en-US', {
              weekday: 'short',
            });
            const formattedDate = currentDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            });
            return (
              <li key={day}>
                <h3>{`${dayOfWeekShort}, ${formattedDate}`}</h3>
                <ul>
                  <li>
                    <i
                      className={`exception wi wi-wmo4680-${weatherData.daily.weather_code[index]}`}
                    ></i>
                  </li>
                  <li>
                    <p>Max {<i className="wi wi-thermometer"></i>}
                      {weatherData.daily.temperature_2m_max[index]}°{tempUnit}</p>

                  </li>
                  <li>
                    Min <i className="wi wi-thermometer-exterior"></i>{' '}
                    {weatherData.daily.temperature_2m_min[index]}°{tempUnit}
                  </li>
                  <li>
                    <i className="wi wi-raindrops"></i> {' '}
                    {weatherData.daily.precipitation_sum[index]} mm
                  </li>
                </ul>
              </li>
            );
          })}
      </ul>
    </ForecastForPeriod>
  );
};

export default WeatherForecast;
