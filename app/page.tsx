"use client";
// import Benefits from "@/components/Benefits";
// import Calender from "@/components/Calender";
// import { CardAnimated } from "@/components/CardAnimated";
// import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
// import GravityPills from "@/components/GravityPills";
import Hero from "@/components/Hero";
// import FlipCard from "@/components/FlipCard";
// import InteractiveGlobe from "@/components/InteractiveGlobe";
import dynamic from "next/dynamic";


const InteractiveGlobe = dynamic(() => import('@/components/InteractiveGlobe'), {
  ssr: false,
});
const CardAnimated = dynamic(() => import('@/components/CardAnimated'));
const FlipCard = dynamic(() => import('@/components/FlipCard'));
const Benefits = dynamic(() => import('@/components/Benefits'));
const FAQSection = dynamic(() => import('@/components/FAQ'));

const Calender = dynamic(() => import('@/components/Calender'), {
  ssr: false,
});



export default function Home() {
  return (
    <div className={`w-full flex flex-col overflow-x-hidden text-white scrollbar-hide`}>
      <Hero />
      {/* <GravityPills /> */}
      <FlipCard />
      <Benefits />
      <CardAnimated />
      <Calender />
      <FAQSection />
      <InteractiveGlobe />
      <Footer />
    </div>
  );
}
