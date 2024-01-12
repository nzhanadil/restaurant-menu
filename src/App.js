import React, { Component } from 'react'
import Search from './components/Search.jsx';
import Categories from './components/Categories.jsx';
import Container from './components/Container.jsx';
import CreateNewMeal from './components/createNewMeal/CreateNewMeal.jsx';
import './App.css'
import './components/App.css'
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      adminMode: false,
      categories: [],
      searchText: '',
      selectedCategory: 'all',
      products: [],
      cart: [],
      cartSize: 0
    }
  }

  componentDidMount = async () =>{
    this.updateProducts()
  }

  updateProducts = async () => {
    const res = await fetch('https://restaurant-menu-w4mc.onrender.com/menu')
    const data = await res.json()
    this.setState({products: data})
    this.setState({categories: ['all', ...this.getUniqueCategories(this.state.products), 'cart']})
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

    cart = !found ? cart.filter(el => el.id !==meal.id) : cart;
    this.setState({cart: cart, cartSize: this.state.cartSize-=1})
  }

  handleAddToCart = (meal) => {
    meal = JSON.parse(JSON.stringify(meal));
    let cart = this.state.cart

    const existingMeal = cart.find(el => el.id===meal.id)

    if(existingMeal){
      existingMeal.quantity++;
    } else{
      meal.quantity = 1;
      cart.push(meal)
    }

    this.setState({cart: cart, cartSize: this.state.cartSize+=1})
  }

  handlePost = async (meal) => {
    axios
    .post('https://restaurant-menu-w4mc.onrender.com/menu', meal)
    .then((res) => {
      console.log(res.data.message)
      this.updateProducts()})
    .catch(error => console.log(error))
  }

  handleDelete = async (id) => {
    axios
      .delete(`https://restaurant-menu-w4mc.onrender.com/menu/${id}`)
      .then((res) => {
        console.log(res.data.message)
        this.updateProducts()})
      .catch(error => console.log(error))
  }

  handlePatch = async ({id, title, price, desc}) => {
    axios
      .patch(`https://restaurant-menu-w4mc.onrender.com/menu/${id}`, {title, price, desc})
      .then((res) => {
        console.log(res.data.message)
        this.updateProducts()})
      .catch(error => console.log(error))
  }

  render() {
    const {searchText, selectedCategory, products, cartSize, categories, adminMode} = this.state
    return (
      <>
        <button onClick={() => this.setState({adminMode : !adminMode})}>AM Turn {!adminMode ? 'ON' : 'OFF'}</button>

        <CreateNewMeal handlePost={this.handlePost} adminMode={adminMode}/>

        <h1>Restaurant Menu</h1>      
        <Categories setSelectedCategory={this.setSelectedCategory} selectedCategory={selectedCategory} categories={this.getUniqueCategories(products)} cartSize={cartSize} />
        <Search setSearchText={this.setSearchText} searchText={searchText}/>

        <Container {...this.state} handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart} handleDelete={this.handleDelete} handlePatch={this.handlePatch}/>
      </>
    )
  }
}

