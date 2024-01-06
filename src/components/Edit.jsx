import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosCard from './Common/AxiosCard';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function Edit() {
  let [name,setName]=useState("")
  let [adrress,setAdrress]=useState("")
  let [image,setImage] = useState("")
  let [email,setEmail]=useState("")
  let [companyName,setCompanyName]=useState("")
  let [website,setWebsite] = useState("")
  let navigate = useNavigate()
  let {id}=useParams()

  let handleEdit=async()=>{
    try {
      let data={name,adrress,image,email,companyName,website,status:false}
      let res=await axios.put(`${API_URL}/${id}`,data)
      console.log(res);
      if(res.status===200){
      toast.success("Blog Created Successfully")
      navigate('/dashboard')
    }
      
    } catch (error) {
      
    }
  }
  let getAxiosID=async()=>{
    try {
      let data={}
      let res=await axios.get(`${API_URL}/${id}`)
      console.log(res);
if(res.status===200){
  setName(res.data.name)
  setAdrress(res.data.adrress)
  setImage(res.data.image)
  setEmail(res.data.email)
  setCompanyName(res.data.companyName)
  setWebsite(res.data.website)
}
    } catch (error) {
      
    }
  }


  useEffect(()=>{
    getAxiosID()
  },[])


  return <>
  <TopBar/>
  <div className='mt-4'>
  <Form className='mt-4'>
    <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Name</Form.Label>
      <Form.Control type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  className="text-center fw-bold" />
    </Form.Group>
    <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Adrress</Form.Label>
      <Form.Control type="text" placeholder="Adrress" value={adrress} onChange={(e)=>setAdrress(e.target.value)}  className="text-center fw-bold" />
    </Form.Group>

    <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Image URL</Form.Label>
      <Form.Control type="text" placeholder="Image URL" value={image} onChange={(e)=>setImage(e.target.value)} className="text-center fw-bold" />
    </Form.Group>
    <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="text-center fw-bold" />
    </Form.Group>
    <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Company Name</Form.Label>
      <Form.Control type="text" placeholder="Company Name" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}  className="text-center fw-bold" />
    </Form.Group>
    <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Website Name</Form.Label>
      <Form.Control type="text" placeholder="Website Name" value={website} onChange={(e)=>setWebsite(e.target.value)}  className="text-center fw-bold" />
    </Form.Group>
    <div className='text-center'>
    <Button variant="success" className='fw-bold' onClick={()=>handleEdit()}>
      Submit
    </Button>
    </div>
  </Form>
  </div>
  <div>
    <hr />
    <h2 className='text-center'>Preview</h2>
    <hr/>
    <AxiosCard name={name} adrress={adrress} image={image} email={email} companyName={companyName} website={website} />
  </div>
  </>
}

export default Edit