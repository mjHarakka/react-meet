import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({theme}) => theme.colors.darkPrimary};
    font-family: 'Roboto', sans-serif;
  }
`
export default GlobalStyles