import React from 'react'
import { Button } from 'reactstrap'

export default function RemoveFromCart({handleRemoveFromCart, meal}) {
  return (
    <div className='cart-button-div'>
      <Button onClick={(e) => handleRemoveFromCart(meal)} color='danger'>
        <i className='fa fa-cart-arrow-down'></i>
      </Button>
      <p> Qt.{meal.quantity}</p>
    </div>
  )
}