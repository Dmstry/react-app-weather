import styled from 'styled-components';

export const HeaderDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;

  & h1 {
    margin-bottom: 10px;
    font-size: 28px;
  }

  & label {
    display: block;
    margin-left: 10px;
  }
  & select {
    margin-left: 5px;
  }

  & div {
    margin-top: 10px;
  }

  & button {
    margin-right: 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
  }
`;
