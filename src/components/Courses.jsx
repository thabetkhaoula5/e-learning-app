function Courses() {

    return (
        <section className="relative flex flex-col items-center justify-center py-12 px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl mb-8 gap-4">
                <div className="flex flex-col justify-start items-start">
                    <p className="font-semibold text-sm text-blue capitalize">cours</p>
                    <p className="text-3xl md:text-4xl text-darkBlue capitalize font-semibold">choisissez le cours qui vous intéresse</p>
                </div>
                <button className="group flex items-center gap-2 border-0 transition-all hover:translate-x-2 duration-300 cursor-pointer">
                    <p className="text-sm text-blue capitalize font-semibold">voir tous les cours</p>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                        <path d="M13.2277 5.43555L18.7918 10.9997L13.2277 16.5639" stroke="#23BDEE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.20837 11H18.6359" stroke="#23BDEE" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-275 justify-items-center">
                {/* Card 1 */}
                <div className="flex flex-col bg-white rounded-2xl border border-darkBlue/20 shadow-lg shadow-darkBlue/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 w-full max-w-sm md:max-w-md">
                    <div className="p-4">
                        <img src="\images\iot.svg" alt="internet of things iot" className="w-full h-48 object-cover rounded-xl" />
                    </div>
                    <div className="px-5 pb-6 flex flex-col gap-2">
                        <span className="text-orange text-sm font-medium"># IOT</span>
                        <h3 className="text-2xl capitalize text-darkBlue font-semibold leading-snug">Internet des Objets (IoT)</h3>
                        <p className="text-darkBlue/60 text-[16px] font-normal">Développez des solutions connectées et programmez des objets intelligents pour l'IoT.</p>
                        
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
                                <span className="text-darkBlue text-sm font-medium">10 Leçons</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                </svg>
                                <span className="text-darkBlue text-sm font-medium">3 Semaines</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                <span className="text-sm text-darkBlue font-medium">Lina</span>
                            </div>
                            <button className="capitalize text-blue text-sm font-semibold hover:underline cursor-pointer">
                                voir plus
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col bg-white rounded-2xl border border-darkBlue/20 shadow-lg shadow-darkBlue/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 w-full max-w-sm md:max-w-md">
                    <div className="p-4">
                        <img src="\images\python.svg" alt="python" className="w-full h-48 object-cover rounded-xl" />
                    </div>
                    <div className="px-5 pb-6 flex flex-col gap-2">
                        <span className="text-orange text-sm font-medium"># Python</span>
                        <h3 className="text-2xl capitalize text-darkBlue font-semibold leading-snug">Data Analysis With Python</h3>
                        <p className="text-darkBlue/60 text-[16px] font-normal">Maîtrisez l'analyse de données et transformez les données brutes en insights exploitables.</p>
                        
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
                                <span className="text-darkBlue text-sm font-medium">12 Leçons</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                </svg>
                                <span className="text-darkBlue text-sm font-medium">1 Mois</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                <span className="text-sm text-darkBlue font-medium">Lina</span>
                            </div>
                            <button className="capitalize text-blue text-sm font-semibold hover:underline cursor-pointer">
                                voir plus
                            </button>
                        </div>
                    </div>
                </div>


                {/* Card 3 */}
                
                <div className="flex flex-col bg-white rounded-2xl border border-darkBlue/20 shadow-lg shadow-darkBlue/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 w-full max-w-sm md:max-w-md">
                    <div className="p-4">
                        <img src="\images\design.svg" alt="ui/ux design" className="w-full h-48 object-cover rounded-xl" />
                    </div>
                    <div className="px-5 pb-6 flex flex-col gap-2">
                        <span className="text-orange text-sm font-medium"># UI/UX</span>
                        <h3 className="text-2xl capitalize text-darkBlue font-semibold leading-snug">Design UI/UX</h3>
                        <p className="text-darkBlue/60 text-[16px] font-normal">Concevez des interfaces utilisateur intuitives et des expériences engageantes centrées sur l'utilisateur.</p>
                        
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
                                <span className="text-darkBlue text-sm font-medium">10 Leçons</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                </svg>
                                <span className="text-darkBlue text-sm font-medium">3 Semaines</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <img src="\images\img-4.svg" alt="profile de tutor" className="w-9 h-9 rounded-full" />
                                <span className="text-sm text-darkBlue font-medium">Lina</span>
                            </div>
                            <button className="capitalize text-blue text-sm font-semibold hover:underline cursor-pointer">
                                voir plus
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
} 

export default Courses;