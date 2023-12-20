import React from 'react';
import 'weather-icons/css/weather-icons.css'
import { Forecast, ListDay, Icon, BigIcon, WeatherList, DayItem, WeatherInfoItem, DayTitle, ForecastTitle } from './WeatherForecast.styled';


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
    <Forecast>
      <ForecastTitle>Forecast {periodText}</ForecastTitle>
      <ListDay>
        {weatherData &&
          weatherData.daily &&
          weatherData.daily.time.map((day, index) => {
            const currentDate = new Date(day);
            const dayOfWeekShort = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
            const formattedDate = currentDate.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
            });
            return (
              <DayItem key={day} >
                <DayTitle>{`${dayOfWeekShort}, ${formattedDate}`}</DayTitle>
                <WeatherList>
                  <li><BigIcon className={`wi wi-wmo4680-${weatherData.daily.weather_code[index]}`}></BigIcon></li>
                  <WeatherInfoItem>
                    Max <Icon className='wi wi-thermometer'></Icon>{weatherData.daily.temperature_2m_max[index]}°{tempUnit}
                  </WeatherInfoItem>
                  <WeatherInfoItem>
                    Min <Icon className='wi wi-thermometer-exterior'></Icon> {weatherData.daily.temperature_2m_min[index]}°{tempUnit}
                  </WeatherInfoItem>
                  <WeatherInfoItem><Icon className='wi wi-raindrops'></Icon> {weatherData.daily.precipitation_sum[index]} mm</WeatherInfoItem>
                </WeatherList>
              </DayItem>
            );
          })}
      </ListDay>
    </Forecast >
  );
};

export default WeatherForecast;