import React, { useState } from 'react'
import ReactCalendar from 'react-calendar'
import Calendar from './Calendar'

const Agenda = (props) => {
  const [value, onChange] = useState(new Date())
  return (
    <>
      <Calendar month={props.month} year={props.year} />
      <br />
      <div style={{ maxWidth: '50%' }}>
        <ReactCalendar value={value} onChange={onChange} />
      </div>
    </>
  )
}

export default Agenda
