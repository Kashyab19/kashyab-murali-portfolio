import React from "react";
import Link from "next/link";

export default function Achievements() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-20 mx-10 md:my-20 lg:my-0">
          <h1 className="text-4xl lg:text-8xl max-w-lg font-bold text-gray-500 my-10 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left">
            Achievements
          </h1>
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-4 gap-8 lg:-mt-8 pb-40">


          {/* Single card */}
          <a
            href="https://docs.google.com/presentation/d/1Cacjb7mV66TT4Jvf68_GcLdXeyIK9mmGaxJcfYwFsUo/edit#slide=id.g35f391192_00"
            className="w-full block col-span-4 shadow-2xl"
            title="Hackatron 2023, Harvard University"
          >
            <div className="rounded-lg relative overflow-hidden">
              <img
                src="achievements/tron2022.jpeg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
             <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold  text-sm md:text-xl bg-purple-500 rounded-md px-2">
               Hackatron 2023
              </h1>
              <h1 className="absolute top-10 left-5 md:left-5 text-gray-50 font-bold text-sm md:text-xl bg-purple-500 rounded-md ml-2 px-2">
                Won 3rd place 🥈
              </h1>
              <h1 className="absolute bottom-10 right-10 text-gray-50 font-bold text-sm md:text-xl bg-purple-500 rounded-md px-2">
                November 2022
              </h1>
              
            </div>
          </a>


          {/* Single card */}
          <a
            href="https://youtu.be/wp_VRgTW9Pg"
            className="w-full block col-span-4  md:col-span-2 shadow-2xl"
            title="HBC2023"
          >
            <div className="rounded-lg relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="achievements/hbc2023.jpeg"
                alt="Dutch Auction"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute bottom-10 left-10 md:left-10 text-gray-50 font-bold text-sm md:text-lg bg-purple-500 rounded-md ml-2 px-2">
               Harvard Conference, April 2023
              </h1>
              <h1 className="absolute top-10 left-10 md:left-10 text-gray-50 font-bold text-sm md:text-lg bg-purple-500 rounded-md ml-2 px-2">
                Won 2rd place 🥈
              </h1>
              
            </div>
          </a>

          {/* Single card */}
          <a
            href="https://docs.google.com/presentation/d/1HC7_QTyRv1GRlY7yLpkrqG_JLNUS1ERoGBeV_WIoxK0/edit#slide=id.p"
            className="w-full block col-span-4  md:col-span-2 shadow-2xl"
            title="HBC2023"
          >
            <div className="rounded-lg relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="achievements/lionhack2023.png"
                alt="Dutch Auction"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute bottom-10 left-10 md:left-10 text-gray-50 font-bold text-sm md:text-lg bg-purple-500 rounded-md ml-2 px-2">
              LionHack NYC, April 2023
              </h1>
              <h1 className="absolute top-10 left-10 md:left-10 text-gray-50 font-bold text-sm md:text-lg bg-purple-500 rounded-md ml-2 px-2">
              Won multiple tracks 🏅
              </h1>
              
            </div>
          </a> 

          {/* Single card 4 */}
          <a
            href="https://docs.google.com/presentation/d/1RA-febRnMOMIPdB2639Nw5UQZV-7GDdTQizhfQDEo6w/edit#slide=id.gc6f9e470d_0_5"
            className="w-full block col-span-4 shadow-2xl"
            title="ETHBoston 2023, Boston University"
          >
            <div className="rounded-lg relative overflow-hidden">
              <img
                src="achievements/ethboston2023.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
            <h1 className="absolute bottom-10 left-10 md:left-10 text-gray-50 font-bold text-sm md:text-lg bg-purple-500 rounded-md ml-2 px-2">
              ETHBoston, April 2023
              </h1>
              <h1 className="absolute top-10 left-10 md:left-10 text-gray-50 font-bold text-sm md:text-lg bg-purple-500 rounded-md ml-2 px-2">
              Won bounty track 🏅
              </h1>
              
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
