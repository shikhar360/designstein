import Image from "next/image";
import React, { forwardRef } from "react";
import { cardConfig } from "./FlipCard";

interface Iprops {
  id: string;
  frontSrc: string;
  frontAlt: string;
  obj: cardConfig;
}

const Card = forwardRef<HTMLDivElement, Iprops>(({ id, frontSrc, frontAlt, obj }, ref) => {
  return (
    <div
      className="card-new perspective-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  md:h-[360px] md:w-[240px]  h-[225px] w-[150px]"
      id={id}
      ref={ref}
    >
      <div className="card-wrapper absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-[floating_3s_ease-in-out_infinite]">
        <div className="flip-card-inner  ">
          <div className="flip-card-front [-webkit-text-stroke:0.5px_#9e9e9e] absolute w-full h-full backface-hidden    rounded-xl overflow-hidden">
            <Image
              priority
              src={frontSrc}
              	fill={true}
              alt={frontAlt}
              className=""
            />
          </div>
          <div className="flip-card-back absolute w-full h-full backface-hidden md:px-5 px-3  rounded-xl shadow-white overflow-hidden font-inter md:gap-4 gap-3 bg-[#fc8c14]  rotate-y-180 flex flex-col items-center justify-center">
            <p
              className={` md:text-2xl text-md text-start text-white font-bold`}
            >
              {obj.heading}
            </p>
           

            <img
           
            src={obj.cardimg}
            alt={frontAlt+ " back"} 
            className={`md:h-[140px] h-[75px] w-[75px] md:w-[140px] mix-blend-screen invert `}
            />

             <span className={`text-[10px] md:text-sm text-start opacity-80 `}>
              {obj.subHeading}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;

// bg-gradient-to-br to-[#de5c00]
// absolute top-1/2 left-1/2 -translate-x-1/2 font-inter -translate-y-1/2 md:text-2xl text-md text-[#FEE0D7] text-center w-full  px-5