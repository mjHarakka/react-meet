import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkPrimary};
    font-weight: 900;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.darkPrimary};
    font-family: 'Roboto', sans-serif;
  }
`
export default GlobalStyles
