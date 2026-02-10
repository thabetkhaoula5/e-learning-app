

function Hero() {

    return (
        <section className="relative w-full px-6 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-20 flex flex-col items-center justify-center gap-6 bg-background">
            <div className="text-center">
                <h1 className="text-6xl/20 font-semibold text-white capitalize">Développez vos{" "} 
                    <span className="text-orange">Compétences</span>.
                <br/>
                 Apprenez avec de vrais experts.</h1>
                <p className="font-normal text-[18px] text-white py-4">Maîtrisez des compétences professionnelles avec des cours de qualité, des projets pratiques et l'accompagnement des meilleurs formateurs.</p>
                <div>
                    <div className="flex items-center justify-center gap-4 py-4">
                        <button type="button" className="bg-white text-darkBlue md:inline hidden text-[16px] font-semibold hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300 w-48 h-12 px-4 rounded-full cursor-pointer">
                            Essayer Gratuitement
                        </button>
                        <button type="button" className="bg-white/30 text-white md:inline hidden text-[16px] font-semibold hover:shadow-lg hover:shadow-black/10 hover:-translate-y-1 transition-all duration-300 w-44 h-12 px-4 rounded-full cursor-pointer">
                            Explorer Courses
                        </button>
                     </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img className="w-full max-w-lg md:max-w-xl lg:max-w-4xl h-auto object-contain" src="/images/img-1.png" alt="étudiante" />
            </div>

        </section>
    );
}

export default Hero;