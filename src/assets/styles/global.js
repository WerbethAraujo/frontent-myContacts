import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding : 0;
    margin: 0;
    font-family: 'Sora', sans-serif;
  }

  body {
    font-size: 16px;
    background: ${({theme}) => theme[900]};
  }

  button {
    cursor: pointer;
  }
`;
