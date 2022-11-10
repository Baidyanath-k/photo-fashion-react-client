import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Allservices = ({ser}) => {
    const{_id}=ser;
    console.log(ser)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={ser?.image_url}>
                        <img src={ser?.image_url} alt="" className="rounded-xl"/>
                    </PhotoView>
                </PhotoProvider>
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center">{ser?.title}</h2>
                
                    <div className="card-paragraph">
                        {ser?.details
                                .slice(0, 100)
                                .concat("...")
                        }
                    </div>

                    <div className="card-rate-price py-8 w-full flex justify-between">
                        <h3 className='font-bold'>Amount: {ser.price}tk</h3>
                        <h3 className='font-bold'>Rating: {ser.rating.number}</h3>
                    </div>
                

                <div className="card-actions w-full flex justify-between">
                    <button className="btn btn-ghost">
                        <Link to={`/services/${ser._id}`}>Details</Link>
                    </button>
                <button className="btn btn-ghost">
                    <Link to={`/checkouts/${_id}`}>Buy Now</Link>
                </button>
                </div>
                
            </div>
        </div>
    );
};

export default Allservices;