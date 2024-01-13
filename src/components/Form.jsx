import React from 'react'
import { Card, Button} from 'reactstrap'

export default function Form() {
  return (
    <Card body color="light" style={{width: '16rem'}} className='meal-card'>
        <div class="image-upload">
            <label for="file-input">
                <i className='fa fa-picture-o' style={{fontSize: '100px'}}></i>
            </label>
            <input id="file-input" type="file" style={{display: 'none'}}/>
        </div>
        <div>
            <input type="text" placeholder='Title' className='my-1' />
            <input type="text" placeholder='Category' className='my-1' />
            <label><input type="text" placeholder='price' className='my-1'/></label>
            <textarea  cols="19" rows="3" placeholder='Description' className='my-1'></textarea>
            <Button color='primary'>Create New Meal</Button>
        </div>
    </Card>
  )
}
