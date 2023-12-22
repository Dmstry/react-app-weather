import styled from 'styled-components';

export const ForecastForPeriod = styled.div`
  background-color: var(--accent-color);
  /* border: 3px solid blue; */
  border-radius: 10px;

  & h2 {
    margin: 10px 0 20px 20px;
  }

  .forecastForPeriod {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    overflow-x: auto; /* Додайте прокрутку, якщо елементи не вміщаються */
    padding: 0;
    margin: 0;

    & > li {
      width: calc(90% / 7);
      background-color: rgba(255, 255, 255, 0.2);
      flex: 0 0 auto; // Кожен елемент в ряду буде фіксованою шириною
      margin-right: 10px; // Проміжок між елементами
      /* border: 2px solid orangered; */
      border-radius: 10px;
    }

    h3 {
      margin-top: 5px;
      margin-bottom: 10px;
      color: whitesmoke;
      text-align: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      li {
        display: flex;
        margin-bottom: 16px;
        /* font-size: 18px; */
      }

      i {
        font-size: 24px;
        margin-bottom: 0;
        margin-right: 4px;
        margin-left: 2px;
        vertical-align: middle;
      }

      i.exception {
        font-size: 48px;
        margin-bottom: 15px;
      }
    }
  }
`;
