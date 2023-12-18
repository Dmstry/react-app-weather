import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import CurrentWeather from 'components/CurrentWeather/CurrentWeather';
import WeatherForecast from 'components/WeatherForecast/WeatherForecast';
import HourlyForecast from './HourlyForecast/HourlyForecast';
import Footer from 'components/Footer/Footer';
import { fetchData } from 'api/WeatherApi';

export const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [tempUnit, setTempUnit] = useState('C');
  const [forecastPeriod, setForecastPeriod] = useState('3days');
  const [showHourlyForecast, setShowHourlyForecast] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await fetchData(tempUnit, forecastPeriod);
      setWeatherData(data);
    }

    getData();
  }, [tempUnit, forecastPeriod]);

  function handleTempUnitChange(event) {
    setTempUnit(event.target.value);
  }

  function handleForecastPeriodChange(period) {
    setForecastPeriod(period);
    setShowHourlyForecast(false);
  }

  function handleShowHourlyForecast() {
    handleForecastPeriodChange('hourly');
    setShowHourlyForecast(true);
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header
        tempUnit={tempUnit}
        handleTempUnitChange={handleTempUnitChange}
        handleForecastPeriodChange={handleForecastPeriodChange}
        handleShowHourlyForecast={handleShowHourlyForecast}
      />
      <main>
        <CurrentWeather weatherData={weatherData} tempUnit={tempUnit} />
        {showHourlyForecast ? (
          <HourlyForecast weatherData={weatherData} tempUnit={tempUnit} />
        ) : (
          <WeatherForecast weatherData={weatherData} tempUnit={tempUnit} />
        )}
      </main>
      <Footer />
    </>
  );
};
