import Image from "next/image";
import React, { forwardRef } from "react";

interface Iprops {
  id: string;
  frontSrc: string;
  frontAlt: string;
  backText: string;
}

const Card = forwardRef<HTMLDivElement, Iprops>(({ id, frontSrc, frontAlt, backText }, ref) => {
  return (
    <div
      className="card-new perspective-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:h-[360px] md:w-[240px]  h-[250px] w-[170px]"
      id={id}
      ref={ref}
    >
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-[floating_3s_ease-in-out_infinite]">
        <div className="flip-card-inner  ">
          <div className="flip-card-front  absolute w-full h-full backface-hidden   rounded-md overflow-hidden">
            <Image
              priority
              src={frontSrc}
              	fill={true}
              alt={frontAlt}
              className=""
            />
          </div>
          <div className="flip-card-back absolute w-full h-full backface-hidden  rounded-md overflow-hidden bg-[url('/mobslide.jpg')] rotate-y-180 ">
            <p
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-center`}
            >
              {backText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
