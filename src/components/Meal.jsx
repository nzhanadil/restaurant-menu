import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import AddToCart from './AddToCart'
import RemoveFromCart from './RemoveFromCart'
import { useState } from 'react'
import { DeleteModal } from './DeleteModal'

export default function Meal({data, handleClick, handleDelete, handlePatch}) {
    const {id, src, title, price, desc} = data

    const [deleteModal, setDeleteModal] = useState(false);
    const toggleDelete = () => setDeleteModal(!deleteModal);

  return ( 
    <Card body color="light" style={{width: '16rem'}} key={id} className='meal-card'>
        <img src={src} alt={title}/>
        <CardBody>
            <DeleteModal deleteModal={deleteModal} toggleDelete={toggleDelete} handleDelete={handleDelete} id={id}/>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">{`$${price}`}</CardSubtitle>
            <CardText>{desc}</CardText>
            {data.hasOwnProperty('quantity') ? <RemoveFromCart meal={data} handleRemoveFromCart={handleClick}/> : 
                <AddToCart toggleDelete={toggleDelete} handlePatch={handlePatch} handleAddToCart={handleClick} meal={data}/>}
        </CardBody>
    </Card>
  )
}
