import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAppointments, reset } from '../features/appointments/appointmentSlice'
import { useEffect } from 'react'

const AppointmentList = () => {
  const { appointments, isLoading, isError, message } = useSelector(
    (state) => state.appointments
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    dispatch(getAppointments())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  return (
    <div>
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        appointments.map((appointment) => <div>{appointment.date}</div>)
      ) : (
        <div>You don't have any appointments</div>
      )}
    </div>
  )
}

export default AppointmentList
