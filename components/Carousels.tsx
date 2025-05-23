"use client";

import Image from "next/image";

export default function Carousels() {
  const sampleWork = [
    "/asset/hero/1.jpg",
    "/asset/hero/2.jpg",
    "/asset/hero/3.jpg",
    "/asset/hero/4.jpg",
    "/asset/hero/5.jpg",
    "/asset/hero/6.jpg",
    "/asset/hero/7.jpg",
    "/asset/hero/8.jpg",
    "/asset/hero/9.jpg",
  ];
  function clone() {
    return (
      <div
        className={`thread flex min-w-max  text-center animate-slide flex-shrink-0   `}
      >
        {sampleWork.map((work, index) => (
          <img src={work} key={index} alt={`work + ${index}`} className={`md:w-[40vw] w-[70vw] ml-2`} loading="lazy" />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`h-30 w-[100vw]  flex group  text-sm givep overflow-x-hidden`}
      id="samplework"
    >
      {clone()}
      {clone()}
    </div>
  );
}
