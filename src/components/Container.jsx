import React from 'react'
import Meal from './Meal'

export default function Container({selectedCategory, searchText, products, cart, handleAddToCart, handleRemoveFromCart, handleDelete, handlePatch}) {
  
  const dataArr = selectedCategory==='cart' ? cart : products

  return (
    <div className='container'>
      {
        dataArr.map(meal => {
          if((meal.desc+meal.title).toLowerCase().includes(searchText)){
            if(selectedCategory==='cart'){
                return <Meal data={meal} handleClick={handleRemoveFromCart} key={meal.id}/>
            }else if(selectedCategory==='all'){
                return <Meal data={meal} handleClick={handleAddToCart} key={meal.id} handleDelete={handleDelete} handlePatch={handlePatch}/>
            }else if(meal.category===selectedCategory){
                return <Meal data = {meal} handleClick={handleAddToCart} key={meal.id} handleDelete={handleDelete} handlePatch={handlePatch}/>
            }
          }
        })
      }
    </div>
  )
}