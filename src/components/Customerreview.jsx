import React from "react";
import img1 from "../images/fdbank.png";
import img2 from "../images/Al-Muzaini.svg";
import img3 from "../images/quessbluesvg.svg";
const Customerreview = () => {
  return (
    <div>
      <div className="font-f text-center">
        <h1 className=" font-semibold text-[36px] p-3">
          What Are Our Customers Say?
        </h1>
        <p className=" font-normal text-[18px]">
          We deliver delightful experiences
        </p>
      </div>
      <div>
        <div className="flex  justify-center gap-10 p-5 font-f">
          <div className="flex flex-col shadow-xl rounded-lg w-[500px] h-[300px] items-center">
            <img className="w-[100px] h-[100px] object-contain" src={img2} />
            <p className="p-5 text-sm">
              As a large organization, we receive thousands of queries that need
              immediate resolution each day. This was the key reason we looked
              for a virtual assistant to support our employees.
            </p>
          </div>
          <div className="flex flex-col shadow-xl rounded-lg w-[500px] h-[300px] items-center">
            <img className="w-[100px] h-[100px] object-contain" src={img2} />
            <p className="p-5 text-sm">
              As a large organization, we receive thousands of queries that need
              immediate resolution each day. This was the key reason we looked
              for a virtual assistant to support our employees.
            </p>
          </div>
          <div className="flex flex-col shadow-xl rounded-lg w-[500px] h-[300px] items-center">
            <img className="w-[100px] h-[100px] object-contain" src={img2} />
            <p className="p-5 text-sm">
              As a large organization, we receive thousands of queries that need
              immediate resolution each day. This was the key reason we looked
              for a virtual assistant to support our employees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customerreview;
