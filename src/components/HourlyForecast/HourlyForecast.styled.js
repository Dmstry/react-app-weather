import styled from 'styled-components';

export const ForecastForHours = styled.div`
  background-color: var(--accent-color);
  border-radius: 10px;

  & h2 {
    margin: 10px 0 20px 20px;
  }

  .hoursList {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0;
    margin: 0;

    & > li {
      width: calc(100% / 7);
      background-color: rgba(255, 255, 255, 0.2);
      flex: 0 0 auto;
      margin-right: 10px;
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

      & > li {
        display: flex;
        margin-bottom: 16px;
      }

      i {
        font-size: 24px;
        margin-bottom: 0;
        margin-right: 4px;

        vertical-align: middle;
      }

      i.exception {
        font-size: 48px;
        margin-bottom: 15px;
      }
    }
  }
`;
