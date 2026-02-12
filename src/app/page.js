"use client"

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

function HomePage() {

    return (
        <main>
            <NavBar></NavBar>
            <Hero></Hero>
            <Features></Features>
            <Courses></Courses>
            <CallToAction></CallToAction>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </main>
    );
}

export default HomePage;