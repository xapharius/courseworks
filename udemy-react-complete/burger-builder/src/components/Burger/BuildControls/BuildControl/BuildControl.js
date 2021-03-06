import React from 'react'
import './BuildControl.css'

const buildControl = props => (
  <div className="BuildControl">
    <div>{props.label}</div>
    <button className="button" onClick={props.addIngredient}>
      Add
    </button>
  </div>
)

export default buildControl
