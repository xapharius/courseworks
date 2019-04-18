import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          type="text"
          value={this.props.text.join('')}
          onChange={this.props.changeText}
        />
        <p> Length: {this.props.text.length}</p>
      </div>
    )
  }
}

export { Input }
