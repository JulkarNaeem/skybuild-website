import React, { Suspense } from 'react';
import Hero from './Hero';
import About from './About';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import { CtaStrip, Services } from './Extras';
import Contact from './Contact';
import BimSection from './BimSection';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <WhyUs />
            <Portfolio />
            <BimSection />
            <CtaStrip />
            <Services />
            <Contact />
        </>
    );
};

export default Home;
