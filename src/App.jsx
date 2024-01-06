import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
export const API_URL ='https://65990c7da20d3dc41cef31b0.mockapi.io/ReactApp'
let data=[{
  "street": "Douglas Extension",
"suite": "Suite 847",
"city": "McKenziehaven",
"zipcode": "59590-4157"
},
{"street": "Hoeger Mall",
"suite": "Apt. 692",
"city": "South Elvis",
"zipcode": "53919-4257"},
{"street": "Skiles Walks",
"suite": "Suite 351",
"city": "Roscoeview",
"zipcode": "33263"},
{
  "street": "Norberto Crossing",
"suite": "Apt. 950",
"city": "South Christy",
"zipcode": "23505-1337"
},
{"street": "Rex Trail",
"suite": "Suite 280",
"city": "Howemouth",
"zipcode": "58804-1099"},
{"street": "Ellsworth Summit",
"suite": "Suite 729",
"city": "Aliyaview",
"zipcode": "45169"},
{"street": "Dayna Park",
"suite": "Suite 449",
"city": "Bartholomebury",
"zipcode": "76495-3109"},
{"street": "Kattie Turnpike",
"suite": "Suite 198",
"city": "Lebsackbury",
"zipcode": "31428-2261"}

]
let NewData=data.map((ele,i)=>({
  ...ele,
  address:ele
}))
// console.log('newdata',NewData)
export const Modified_API_URL = 'https://65990c7da20d3dc41cef31b0.mockapi.io/ReactApp-with-address'

function App() {
  const router=createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}/>
  </>
}

export default App