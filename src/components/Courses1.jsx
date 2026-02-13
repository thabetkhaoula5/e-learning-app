function CoursesPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            {/* Container principal centré */}
            <div className="flex flex-col items-center justify-start w-full max-w-[990px] mx-auto gap-10">
                
                {/* Titre centré */}
                <div className="flex flex-col justify-start items-start gap-[30px] w-[990px] h-[54px]">
                    <h1 className="text-[36px] leading-[150%] text-darkBlue capitalize font-semibold font-poppins tracking-normal">
                        Tous Les Cours
                    </h1>
                </div>

                {/* Grid des cards */}
                <div className="grid grid-cols-2 gap-[30px] w-[990px]">
                    
                    {/* Card 1 - Design UI/UX */}
                    <div className="flex flex-col bg-white rounded-[20px] border border-[#25264199] w-[480px] h-[510px] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="p-4">
                            <img src="\images\imge-1.svg" alt="Design UI/UX" className="w-full h-65 object-cover rounded-xl" />
                        </div>
                        <div className="px-5 pb-6 flex flex-col gap-2">
                            <h3 className="text-xl capitalize text-darkBlue font-semibold leading-snug">Design UI/UX</h3>
                            <p className="text-darkBlue/60 text-sm font-normal">Concevez des interfaces utilisateur intuitives et des expériences centrées sur l'utilisateur</p>
                            
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_192)">
                                        <mask id="mask0_17_192" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                                        <path d="M23.25 0.75V23.25H0.75V0.75H23.25Z" stroke="white" strokeWidth="1.5"/>
                                        </mask>
                                        <g mask="url(#mask0_17_192)">
                                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 7H16" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 10.5H13" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_17_192">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">10 leçons</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">3 semaines</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                    <span className="text-sm text-darkBlue font-medium">Lina</span>
                                </div>
                                <button className="text-blue text-sm font-semibold hover:underline cursor-pointer" >
                                    Voir Plus
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Data Analysis With Python */}
                    <div className="flex flex-col bg-white rounded-[20px] border border-[#25264199] w-[480px] h-[510px] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="p-4">
                            <img src="\images\imge-2.svg" alt="Python Data Analysis" className="w-full h-65 object-cover rounded-xl" />
                        </div>
                        <div className="px-5 pb-6 flex flex-col gap-2">
                            <h3 className="text-xl capitalize text-darkBlue font-semibold leading-snug">Data Analysis With Python</h3>
                            <p className="text-darkBlue/60 text-sm font-normal">Maîtrisez l'analyse de données et transformez les données brutes en insights exploitables</p>
                            
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_192)">
                                        <mask id="mask0_17_192" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                                        <path d="M23.25 0.75V23.25H0.75V0.75H23.25Z" stroke="white" strokeWidth="1.5"/>
                                        </mask>
                                        <g mask="url(#mask0_17_192)">
                                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 7H16" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 10.5H13" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_17_192">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">12 leçons</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">1 mois</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                    <span className="text-sm text-darkBlue font-medium">Lina</span>
                                </div>
                                <button className="text-blue text-sm font-semibold hover:underline cursor-pointer">
                                    Voir Plus
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Dev Web */}
                    <div className="flex flex-col bg-white rounded-[20px] border border-[#25264199] w-[480px] h-[510px] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="p-4">
                            <img src="\images\imge-3.svg" alt="Développement Web" className="w-full h-65 object-cover rounded-xl" />
                        </div>
                        <div className="px-5 pb-6 flex flex-col gap-2">
                            <h3 className="text-xl capitalize text-darkBlue font-semibold leading-snug">Développement Web</h3>
                            <p className="text-darkBlue/60 text-sm font-normal">Créez des sites web modernes et responsives du front-end ou back-end</p>
                            
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_192)">
                                        <mask id="mask0_17_192" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                                        <path d="M23.25 0.75V23.25H0.75V0.75H23.25Z" stroke="white" strokeWidth="1.5"/>
                                        </mask>
                                        <g mask="url(#mask0_17_192)">
                                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 7H16" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 10.5H13" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_17_192">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">5 leçons</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">2 semaines</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                    <span className="text-sm text-darkBlue font-medium">Lina</span>
                                </div>
                                <button className="text-blue text-sm font-semibold hover:underline cursor-pointer">
                                    Voir Plus
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 - IA */}
                    <div className="flex flex-col bg-white rounded-[20px] border border-[#25264199] w-[480px] h-[510px] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="p-4">
                            <img src="\images\imge-4.svg" alt="Intelligence Artificielle" className="w-full h-65 object-cover rounded-xl" />
                        </div>
                        <div className="px-5 pb-6 flex flex-col gap-2">
                            <h3 className="text-xl capitalize text-darkBlue font-semibold leading-snug">Intelligence Artificielle Générative</h3>
                            <p className="text-darkBlue/60 text-sm font-normal">Explorez le monde de l'Intelligence Artificielle générative et créez du contenu innovant avec l'IA</p>
                            
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_192)">
                                        <mask id="mask0_17_192" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                                        <path d="M23.25 0.75V23.25H0.75V0.75H23.25Z" stroke="white" strokeWidth="1.5"/>
                                        </mask>
                                        <g mask="url(#mask0_17_192)">
                                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 7H16" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 10.5H13" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_17_192">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">10 leçons</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">2 semaines</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                    <span className="text-sm text-darkBlue font-medium">Lina</span>
                                </div>
                                <button className="text-blue text-sm font-semibold hover:underline cursor-pointer">
                                    Voir Plus
                                </button>
                            </div>
                        </div>
                    </div>                    
                    
                    {/* Card 5 - Cloud */}
                    <div className="flex flex-col bg-white rounded-[20px] border border-[#25264199] w-[480px] h-[510px] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="p-4">
                            <img src="\images\imge-5.svg" alt="Cloud Computing" className="w-full h-65 object-cover rounded-xl" />
                        </div>
                        <div className="px-5 pb-6 flex flex-col gap-2">
                            <h3 className="text-xl capitalize text-darkBlue font-semibold leading-snug">Cloud Computing</h3>
                            <p className="text-darkBlue/60 text-sm font-normal">Maitrissez les technologies cloud et déployer des applications scalables sur les plateformes majeures </p>
                            
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_192)">
                                        <mask id="mask0_17_192" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                                        <path d="M23.25 0.75V23.25H0.75V0.75H23.25Z" stroke="white" strokeWidth="1.5"/>
                                        </mask>
                                        <g mask="url(#mask0_17_192)">
                                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 7H16" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 10.5H13" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_17_192">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">4 leçons</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">3 semaines</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                    <span className="text-sm text-darkBlue font-medium">Lina</span>
                                </div>
                                <button className="text-blue text-sm font-semibold hover:underline cursor-pointer">
                                    Voir Plus
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 - Mobile  */}
                    <div className="flex flex-col bg-white rounded-[20px] border border-[#25264199] w-[480px] h-[510px] overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                        <div className="p-4">
                            <img src="\images\imge-6.svg" alt="Développement Mobile" className="w-full h-65 object-cover rounded-xl" />
                        </div>
                        <div className="px-5 pb-6 flex flex-col gap-2">
                            <h3 className="text-xl capitalize text-darkBlue font-semibold leading-snug">Développement Mobile</h3>
                            <p className="text-darkBlue/60 text-sm font-normal">Développez des applications mobile performantes pour iOS et Android</p>
                            
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_17_192)">
                                        <mask id="mask0_17_192" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <path d="M24 0H0V24H24V0Z" fill="white"/>
                                        <path d="M23.25 0.75V23.25H0.75V0.75H23.25Z" stroke="white" strokeWidth="1.5"/>
                                        </mask>
                                        <g mask="url(#mask0_17_192)">
                                        <path d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 7H16" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 10.5H13" stroke="#252641" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_17_192">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">15 leçons</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange text-sm font-medium">2 mois</span>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                    <span className="text-sm text-darkBlue font-medium">Lina</span>
                                </div>
                                <button className="text-blue text-sm font-semibold hover:underline cursor-pointer">
                                    Voir Plus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default CoursesPage;