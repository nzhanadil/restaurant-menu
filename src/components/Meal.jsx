import React, { Component } from 'react'
import RemoveFromCart from './RemoveFromCart'
import AddToCart from './AddToCart'

export default class Meal extends Component {
  render() {
    const {data, handleClick} = this.props
    const {src, title, price, desc} = data

    return (
      <div className='item'>
        <div className='item-left'>
            <img src={src} alt="" />
        </div>
        <div className='item-right'>
            <p><strong>{title}</strong>{` $${price}`}</p>
            <p>{desc}</p>
            {data.hasOwnProperty('quantity') ? <RemoveFromCart handleRemoveFromCart={handleClick} meal={data}/> : <AddToCart handleAddToCart={handleClick} meal={data}/>}
        </div>
      </div>
    )
  }
}