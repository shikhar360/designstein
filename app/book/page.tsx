"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Book() {
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

  return (
    <div
      className={`min-w-max mx-auto overflow-x-hidden font-inter min-h-screen flex flex-col gap-8  items-center justify-center bg-[#1c1c1c] py-10 md:px-32 px-10 scrollbar-hide`}
    >
         <Link
            href={"/"}
            className="  px-[1.4rem]  font-spacemono py-[0.95rem] border-none rounded-[0.375rem] bg-[#ff8900] text-white cursor-pointer   text-[1rem]  leading-[1.2] tracking-[0.01em] transition-colors hover:bg-orange-500"
          >
           /Home
          </Link>
      <Cal
        namespace="30min"
        calLink="designstein/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
