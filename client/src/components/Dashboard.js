import { Button } from './styles/Button.styled'
import { useState } from 'react'
import { Input } from './styles/Input.styled'
import { Select } from './styles/Select.styled'
import { times } from './Times'
import { StyledForm } from './styles/Form.styled'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

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
      Date
      <Input
        value={`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}
        readonly
      ></Input>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={changeDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
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
