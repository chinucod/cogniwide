import React from "react";
import { industries, industries2 } from "../data";

const Industries = () => {
  return (
    <div className="font-f  bg-gradient-to-r  h-screen">
      <div className=" text-center">
        <h1 className="text-4xl font-semibold p-5 pt-16">AI for Industries</h1>
        <p className="text-xl">
          Build, train and deploy conversational interactions into any
          application, device, channel, or cloud.
        </p>
      </div>
      <div className="flex justify-center mt-16">
        <div className="flex-1 text-center ">
          <h1 className="text-xl font-medium">
            B2B solutions for Customer & Partners across industries
          </h1>
          <div className="flex flex-wrap justify-center gap-20  p-8 mt-5">
            {industries.map((item) => (
              <div>
                <div className="p-2">{item.img}</div>
                <p className="text-center p-3 font-semibold">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-xl font-medium">
            B2B cross-functional solutions for Employees & suppliers
          </h1>
          <div className="flex flex-wrap justify-center gap-24 p-8 mt-5">
            {industries2.map((item) => (
              <div>
                <div className="p-2">{item.img}</div>
                <p className="text-center p-3 font-semibold">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
