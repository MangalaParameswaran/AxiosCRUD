import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import { API_URL } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DashBoard() {
    let navigate=useNavigate()
    let [axiosData,setAxiosData]=useState([])

    useEffect(()=>{
      getAxios()
    },[])

    let getAxios=async()=>{
      try {
        let res = await axios.get(API_URL)
        // console.log(res);
        if(res.status===200){
                // toast.success('Blogs fetched Successfully!')
        setAxiosData(res.data)
        }
        // setAxiosData(res.data)
        
      } catch (error) {
        toast.error()
        
      }
    }
    let toggleBlog=async (e)=>{
        try {
            e.status = !e.status
            let res=await axios.put(`${API_URL}/${e.id}`,e)
            if(res.status===200){
                toast.success('Blog Status Changed!')
                getAxios()
            }
            
        } catch (error) {
            
        }

    }
    let handleDelete=async(id)=>{
        try {
            let res=await axios.delete(`${API_URL}/${id}`)
            if(res.status===200){
                toast.success('Blog Deleted Successfully!')
        getAxios()

            }
            
        } catch (error) {
            toast.error("Internal Server Error")
            
        }
    }

  return <>
  <TopBar/>
  <div>
  <Table  responsive bordered striped hover className="overflow-auto">
  <thead>
    <tr>
      <th className='text-center fw-bold'>#</th>
      <th className='text-center fw-bold'>Name</th>
      <th className='text-center fw-bold'>Address</th>
      <th className='text-center fw-bold'>Image</th>
      <th className='text-center fw-bold'>Email</th>
      <th className='text-center fw-bold'>Company Name</th>
      <th className='text-center fw-bold'>Website Name</th>
      <th className='text-center fw-bold'>Status</th>
      <th className='text-center fw-bold'>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        axiosData.map((e,i)=>{
            // console.log('e',e);
            e.address = {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874"
            }
            e.company = {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
            return <tr key={i}>
        <td className='text-center'><b>{i + 1}</b></td>
        <td className='text-center'><i><b>{e.name}</b></i></td>
        <div style={{width:"300px", overflow:"hidden", whiteSpace:"wrap",textOverflow:"ellipsis"}}>
        <td className='text-center'><i><b>{`Street: ${e.address.street}
        City: ${e.address.city}
        ZipCode: ${e.address.zipcode}
        `}</b></i></td>
        </div>
        <td className='text-center'>
          <img src={e.image} alt={e.name} style={{ width: "8em", height: '8em' }} className='img-fluid rounded-4' />
        </td>
        <td className='text-center'><i><b>{e.email}</b></i></td>
        <td className='text-center'><i><b>{e.company.name}</b></i></td>
        <td className='text-center'><i><b>{e.website}</b></i></td>
        <td className='text-center'>
          <label className="switch">
            <input type="checkbox" defaultChecked={e.status} onChange={() => toggleBlog(e)} />
            <span className="slider round"></span>
          </label>
        </td>
        <td className='text-center'>
          <Button variant="info" className='mt-2' onClick={()=>navigate(`/edit/${e.id}`)}><b>Edit</b></Button>
          <br className="d-md-none" /> 
          <Button variant="danger"className='mt-2 mx-2' onClick={()=>handleDelete(e.id)}><b>Delete</b></Button>
        </td>
      </tr>

        })
    }
  </tbody>
  </Table>  

  </div>
  </>
}

export default DashBoard