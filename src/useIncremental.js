import { useState } from 'react'

export function useIncremental (initialValue) {
  const [counter, setCounter] = useState(initialValue)

  return [counter, () => setCounter(counter => counter + 1)]
}
