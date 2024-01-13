import React from 'react'
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { useState, useEffect } from 'react'
import { ADD_NEW_PHOTO_URL } from '../utils/constants'

export default function FormModal({modal, toggle, handleApi, meal}) {

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', ()=>{
      setSrc(reader.result)
    })
    reader.readAsDataURL(file);
  }

  const [src, setSrc] = useState(ADD_NEW_PHOTO_URL)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')

  let modalTitle = "Create New Meal"
  let buttonText =  'Create new Meal'
  let obj = {src: src, title: title, price: price, category: category, desc: desc}

  if(meal !== undefined){
    obj.id = meal.id
    buttonText = 'Save Changes'
    modalTitle = 'Update Meal'
  }

  useEffect(()=>{
    if(meal !== undefined){
      const {src, title, category, price, desc} = meal
      setSrc(src)
      setTitle(title)
      setCategory(category)
      setPrice(price)
      setDesc(desc)
    }
  }, [])

  return (
    <Modal isOpen={modal} toggle={toggle} className='w-50' >
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody className='mx-auto'>
          <Card body color="light" style={{width: '16rem'}} className='meal-card'>
            <div className="image-upload">
                <label htmlFor="file-input" >
                    <img src={src} alt={title} />
                </label>
                <input id="file-input" type="file" style={{display: 'none'} } onChange={(e) => handleUploadImage(e)}/>
            </div>
            <div>
                <input type="text" placeholder='Title' className='my-1' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" placeholder='Category' className='my-1' value={category} onChange={(e) => setCategory(e.target.value)} required/>
                <input type="text" placeholder='price' className='my-1' value={price} onChange={(e) => setPrice(e.target.value)}required/>
                <textarea cols="19" rows="3" placeholder='Decription' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            </div>
          </Card>          
        </ModalBody>
        <ModalFooter>
          
          <Button color='primary' onClick={() => {
            toggle()
            handleApi(obj)
          }}>{buttonText}</Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
    </Modal>
  )
}