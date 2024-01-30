import React from "react";
import { products } from "../data";
const Products = () => {
  return (
    <div>
      <div className="font-f">
        <div className=" items-center">
          <h1 className="text-center text-4xl font-semibold">
            Our <span className=" text-indigo-600">Products</span>
          </h1>
          <p className="mx-[300px] my-10 text-sm text-center">
            A low code Enterprise grade <b>SAAS AI Product Suite</b> for every
            Industry and Function. Transform Enterprise by pairing human and
            machine intelligence to augment business operations in a practical,
            scalable and responsible manner.
          </p>
        </div>
        <div className="justify-center flex gap-10 flex-wrap p-5">
          {products.map((item) => (
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
                  Cogni<span className=" text-indigo-600">{item.h1}</span>
                </h5>
                <p class="mb-3 font-normal text-gray-700 ">{item.p}</p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
