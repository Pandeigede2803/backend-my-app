import React from "react";

export default function About() {
  return (
    <section className="py-16">
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center ">
      <div className="md:w-4/5 text-center md:text-center mb-10 md:mb-0">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className=" text-white mt-4 lg:text-xl">
          I'm a digital marketing and web development professional with a
          passion for creating engaging online experiences. <br></br>I also have a
          knack for videography, capturing moments and stories through video.
        </p>
        
        {/* Skill Bars */}
        <div className="lg:mx-auto mx-5 mt-8">
          <div className="flex flex-col mb-2">
            <span className="text-white">Design</span>
            <div className="bg-gray-200 h-4 rounded-md">
              <div className="bg-[#A28BFF] w-4/5 h-full rounded-md"></div> {/* Adjust width based on skill level */}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-white">Frontend</span>
            <div className="bg-gray-200 h-4 rounded-md">
              <div className="bg-[#A28BFF] h-full w-3/4 rounded-md"></div> {/* Adjust width based on skill level */}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <span className="text-white">Backend</span>
            <div className="bg-gray-200 h-4 rounded-md">
              <div className="bg-[#A28BFF]  w-5/6 h-full rounded-md"></div> {/* Adjust width based on skill level */}
            </div>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </div>
  </section>
  );
}
