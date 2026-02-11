import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

function HomePage() {

    return (
        <main>
            <Hero></Hero>
            <Features></Features>
            <Courses></Courses>
            <CallToAction></CallToAction>
            <Testimonials></Testimonials>
        </main>
    );
}

export default HomePage;