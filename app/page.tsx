import Benefits from "@/components/Benefits";
import Calender from "@/components/Calender";
import { CardAnimated } from "@/components/CardAnimated";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import GravityPills from "@/components/GravityPills";
import Hero from "@/components/Hero";
import FlipCard from "@/components/FlipCard";

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
      <Footer />
    </div>
  );
}
