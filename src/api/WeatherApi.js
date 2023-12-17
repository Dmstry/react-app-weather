const API_BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function fetchData(tempUnit) {
  let temperatureUnitParam = '';

  if (tempUnit === 'C') {
    temperatureUnitParam = '';
  } else if (tempUnit === 'F') {
    temperatureUnitParam = '&temperature_unit=fahrenheit';
  }

  const response = await fetch(
    `${API_BASE_URL}?latitude=47.9477&longitude=35.4403&timezone=auto&current=weather_code,temperature_2m,wind_speed_10m,precipitation,cloud_cover&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&forecast_days=7&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&curent_unit=${tempUnit}${temperatureUnitParam}`
  );

  const data = await response.json();
  console.log('data', data);
  return data;
}
