import React, { Component } from 'react'
import {data} from './data.js'
import Search from './components/Search.jsx';
import Categories from './components/Categories.jsx';
import Container from './components/Container.jsx';
import CreateNewMeal from './components/createNewMeal/CreateNewMeal.jsx';
import './App.css'
import './components/App.css'

import Categories1 from './components/Categories1.jsx';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      categories: [],
      searchText: '',
      selectedCategory: 'all',
      products: data,
      cart: [],
      cartSize: 0
    }
  }

  handleCategories = (arr) =>{
    this.setState({categories: arr})
  }

  setSelectedCategory = (category) => {
    this.setState({selectedCategory: category})
  }

  setSearchText = (text) => {
    this.setState({searchText: text})
  }

  handleRemoveFromCart = (meal) => {
    let cart = this.state.cart
    let found = false;

    cart.map(el=> {
      if(el.id===meal.id && el.quantity>1){
        el.quantity--;
        found = true;
      }
    })

    if(!found){
      cart = cart.filter(el => el.id !==meal.id)
    }
    
    this.setState({cart: cart, cartSize: this.state.cartSize-=1})

  }

  handleAddToCart = (meal) => {
    meal = JSON.parse(JSON.stringify(meal));

    let cart = this.state.cart

    const existingMeal = cart.find(el=> el.id===meal.id)

    if(existingMeal){
      existingMeal.quantity++;
    } else{
      meal.quantity = 1;
      cart.push(meal)
    }

    this.setState({cart: cart, cartSize: this.state.cartSize+=1})
  }

  handleCreateNewMeal = (meal) => {

    meal = JSON.parse(JSON.stringify(meal));

    let products = JSON.parse(JSON.stringify(this.state.products));

    console.log(this.state.products)
    products.push(meal)
    meal.id=meal.title;
    this.setState({products: products})
    console.log(meal)
  }

  getUniqueCategories = (data) => {
    const array = ['all']
    for(let arr of data){
        if(!array.includes(arr.category))
            array.push(arr.category)       
    }
    array.push('cart')
    return array
  }

  componentDidMount(){
    this.setState({categories: ['all', ...this.getUniqueCategories(this.state.products), 'cart']})
  }



  render() {
    const {searchText, selectedCategory, products, cartSize, categories} = this.state
    return (
      <>

        <CreateNewMeal handleCreateNewMeal={this.handleCreateNewMeal}/>

        <h1>Restaurant Menu</h1>  
        {/* <Categories setSelectedCategory={this.setSelectedCategory} selectedCategory={selectedCategory} products={products} cartSize={cartSize}/> */}
        
        <Categories1 setSelectedCategory={this.setSelectedCategory} selectedCategory={selectedCategory} categories={this.getUniqueCategories(products)} cartSize={cartSize} />
        <Search setSearchText={this.setSearchText} searchText={searchText}/>

        <Container data={this.state} handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart}/>
      </>
    )
  }
}

