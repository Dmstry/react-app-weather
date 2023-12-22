import React, { useState } from 'react';
import { HeaderDiv } from './Header.styled';

const Header = ({
  tempUnit,
  forecastPeriod,
  handleTempUnitChange,
  handleForecastPeriodChange,
  handleShowHourlyForecast,
}) => {
  console.log('forecastPeriod in Header:', forecastPeriod);
  const [activeButton, setActiveButton] = useState(forecastPeriod);

  // Оновлення стану при зміні forecastPeriod
  if (activeButton !== forecastPeriod) {
    setActiveButton(forecastPeriod);
  }
  // const changeForecastPeriod = (event) => {
  //   handleForecastPeriodChange(event.target.value);
  // };

  return (
    <HeaderDiv>
      <h1>Weather App</h1>
      <div>
        <span>Forecast Period:</span>
        <button
          onClick={() => handleForecastPeriodChange('3days')}
          className={forecastPeriod === '3days' ? 'active' : ''}
        >
          3 Days
        </button>
        <button
          onClick={() => handleForecastPeriodChange('7days')}
          className={forecastPeriod === '7days' ? 'active' : ''}
        >
          7 Days
        </button>
        <button
          onClick={() => handleShowHourlyForecast()}
          className={forecastPeriod === 'hourly' ? 'active' : ''}
        >
          Hourly
        </button>
      </div>
      <label>
        Temperature Unit:
        <select value={tempUnit} onChange={handleTempUnitChange}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </select>
      </label>
    </HeaderDiv>
  );
};

export default Header;
