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
        <main className="pt-17.5">
            <NavBar/>
            <section id="accueil"><Hero/></section>
            <section id="fonctionnalites"><Features/></section>
            <Courses/>
            <CallToAction />
            <section id="temoignages"><Testimonials/></section>
            <Footer/>
        </main>
    );
}

export default HomePage;