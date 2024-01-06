import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const {setSearchText, searchText} = this.props
    return (
        <div className='searchBar'>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            {searchText.trim() !== '' ? <button className='clear-btn' onClick={() => setSearchText('')}>x</button> : <></>}
        </div>
    )
  }
}