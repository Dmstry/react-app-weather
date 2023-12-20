import styled from 'styled-components';

export const Forecast = styled.div`
  background-color: skyblue;
  border: 3px solid lightblue;
  border-radius: 10px;
`;

export const ForecastTitle = styled.h2`
  margin: 10px 0 20px 20px;
`;

export const ListDay = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  overflow-x: auto; /* Додайте прокрутку, якщо елементи не вміщаються */
  padding: 0;
  margin: 0;
`;

export const DayItem = styled.li`
  width: calc(100% / 5);
  background-color: #417cb7;
  flex: 0 0 auto; /* Кожен елемент в ряду буде фіксованою шириною */
  margin-right: 10px; /* Проміжок між елементами */
  border: 2px solid blue;
  border-radius: 10px;
`;

export const DayTitle = styled.h3`
  color: whitesmoke;
  text-align: center;
`;

export const Icon = styled.i`
  font-size: 24px;
  /* Збільшуємо розмір іконки */
  margin-bottom: 0;

  /* font-size: 24px; */
  vertical-align: middle;
`;

export const BigIcon = styled.i`
  font-size: 48px;
  margin-bottom: 15px;
`;

export const WeatherList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

export const WeatherInfoItem = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
`;
