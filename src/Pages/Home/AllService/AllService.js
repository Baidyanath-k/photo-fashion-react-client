import React, { useEffect, useState } from 'react';
import Allservices from '../../Allservices/Allservices';

const AllService = () => {
    const[allservice,setAllservice]=useState([])
    useEffect(()=>{
        fetch(`https://assignment-eleven-server-blue.vercel.app/allservices`)
        .then(res=>res.json())
        .then(data=>setAllservice(data))
    },[])
    return (
        <div className='grid grid-cols-2 md:grid-cols-2 gap-8'>
            {
                allservice.map(ser=><Allservices
                    key={ser._id}
                    ser={ser}
                ></Allservices>)
            }
        </div>
    );
};

export default AllService;