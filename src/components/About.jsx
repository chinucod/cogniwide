import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <div className="text-center m-20 my-[11rem] font-f">
          <h1 className=" text-6xl font-semibold">
            Empower your business with <br></br>
            <span className="text-[3rem] text-indigo-600 font-bold">
              Enterprise GPT Capabilities
            </span>
          </h1>
          <p className="mx-[300px] my-10 text-sm">
            Enhance your customer and employee experiences effortlessly by
            building chatbotsacross multiple channels using our intuitive
            low-code, no-code platform integrated with GPT capabilities.
          </p>
          <button className="bg-indigo-600 px-4 py-2 rounded-full text-white font-medium hover:bg-indigo-800 transition duration-200">
            Try for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
