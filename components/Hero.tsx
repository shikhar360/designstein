/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import SparkleSVG from "./SparkleSVG";
import Link from "next/link";
import Carousels from "./Carousels";

import Copy from "./Copy";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const image = new Image();

  //   image.src =
  //     window.innerWidth >= 768
  //       ? "/asset/hero/slide.jpg"
  //       : "/asset/hero/slide.jpg";
  //   image.onload = () => setLoaded(true);
  // }, []);

  const d = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div
        className={`font-inter md:bg-[url("/asset/hero/slide.jpg")] bg-[url("/mobslide.jpg")] bg-no-repeat bg-cover bg-center  flex flex-col md:items-center items-start justify-center  gap-2 w-full  md:gap-1 min-h-[70vh] md:min-h-screen  `}
      >
        <div
          className={`w-full flex flex-col items-start justify-start md:items-center  px-12 md:px-32 gap-3`}
        >
          <SparkleSVG
            size={"md:h-[80px] md:w-[80px] w-[60px] h-[60px]"}
            color="#FEE0D7"
          />
          <div
            className={`flex relative items-center justify-center gap-2 text-[#FEE0D7] text-xs md:text-sm`}
          >
            <div
              className={`w-3 h-3 bg-green-400 animate-ping rounded-full  `}
            ></div>
            <div
              className={`w-2 h-2 bg-green-400 animate-pulse  rounded-full absolute top-1/2 left-1.5 -translate-y-1/2  -translate-x-1/2 `}
            />
            <Copy>
              {" "}
              <span> Taking Calls for {month[d.getMonth()]}</span>
            </Copy>
          </div>
          <h1 className=" flex flex-col md:text-[4.5rem] xl:text-[5.3rem] my-1.5 text-[2rem] leading-[1.1] font-normal md:tracking-[-0.01em] xl:tracking-[0.01em] md:text-center text-start text-[#FEE0D7]  xl:mb-6 px-1  ">
            <Copy delay={0.5}>
              <span className="">Designing Websites</span>
            </Copy>
            <Copy delay={0.5}>
              <span className=" ">that grow sales</span>
            </Copy>
            <div className="flex relative items-start justify-start mt-1 md:justify-center md:items-center ">
              <Copy delay={0.5}>
                {" "}
                <span className=" md:text-[2.25rem] xl:text-[3.25rem] text-[1.4rem] leading-[1.1] text-[#FEE0D7] font-normal tracking-[0.01em]">
                  not Headaches
                </span>
              </Copy>
              <img
                src="/asset/hero/headache.svg"
                alt="headache"
                className={`w-7 translate-y-3`}
              />
            </div>
          </h1>
        </div>
        <div className="flex justify-start w-full md:justify-center ">
          <Copy>
            <p className=" px-12 md:px-32 text-[.7rem] md:text-[1.125rem] leading-[1.5] text-white/80 font-medium tracking-[0.01em] md:text-center text-start max-w-[900px] md:my-6 ">
              – We don&apos;t just design websites, We engineer it with
              Einstein-level precision
            </p>
          </Copy>
        </div>
        <div className="flex flex-row items-center justify-center w-full gap-2 mt-8 md:mt-4 ">
          <Link
            href={"#book"}
            className="md:px-[.8rem]   px-[1.4rem] no-underline font-spacemono py-[0.95rem] border-none rounded-[0.375rem] bg-orange-400 text-white cursor-pointer   md:text-[1rem] text-[.7rem] leading-[1.2] tracking-[0.01em] transition-colors hover:bg-orange-400"
          >
            Let&apos;s Designstein
          </Link>
          <Link
            href={"#samplework"}
            className=" scroll-smooth  md:px-[2.5rem] px-[2.6rem] font-spacemono py-[0.95rem] border-dashed border-[#fff]/20 no-underline bg-black/5 backdrop-blur-custom rounded-[0.375rem] cursor-pointer  text-white  md:text-[1rem] text-[.7rem] leading-[1.2] tracking-[0.01em] transition-colors hover:bg-[#181818]"
          >
            Recent Work
          </Link>
        </div>
      </div>
      <Carousels />
    </>
  );
}
