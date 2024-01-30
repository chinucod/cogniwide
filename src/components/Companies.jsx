import React from "react";
import img1 from "../images/quessbluesvg.svg";
import img2 from "../images/Group_0.webp";
import img3 from "../images/Al-Muzaini.svg";
import img4 from "../images/fdbank.png";

const Companies = () => {
  return (
    <div>
      <div className=" font-f m-10">
        <h1 className="text-center text-[32px] font-semibold">
          Trusted By Leading Brands
        </h1>
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          class=" ml-[700px] flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <img className="w-[8rem]" src={img1} alt="" />
          </li>
          <li>
            <img className="w-[8rem]" src={img2} alt="" />
          </li>
          <li>
            <img className="w-[8rem]" src={img3} alt="" />
          </li>
          <li>
            <img className="w-[8rem]" src={img4} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Companies;
