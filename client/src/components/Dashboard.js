import StyledDashboard from './styles/Dashboard.styled'
import AppointmentForm from './AppointmentForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import AppointmentList from './AppointmentList'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      {user ? <h1>Welcome back, {user.name}!</h1> : null}
      <StyledDashboard>
        <AppointmentForm></AppointmentForm>
        <AppointmentList></AppointmentList>
      </StyledDashboard>
    </>
  )
}

export default Dashboard
