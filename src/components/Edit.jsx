import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosCard from './Common/AxiosCard';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {
  // State variables for form fields
  let [name, setName] = useState('');
  let [username, setusername] = useState('');
  let [adrress, setAdrress] = useState('');
  // console.log(address);
  let [image, setImage] = useState('');
  let [email, setEmail] = useState('');
  let [companyName, setCompanyName] = useState('');
  let [website, setWebsite] = useState('');

  // Hook from react-router-dom to get the id parameter from the URL
  let { id } = useParams();

  // Function to handle the edit operation
  let handleEdit = async () => {
    try {
      let data = { name,username, adrress, image, email, companyName, website, status: false };
      let res = await axios.put(`${API_URL}/${id}`, data);
      // console.log(res);
      if (res.status === 200) {
        toast.success('Blog Created Successfully');
        navigate('/dashboard');
      }
    } catch (error) {
      // Handle error
    }
  };

  // Function to fetch data for the specified id from the API
  let getAxiosID = async () => {
    try {
      let data = {};
      let res = await axios.get(`${API_URL}/${id}`);
      // console.log(res);
      if (res.status === 200) {
        setName(res.data.name);
        setusername(res.data.username)
        setAdrress(res.data.adrress);
        setImage(res.data.image);
        setEmail(res.data.email);
        setCompanyName(res.data.companyName);
        setWebsite(res.data.website);
      }
    } catch (error) {
      // Handle error
    }
  };

  // Hook to fetch data when the component mounts
  useEffect(() => {
    getAxiosID();
  }, []);

  // Navigate function from react-router-dom
  let navigate = useNavigate();

  return (
    <>
      <TopBar />
      <div className='mt-4'>
        <Form className='mt-4'>
          <Form.Group className='mb-3 text-center'>
            <Form.Label className='fw-bold'>Name</Form.Label>
            <Form.Control type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='text-center fw-bold' />
          </Form.Group>
          <Form.Group className='mb-3 text-center'>
            <Form.Label className='fw-bold'>User Name</Form.Label>
            <Form.Control type='text' placeholder='Name' value={username} onChange={(e) => setusername(e.target.value)} className='text-center fw-bold' />
          </Form.Group>
          <Form.Group className="mb-3 text-center">
      <Form.Label className='fw-bold'>Address</Form.Label>
      <Form.Control type="text" placeholder="Address" value={adrress} onChange={(e)=>setAdrress(e.target.value)}  className="text-center fw-bold" />
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
            <Button variant='success' className='fw-bold' onClick={() => handleEdit()}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
      
      <div>
        <hr />
        <h2 className='text-center'>Preview</h2>
        <hr />
        {/* Displaying a preview using the AxiosCard component */}
        <AxiosCard name={name} username={username} adrress={adrress} image={image} email={email} companyName={companyName} website={website} />
      </div>
    </>
  );
}

export default Edit;
