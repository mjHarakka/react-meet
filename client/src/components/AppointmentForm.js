import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAppointment } from '../features/appointments/appointmentSlice'
import { StyledForm } from './styles/Form.styled'
import DatePicker from 'react-datepicker'
import { Select } from './styles/Select.styled'
import { times } from './Times'
import { Button } from './styles/Button.styled'
import 'react-datepicker/dist/react-datepicker.css'

function AppointmentForm() {
  const [date, setDate] = useState(new Date())
  const [startingTime, setStartingTime] = useState('')
  const [endingTime, setEndingTime] = useState('')
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createAppointment({ date, startingTime, endingTime, title }))

    setDate(new Date())
    setStartingTime('')
    setEndingTime('')
    setTitle('')
  }
  console.log(startingTime)
  console.log(endingTime)

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <StyledForm>
          <h1>Create appointment</h1>
          <input
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          ></input>
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
          <Select
            onChange={(event) => {
              setStartingTime(event.target.value)
            }}
          >
            {times.map((time) => (
              <option key={time.time} value={time.time}>
                {time.time}
              </option>
            ))}
          </Select>
          <Select
            onChange={(event) => {
              setEndingTime(event.target.value)
            }}
          >
            {times.map((time) => (
              <option key={time.time} value={time.time}>
                {time.time}
              </option>
            ))}
          </Select>
          <Button type="submit">Create</Button>
        </StyledForm>
      </form>
    </section>
  )
}

export default AppointmentForm
