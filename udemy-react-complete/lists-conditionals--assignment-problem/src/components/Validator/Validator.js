import React, { Component } from 'react'
import './Validator.css'

class Validator extends Component {
  render() {
    let message = 'Ok!'
    if (this.props.text.length < 5) {
      message = 'too short!'
    }
    return (
      <div className="Validator">
        <p>Text lenght is {message}</p>
      </div>
    )
  }
}

export { Validator }
