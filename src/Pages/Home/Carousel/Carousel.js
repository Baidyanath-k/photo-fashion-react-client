import React from 'react';
import slOne from '../../../assets/1.jpg';
import slTwo from '../../../assets/2.jpg';
import slThree from '../../../assets/3.jpg';
import slFour from '../../../assets/4.jpg';
import slFive from '../../../assets/5.jpg';
import slSix from '../../../assets/6.jpg';
import CarouselItem from '../CarouselItem/CarouselItem';

const carouselData = [
    {
        image: slOne,
        prev: 6,
        id: 1,
        next: 2
    }, {
        image: slTwo,
        prev: 1,
        id: 2,
        next: 3
    }, {
        image: slThree,
        prev: 2,
        id: 3,
        next: 4
    }, {
        image: slFour,
        prev: 3,
        id: 4,
        next: 5
    }, {
        image: slFive,
        prev: 4,
        id: 5,
        next: 6
    }, {
        image: slSix,
        prev: 5,
        id: 6,
        next: 1
    }
];

const Carousel = () => {
    return (
        <div className="carousel w-full h-3/4">

            {
                carouselData.map(data=> <CarouselItem
                    key={data.id}
                    data={data}
                ></CarouselItem>)
            }
        </div>
    );
};

export default Carousel;