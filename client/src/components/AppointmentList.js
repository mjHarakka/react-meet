import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAppointments } from '../features/appointments/appointmentSlice'
import { useEffect } from 'react'

const AppointmentList = () => {
  const { appointments, isLoading, isError, message } = useSelector(
    (state) => state.appointments
  )
  console.log(appointments)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAppointments())
  })

  return (
    <div>
      <h2>Appointments</h2>
      {appointments.map((appointment) => (
        <div>{appointment.title}</div>
      ))}
    </div>
  )
}

export default AppointmentList
