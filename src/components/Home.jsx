import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import { API_URL } from '../App'
import AxiosCard from './Common/AxiosCard'
import axios from 'axios'
import {toast} from 'react-toastify'



function Home() {
  let [axiosData,setAxiosData]=useState([])

  useEffect(()=>{
    getAxios()
  },[])
  let getAxios=async()=>{
    try {
      let res = await axios.get(API_URL)
      // console.log(res);
      if(res.status===200){
              toast.success('Blogs fetched Successfully!')
      setAxiosData(res.data.filter(e=>e.status===false))
      }
      // setAxiosData(res.data)
      
    } catch (error) {
      toast.error()
      
    }
  }
  
  return <>
  <TopBar/>
  <div className='container-fluid'>
    {
      axiosData.map((e)=>{
        // console.log(e);
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
        return <AxiosCard name={e.name} adrress={e.address.city} image={e.image} email={e.email} companyName={e.company.name} website={e.website} key={e.id}/>
      })
    }

  </div>
  </>
}

export default Home