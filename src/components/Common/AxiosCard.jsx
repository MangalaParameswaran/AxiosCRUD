import React from 'react'
import Card from 'react-bootstrap/Card';
import { API_URL } from '../../App'


function AxiosCard({name,adrress,image,email,companyName,website}) {
  // console.log(API_URL);
  // console.log(Axios);
  return <div className='mx-auto my-4 d-flex justify-content-center'>
  <Card style={{ width: '30rem',padding:"10px"}}>
    <Card.Title className='text-center fw-bold'>{`Name: ${name}`}</Card.Title>
    <Card.Img variant="top" src={image} alt={name} style={{height:'25em'}}/>
    <Card.Body>
    <Card.Text className='text-center fw-bold'>
        <i>{`Adrress: ${adrress}`}</i>
      </Card.Text>  
    <Card.Text className='text-center fw-bold'>
        <i>{`Email: ${email}`}</i>
      </Card.Text>
      <Card.Text className='text-center fw-bold'>
        <i>{`Company name: ${companyName}`}</i>
      </Card.Text>
      <Card.Text className='text-center fw-bold'>
        <i>{`Website Name: ${website}`}</i>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  
}

export default AxiosCard