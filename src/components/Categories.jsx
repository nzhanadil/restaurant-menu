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
    

    render() {
      const {setSelectedCategory, selectedCategory} = this.props
      return (
        <div className='categories'>
          {
            this.state.categories.map(category => {
              return <button onClick={() => setSelectedCategory(category)} className={category} key={category}>{category}</button>
            })
          }
        </div>
      )
    }
}
