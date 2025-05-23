import Benefits from "@/components/Benefits";
import Calender from "@/components/Calender";
import { CardAnimated } from "@/components/CardAnimated";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import GravityPills from "@/components/GravityPills";
import Hero from "@/components/Hero";


export default function Home() {
  return (
     <div className={`w-full flex flex-col  overflow-hidden scrollbar-hide`}>
      <Hero />
      <GravityPills />
      <Benefits />
      <CardAnimated />
      <Calender />
      <FAQSection />
      <Footer />
    </div>
  );
}
