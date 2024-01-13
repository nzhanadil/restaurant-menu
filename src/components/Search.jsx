import React from 'react'
import { useState } from 'react'
import FormModal from './FormModal'
import { InputGroup, Input, Button } from 'reactstrap'

export default function Search({setSearchText, searchText, handlePost}) {

  const [createModal, setCreateModal] = useState(false);
  const toggleCreate = () => setCreateModal(!createModal);

  return (
    <>
      <FormModal  modal={createModal} toggle={toggleCreate} handleApi={handlePost}/>
      <InputGroup className='w-50 my-3 mx-auto'>
        <Input placeholder="Search..."  value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        {searchText.trim() !== '' && <Button onClick={() => setSearchText('')} color='danger'>X</Button>}
        <Button className='ms-2' onClick={() => toggleCreate()}>Create New Meal</Button>
      </InputGroup>
    </>
  )
}