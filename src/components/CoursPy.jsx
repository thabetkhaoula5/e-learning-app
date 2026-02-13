'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CoursPy = ({ course }) => {
    const router = useRouter();

    // Données par défaut si non fournies
    const courseData = course || {
        title: "Data Analysis With Python",
        image: "/images/imge-2.svg",
        lessons: 10,
        duration: "2 semaines",
        tutor: {
            name: "Lina Jones",
            avatar: "/images/img-4.svg"
        },
        presentation: "Ce cours vous permettra de découvrir les fondamentaux de l'analyse de données en utilisant Python, l'un des langages les plus populaires dans le domaine. Vous apprendrez à manipuler des données avec des bibliothèques puissantes comme Pandas et NumPy, à créer des visualisations percutantes avec Matplotlib et Seaborn, et à extraire des informations significatives de grands ensembles de données. Grâce à des projets pratiques et des études de cas réels, vous développerez les compétences nécessaires pour prendre des décisions basées sur les données.",
        learningPoints: "Vous maîtriserez les bibliothèques essentielles comme Pandas pour la manipulation de données, NumPy pour le calcul numérique, et Matplotlib pour la visualisation. Vous apprendrez à nettoyer et préparer les données, à effectuer des analyses statistiques descriptives et exploratoires, à créer des graphiques et des tableaux de bord interactifs. Le cours couvre également les techniques d'importation et d'exportation de données depuis différentes sources (CSV, Excel, bases de données), ainsi que l'automatisation des tâches d'analyse répétitives."
    };

    return (
        <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 ">
            <div className="max-w-7xl mx-auto px-6">
                {/* Bouton retour */}
                <button 
                    onClick={() => router.back()}
                    className="mb-8 text-darkBlue hover:text-blue flex items-center gap-2 transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Retour
                </button>

                {/* Titre principal */}
                <h1 className="text-4xl font-bold text-darkBlue mb-12">DÉTAILS DU COURS</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 space-y-15">
                    {/* Colonne gauche - Image et infos cours */}
                    <div className="space-y-15">
                        {/* Image du cours */}
                        <div className="bg-white rounded-[20px] overflow-hidden shadow-lg">
                            <img 
                                src={courseData.image} 
                                alt={courseData.title}
                                className="w-full h-[280px] object-cover "
                            />
                        </div>

                        {/* Titre et métadonnées */}
                        
                            <h2 className="text-2xl font-bold text-darkBlue mb-6 ">
                                {courseData.title}
                            </h2>

                            {/* Infos cours */}
                            <div className="flex items-center gap-8 mb-6 ">
                                <div className="flex items-center gap-2 ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span className="text-orange font-medium ">{courseData.lessons} leçons</span>
                                </div>

                                <div className="flex items-center gap-2 ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#252641" fillOpacity="0.4"/>
                                    </svg>
                                    <span className="text-orange font-medium">{courseData.duration}</span>
                                </div>
                            </div>

                            {/* Enseigné par */}
                            
                                <p className="text-darkBlue/60 text-sm mb-3">Enseigné par :</p>
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={courseData.tutor.avatar} 
                                        alt={courseData.tutor.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <span className="text-darkBlue font-semibold text-lg">
                                        {courseData.tutor.name}
                                    </span>
                                </div>
                    </div>

                    {/* Colonne droite - Contenu du cours */}
                    <div className="space-y-8">
                        {/* Présentation du cours */}
                        
                            <h3 className="text-xl font-bold text-darkBlue mb-4 uppercase">
                                Présentation du cours
                            </h3>
                            <p className="text-darkBlue/70 leading-relaxed">
                                {courseData.presentation}
                            </p>
                        

                        {/* Ce que vous allez apprendre */}
                        
                            <h3 className="text-xl font-bold text-darkBlue mb-4 uppercase">
                                Ce que vous allez apprendre dans ce cours
                            </h3>
                            <p className="text-darkBlue/70 leading-relaxed">
                                {courseData.learningPoints}
                            </p>
                        <button className="w-full bg-[#49BBBD] hover:bg-[#3da9ab] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Commencez maintenant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursPy;