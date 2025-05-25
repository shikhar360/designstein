/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Copy from "./Copy";
export default function Calender() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#5b5b5b" },
          dark: { "cal-brand": "#ff8900" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

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
    <div
      className={`w-full overflow-x-hidden min-h-screen flex flex-col font-inter gap-8 items-center justify-center bg-[#1c1c1c] pb-20 scrollbar-hide`}
      id="book"
    >
      <div className="z-20 flex flex-col min-w-[80vw] my-20 mx-auto">
        <Copy>
          <div className={`text-xl font-light `}>
            Taking calls for {month[d.getMonth()]}
          </div>
          <span className="block  border-b border-dashed border-[#fff]/30 mt-[0.5rem]" />
        </Copy>
      </div>
      <div className={`md:w-full md:h-full mx-auto w-[75vw] h-[75vh] scrollbar-hide`}>
        <Cal
          namespace="30min"
          calLink="designstein/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "dark" }}
        />
      </div>
    </div>
  );
}
