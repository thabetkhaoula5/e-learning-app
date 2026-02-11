"use client"

import { useState } from 'react';

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            text: "Les cours étaient fantastiques ! La plateforme Master est parfaite pour ceux qui cherchent une nouvelle carrière ou qui ont besoin de rafraîchir leurs connaissances.",
            name: "Lina Jones",
            role: "Étudiante, Université"
        },
        {
            text: "Une expérience d'apprentissage exceptionnelle ! Les mentors sont incroyablement compétents et les projets pratiques m'ont vraiment aidé à développer mes compétences.",
            name: "Marc Dubois",
            role: "Développeur, Tech Corp"
        },
        {
            text: "Grâce à ces cours, j'ai pu faire la transition vers une carrière dans la tech. Le contenu est à jour et très bien structuré. Je recommande vivement !",
            name: "Sophie Martin",
            role: "Designer UI/UX"
        }
    ];

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="relative flex flex-col items-center justify-center my-12 md:my-20 px-4">
            <div className="flex flex-col text-center gap-2 mb-8 md:mb-12">
                <span className="font-semibold text-sm text-blue">Témoignages</span>
                <p className="text-2xl md:text-3xl lg:text-4xl text-darkBlue capitalize font-semibold px-4">
                    Ce que disent nos étudiants
                </p>
            </div>
            
            <div className="max-w-3xl w-full">
                <p className="text-center font-medium mb-10 md:mb-16 text-darkBlue text-base md:text-xl lg:text-2xl leading-relaxed px-4">
                    {testimonials[currentIndex].text}
                </p>
                
                <div className="flex flex-row justify-center items-center gap-8 md:gap-16 lg:gap-24">
                    <button 
                        onClick={handlePrevious} 
                        className="cursor-pointer rounded-full border border-transparent hover:border-blue transition-colors duration-300 shrink-0" 
                        aria-label="Témoignage précédent"
                    >
                        <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 4.5C14.58 4.5 4.5 14.58 4.5 27C4.5 39.42 14.58 49.5 27 49.5C39.42 49.5 49.5 39.42 49.5 27C49.5 14.58 39.42 4.5 27 4.5ZM34.875 28.6875H23.1975L27.0675 32.5575C27.72 33.21 27.72 34.29 27.0675 34.9425C26.73 35.28 26.3025 35.4375 25.875 35.4375C25.4475 35.4375 25.02 35.28 24.6825 34.9425L17.9325 28.1925C17.28 27.54 17.28 26.46 17.9325 25.8075L24.6825 19.0575C25.335 18.405 26.415 18.405 27.0675 19.0575C27.72 19.71 27.72 20.79 27.0675 21.4425L23.1975 25.3125H34.875C35.7975 25.3125 36.5625 26.0775 36.5625 27C36.5625 27.9225 35.7975 28.6875 34.875 28.6875Z" fill="#23BDEE"/>
                        </svg>
                    </button>
                    
                    <div className="flex flex-col items-center gap-2">
                        <div className="mb-1 md:mb-2">
                            <img 
                                className="border-2 border-blue rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover" 
                                src="/images/img-6.svg" 
                                alt={`Photo de ${testimonials[currentIndex].name}`} 
                            />
                        </div>
                        <span className="text-darkBlue font-semibold text-lg md:text-xl">
                            {testimonials[currentIndex].name}
                        </span>
                        <span className="text-sm md:text-[16px] font-normal text-darkBlue/60 capitalize">
                            {testimonials[currentIndex].role}
                        </span>
                    </div>

                    <button 
                        onClick={handleNext} 
                        className="cursor-pointer rounded-full border border-transparent hover:border-blue transition-colors duration-300 shrink-0" 
                        aria-label="Témoignage suivant"
                    >
                        <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-13.5 lg:h-13.5" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 4.5C14.58 4.5 4.5 14.58 4.5 27C4.5 39.42 14.58 49.5 27 49.5C39.42 49.5 49.5 39.42 49.5 27C49.5 14.58 39.42 4.5 27 4.5ZM36.0675 28.1925L29.3175 34.9425C28.98 35.28 28.5525 35.4375 28.125 35.4375C27.6975 35.4375 27.27 35.28 26.9325 34.9425C26.28 34.29 26.28 33.21 26.9325 32.5575L30.8025 28.6875H19.125C18.2025 28.6875 17.4375 27.9225 17.4375 27C17.4375 26.0775 18.2025 25.3125 19.125 25.3125H30.8025L26.9325 21.4425C26.28 20.79 26.28 19.71 26.9325 19.0575C27.585 18.405 28.665 18.405 29.3175 19.0575L36.0675 25.8075C36.72 26.46 36.72 27.54 36.0675 28.1925Z" fill="#23BDEE"/>
                        </svg>
                    </button>
                </div>

                {/* Indicator dots */}
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-blue w-8' : 'bg-blue/30'
                            }`}
                            aria-label={`Aller au témoignage ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;