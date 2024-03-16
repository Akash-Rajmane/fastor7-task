import React, { useEffect, useState } from 'react';
import HomeHeader from '../components/HomeHeader';
import List from '../components/List';
import { ThreeDots } from  'react-loader-spinner';
import Banner from '../components/Banner';


const Home = ({info,setInfo}) => {
const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    fetch('https://staging.fastor.in/v1/m/restaurant?city_id=118&&', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setInfo(data);
      setIsLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  }, []); 

  return (
    <>
        <HomeHeader/>
        <Banner/>
        {isLoading ?  <div className='loader-box'>
                        <div className='loader'>    
                        <ThreeDots  
                                    height="80" 
                                    width="80" 
                                    radius="9"
                                    color="#403d3d" 
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                />
                        </div>  
                    </div>            
                    : <List data={info}/>
        }
    </>
  );
}

export default Home;
