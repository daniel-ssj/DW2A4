import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [answer, setAnswer] = useState('')
  const [submited, setSubmited] = useState(false)
  const [score, setScore] = useState(0)

  const handleResult = () => {
    if (submited && answer === 'kokoro') {
      return [<h1>You got it right!</h1>, true]
    } else if (submited) {
      return [<h1>Wrong :(</h1>, false]
    }
  }

  useEffect(() => {
    if (handleResult) setScore(score + 1)
  }, [])

  const changeAnswer = (e) => {
    e.preventDefault()
    setAnswer(e.target.value)
    setSubmited(false)
  }

  return (
    <div>
      <h1>Score: {score}</h1>
      <h1>心</h1>
      <input type='text' value={answer} onChange={(e) => changeAnswer(e)} />
      <button type='submit' onClick={() => setSubmited(true)}>
        Submit
      </button>

      {handleResult()}
    </div>
  )
}

export default NavBar
