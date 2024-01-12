import React, { Component } from 'react'
import RemoveFromCart from '../RemoveFromCart'
import AddToCart from '../AddToCart'
import './Meal.css'

export default class Meal extends Component {
  constructor({data}){
    super()
    this.state = {
      ...data,
      isEdit: false
    }   
  }
  handleTitle = (e) => {
    this.setState({title : e.target.innerText})
  }
  handlePrice = (e) => {
    this.setState({price : e.target.innerText})
  }
  handleDesc = (e) => {
    console.log()
    this.setState({desc : e.target.textContent})
  }
  handleIsEdit = () => {
    this.setState({isEdit : !this.state.isEdit})
  }
  render() {
    const {data, handleClick, handleDelete, adminMode, handlePatch} = this.props
    const {id, src, title, price, desc, isEdit} = this.state

    const editBtn = <button onClick={() => this.handleIsEdit()}>Edit</button>;
    const saveBtn = <button onClick={() => {
        handlePatch({id, src, title, price, desc})
        this.handleIsEdit()}}>Save</button>
    
    return (
      <div className='item'>
        <div className='item-left'>
          <img src={src} alt="" />
        </div>
        <div className='item-right'>
          
          <p contentEditable={isEdit} onInput={(e) => this.handleTitle(e)} className='title'>{title}</p>
          <span className='price-span'> $<p contentEditable={isEdit} onInput={(e) => this.handlePrice(e)} className='price'>{price}</p></span>
          <p contentEditable={isEdit} onInput={(e) => this.handleDesc(e)} className='desc'>{desc}</p>
          {adminMode ? isEdit ? saveBtn : editBtn : <></>}
          {data.hasOwnProperty('quantity') ? <RemoveFromCart handleRemoveFromCart={handleClick} meal={data}/> : <AddToCart handleAddToCart={handleClick} meal={data}/>}
          {adminMode ? <button onClick={() => handleDelete(id)} className='delete-meal'> Delete Meal</button> : <></>}
          
        </div>
      </div>
    )
  }
}