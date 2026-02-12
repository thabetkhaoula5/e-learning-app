"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  useEffect(() => {
    setIsLogin(mode !== "signup");
  }, [mode]);

  return (
    <main className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-0 mx-6 md:mx-15 lg:mx-30 min-h-screen">
      
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img src="/images/img-7.svg" alt="E-tutor illustration" className="w-120 md:w-160 object-contain"/>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-8 max-w-xl">

        <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-lg md:text-xl text-darkBlue font-medium text-center">Bienvenue sur E-tutor</span>
          <div className="rounded-full bg-background/60 w-fit py-2.5 px-8 md:px-16 flex gap-2">
            <button onClick={() => setIsLogin(true)} className={`py-2 px-5 md:px-7 text-white text-sm md:text-base rounded-full transition-all duration-300 cursor-pointer ${isLogin ? "font-medium bg-background shadow-lg" : "font-normal"}`}>Connexion</button>
            <button onClick={() => setIsLogin(false)} className={`py-2 px-5 md:px-7 text-white text-sm md:text-base rounded-full transition-all duration-300 cursor-pointer ${!isLogin ? "font-medium bg-background shadow-lg" : "font-normal"}`}>Inscription</button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          
          <div className={`flex flex-col gap-4 md:gap-5 transition-all duration-500 ease-in-out ${ isLogin ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute inset-0 pointer-events-none"}`}>
            <p className="text-darkBlue text-base md:text-lg text-left">Connectez-vous pour accéder à vos cours et poursuivre votre apprentissage.</p>
            
            <label htmlFor="login-username" className="text-darkBlue text-sm md:text-base font-medium">Nom D'utilisateur</label>
            <input type="text" id="login-username" placeholder="Entrez votre nom d'utilisateur" className="placeholder:text-darkBlue/30 placeholder:text-sm text-sm md:text-base font-medium text-darkBlue border-2 border-background rounded-full w-[90%] py-3 md:py-4 px-5 md:px-6 outline-0"/>

            <label htmlFor="login-password" className="text-darkBlue text-sm md:text-base font-medium">Mot de Passe</label>
            <div className="flex items-center justify-between border-2 border-background rounded-full py-3 md:py-4 px-5 md:px-6 w-[90%]">
              <input type={showPassword ? "text" : "password"} id="login-password" placeholder="Entrez votre mot de passe" className="placeholder:text-darkBlue/30 placeholder:text-sm text-sm md:text-base font-medium text-darkBlue outline-0 flex-1"/>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2 cursor-pointer">
                {showPassword ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4418_9532)">
                    <path d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20.2707C15.53 20.2707 18.82 18.1907 21.11 14.5907C22.01 13.1807 22.01 10.8107 21.11 9.4007C18.82 5.8007 15.53 3.7207 12 3.7207C8.46997 3.7207 5.17997 5.8007 2.88997 9.4007C1.98997 10.8107 1.98997 13.1807 2.88997 14.5907C5.17997 18.1907 8.46997 20.2707 12 20.2707Z" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4418_9532">
                    <rect width="24" height="24" fill="none"/>
                    </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4418_9538)">
                    <path d="M14.53 9.46992L9.47004 14.5299C8.82004 13.8799 8.42004 12.9899 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.82 5.77047C16.07 4.45047 14.07 3.73047 12 3.73047C8.46997 3.73047 5.17997 5.81047 2.88997 9.41047C1.98997 10.8205 1.98997 13.1905 2.88997 14.6005C3.67997 15.8405 4.59997 16.9105 5.59997 17.7705" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.42004 19.5297C9.56004 20.0097 10.77 20.2697 12 20.2697C15.53 20.2697 18.82 18.1897 21.11 14.5897C22.01 13.1797 22.01 10.8097 21.11 9.39969C20.78 8.87969 20.42 8.38969 20.05 7.92969" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5099 12.6992C15.2499 14.1092 14.0999 15.2592 12.6899 15.5192" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.47 14.5293L2 21.9993" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L14.53 9.47" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4418_9538">
                    <rect width="24" height="24" fill="none"/>
                    </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex flex-col gap-4 md:gap-5 transition-all duration-500 ease-in-out ${!isLogin ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute inset-0 pointer-events-none"}`}>
            <p className="text-darkBlue text-base md:text-lg text-left">Inscrivez-vous pour commencer votre apprentissage.</p>

            <label htmlFor="signup-email" className="text-darkBlue text-sm md:text-base font-medium">Adresse Email</label>
            <input type="email" id="signup-email" placeholder="Entrez votre adresse email" className="placeholder:text-darkBlue/30 placeholder:text-sm text-sm md:text-base font-medium text-darkBlue border-2 border-background rounded-full w-[90%] py-3 md:py-4 px-5 md:px-6 outline-0"/>

            <label htmlFor="signup-username" className="text-darkBlue text-sm md:text-base font-medium">Nom D'utilisateur</label>
            <input type="text" id="signup-username" placeholder="Entrez votre nom d'utilisateur" className="placeholder:text-darkBlue/30 placeholder:text-sm text-sm md:text-base font-medium text-darkBlue border-2 border-background rounded-full w-[90%] py-3 md:py-4 px-5 md:px-6 outline-0"/>

            <label htmlFor="signup-password" className="text-darkBlue text-sm md:text-base font-medium">Mot de Passe</label>
            <div className="flex items-center justify-between border-2 border-background rounded-full py-3 md:py-4 px-5 md:px-6 w-[90%]">
              <input type={showPassword ? "text" : "password"} id="signup-password" placeholder="Entrez votre mot de passe" className="placeholder:text-darkBlue/30 placeholder:text-sm text-sm md:text-base font-medium text-darkBlue outline-0 flex-1"/>
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2 cursor-pointer">
                {showPassword ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4418_9532)">
                    <path d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.42004 13.9799 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20.2707C15.53 20.2707 18.82 18.1907 21.11 14.5907C22.01 13.1807 22.01 10.8107 21.11 9.4007C18.82 5.8007 15.53 3.7207 12 3.7207C8.46997 3.7207 5.17997 5.8007 2.88997 9.4007C1.98997 10.8107 1.98997 13.1807 2.88997 14.5907C5.17997 18.1907 8.46997 20.2707 12 20.2707Z" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4418_9532">
                    <rect width="24" height="24" fill="none"/>
                    </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4418_9538)">
                    <path d="M14.53 9.46992L9.47004 14.5299C8.82004 13.8799 8.42004 12.9899 8.42004 11.9999C8.42004 10.0199 10.02 8.41992 12 8.41992C12.99 8.41992 13.88 8.81992 14.53 9.46992Z" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.82 5.77047C16.07 4.45047 14.07 3.73047 12 3.73047C8.46997 3.73047 5.17997 5.81047 2.88997 9.41047C1.98997 10.8205 1.98997 13.1905 2.88997 14.6005C3.67997 15.8405 4.59997 16.9105 5.59997 17.7705" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.42004 19.5297C9.56004 20.0097 10.77 20.2697 12 20.2697C15.53 20.2697 18.82 18.1897 21.11 14.5897C22.01 13.1797 22.01 10.8097 21.11 9.39969C20.78 8.87969 20.42 8.38969 20.05 7.92969" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5099 12.6992C15.2499 14.1092 14.0999 15.2592 12.6899 15.5192" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.47 14.5293L2 21.9993" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L14.53 9.47" stroke="#252641" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4418_9538">
                    <rect width="24" height="24" fill="none"/>
                    </clipPath>
                    </defs>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <button className="cursor-pointer bg-background hover:bg-background/90 rounded-full py-3 px-12 text-white text-base md:text-lg font-medium w-fit self-center transition-all duration-300 hover:shadow-lg hover:scale-105">{isLogin ? "Connexion" : "Inscription"}</button>
      </div>
    </main>
  );
}

export default Login;
