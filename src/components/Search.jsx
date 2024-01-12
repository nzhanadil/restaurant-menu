import React from 'react'
import { InputGroup, Input, Button } from 'reactstrap'

export default function Search({setSearchText, searchText}) {
  return (
    <InputGroup className='w-25 my-3 mx-auto'>
      <Input placeholder="Search..."  value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      {searchText.trim() !== '' && <Button onClick={() => setSearchText('')} color='danger'>X</Button>}
    </InputGroup>
  )
}