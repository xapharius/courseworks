import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' }
]

const buildControls = props => (
  <div className="BuildControls">
    <p>Burger price: {props.price}</p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          label={ctrl.label}
          addIngredient={() => props.addIngredient(ctrl.type)}
          key={ctrl.type}
        />
      )
    })}
    <button onClick={props.removeIngredient}>Remove Ingredient</button>

    <button className="OrderButton" onClick={props.orderHandler}>
      ORDER
    </button>
  </div>
)

export default buildControls
