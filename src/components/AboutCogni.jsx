import React from "react";
import img1 from "../images/empathy.jpg";
import img2 from "../images/2.jpg";
const AboutCogni = () => {
  return (
    <div className="h-screen">
      <div className="flex font-f justify-center">
        <div className="ml-[150px] flex-1 mt-[200px]">
          <h3 className=" text-4xl mb-5">CogniAssist</h3>
          <p className="text-xl mb-5">
            How an intelligent virtual assistant creates
          </p>
          <h1 className=" text-4xl font-semibold mb-5">
            Lasting conversational experiences
          </h1>
          <p className="font-semibold mb-5">
            Simple, flowing, and natural interactions tailored to your
            organization
          </p>
          <p className=" mb-5 text-l">
            Chat with CogniAssist just the way you usually talk to other people
            and see the versatile ways in which our intelligent virtual
            assistant can help you save time.
          </p>
          <button className="bg-ii px-4 py-2 rounded-full text-white font-medium hover:bg-indigo-800 transition duration-200">
            Request Demo
          </button>
        </div>
        <div className="flex-1">
          <img className="w-[600px]" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default AboutCogni;
