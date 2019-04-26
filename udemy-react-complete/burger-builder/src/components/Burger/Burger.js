import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
  // Map array of strings into components
  const ingredients = props.ingredients.map((ingredient, ix) => {
    return <BurgerIngredient type={ingredient} key={ix} />
  })

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
