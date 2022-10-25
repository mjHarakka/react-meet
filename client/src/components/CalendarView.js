import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { StyledCalendarView } from './styles/CalendarView.styled'

export default function CalendarView() {
  const [date, setDate] = useState(new Date())

  const changeDate = (event) => {
    setDate(event)
  }


  return (
    <StyledCalendarView>
      <Calendar value={date} onChange={changeDate}/>
    </StyledCalendarView>
  )
}
