import React from 'react'

const Day = (props) => {
  return <button>{props.day > 0 && props.day < 32 ? props.day : '.'}</button>
}

export default Day
