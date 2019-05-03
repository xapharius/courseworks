import React from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'

const PRICES = {
  salad: 1,
  meat: 1,
  cheese: 1,
  bacon: 1
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    price: 3,
    order: false,
    loading: false
  }

  componentDidMount() {
    axios.get('default_ingredients.json').then(resp => {
      this.setState({ ingredients: Object.values(resp.data) })
    })
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
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price
    }
    axios
      .post('/orders.json/', order)
      .then(resp => {
        this.setState({ loading: false, order: false })
      })
      .catch(error => {
        this.setState({ loading: false, order: false })
      })
  }

  render() {
    let orderSummary = <Spinner />
    let burger = <Spinner />

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            orderHandler={this.orderHandler}
            price={this.state.price}
          />
        </>
      )

      if (!this.state.loading) {
        orderSummary = (
          <OrderSummary
            ingredients={this.state.ingredients}
            cancel={this.cancelOrderSummary}
            continue={this.continueOrderSummary}
            price={this.state.price}
          />
        )
      }
    }

    return (
      <>
        <Modal show={this.state.order} cancelOrder={this.cancelOrderSummary}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    )
  }
}

export default BurgerBuilder
