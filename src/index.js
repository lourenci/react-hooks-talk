import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

function App () {
  return (
    <>
      <ClassComponent />
      <FunctionalComponent />
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
