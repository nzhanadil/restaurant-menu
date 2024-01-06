import React, { Component } from 'react'
import {data} from './data.js'
import Search from './components/Search.jsx';
import Categories from './components/Categories.jsx';
import Container from './components/Container.jsx';
import CreateNewMeal from './components/CreateNewMeal.jsx';
import './App.css'
import './components/App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      searchText: '',
      selectedCategory: 'all',
      products: data,
      cart: [],
      cartSize: 0
    }
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
  handleInput = (e) => {
      const file = e.target.files[0];

      const reader = new FileReader();

      reader.addEventListener('load', ()=>{
        console.log(reader.result)
      })

      reader.readAsDataURL(file);


  }


  render() {
    const {searchText, selectedCategory, products, cartSize} = this.state
    return (
      <>
        <input type='file' id='fileInput' onChange={(e) => this.handleInput(e)}/>

        <CreateNewMeal />

        <h1>Restaurant Menu</h1>  
        <Categories setSelectedCategory={this.setSelectedCategory} selectedCategory={selectedCategory} products={products} cartSize={cartSize}/>
        <Search setSearchText={this.setSearchText} searchText={searchText}/>

        <Container data={this.state} handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart}/>
      </>
    )
  }
}

