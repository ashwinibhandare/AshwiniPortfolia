import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/img/ashwini-img-removebg-preview.png";
import MyProfileDetails from "./MyProfileDetails";
import Resume from "../assets/resume/ashwini_resume_latest.pdf";


function BasicDetails() {

  return (
    <div class="flex flex-col justify-center gap-24 items-center lg:flex-row">
    <div class=" max-w-md h-full">
        <img src={profileImage}/>
    </div>

    <div class=" max-w-md h-full lg:mt-40">
        <h3 class="text-white text-xl h-6 text-center lg:text-left">HI THERE!</h3>
        <div class="flex py-6 justify-center lg:justify-start">
            <div class="text-white text-2xl font-bold mr-4">I'M  A </div>
            <div class="text-white text-2xl font-bold text-orange-500">"SOFTWARE ENGINEER"</div>
        </div>
        <MyProfileDetails/>

        <div class="flex justify-start gap-10 py-10 justify-center lg:justify-start">
            <button class="bg-orange-500 text-white py-2 px-4 rounded-full">
                <Link to="/about">MORE ABOUT ME</Link>
            </button>
            <button class="bg-orange-500 text-white py-2 px-4 rounded-full">
            <a href={Resume} target="_blank">PORTFOLIO</a>
            </button>
        </div>

    </div>
</div>

  );
}


export default BasicDetails;
