import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { StyledContainer as Container } from './components/styles/Container.styled'
import CalendarView from './components/CalendarView'
import CreateAppointment from './components/CreateAppointment'

const theme = {
  colors: {
    background: 'F5F9FC',
    darkPrimary: '#2C4458',
    lightPrimary: '#C6CED6',
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <CreateAppointment />
      </Container>
    </ThemeProvider>
  )
}

export default App
