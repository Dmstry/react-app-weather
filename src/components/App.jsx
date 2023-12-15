import React, { useState, useEffect } from 'react';

export const App = () => {
  const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';
  const [weatherData, setWeatherData] = useState(null);
  const [tempUnit, setTempUnit] = useState('C');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${API_BASE_URL}?latitude=47.9477&longitude=35.4403&current=temperature_2m,wind_speed_10m,precipitation,cloud_cover&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&forecast_days=7&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&curent_unit=${tempUnit}`
      );
      const data = await response.json();
      setWeatherData(data);
      // console.log('data', data);
    }
    fetchData();
  }, [tempUnit]);

  console.log('weatherData', weatherData)

  function handleTempUnitChange(event) {
    setTempUnit(event.target.value);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <label>
          Temperature Unit:
          <select value={tempUnit} onChange={handleTempUnitChange}>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
          </select>
        </label>
      </header>
      <main>
        <h2>Current Weather</h2>
        <ul>
          <li>
            Temperature: {weatherData.current.temperature_2m.toFixed(0)}°{' '}
            {tempUnit}
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
        <h2>Weather Forecast</h2>
        <ul>
          {weatherData &&
            weatherData.daily &&
            weatherData.daily.time.map((day, index) => (
              <li key={day}>
                <h3>{day}</h3>
                <ul>
                  <li>
                    Max Temperature: {weatherData.daily.temperature_2m_max[index]}°{tempUnit}
                  </li>
                  <li>
                    Min Temperature: {weatherData.daily.temperature_2m_min[index]}°{tempUnit}
                  </li>
                  <li>Cloudiness: {weatherData.daily.cloud_cover}%</li>
                  <li>Precipitation: {weatherData.daily.precipitation_sum[index]} mm</li>
                  <li>Wind Speed: {weatherData.daily.wind_speed} m/s</li>
                </ul>
              </li>
            ))}
        </ul>
      </main>
      <footer>
        <p>Powered by Open Meteo API</p>
      </footer>
    </div>
  );
};