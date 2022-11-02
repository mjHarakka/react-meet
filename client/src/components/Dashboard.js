import StyledDashboard from './styles/Dashboard.styled'
import AppointmentForm from './AppointmentForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Dashboard = () => {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <StyledDashboard>
      <AppointmentForm></AppointmentForm>
    </StyledDashboard>
  )
}

export default Dashboard
