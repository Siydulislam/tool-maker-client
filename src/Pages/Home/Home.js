import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Tools from './Tools';
import Summary from './Summary';
import Reviews from './Reviews';
import Faq from './Faq';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Header />
            <Banner />
            <Summary />
            <Tools />
            <Reviews />
            <Faq />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;