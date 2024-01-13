import React from 'react'
import { Button } from 'reactstrap'

export default function AddToCart({handleAddToCart, meal, toggleDelete, togglePatch}) {
  return (
    <div>
      <Button onClick={() => togglePatch()}color='secondary' className='ms-2'>
        <i className='fa fa-pencil'></i>
      </Button>
      <Button onClick={() => toggleDelete()} color='danger' className='ms-2'>
        <i className='fa fa-trash'></i>
      </Button>
      <Button onClick={() => handleAddToCart(meal)} color='success' className='ms-2'>
        <i className='fa fa-cart-plus'></i>
      </Button>
    </div>
  )
}