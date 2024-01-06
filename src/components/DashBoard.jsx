import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import { API_URL } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DashBoard() {
    // Navigate hook for programmatic navigation
    let navigate = useNavigate();

    // State to store fetched data from the API
    let [axiosData, setAxiosData] = useState([]);

    // State for form fields (companyName and adrress)
    let [companyName, setCompanyName] = useState("");
    let [adrress, setAdrress] = useState("");

    // Effect hook to fetch data from the API on component mount
    useEffect(() => {
        getAxios();
    }, []);

    // Function to fetch data from the API
    let getAxios = async () => {
        try {
            // Axios GET request to fetch data
            let res = await axios.get(API_URL);

            // Check if the request was successful (status code 200)
            if (res.status === 200) {
                // Update the state with the fetched data
                setAxiosData(res.data);
            }
        } catch (error) {
            // Handle errors during the API request
            toast.error("Error fetching data from the API");
        }
    };

    // Function to toggle the status of a blog
    let toggleBlog = async (e) => {
        try {
            // Toggle the status property of the blog
            e.status = !e.status;

            // Axios PUT request to update the blog status
            let res = await axios.put(`${API_URL}/${e.id}`, e);

            // Check if the request was successful (status code 200)
            if (res.status === 200) {
                // Display success message and update the displayed data
                toast.success('Blog Status Changed!');
                getAxios();
            }
        } catch (error) {
            // Handle errors during the API request
            toast.error("Error toggling blog status");
        }
    };

    // Function to handle blog deletion
    let handleDelete = async (id) => {
        try {
            // Axios DELETE request to delete a blog
            let res = await axios.delete(`${API_URL}/${id}`);

            // Check if the request was successful (status code 200)
            if (res.status === 200) {
                // Display success message and update the displayed data
                toast.success('Blog Deleted Successfully!');
                getAxios();
            }
        } catch (error) {
            // Handle errors during the API request
            toast.error("Internal Server Error");
        }
    };

    return (
        <>
            {/* TopBar component for navigation */}
            <TopBar />

            <div>
                {/* Table for displaying blog data */}
                <Table responsive bordered striped hover className="overflow-auto mt-4">
                    <thead>
                        <tr>
                            {/* Table headers */}
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>#</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Name</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Address</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Image</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Email</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Company Name</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Website Name</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Status</th>
                            <th className='text-center fw-bold' style={{backgroundColor:'aliceblue'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapping through axiosData to render each blog */}
                        {axiosData.map((e, i) => {
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
                            return (
                                <tr key={i}>
                                    {/* Displaying blog data */}
                                    <td className='text-center'><b>{i + 1}</b></td>
                                    <td className='text-center'><i><b>{e.name}</b></i></td>
                                    <div style={{ width: "300px", overflow: "hidden", whiteSpace: "wrap", textOverflow: "ellipsis" }}>
                                        <td className='text-center'>
                                            {/* Displaying address data */}
                                            <i><b>{`Street: ${e.address.street}
                                            City: ${e.address.city}
                                            ZipCode: ${e.address.zipcode}
                                            `}</b></i>
                                        </td>
                                    </div>
                                    <td className='text-center'>
                                        {/* Displaying blog image */}
                                        <img src={e.image} alt={e.name} style={{ width: "8em", height: '8em' }} className='img-fluid img rounded-4' title={e.name} />
                                    </td>
                                    <td className='text-center'><i><b>{e.email}</b></i></td>
                                    <td className='text-center'><i><b>{e.company.name}</b></i></td>
                                    <td className='text-center'><i><b>{e.website}</b></i></td>
                                    <td className='text-center'>
                                        {/* Toggle switch for blog status */}
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={e.status} onChange={() => toggleBlog(e)} />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td className='text-center'>
                                        {/* Edit and Delete buttons */}
                                        <Button variant="info" className='mt-2' onClick={() => navigate(`/edit/${e.id}`)}><b>Edit</b></Button>
                                        <br className="d-md-none" />
                                        <Button variant="danger" className='mt-2 mx-2' onClick={() => handleDelete(e.id)}><b>Delete</b></Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default DashBoard;
