"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCardSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const cardsRotation = [-12, 10, -5, 5, -5];

    ScrollTrigger.create({
      trigger: ".pin-container",
      start: "top top",
      end: `+=${cards.length * 1000}`,
      scrub: 1,
      pin: true,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-container",
        start: "top 70%",
        end: `+=${cards.length * 1000}`,
        scrub: 0,
      },
    });

    cards.forEach((card) => {
      timeline.to(card, {
        opacity: 1,
        duration: 1,
      });
    });
  }, []);

  return (
    <div className="relative h-screen bg-black pin-container">
      <div className="relative h-screen bg-black card-container">
        <div className="absolute inset-0 p-10 m-10 bg-green-100 opacity-0 rounded-2xl card">
          <div className={"absolute flex flex-col gap-2 right-0 bottom-0 m-6"}>
            <div
              className={"w-2 h-2 rounded-full bg-black border border-black"}
            />
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div className={"w-2 h-2 rounded-full border border-black"} />
          </div>
        </div>
        <div className="absolute inset-0 m-10 bg-red-100 opacity-0 rounded-2xl card">
          <div className={"absolute flex flex-col gap-2 right-0 bottom-0 m-6"}>
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div
              className={"w-2 h-2 rounded-full border bg-black border-black"}
            />
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div className={"w-2 h-2 rounded-full border border-black"} />
          </div>
        </div>
        <div className="absolute inset-0 m-10 bg-yellow-100 opacity-0 rounded-2xl card">
          <div className={"absolute flex flex-col gap-2 right-0 bottom-0 m-6"}>
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div
              className={"w-2 h-2 rounded-full border bg-black border-black"}
            />
            <div className={"w-2 h-2 rounded-full border border-black"} />
          </div>
        </div>
        <div className="absolute inset-0 m-10 bg-blue-100 opacity-0 rounded-2xl card">
          <div className={"absolute flex flex-col gap-2 right-0 bottom-0 m-6"}>
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div className={"w-2 h-2 rounded-full border border-black"} />
            <div
              className={"w-2 h-2 rounded-full border bg-black border-black"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
