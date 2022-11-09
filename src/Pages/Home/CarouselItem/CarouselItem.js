import React from 'react';

const CarouselItem = ({data}) => {
    console.log(data)
    const{id,image,next,prev}=data;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-3/4">
                <img src={image} alt='' className="w-full h-3/4"/>
                <div
                    className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default CarouselItem;