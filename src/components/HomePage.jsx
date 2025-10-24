import { useState } from "react";

export default function LandingPage() {
  const [isDark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  const baseClasses = "w-full flex flex-col h-screen overflow-x-hidden transition-colors duration-300 ease-in-out";
  const themeClasses = isDark ? "text-text-dark bg-background-dark" : "text-text bg-background";

  return (
    <div className={`${baseClasses} ${themeClasses}`}>
      <div className="mt-10 flex flex-col h-full">
        <div className="mx-30">
          <button onClick={toggleTheme} className="border rounded-md p-1 transition-all duration-500 cursor-pointer">
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
        <div className="mx-30 text-6xl font-semibold h-full flex items-center">
          <h1>
            Hello Stranger<br />It's me{" "}
            <span className="font-windsong underline underline-offset-[8px] decoration-[#006989]">
              Julius
            </span>
            <br />
            Welcome to White Space
          </h1>
        </div>
      </div>
    </div>
  );
}