import styled from 'styled-components';

export const CurrentInfo = styled.div`
  background-color: var(--accent-color);
  & h2 {
    margin: 10px 0 20px 20px;
    & span {
      font-size: 14px;
    }
  }

  & ul {
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: auto; /* Додайте прокрутку, якщо елементи не вміщаються */
    padding: 0;
    margin: 20px auto;
    max-width: 800px;
    height: 80px;
    border-radius: 10px;
  }

  & > li {
    align-items: center;
    font-size: 18px;
  }
  & i {
    font-size: 48px;
  }
`;
