import React from 'react'
import Button from '../../UI/Button/Button'

const orderSummary = props => {
  let counts = {}
  for (let i = 0; i < props.ingredients.length; i++) {
    let ingredient = props.ingredients[i]
    if (ingredient in counts) {
      counts[ingredient] = counts[ingredient] + 1
    } else {
      counts[ingredient] = 1
    }
  }

  const summary = Object.keys(counts).map(ingredient => {
    return (
      <li key={ingredient}>
        {ingredient}: {counts[ingredient]}
      </li>
    )
  })

  return (
    <>
      <h3>Your Order</h3>
      <p>A burger with the following ingredients:</p>
      <ul>{summary}</ul>

      <p>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>

      <Button onClick={props.cancel} buttonType="Danger">
        CANCEL
      </Button>
      <Button onClick={props.continue} buttonType="Success">
        CONTINUE
      </Button>
    </>
  )
}

export default orderSummary
