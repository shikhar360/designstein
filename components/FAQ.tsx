/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";
import { useState, useRef } from "react";
// import { Minus, Plus } from "lucide-react";
import gsap from "gsap";
import Copy from "./Copy";

const faqs = [
  {
    question: "What services does your design agency offer?",
    answer:
      "We offer branding, UI/UX design, web app design, motion graphics, and visual identity development tailored to elevate your business.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "Our clients range from startups and small businesses to large enterprises looking to refresh or expand their digital presence.",
  },
  {
    question: "How does your design process work?",
    answer:
      "We start with discovery and research, move to ideation and wireframing, and then finalize high-fidelity designs followed by developer handoff and support.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and the creativity, but most branding or design projects take between 2 to 6 weeks.",
  },
  {
    question: "Do you offer development services too?",
    answer:
      "While we specialize in design, our team have trusted developers to ensure smooth implementation using framer and other no-code tool as well as coding with nextjs tailwind typescript or we can collaborate with your in-house team.",
  },
  {
    question: "How can I get a quote or start working with you?",
    answer:
      "Simply contact us via our website or email or cal.com , and we'll set up a discovery call to understand your needs and propose a custom solution.",
  },
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);
      const newIndexes = isOpen
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      const el = answerRefs.current[index];

      if (el) {
        if (isOpen) {
          gsap.to(el, {
            height: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              gsap.set(el, { height: 0, opacity: 0 });
            },
          });
        } else {
          const height = el.scrollHeight;

          gsap.fromTo(
            el,
            { height: 0, opacity: 0 },
            {
              height: height,
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
              onComplete: () => {
                gsap.set(el, { height: "auto" });
              },
            }
          );
        }
      }

      return newIndexes;
    });
  };

  return (
    <section
      id="faq"
      className={`w-screen min-h-screen flex flex-col font-inter items-start justify-start `}
    >
      <div className="z-20 flex flex-col min-w-[80vw] mt-20 mx-auto">
        <Copy>
          <div className={`text-xl font-light `}> FAQs</div>
          <span className="block  border-b border-dashed border-[#fff]/30 mt-[0.5rem]" />
        </Copy>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-20">
        <div className="">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 mb-2  select-none md:min-w-[50vw] min-w-[80vw] "
            >
              <div className="flex justify-end md:justify-end">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-center max-w-xs gap-2 bg-transparent border-none shadow-md cursor-pointer md:max-w-md"
                >
                  <div
                    className=""
                    // onClick={() => toggleFAQ(index)}
                  >
                    {openIndexes.includes(index) ? (
                      // <Minus className="w-5 h-5 text-orange-400 bg-white rounded-full" />
                      <img
                        width="10"
                        height="10"
                        src="https://img.icons8.com/ios-glyphs/30/ff9800/minus-math.png"
                        alt="plus-math"
                      />
                    ) : (
                      // <Plus className="w-5 h-5 text-orange-400 bg-white rounded-full" />
                      <img
                        width="10"
                        height="10"
                        src="https://img.icons8.com/ios-glyphs/30/ff9800/plus-math.png"
                        alt="plus-math"
                      />
                    )}
                  </div>
                  <Copy>
                    <div className="p-4 text-base font-medium text-right text-white bg-orange-400 rounded-2xl ">
                      {faq.question}
                    </div>
                  </Copy>
                </button>
              </div>
              <div
                ref={(el) => {
                  answerRefs.current[index] = el;
                }}
                style={{ overflow: "hidden", height: 0, opacity: 0 }}
                className="flex justify-start md:justify-start"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full cursor-pointer leading-[16px] max-w-xs p-4 text-left text-white border-none shadow-md bg-stone-800 rounded-2xl md:max-w-md"
                >
                  {faq.answer}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
