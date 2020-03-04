import React from 'react'

export function withIncrement (Component) {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = { counter: 0 }
      this.incrementCounter = this.incrementCounter.bind(this)
    }

    incrementCounter () {
      this.setState(state => ({ counter: state.counter + 1 }))
    }

    render () {
      return (
        <Component counter={this.state.counter} increment={this.incrementCounter} />
      )
    }
  }
}

export default class Counter extends React.Component {
  componentDidMount () {
    document.title = `Class ${this.props.counter}`

    this.interval = setInterval(this.props.increment, 2000)
  }

  componentDidUpdate () {
    document.title = `Class ${this.props.counter}`
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        <h2>Class component</h2>
        <p>{this.props.counter}</p>
        <button onClick={this.props.increment}>Increment class component</button>
      </div>
    )
  }
}
