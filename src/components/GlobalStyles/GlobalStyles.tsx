import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   html {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.color.white};
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
