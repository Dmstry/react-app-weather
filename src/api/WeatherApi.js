const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function fetchData(tempUnit, forecastPeriod) {
  let periodParam = '';

  if (forecastPeriod === '3days' || forecastPeriod === '7days') {
    periodParam = `&forecast_days=${forecastPeriod.slice(0, 1)}`;
  } else if (forecastPeriod === 'hourly') {
    periodParam = '&hourly=temperature_2m,relative_humidity_2m,weather_code';
  }

  let temperatureUnitParam = '';

  if (tempUnit === 'C') {
    temperatureUnitParam = '';
  } else if (tempUnit === 'F') {
    temperatureUnitParam = '&temperature_unit=fahrenheit';
  }

  const response = await fetch(
    `${API_BASE_URL}?latitude=47.4922&longitude=35.1125&timezone=auto&current=temperature_2m,wind_speed_10m,precipitation,cloud_cover,weather_code${periodParam}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&curent_unit=${tempUnit}${temperatureUnitParam}`
  );

  const data = await response.json();
  console.log('data', data);
  console.log('typeof(data)', typeof data);
  return data;
}
