import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import CallToAction from "@/components/CallToAction";

function HomePage() {

    return (
        <main>
            <Hero></Hero>
            <Features></Features>
            <Courses></Courses>
            <CallToAction></CallToAction>
        </main>
    );
}

export default HomePage;