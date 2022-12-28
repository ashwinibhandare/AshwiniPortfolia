import React from "react";
import profileImage from "../assets/img/ashwini-img-removebg-preview.png";
import Education from "./Education";
import Experience from "./Experience";
import Resume from "../assets/resume/ashwini_resume_latest.pdf";


const AboutMe = () => {




    return (
        <>
            <div>
                <h2 class="text-2xl font-bold text-center pt-10 pb-7 text-white">ABOUT <span class="text-orange-500">ME</span></h2>
                <div class="flex items-center py-4 px-96">
                    <div class="flex-grow h-px bg-gray-400"></div>

                    <span class="flex-shrink px-4 text-white text-center uppercase">I design and code beautiful things, and I love what I do.</span>

                    <div class="flex-grow h-px bg-gray-400"></div>
                </div>
            </div>

            <div class="flex justify-center gap-24 items-center flex-col lg:flex-row">
                <div>
                    <img src={profileImage} />
                </div>
                <div class="flex gap-24 mt-0 lg:mt-40">
                    <div class="text-white leading-9">
                        <p>First Name : Ashwini</p>
                        <p>Last Name : Bhandare</p>
                        <p>Nationality : Indian</p>
                        <p>Email : bhandareashwini2@gmail.com</p>
                        <p>Experience : 5 Years</p>
                        <p>Address : Pune, Maharashtra</p>
                        <div class="pt-10">
                            <a href={Resume} target="_blank"><button class="bg-orange-500 text-white px-4 rounded-full uppercase">DOWNLOAD CV</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-20 pb-10 px-100">
                <div class="flex-grow h-px bg-gray-400 lg:"></div>
            </div>


            <h1 class="text-white text-2xl font-bold pt-10 text-orange-500 text-center">EXPERIENCE</h1>
            <Experience/>


            <div class="pt-20 pb-10 px-100">
                <div class="flex-grow h-px bg-gray-400 lg:"></div>
            </div>


            <h1 class="text-white text-2xl font-bold pt-10 text-orange-500 text-center">EDUCATION</h1>
            <Education/>

        </>
    );

}

export default AboutMe;