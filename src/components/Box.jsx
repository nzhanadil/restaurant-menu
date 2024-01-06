import React, { Component } from 'react'
import Meal from './Meal'

export default class Box extends Component {
  render() {
    const {selectedCategory, searchText, products} = this.props.data
    return (
      <div>
        {
            products.map(product => {
                if(selectedCategory==='all'){
                    return <Meal data={product}/>
                }if(product.category===selectedCategory){
                    return <Meal data = {product} />
                }
            })
        }
        
      </div>
    )
  }
}
