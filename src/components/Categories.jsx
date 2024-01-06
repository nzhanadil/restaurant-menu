import React, { Component } from 'react'

export default class Categories extends Component {
  constructor(){
    super();
    this.state={
        categories: [],
    }
  }

  getUniqueCategories = (data) => {
    const array = []
    for(let arr of data){
        if(!array.includes(arr.category))
            array.push(arr.category)       
    }
    return array
  }

  componentDidMount(){
    this.setState({categories: ['all', ...this.getUniqueCategories(this.props.products), 'cart']})
  }

  capitalize = (text) => {
    return text.charAt(0).toUpperCase()+text.substring(1);
  }
  
  render() {
    const {setSelectedCategory, selectedCategory, cartSize} = this.props
    return (
      <div className='categories'>
        {
          this.state.categories.map(category => {
            let selected = selectedCategory===category ? ' selected' : ''
            let isCart = category === 'cart' ? `(${cartSize})` : ''
            return <button onClick={() => setSelectedCategory(category)} className={category+selected} key={category}>{this.capitalize(category)+isCart}</button>
          })
        }
      </div>
    )
  }
}