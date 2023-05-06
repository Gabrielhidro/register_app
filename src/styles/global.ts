import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.onBackgroundColor};
  }

  body, input, button, textarea {
    font-family: 'Montserrat' , sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`