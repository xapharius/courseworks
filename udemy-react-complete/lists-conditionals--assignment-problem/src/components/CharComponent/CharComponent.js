import React, { Component } from 'react'
import './CharComponent.css'

class CharComponent extends Component {
  render() {
    return (
      <div className="CharComponent">
        <input
          type="text"
          value={this.props.char}
          onChange={this.props.change}
        />
        <p onClick={this.props.delete}>delete</p>
      </div>
    )
  }
}

export { CharComponent }
