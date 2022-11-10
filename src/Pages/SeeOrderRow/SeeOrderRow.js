import React, { useEffect, useState } from 'react';

const SeeOrderRow = ({order}) => {
    const{customer,email,phone,price,serviceName,service}=order;
    const[serOrder,setSerorder]=useState();

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setSerorder(data))
    },[service])
    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                serOrder?.img&&
                                <img
                                src={serOrder.img}
                                alt="service img"/>
                            }
                            
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br/>
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Details</button>
            </th>
        </tr>
    );
};

export default SeeOrderRow;