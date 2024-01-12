import React from 'react'

export default function Categories({setSelectedCategory, selectedCategory, cartSize, categories}) {
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase()+text.substring(1);
  }

  return (
    <div className='categories'>
      {
        categories.map(category => {
          let className = category + (selectedCategory === category ? ' selected' : '');
          let text = capitalize(category)+(category === 'cart' ? `(${cartSize})` : '')
          return <button onClick={() => setSelectedCategory(category)} className={className} key={category}>{text}</button>
        })
      }
    </div>
  )
}