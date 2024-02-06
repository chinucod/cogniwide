import React from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
const Card = () => {
  return (
    <div className="m-[100px]">
      <div className="font-f text-center ">
        <h1 className="text-[32px] font-semibold p-3">
          Cogniwide Value Proposition
        </h1>
        <p className="text-base text-gray-400">
          Supporting digital transformation with ethics and integrity
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[4.8rem] mt-3 p-[50px]">
        <div className="flex  ">
          <h1 className="w-[250px] h-[300px] text-center">
            <img
              class="object-contain w-[250px] h-[150px]"
              src={img1}
              alt="Rounded avatar"
            ></img>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Gain Real-time<br></br> Insights
            </h5>
            <p class="font-normal text-1xl text-gray-4 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </h1>
        </div>
        <div className="flex  ">
          <h1 className="w-[250px] h-[300px] text-center">
            <img
              class="object-contain   w-[250px] h-[150px]"
              src={img6}
              alt="Rounded avatar"
            ></img>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Access World-class Expertise
            </h5>
            <p class="font-normal text-1xl text-gray-4 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </h1>
        </div>
        <div className="flex  ">
          <h1 className="w-[250px] h-[300px] text-center">
            <img
              class="object-contain    w-[250px] h-[150px]"
              src={img3}
              alt="Rounded avatar"
            ></img>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Industry-specific solution
            </h5>
            <p class="font-normal text-1xl text-gray-4 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </h1>
        </div>
        <div className="flex  ">
          <h1 className="w-[250px] h-[300px] text-center">
            <img
              class=" object-contain w-[250px] h-[150px]"
              src={img2}
              alt="Rounded avatar"
            ></img>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Boost Employee Productivity
            </h5>
            <p class="font-normal text-1xl text-gray-4 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </h1>
        </div>
        <div className="flex  ">
          <h1 className="w-[250px] h-[300px] text-center">
            <img
              class="object-contain   w-[250px] h-[150px]"
              src={img5}
              alt="Rounded avatar"
            ></img>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Drive Organization Performance
            </h5>
            <p class="font-normal text-1xl text-gray-4 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </h1>
        </div>
      </div>
      <div className="flex justify-center font-f text-center gap-[80px]">
        <div>
          <h1 className=" font-semibold text-[64px] text-ii p-5">20+</h1>
          <p className=" font-medium text-base">Enterprise Customers</p>
        </div>
        <div>
          <h1 className=" font-semibold text-[64px] text-ii p-5">20M+</h1>
          <p className=" font-medium text-base">Consumer base impacted daily</p>
        </div>
        <div>
          <h1 className=" font-semibold text-[64px] text-ii p-5">32+</h1>
          <p className=" font-medium text-base">Products rolled out</p>
        </div>
        <div>
          <h1 className=" font-semibold text-[64px] text-ii p-5">50+</h1>
          <p className=" font-medium text-base">Projects Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
