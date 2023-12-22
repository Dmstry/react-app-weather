import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { ForecastForHours } from './HourlyForecast.styled';



const HourlyForecast = ({ weatherData, tempUnit }) => {

  const currentHour = new Date().getHours();
  const hoursToShow = 24 / 4; // 6 times

  return (
    <ForecastForHours>
      <h2>Hourly Forecast</h2>
      <ul className='hoursList'>
        {weatherData &&
          weatherData.hourly &&
          weatherData.hourly.time.filter((_, index) => index % 4 === 0).slice(0, hoursToShow).map((hour, index) => {
            const hourToShow = (currentHour + index * 4) % 24;
            return (
              <li key={hour}>
                <h3>{hourToShow}:00</h3>
                <ul>
                  <li>
                    <i className={`exception wi wi-wmo4680-${weatherData.hourly.weather_code[index * 4]}`}></i>
                  </li>
                  <li>
                    <i className="wi wi-thermometer-exterior"></i> {weatherData.hourly.temperature_2m[index * 4]}{'°'}{tempUnit}
                  </li>
                  <li>
                    <i className="wi wi-humidity"></i> {weatherData.hourly.relative_humidity_2m[index * 4]}
                    {weatherData.hourly_units.relative_humidity_2m}
                  </li>
                </ul>
              </li>
            );
          })}
      </ul>
    </ForecastForHours>
  );
};

export default HourlyForecast;