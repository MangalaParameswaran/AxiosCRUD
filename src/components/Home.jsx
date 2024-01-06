import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import { API_URL } from '../App';
import AxiosCard from './Common/AxiosCard';
import axios from 'axios';
import { toast } from 'react-toastify';

function Home() {
  // State to store fetched data from the API
  let [axiosData, setAxiosData] = useState([]);

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
        // Display success message
        toast.success('Blogs fetched Successfully!');

        // Update the state with the filtered data (status===false)
        setAxiosData(res.data.filter(e => e.status === false));
      }
    } catch (error) {
      // Handle errors during the API request
      toast.error('Error fetching data from the API');
    }
  };

  return (
    <>
      {/* TopBar component for navigation */}
      <TopBar />

      <div className='container-fluid'>
        {/* Mapping through axiosData to render AxiosCard for each blog */}
        {axiosData.map((e) => {
          // Adding mock address and company data for each blog
          e.address = {
            'street': 'Kulas Light',
            'suite': 'Apt. 556',
            'city': 'Gwenborough',
            'zipcode': '92998-3874'
          };
          e.company = {
            'name': 'Romaguera-Crona',
            'catchPhrase': 'Multi-layered client-server neural-net',
            'bs': 'harness real-time e-markets'
          };

          // Rendering AxiosCard component with blog data
          return (
            <AxiosCard
              name={e.name}
              adrress={e.address.city}
              image={e.image}
              email={e.email}
              companyName={e.company.name}
              website={e.website}
              key={e.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
