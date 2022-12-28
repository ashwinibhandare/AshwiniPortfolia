import React from "react";
import WorkDetails from "../Data/WorkDetails.json";

const Experience = () => {

    return (
  


        <div class="flex flex-col pl-20 pr-20 pt-10 lg:flex-row flex-wrap">

            { WorkDetails.map((workDetail) => (
            
                <div class="mt-12 w-1/2">
                    <div class="text-white flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>

                            <span class="block text-sm ml-2">{workDetail.duration}</span>
                    </div>

                    <div class="py-4">
                        <h3 class="text-white h-6 uppercase">{workDetail.designation} - <span class="font-bold">{workDetail.company}</span></h3>
                    </div>

                    <div class="text-white leading-7">
                        <p>{workDetail.details}</p>
                    </div>
                </div>
            )) }
        </div>
    );

}

export default Experience;