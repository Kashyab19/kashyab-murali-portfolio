import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-25 bg-white dark:bg-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold py-10 text-center md:text-left">
          About Me 🙋‍♂️
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-5">
          <p
            className="leading-loose text-xl md:text-2xl font-medium  mx-6 text-left"
            style={{ lineHeight: "2rem" }}
          > 
            <br/>
            {userData.about.title} I am currently working on{" "} <br />
            <a
              className="bg-purple-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} 🚀
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Email
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I love to listen! Shoot me a{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  e-mail
                </a>{" "}
                and I'll get back.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a internship opportunities for <b>Summer '23</b>. If you think that I am a good fit,
                checkout my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume
                </a>{" "}
                and I'd love to work with you.
              </p>
            </div>



            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.substack}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Substack(check it out!)
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>

            {/* <a href="" target="_blank" rel="noreferrer"><img className="p-5" src="/buy-me-a-coffee.png" alt="Buy Me A Coffee" height="48" width="180" /></a> */}
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-purple-500 text-2xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-6">
            <img
                src="tech stack/java.png"
                className="h-20 w-25 mx-4 my-4"
                alt="java"
              />
            <img
                src="tech stack/solidity.png"
                className="h-20 w-20 mx-4 my-4"
                alt="solidity"
              />
            <img
                src="tech stack/hardhat.png"
                className="h-20 w-25 mx-4 my-4"
                alt="hardhat"
              />
              <img
                src="tech stack/ipfs.png"
                className="h-20 w-25 mx-4 my-4"
                alt="ipfs"
              />
            <img
                src="tech stack/figma.png"
                className="h-20 w-20 mx-4 my-4"
                alt="figma"
              />
            <img
                src="tech stack/kibana.png"
                className="h-20 w-20 mx-4 my-4"
                alt="kibana"
              />
            <img
                src="tech stack/new-relic.png"
                className="h-20 w-20 mx-4 my-4"
                alt="kibana"
              />
              <img
                src="tech stack/html-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="tech stack/css-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="tech stack/js-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="tech stack/ts-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="tech stack/git-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="tech stack/react-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
               <img
                src="tech stack/nodejs.png"
                className="h-20 w-30 mx-4 my-4"
              />
              <img
                src="tech stack/nextjs-logo.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="tech stack/mongodb-logo.webp"
                className="h-20 w-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
