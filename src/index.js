import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent, { withIncrement } from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

const IncrementalComponent = withIncrement(ClassComponent)

function App () {
  return (
    <>
      <IncrementalComponent />
      <FunctionalComponent />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
