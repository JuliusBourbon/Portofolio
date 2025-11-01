import { useState } from "react";
import SproutMole from "./SproutMole";
import Wormhole from "./Wormhole";
import Bunny from "./Bunny";
import Spider from "./Spider";
import Git from "../assets/Github.png";
import GitBlack from "../assets/Github_black.png";

export default function LandingPage() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  const baseClasses = "w-full flex flex-col h-screen overflow-x-hidden transition-colors duration-300 ease-in-out";
  const themeClasses = isDark ? "text-text-dark bg-background-dark" : "text-text bg-background";

  return (
    <div>
      <div className={`${baseClasses} ${themeClasses}`}>
        <div className="mt-10 flex flex-col h-full">
          <div className="mx-30 flex justify-between">
            <div>
              <button onClick={toggleTheme} className="border rounded-md p-1 transition-all duration-500 cursor-pointer hover:scale-[108%]">
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                  </svg>
                )}
              </button>
            </div>
            <div className={`absolute top-5 right-5 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"}`}>
              <Bunny/>
            </div>
            <div className={`absolute top-5 right-50 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"}`}>
              <SproutMole/>
            </div>
            <div className={`absolute bottom-0 transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"}`}>
              <Wormhole/>
            </div>
            <div className={`absolute top-45 right-64 scale-[400%] transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"}`}>
              <Spider/>
            </div>
          </div>
          <div className="mx-30 text-6xl font-semibold h-full flex items-center">
            <h1 className="">
              Hello Stranger<br />It's me{" "}
              <span className="font-windsong underline underline-offset-[8px] decoration-[#006989]">
                Julius
              </span>
              <br />
              Welcome to {" "}
              <span className="inline-grid">
                <span className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${isDark ? "opacity-0" : "opacity-100"}`}>
                  White Space
                </span>

                <span className={`col-start-1 row-start-1 transition-opacity duration-700 ease-in-out ${isDark ? "opacity-100" : "opacity-0"}`}>
                  Black Space
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className={`${baseClasses} ${themeClasses}`}>
        <div className="mt-40 flex flex-col h-full">
          <div className="mx-30 max-w-[60%] flex flex-col gap-10">
            <h1 className="text-7xl font-semibold">I wan't to be a Full Stack Web Dev</h1>
            <div className="flex gap-5">
              <div className={`border w-full rounded-md shadow-xs ${isDark ? 'shadow-text-dark' : 'shadow-text'}`}>
                <div className="mt-5 mx-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="mx-10 mb-10">
                  <h1 className="text-xl">Currently still in college</h1>
                </div>
              </div>
              <div className={`border w-full rounded-md shadow ${isDark ? 'shadow-text-dark' : 'shadow-text'}`}>
                <div className="mt-5 mx-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div className="mx-10 mb-10">
                  <h1 className="text-xl">Unfortunately unemployed</h1>
                  <button className={`rounded-2xl px-4 py-1 mt-5 text-lg hover:scale-[105%] transition-all cursor-pointer ${isDark ? "bg-button-dark text-text" : "bg-button text-text-dark"}`}>Hire Me</button>
                </div>
              </div>
              <div className={`border w-full rounded-md shadow ${isDark ? 'shadow-text-dark' : 'shadow-text'}`}>
                <div className="mt-5 mx-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                </div>
                <div className="mx-10 mb-10">
                  <h1 className="text-xl">Live in Indonesia</h1>
                  <h1 className="text-sm">Bandung, Jawa Barat</h1>
                </div>
              </div>
            </div>
            <h1 className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center">
                <svg width="32px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#D70000">
                  <path d="M7 9L12 12.5L17 9" stroke="#D70000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="#D70000" stroke-width="1.5"></path>
                </svg>
                <h1 className="text-lg">@naherrrrr@gmail.com</h1>
              </div>
              <div className="flex gap-5 items-center">
                <img src={Git} alt="Github" className={`max-w-8 transition-opacity duration-500 ease-in-out ${isDark ? "" : "hidden"}`}/>
                <img src={GitBlack} alt="Github" className={`max-w-8 transition-opacity duration-500 ease-in-out ${isDark ? "hidden" : ""}`}/>
                <h1 className="text-lg">JuliusBourbon</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}