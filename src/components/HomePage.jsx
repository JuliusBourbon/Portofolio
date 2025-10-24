export default function LandingPage(){
    return(
        <div className="w-full flex flex-col h-screen overflow-x-hidden bg-[#EAEBED]">
            <div className="mt-10 flex flex-col h-full">
                <div className="mx-30">
                    <button className="border rounded-md p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </button>
                </div>
                <div className="mx-30 text-6xl font-semibold h-full flex items-center">
                    <h1>Hello Stranger<br/>It's me <span className="font-windsong underline underline-offset-[8px] decoration-[#006989]">Julius</span><br/>Welcome to White Space</h1>
                </div>
            </div>
        </div>
    )
}