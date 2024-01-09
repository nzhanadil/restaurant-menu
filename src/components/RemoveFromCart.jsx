import React, { Component } from 'react'

export default class RemoveFromCart extends Component {
  render() {
    const {handleRemoveFromCart, meal} = this.props
    return (
      <div className='cart-button-div'>
        <button onClick={(e) => handleRemoveFromCart(meal)} className='remove-from-cart'>Remove From Cart</button>
        <p> Qt.{meal.quantity}</p>
      </div>
    )
  }
}
