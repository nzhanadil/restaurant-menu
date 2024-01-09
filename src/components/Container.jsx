import React, { Component } from 'react'
import Meal from './Meal'

export default class Container extends Component {
  render() {
    const {data, handleAddToCart, handleRemoveFromCart, handleDelete} = this.props
    const {selectedCategory, searchText, products, cart} = data

    const dataArr = selectedCategory==='cart' ? cart : products

    return (
      <div className='container'>
        {
            dataArr.map(meal => {
                if((meal.desc+meal.title).toLowerCase().includes(searchText)){
                    if(selectedCategory==='cart'){
                        return <Meal data={meal} handleClick={handleRemoveFromCart} key={meal.id}/>
                    }else if(selectedCategory==='all'){
                        return <Meal data={meal} handleClick={handleAddToCart} key={meal.id} handleDelete={handleDelete}/>
                    }else if(meal.category===selectedCategory){
                        return <Meal data = {meal} handleClick={handleAddToCart} key={meal.id} handleDelete={handleDelete}/>
                    }
                }
            })
        }
      </div>
    )
  }
}
