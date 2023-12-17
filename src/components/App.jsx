import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Header'
import CurrentWeather from 'components/CurrentWeather/CurrentWeather';
import WeatherForecast from 'components/WeatherForecast/WeatherForecast';
import Footer from 'components/Footer/Footer';
import { fetchData } from 'api/WeatherApi';

export const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [tempUnit, setTempUnit] = useState('C');

  useEffect(() => {
    async function getData() {
      const data = await fetchData(tempUnit);
      setWeatherData(data);
    }

    getData();
  }, [tempUnit]);

  function handleTempUnitChange(event) {
    setTempUnit(event.target.value);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header tempUnit={tempUnit} handleTempUnitChange={handleTempUnitChange} />
      <main>
        <CurrentWeather weatherData={weatherData} tempUnit={tempUnit} />
        <WeatherForecast weatherData={weatherData} tempUnit={tempUnit} />
      </main>
      <Footer />
    </>
  );
};