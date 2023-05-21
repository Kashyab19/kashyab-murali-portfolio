import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left md:pt-10">
        <RoughNotationGroup show={true}>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Hi everyone👋,
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 px-8 md:px-0 my-2">
            I am excited to have you in my tech universe and happy to walk you through it! 🌎🚶 Let's start!
            </h2>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4">
          <img src={userData.avatarUrl} alt="avatar" className="h-48 md:h-64 rounded-3xl shadow-black-600" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">Ugh..three-piece in 2023. Really?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
