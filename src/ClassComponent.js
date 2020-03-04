import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
  }

  componentDidMount () {
    document.title = `Class ${this.state.counter}`

    this.interval = setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }))
    }, 2000)
  }

  componentDidUpdate () {
    document.title = `Class ${this.state.counter}`
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        <h2>Class component</h2>
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState(state => ({ counter: state.counter + 1 }))}>Increment class component</button>
      </div>
    )
  }
}
