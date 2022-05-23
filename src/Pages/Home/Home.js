import React from 'react';
import Banner from './Banner';
import Tools from './Tools';
import Summary from './Summary';
import Reviews from './Reviews';
import Faq from './Faq';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Summary />
            <Tools />
            <Reviews />
            <Faq />
            <Contact />
        </div>
    );
};

export default Home;