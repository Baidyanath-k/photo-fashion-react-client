import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch(`https://assignment-eleven-server-blue.vercel.app/services`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="services-header">
                <h2 className='text-center font-bold text-4xl'>My Service</h2>
            </div>
            <div className="service-container my-5 grid grid-cols-2 md:grid-cols-2 gap-8">
            {
                services.map(service =><Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>

            <button className="btn btn-ghost m-auto text-center w-full">
                <Link to='/allservice'>See All</Link>
            </button>
            
        </div>
    );
};

export default Services;