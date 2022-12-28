import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

   const [isVisible, setStatusOfHumbergerMenu] = useState(false);

    const handleShowAndHideOfHumberger = () => {
            setStatusOfHumbergerMenu(!isVisible);
    }



    return (
        <>
            <nav class="flex bg-slate-900 lg:h-12 items-center flex-wrap relative">
                { !isVisible && <svg xmlns="http://www.w3.org/2000/svg"  onClick={handleShowAndHideOfHumberger} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-3 w-6 h-6 text-white lg:hidden block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg> }
                { isVisible &&  <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShowAndHideOfHumberger} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-3 w-6 h-6 text-white lg:hidden block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> }
               


                <div class="w-full flex flex-grow absolute top-[50px] lg:top-auto">
                    <div class={"flex flex-col w-full justify-end text-white lg:inline-flex lg:flex-row lg:flex-grow " + ( isVisible ? 'lg:block' : 'hidden')}> 
                        {/* <ul class="flex text-white text-right"> */}
                            <a class="flex py-2 gap-2 mr-3 ml-3">
                            <svg class="lg:hidden block w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span><Link to="/">HOME</Link></span>
                            </a>
                        

                            <a class="flex py-2 gap-2 mr-3 ml-3">
                            <svg class="lg:hidden block w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                            <span><Link to="/about">ABOUT</Link></span>
                            </a>
                            
                        {/* </ul>  */}
                    </div>
                </div>
            </nav>  
        </>
    );
}

export default Navbar;
