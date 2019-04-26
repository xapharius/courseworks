import React from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const PRICES = {
  salad: 1,
  meat: 1,
  cheese: 1,
  bacon: 1
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: ['salad', 'cheese', 'meat'],
    price: 3,
    order: false
  }

  addIngredientHandler = type => {
    const ingredients = [...this.state.ingredients]
    ingredients.push(type)
    this.setState({ ingredients: ingredients })
    this.setState({ price: this.state.price + PRICES[type] })
  }

  removeIngredientHandler = () => {
    const ingredients = [...this.state.ingredients]
    let ingredient = ingredients.pop()
    this.setState({ ingredients: ingredients })
    if (ingredient != null) {
      this.setState({ price: this.state.price - PRICES[ingredient] })
    }
  }

  orderHandler = () => {
    this.setState({ order: true })
  }

  cancelOrderSummary = () => {
    this.setState({ order: false })
  }

  continueOrderSummary = () => {
    alert('Not implemented yet')
  }

  render() {
    return (
      <>
        <Modal show={this.state.order} cancelOrder={this.cancelOrderSummary}>
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.cancelOrderSummary}
            continue={this.continueOrderSummary}
            price={this.state.price}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          orderHandler={this.orderHandler}
          price={this.state.price}
        />
      </>
    )
  }
}

export default BurgerBuilder
