function CallToAction() {
    return (
        <section className="relative flex flex-col md:flex-row justify-center items-center px-12 pt-6 md:pt-8 md:pb-0 pb-6 mx-4 md:mx-10 lg:mx-20 my-8 rounded-2xl bg-linear-to-br from-background via-blue to-background shadow-xl shadow-black/10">
            <div className="hidden md:block -mr-20 lg:-mr-28 shrink-0">
                <img 
                    src="/images/img-5.svg" 
                    alt="Illustration d'apprentissage" 
                    className="w-64 lg:w-auto max-w-full h-auto"
                />
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-[42px] text-white font-semibold capitalize leading-tight">
                    Prêt à améliorer vos compétences ?
                </h2>
                <p className="font-medium text-darkBlue text-base md:text-lg lg:text-[18px] leading-snug">
                    Accédez à des cours pratiques, un mentorat d'experts et des projets concrets pour lancer votre parcours professionnel.
                </p>
                <button className="bg-white/35 rounded-full py-2.5 px-6 md:px-8 mt-2 md:mt-6 text-darkBlue text-base md:text-lg lg:text-[18px] capitalize font-medium w-fit mx-auto md:mx-0 cursor-pointer hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1.5 transition-all duration-500">
                    Commencer gratuitement
                </button>
            </div>
        </section>
    );
}

export default CallToAction;