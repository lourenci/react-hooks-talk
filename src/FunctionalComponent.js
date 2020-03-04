import React, { useEffect } from 'react'
import { useIncremental } from './useIncremental'
import { useTitle } from './useTitle'

export default function () {
  const [counter, incrementCounter] = useIncremental(0)
  useTitle(`Functional ${counter}`)

  useEffect(() => {
    const interval = setInterval(incrementCounter, 2500)

    return () => clearInterval(interval)
  })

  return (
    <div>
      <h2>Functional component</h2>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Increment Functional</button>
    </div>
  )
}
