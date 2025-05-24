"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: React.ReactElement | React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
}

export default function Copy({ children, animateOnScroll = true, delay = 0 }: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<Element[]>([]);
  const splitRef = useRef<any[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];
  
      let elements = [];
      if (containerRef.current?.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);
        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;
        if (textIndent && textIndent !== "Opx") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }

          (element as HTMLElement).style.textIndent = "0px";
        }
        lines.current.push(...(split.lines as HTMLElement[]));
      });

      gsap.set(lines.current, { y: "100%" });
      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4. out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<any>, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper='true'>
      {children}
    </div>
  );
}
