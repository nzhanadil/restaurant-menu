import React, { Component } from 'react'
import {data} from './data.js'
import Meal from './components/Meal.jsx';
import Box from './components/Box.jsx';
import Search from './components/Search.jsx';
import Categories from './components/Categories.jsx';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchText: '',
      selectedCategory: 'all',
      products: data
    }
  }

  setSelectedCategory = (category) => {
    this.setState({selectedCategory: category})
  }

  setSearchText = (text) => {
    this.setState({searchText: text})
  }

  render() {
    const {searchText, selectedCategory, products} = this.state
    return (
      <>
        {/* <SearchBar data={this.state} setSelectedCategory={this.setSelectedCategory} setSearchText={this.setSearchText}/> */}
        
        <Categories setSelectedCategory={this.setSelectedCategory} selectedCategory={selectedCategory} products={products}/>
        <Search setSearchText={this.setSearchText} searchText={searchText}/>
        <div>
        {/* {data.map(product => {
           return <Meal data={product} key={product.id}/>
        })} */}
        <Box data={this.state}/>
      </div>
      </>
    )
  }
}

