import { Button } from './styles/Button.styled'
import { useState } from 'react'
import CalendarView from './CalendarView'
import { StyledCalendarView } from './styles/CalendarView.styled'
import Calendar from 'react-calendar'
import { Input } from './styles/Input.styled copy'
import { FaCalendar } from 'react-icons/fa'
import { Select } from './styles/Input.styled copy 2'
import { times } from './Times'

const CreateAppointment = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, date: '123.32.1990', text: 'lorem 20' },
    { id: 2, date: '123.32.1990', text: 'lorem 20' },
    { id: 3, date: '123.32.1990', text: 'lorem 20' },
  ])
  const [date, setDate] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const [startingTime, setStartingTime] = useState(null)
  const [endingTime, setEndingTime] = useState(null)

  const changeDate = (event) => {
    setDate(event)
  }

  return (
    <div>
      <h1>Create appointment</h1>
      Date
      <Input></Input>
      <FaCalendar onClick={() => setShowCalendar(!showCalendar)} />
      {showCalendar ? (
        <StyledCalendarView>
          <Calendar value={date} onChange={changeDate} />
        </StyledCalendarView>
      ) : null}
      Starting time:
      <Select
        onChange={(event) => {
          setStartingTime(event.target.value)
        }}
      >
        {times.map((time) => (
          <option value={time.time}>{time.time}</option>
        ))}
      </Select>
      Ending time:
      <Select
        onChange={(event) => {
          setStartingTime(event.target.value)
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
    </div>
  )
}

export default CreateAppointment
