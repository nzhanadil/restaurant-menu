import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state={
            categories: [],
        }
    }

    componentDidMount(){
        const {products} = this.props.data
        let allCategories = ['all']
        products.forEach( el => {
            if(!allCategories.includes(el.category)){
                allCategories.push(el.category)
            }
        } )
        allCategories.push('cart')
        this.setState({categories:allCategories})
    }

    handleClick = (e) => {
        e.target.style.color = 'red';
    }

  render() {
    const {categories} = this.state;
    const {setSelectedCategory, data, setSearchText} = this.props
    const {searchText, selectedCategory, products} = data
    let selected = null
    return (
        <>
            <div className='categories'>
            {
                categories.map(category => {
                    if(category===selectedCategory){
                        selected=' selected'
                    }
                    return <button onClick={(e) => setSelectedCategory(e.target.className)} className={category+selected} key={category}>{category}</button>
                })
            }
            </div>
        </>
      
    )
  }
}
