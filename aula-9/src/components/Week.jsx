import React from 'react'
import Day from './Day'

const Week = (props) => {
  return (
    <div>
      <Day day={props.firstDay} />
      <Day day={props.firstDay + 1} />
      <Day day={props.firstDay + 2} />
      <Day day={props.firstDay + 3} />
      <Day day={props.firstDay + 4} />
      <Day day={props.firstDay + 5} />
      <Day day={props.firstDay + 6} />
    </div>
  )
}

export default Week
