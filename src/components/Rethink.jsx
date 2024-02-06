import React from "react";
import { Rethink1 } from "../data";
import { Carousel } from "@material-tailwind/react";
const Rethink = () => {
  return (
    <div className="h-screen">
      <div className="font-f">
        <div className="text-center font-semibold mt-16">
          <p className="text-[36px]">
            Rethink operations and improve outcomes with CogniAssist
          </p>
        </div>
        <div className="flex justify-center pt-24 gap-44">
          <div className=" text-lg font-semibold">Use Case</div>
          <div className=" text-lg font-semibold">Sailent Feature</div>
          <div className=" text-lg font-semibold">Intigration and Tools</div>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center gap-20">
            {Rethink1.map((items) => (
              <div className="text-center w-[22rem] py-16">
                <h1 className="p-2 text-4xl bg-ii rounded-full w-[70px] h-[70px] ml-32">
                  {items.img}
                </h1>
                <h1 className="p-4 mt-2 text-base font-bold">{items.h1}</h1>
                <p className="p-2">{items.p}</p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Rethink;
