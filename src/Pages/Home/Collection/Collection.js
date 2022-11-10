import React from 'react';
import myOne from '../../../assets/my1.jpg';
import myTwo from '../../../assets/my2.jpg';
import myThree from '../../../assets/my3.jpg';
import myFour from '../../../assets/my4.jpg';
import myFive from '../../../assets/my5.jpg';
import mySix from '../../../assets/my6.jpg';

const Collection = () => {
    return (
        <div className='my-collection py-10'>
            <div className="collection-head">
                <h2 className='font-bold text-2xl text-center mb-8'>My Collection</h2>
            </div>
            <div className="collection-body grid grid-cols-3 md:grid-cols-3 gap-2">
                <img src={myOne} alt="" />
                <img src={myTwo} alt="" />
                <img src={myThree} alt="" />
                <img src={myFour} alt="" />
                <img src={myFive} alt="" />
                <img src={mySix} alt="" />
            </div>
        </div>
    );
};

export default Collection;