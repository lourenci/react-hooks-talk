import React, { useState, useEffect } from 'react'

export default function (props) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `Functional ${counter}`
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1)
    }, 2500)

    return () => clearInterval(interval)
  })

  return (
    <div>
      <h2>Functional component</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter => counter + 1)}>Increment Functional</button>
    </div>
  )
}
