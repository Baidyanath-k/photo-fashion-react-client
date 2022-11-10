import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();
    console.log(service);
    const {details,image_url,price,rating,title,total_view}=service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-bold text-5xl text-center m-auto">{title}</h2>
            </div>
            <figure>
                <img src={image_url} alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h3 className='font-bold text-center'>Per Day: {price} TK</h3>
                <p>{details}</p>
            </div>
            <div className="card-body">
                <h2 className='font-bold'>Rating: {rating.number}</h2>
                <h2 className='font-bold'>Feedback: {rating.badge}</h2>
                <h2 className='font-bold'>Total View :{total_view}</h2>
            </div>
        </div>
    );
};

export default Details;