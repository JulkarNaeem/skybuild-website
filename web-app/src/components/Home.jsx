import React from 'react';
import Hero from './Hero';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import { CtaStrip, Services } from './Extras';
import Contact from './Contact';
import BimSection from './BimSection'; // Import the new component

const Home = () => {
    return (
        <>
            <Hero />
            <WhyUs />
            <Portfolio />
            <BimSection /> {/* Added BIM Section */}
            <CtaStrip />
            <Services />
            <Contact />
        </>
    );
};

export default Home;
