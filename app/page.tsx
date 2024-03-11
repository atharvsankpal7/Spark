import EventContainer from "@/components/EventContainer";
import HeroSection from "@/components/HeroSection";
import FooterComponent from "@/components/footer";
import React from "react";

const Home = () => {
    return (
        <>
            <HeroSection />
            
            <EventContainer />
            <FooterComponent/>
        </>
    );
};

export default Home;
