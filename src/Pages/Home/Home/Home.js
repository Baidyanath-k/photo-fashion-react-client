import React from 'react';
import Services from '../../Services/Services';
import Carousel from '../Carousel/Carousel';
import Collection from '../Collection/Collection';
import MyStory from '../MyStory/MyStory';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <MyStory></MyStory>
            <Services></Services>
            <Collection></Collection>
        </div>
    );
};

export default Home;