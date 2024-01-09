import React, { Component } from 'react'

export default class AddToCart extends Component {
  render() {
    const {handleAddToCart, handleDelete, meal} = this.props
    return (
    <>
      <button onClick={() => handleAddToCart(meal)} className='add-to-cart'>Add To Cart</button>
      <button onClick={() => handleDelete(meal.id)} className='delete-meal'> Delete Meal</button>
    </>
    )
  }
}