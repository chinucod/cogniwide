import React from "react";
import img1 from "../images/chat.jpg";
const About = () => {
  return (
    <div className="h-fit">
      <div className="flex ml-[150px] mt-[80px] w-[1280px] h-[444px] items-center">
        <div className=" flex-1 font-f">
          <h1 className=" text-[1.4rem]  font-medium">
            An Omnichannel digital assistant <br></br>
            <span className="text-6xl text-ii font-bold">CogniAssist</span>
          </h1>
          <p className="my-3  text-sm">
            Advance your automation journey with an intelligent virtual
            assistant that can improve service delivery, enhance customer
            experience, increase capacity, reduce backlogs and achieve quicker
            turnaround times.
          </p>
          <button className="bg-ii hover:scale-105 px-4 py-2 rounded-full text-white font-medium hover:transition duration-200">
            GET A DEMO
          </button>
        </div>
        <div className="flex-1">
          <img className="w-[600px]" src={img1} />
        </div>
      </div>
    </div>
  );
};

export default About;
