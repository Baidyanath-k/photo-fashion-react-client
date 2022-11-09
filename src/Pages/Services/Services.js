import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[services,setServices]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="services-header">
                <h2 className='text-center font-bold text-4xl'>My Service</h2>
            </div>
            <div className="service-container grid grid-cols-2 md:grid-cols-2 gap-8">
            {
                services.map(service =><Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;