import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={service?.image_url}>
                        <img src={service?.image_url} alt="" className="rounded-xl"/>
                    </PhotoView>
                </PhotoProvider>
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center">{service?.title}</h2>
                
                    <div className="card-paragraph">
                        {service?.details
                                .slice(0, 100)
                                .concat("...")
                        }
                    </div>

                    <div className="card-rate-price py-8 w-full flex justify-between">
                        <h3 className='font-bold'>Amount: {service.price}tk</h3>
                        <h3 className='font-bold'>Rating: {service.rating.number}</h3>
                    </div>
                

                <div className="card-actions w-full flex justify-between">
                    <button className="btn btn-ghost">
                        <Link to={`/services/${service._id}`}>Details</Link>
                    </button>
                    <button className="btn btn-ghost">Buy Now</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;