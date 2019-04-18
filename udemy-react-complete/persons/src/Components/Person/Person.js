import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className="Person">
      <p>My name is {props.name}</p>
      <input type="text" value={props.name} onChange={props.changeName} />
      <p onClick={props.click}> delete </p>
    </div>
  )
}

export { person }
