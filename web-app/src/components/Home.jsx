import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import { CtaStrip, Services, Footer } from './Extras';
import Contact from './Contact';

import BimSection from './BimSection'; // Import the new component

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <WhyUs />
            <Portfolio />
            <BimSection /> {/* Added BIM Section */}
            <CtaStrip />
            <Services />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
