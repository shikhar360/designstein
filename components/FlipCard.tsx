"use client";

import React, { useEffect, useRef } from "react";
import Card from "./ServiceCard";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Copy from "./Copy";

gsap.registerPlugin(ScrollTrigger);

 export interface cardConfig {
    heading: string;
    subHeading: string;
    cardimg: string;
  }

export default function FlipCard() {
  const lenisRef = useRef<React.ElementRef<typeof ReactLenis>>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const totalScrollHeight = window.innerHeight * 3;

      const smallScreenWidth = window.innerWidth < 743 ? true : false;
      const position = smallScreenWidth ? [ 28, 28, 72, 72] :[14, 38, 62, 86];
      const positionY = smallScreenWidth ? [68 , 32 , 68, 32] : [50, 50, 50, 50];
      const rotation = [-15, -7.5, 7.5, 15];

      const smallerWindowPositionX =[ 38, 62, 38, 62]
      const smallerWindowPositionY =[30 , 60 , 30, 60]

      //pinning

      ScrollTrigger.create({
        trigger: container.current?.querySelector(".cards-new"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      //spreading and moving cards

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: `${position[index]}%`,
          top: `${positionY[index]}%`,
          rotation: `${rotation[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: container.current?.querySelector(".cards-new"),
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
            id: `spread-${index}`,
          },
        });
      });

      //rotating cards on scroll

      cards.forEach((card, index) => {
        const frontEl = card?.querySelector(".flip-card-front");
        const backEl = card?.querySelector(".flip-card-back");
        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;

        ScrollTrigger.create({
          trigger: container.current?.querySelector(".cards-new"),
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotation[index] * (1 - animationProgress);

              if (frontEl) {
                gsap.to(frontEl, {
                  rotateY: frontRotation,
                  ease: "power1.out",
                });
              }
              if (backEl) {
                gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
              }

              if (card) {
                gsap.to(card, {
                  xPercent: -50,
                  yPercent: -50,
                  rotate: cardRotation,
                  ease: "power1.out",
                });
              }
            }
          },
        });
      });
    },
    { scope: container }
  );

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const card_config: cardConfig[] = [
    {
      
       heading: 'Landing Pages',
    subHeading: ' We design landing pages, product and brands from wireframes to visitors that converts into paying customers.',
    cardimg: 'https://img.icons8.com/pastel-glyph/400/web-design--v2.png'
    },
    {
        heading: 'Logo Design',
    subHeading: ' We create unique and memorable logos that represent your brand + handover scalable design systems for your products.',
    cardimg: 'https://img.icons8.com/isometric-line/400/design.png'

    
  },
  {
    heading: 'Copywriting',
    subHeading: ' We create copy that resonates with your audience, drives engagement, and boosts conversions.',
    cardimg: 'https://img.icons8.com/wired/400/pen.png'

    },
    {
      heading: 'Development',
    subHeading: ' We build scalable, high-performance web apps using Next.js, Tailwind CSS + Use No-code tools like Framer, Webflow & more.',
    cardimg: 'https://img.icons8.com/pastel-glyph/400/code--v2.png'

    },
  ];
  return (
    <div ref={container} className={`container-new box-border mx-0   bg-black  `}>
      {/* <section className="hero h-[100vh] w-full bg-purple-300  relative">
        <h1
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl `}
        >
          hero is here
        </h1>
      </section> */}
      <div className={`absolute  text-base mt-20 w-full `}>
        <Copy>
          <h2 className={` mx-10 md:mx-32 font-normal md:text-3xl text-2xl text-white `}>
            Services we offer
          </h2>
          <p
            className={`max-w-[80vw] border border-dashed border-white/40 mx-10 md:mx-32`}
          />
        </Copy>
      </div>
      <section className="cards-new h-[100vh] w-full  relative">
        {card_config.map(( obj , index) => (
          <Card
            key={index}
            id={` card-${index + 1}`}
            frontSrc="/image.jpg"
            frontAlt="Card Image"
            obj={obj}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          />
        ))}
      </section>
      {/* <section className="footer h-[100vh] w-full bg-blue-400 relative">
        <h1
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl `}
        >
          Footer or Upcoming Section
        </h1>
      </section> */}
    </div>
  );
}
