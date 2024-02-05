import React from "react";
import { features } from "../data";
const Features = () => {
  return (
    <div>
      <div className="font-f mt-16 ">
        <div className=" items-center">
          <h1 className="text-center text-4xl font-semibold">Features</h1>
          <p className="mx-[300px] my-10 text-sm text-center">
            CogniAssist brings in deep <b>Artificial Intelligence skills</b> and
            an agile and innovative work culture customized to suit a customer
            care process.
          </p>
        </div>
        <div className="justify-center flex gap-10 flex-wrap p-5">
          {features.map((item) => (
            <div class="w-[350px] h-[420px] bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  class="rounded-t-lg w-[350px] h-[232px]"
                  src={item.img}
                  alt=""
                />
              </a>
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {item.head}
                </h5>
                <p class="mb-3 font-normal text-gray-700 ">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
