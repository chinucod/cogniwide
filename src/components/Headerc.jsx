import React, { useState } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const Headerc = () => {
  const [onClick, setOnClick] = useState("");

  if (onClick == "Products") {
    console.log("clicked");
    return (
      <div className="font-f">
        <div className="h-[415px] w-[611px] shadow-xl rounded-xl ml-[400px] p-10 flex">
          <div className="flex-1 p-3">
            <div className="group p-3 flex flex-col h-[100px] justify-center hover:bg-indigo-50 rounded-xl cursor-pointer">
              <h3 className="group-hover:text-indigo-500 transition duration-100">
                cogni<span className=" font-semibold">Assist</span>
              </h3>
              <p className="">
                An intelligent virtual assistant focussed on accuracy, privacy,
                and security
              </p>
            </div>
            <div className="group p-3 flex flex-col h-[100px] justify-center hover:bg-indigo-50 rounded-xl cursor-pointer">
              <h3 className="group-hover:text-indigo-500 transition duration-100">
                cogni<span className=" font-semibold">Listen</span>
              </h3>
              <p>
                A Social Listening Tool that detects trends and keeps you
                informed
              </p>
            </div>
            <div className="group p-3 flex flex-col h-[100px] justify-center hover:bg-indigo-50 rounded-xl cursor-pointer">
              <h3 className="group-hover:text-indigo-500 transition duration-100">
                cogni<span className=" font-semibold">Discovery</span>
              </h3>
              <p>
                An intelligent document search platform that cognitively
                extracts answers
              </p>
            </div>
          </div>
          <div className="flex-1 p-3">
            <div className="group p-3 flex flex-col h-[100px] justify-center hover:bg-indigo-50 rounded-xl cursor-pointer">
              <h3 className="group-hover:text-indigo-500 transition duration-100">
                cogni<span className=" font-semibold">Naas</span>
              </h3>
              <p>
                Analyze sentiments and syntax, classify content and gain
                insights with NLP
              </p>
            </div>
            <div className="group p-3 flex flex-col h-[100px] justify-center hover:bg-indigo-50 rounded-xl cursor-pointer">
              <h3 className="group-hover:text-indigo-500 transition duration-100">
                cogni<span className=" font-semibold">Chat</span>
              </h3>
              <p>
                Connect with customers, collaborate with colleagues, share files
                in live-chat mode
              </p>
            </div>
            <div className="group p-3 flex flex-col h-[100px] justify-center hover:bg-indigo-50 rounded-xl cursor-pointer">
              <h3 className="group-hover:text-indigo-500 transition duration-100">
                cogni<span className=" font-semibold">Connect</span>
              </h3>
              <p>
                Democratize APIs and speed up deliveries with our API management
                hub
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pl-20 pr-20">
      <nav className="pl-10 pr-10 pt-10 flex justify-between items-center ">
        <img src={logo} />
        <ul className="flex gap-[4vh] items-center mr-[1vw] font-semibold text-sm font-f">
          <li>
            <a
              href="#"
              className="hover:text-indigo-600 text-inherit no-underline"
              onClick={() => setOnClick("products")}
            >
              Products <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-600 text-inherit no-underline"
            >
              Services <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-600 text-inherit no-underline"
            >
              Industries <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-600 text-inherit no-underline"
            >
              Company <FontAwesomeIcon icon={faAngleDown} size="xs" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-indigo-600 text-inherit no-underline"
            >
              About Us
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
          </li>
        </ul>
        <a
          class="inline-block rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white  hover:shadow-xl  active:bg-indigo-500"
          href="/download"
        >
          Get A Demo
        </a>
      </nav>
    </div>
  );
};

export default Headerc;
