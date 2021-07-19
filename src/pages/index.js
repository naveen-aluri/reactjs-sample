import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Services from '../components/services';
import InfoSection from '../components/InfoSection';
import Benefits from '../components/Benefits';
import TabSection from '../components/TabSection';
import LearnMore from '../components/LearnMore';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
            <Navbar toggleMenu={toggleMenu} />
            <HeroSection />
            <Services />
            <InfoSection />
            <Benefits />
            <TabSection />
            <LearnMore />
            <Testimonial />
            <InfoSection />
        </>
    )
}

export default HomePage;
