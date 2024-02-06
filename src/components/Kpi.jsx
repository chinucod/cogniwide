import React from "react";
import { kpi1 } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Kpi = () => {
  return (
    <div className="font-f">
      <div className="">
        <h1 className="text-center p-5 text-3xl font-semibold my-8">
          CogniAssist virtual assistant solutions can help you achieve at least
        </h1>
        <div className="flex gap-5 p-5 justify-center">
          {kpi1.map((item) => (
            <div className=" bg-gradient-to-r from-indigo-50 shadow-xl w-[258px] h-[183px] rounded-xl text-center ">
              <h1 className="text-7xl font-semibold text-ii mt-10">
                {item.num}
              </h1>
              <p className=" text-[1rem] font-semibold p-2">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kpi;
