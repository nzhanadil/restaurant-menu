import React, { Component } from 'react'

export default class Meal extends Component {
  render() {
    const {src, title, price, desc} = this.props.data
    return (
      <div className='item'>
        <div className='item-left'>
            <img src={src} alt="" />
        </div>
        <div className='item-right'>
            <p><strong>{title}</strong>{` $${price}`}</p>
            <p>{desc}</p>
            <button>Add to cart</button>
        </div>
      </div>
    )
  }
}
