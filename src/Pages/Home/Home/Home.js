import React from 'react';
import Services from '../../Services/Services';
import Carousel from '../Carousel/Carousel';
import MyStory from '../MyStory/MyStory';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <MyStory></MyStory>
            <Services></Services>
        </div>
    );
};

export default Home;