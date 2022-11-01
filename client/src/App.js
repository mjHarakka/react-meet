import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { StyledContainer as Container } from './components/styles/Container.styled'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { register, reset } from './features/auth/authSlice'

const theme = {
  colors: {
    background: 'F5F9FC',
    darkPrimary: '#2C4458',
    lightPrimary: '#C6CED6',
    lightSecondary: '#f7f7f7',
  },
  mobile: '768px',
}

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyles />
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
