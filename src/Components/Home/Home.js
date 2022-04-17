import React from 'react';
import './Home.css'


import Service from '../Service/Service';
import ImageGallery from '../ImageGallery/ImageGallery';
import Banner from '../Banner/Banner';




const Home = () => {
    return (
        <div>

            {/* Banner Section  */}

            <Banner></Banner>

            {/* Image Gallery Section  */}

            <ImageGallery></ImageGallery>

            {/* Services Section  */}

            <Service></Service>


        </div>
    );
};

export default Home;