import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }
  
  @media only screen and (min-width: 500px){
    html {
      font-size: 16px;
    }
  }

  html * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }

  h1,h2,h3,h4,h5 {
    margin: 0;
  }

  span.block {
    display: block;
  }
`;
