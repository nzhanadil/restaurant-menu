import React, { Component } from 'react'

export default class Categories1 extends Component {
    capitalize = (text) => {
        return text.charAt(0).toUpperCase()+text.substring(1);
    }

  render() {
    const {setSelectedCategory, selectedCategory, cartSize, categories} = this.props
    return (
      <div className='categories'>
        {
          categories.map(category => {
            let selected = selectedCategory===category ? ' selected' : ''
            let isCart = category === 'cart' ? `(${cartSize})` : ''
            return <button onClick={() => setSelectedCategory(category)} className={category+selected} key={category}>{this.capitalize(category)+isCart}</button>
          })
        }
      </div>
    )
  }
}
