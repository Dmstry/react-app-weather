import React from 'react';

const Header = ({ tempUnit, handleTempUnitChange }) => {
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
    </header>
  );
};

export default Header;