import React, { Component } from 'react'
import './CreateNewMeal.style.css';

export default class CreateNewMeal extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      category: '',
      price: 0,
      src: '',
      desc: ''
    }
  }

  handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
      this.setState({src: reader.result})
    })
    reader.readAsDataURL(file);
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const {handleCreateNewMeal} = this.props
    // console.log(this.state)
    handleCreateNewMeal(this.state)
    // console.log(this.state)
  }

  render() {
    const {title, category, price, desc} = this.state;
    return (
      <div className='create-new-meal-container'>
        <h2>Please, provide below information</h2>
        <form className='create-new-meal-form' onSubmit={e=> this.handleSubmit(e)}>
            <input type="text" id="title" placeholder='Title' value={title} onChange={(e) => this.setState({title: e.target.value})} required/>

            <input type="text" id="category" placeholder='Category' value={category} onChange={(e) => this.setState({category: e.target.value})} required/>

            <input type="text" id="price" placeholder='Price' value={price} onChange={(e) => this.setState({price: e.target.value})} required/>

            <input type="file" id="image" onChange={(e) => this.handleUploadImage(e)} required/>  

            <textarea type="text" id="description" placeholder='Description' value={desc} onChange={(e) => this.setState({desc: e.target.value})} required/>

            <button type='submit'>Create Meal</button>
        </form>
      </div>
    )
  }
}
