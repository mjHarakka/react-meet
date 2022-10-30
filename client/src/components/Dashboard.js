import { Button } from './styles/Button.styled'
import { useState } from 'react'
import { Select } from './styles/Select.styled'
import { times } from './Times'
import { StyledForm } from './styles/Form.styled'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CreateAppointment = () => {
  const [appointments, setAppointments] = useState([])
  const [date, setDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const [startingTime, setStartingTime] = useState(null)
  const [endingTime, setEndingTime] = useState(null)

  const changeDate = (event) => {
    setDate(event)
  }

  return (
    <StyledForm>
      <h1>Create appointment</h1>
      <DatePicker selected={date} onChange={(date) => setDate(date)} /> 
      <Select
        onChange={(event) => {
          setStartingTime(event.target.value)
        }}
      >
        {times.map((time) => (
          <option value={time.time}>{time.time}</option>
        ))}
      </Select>
      <Select
        onChange={(event) => {
          setEndingTime(event.target.value)
        }}
      >
        {times.map((time) => (
          <option value={time.time}>{time.time}</option>
        ))}
      </Select>
      <Button onClick={null}>Create</Button>
      {appointments.map((appointment) => (
        <h2 key={appointment.id}>{appointment.date}</h2>
      ))}
    </StyledForm>
  )
}

export default CreateAppointment
