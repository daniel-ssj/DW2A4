import React from 'react'
import Week from './Week'

const Calendar = (props) => {
  return (
    <>
      <div>
        {props.month} / {props.year}
      </div>
      <button>D</button>
      <button>S</button>
      <button>T</button>
      <button>Q</button>
      <button>Q</button>
      <button>S</button>
      <button>S</button>
      <Week firstDay={4} />
      <Week firstDay={11} />
      <Week firstDay={18} />
      <Week firstDay={25} />
      <Week firstDay={32} />
    </>
  )
}

export default Calendar
