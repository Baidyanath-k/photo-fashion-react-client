import React from 'react';

const Service = ({service}) => {
    console.log(service);
    // const {details, image_url, price, title} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service?.image_url} alt="" className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service?.title}</h2>
                
                <div className="card-detail">
                    {
                         service?.details.slice(0,100).concat("...")
                    }
                </div>
                    
                
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;