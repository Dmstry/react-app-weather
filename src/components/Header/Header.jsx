import React from 'react';

const Header = ({
  tempUnit,
  handleTempUnitChange,
  handleForecastPeriodChange,
  handleShowHourlyForecast,
}) => {
  // const changeForecastPeriod = (event) => {
  //   handleForecastPeriodChange(event.target.value);
  // };

  return (
    <header>
      <h1>Weather App</h1>
      <label>
        Temperature Unit:
        <select value={tempUnit} onChange={handleTempUnitChange}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </select>
      </label>
      <div>
        Forecast Period:
        <button onClick={() => handleForecastPeriodChange('3days')}>
          3 Days
        </button>
        <button onClick={() => handleForecastPeriodChange('7days')}>
          7 Days
        </button>
        <button onClick={() => handleShowHourlyForecast()}>
          Hourly
        </button>
      </div>
    </header>
  );
};

export default Header;
