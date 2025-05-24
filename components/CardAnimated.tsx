"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Particles from "./Particle/page";
import { ReactLenis } from "lenis/react";
import Copy from "./Copy";

gsap.registerPlugin(ScrollTrigger);

export const CardAnimated = () => {
  const lenisRef = useRef<React.ElementRef<typeof ReactLenis>>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 2000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  const procedures: { intro: string; descrip: string }[] = [
    {
      intro: "Intro",
      descrip:
        "Lets get to know each other through intro calls. We will discuss wireframes, address pain points, and the direction we need to go in for your maximum satisfaction.",
    },
    {
      intro: "Research & Discovery",
      descrip:
        "We dive into market research, study your competitors, and understand your audience. This forms the foundation for a design strategy tailored to your brand.",
    },
    {
      intro: "Wireframing & Planning",
      descrip:
        "We create detailed wireframes and layout plans to visually map out user journeys and ensure every element serves a purpose before moving to visuals.",
    },
    {
      intro: "Designing & Prototyping",
      descrip:
        "Our designers bring the wireframes to life with stunning visuals and interactive prototypes, capturing your brands essence while ensuring user-friendliness.",
    },
    {
      intro: "Delivery & Support",
      descrip:
        "Final files are delivered with complete documentation. We remain available for revisions, support, and further iterations if needed.",
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".card");
    const rotations = [-12, 10, -5, 5, -5, -2];

    cards.forEach((card, index) => {
      gsap.set(card, {
        y: window.innerHeight,
        rotate: rotations[index],
      });
    });

    ScrollTrigger.create({
      trigger: ".sticky-cards",
      start: "top top",
      end: `+=${window.innerHeight * 9}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const progressPerCard = 1 / totalCards;

        cards.forEach((card, index) => {
          const cardStart = index * progressPerCard;
          let cardProgress = (progress - cardStart) / progressPerCard;

          cardProgress = Math.min(Math.max(cardProgress, 0), 1);

          let yPos = window.innerHeight * (1 - cardProgress);
          let xPos = 0;

          if (cardProgress === 1 && index < totalCards - 1) {
            const remainingProgress =
              (progress - (cardStart + progressPerCard)) /
              (1 - (cardStart + progressPerCard));

            if (remainingProgress > 0) {
              const distanceMultiplier = 1 - index * 0.15;

              xPos =
                -window.innerWidth *
                0.3 *
                distanceMultiplier *
                remainingProgress;

              yPos =
                -window.innerHeight *
                0.3 *
                distanceMultiplier *
                remainingProgress;
            }
          }

          gsap.to(card, {
            y: yPos,
            x: xPos,
            duration: 0,
            ease: "none",
          });
        });
      },
      // markers: true,
    });
  }, []);

  return (
    <section className="w-screen overflow-x-hidden  min-h-screen sticky-cards bg-[#121212]  scrollbar-hide  relative">
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {/* <Particles /> */}
      <div className="absolute z-10 min-w-[80vw] mt-20 top-10 md:left-32 left-10 font-inter ">
        <Copy>
          <h2 className={`md:text-xl text-lg font-light text-end `}>
            Timeline & Procedural way of working
          </h2>
          <span className="block md:max-w-[80vw] border-b border-dashed border-[#fff]/30 mt-[0.5rem]" />
        </Copy>
      </div>

      <div className="sm:w-60 w-48 h-48 sm:h-60 animate-move rounded-full bg-gradient-to-tl from-orange-800 from-0% via-orange-500 via-50% to-orange-600 to-100% absolute  -bottom-10 -left-10  z-0"></div>

      {procedures.map((steps, idx) => (
        <div key={idx} className="z-20 card">
          <div className=" relative flex flex-col items-start overflow-hidden justify-center md:w-[335px] w-[209px] md:h-[420px] h-[262px] font-inter bg-black/50 backdrop-blur-custom text-white rounded-[42px] shadow-[inset_1px_0.5px_6px_1px_#ffffff66]">
            <div className="flex md:items-end  items-center justify-start gap-2 px-5 pt-5 max-w-[335px] h-max">
              <span
                className={` [-webkit-text-stroke:0.5px_#9e9e9e] font-bold text-transparent md:text-8xl text-4xl  brorder-neutral-60`}
              >
                {idx + 1}
              </span>
              <span className="  pb-1 font-bold text-orange-400 md:text-4xl text-2xl  md:tracking-[-0.90px] md:leading-[44px] ">
                {steps.intro}
              </span>
            </div>

            <p className="   md:px-[37px] px-[22px]  font-normal text-orange-50 md:text-base text-xs md:tracking-[-0.35px] md:leading-[44px]">
              {steps.descrip}
            </p>

            <div
              className={`rounded-full bg-orange-400 absolute md:-bottom-4 md:-right-4 -bottom-2 -right-2 md:w-[87px] md:h-[87px] w-[40px] h-[40px] `}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

/*
 <div className="absolute top-0 left-0 pt-20 pb-0 px-9 size-full max-sm:px-6 max-sm:pt-16 max-sm:pb-0">
      <h2 className="font-bold leading-10 tracking-tighter text-left text-8xl text-neutral-400 max-md:text-8xl max-sm:text-7xl">
        1
      </h2>
      <h3 className="mt-0 ml-16 text-4xl font-bold leading-10 tracking-tighter text-orange-400 max-md:ml-16 max-md:text-4xl max-sm:ml-12 max-sm:text-3xl">
        Intro
      </h3>
      <p className="mt-3 text-base leading-10 tracking-tight text-red-100 max-md:text-sm max-md:leading-9 max-sm:text-sm max-sm:leading-8">
        Lets get to know each other through intro calls. We will discuss
        wireframes, address pain points, and the direction we need to go in
        for your maximum satisfaction.
      </p>
    </div>


*/
