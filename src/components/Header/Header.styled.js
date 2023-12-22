import styled from 'styled-components';

export const HeaderDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;

  & h1 {
    margin-bottom: 20px;
    font-size: 28px;
  }

  & div {
    margin-bottom: 10px;
    & span {
      display: inline-block;
      margin-right: 4px;
    }
  }

  & button {
    margin-right: 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    transition: 0.5s ease;
  }

  & button:hover,
  button.active {
    background-color: var(--text-invers-color);
    color: var(--primary-text-color);
  }

  & label {
    display: block;
    margin-left: 10px;
  }
  & select {
    margin-left: 4px;
  }
`;
