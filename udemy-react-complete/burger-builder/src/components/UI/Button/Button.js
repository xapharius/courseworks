import React from 'react'
import './Button.css'

const button = props => (
  <button
    className={['Button', props.buttonType].join(' ')}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

export default button
