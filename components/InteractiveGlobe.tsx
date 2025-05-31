import Spline from "@splinetool/react-spline";
import Copy from "./Copy";
import Link from "next/link";

export default function InteractiveGlobe() {
  return (
    <main className={`relative flex flex-col items-start min-h-[120vh] justify-start md:px-20 px-10  font-inter bg-[#1a1a1a]`}>
      {/* <Spline scene="https://prod.spline.design/K-KD2SeMaiAe4tmG/scene.splinecode" /> */}
  {/* <img src="/asset/misc/nav.png" alt="nav" className={`w-full  `} /> */}
      {/* <Spline scene="https://prod.spline.design/K-KD2SeMaiAe4tmG/scene.splinecode" /> */}
  {/* <img src="/asset/misc/more.png" alt="nav" className={`absolute bottom-20 left-20  max-w-[300px]   `} /> */}
         {/* <h1 className={`text-[55px]  text-[#ffeafd] z-20`}>Illuminate your <br/> digital presence <br/> with meteor</h1> */}
        {/* <Spline scene="https://prod.spline.design/YbIe9Oarq5Z510KY/scene.splinecode" /> */}
        <div className="z-20 flex flex-col min-w-[80vw] w-full mt-20 mx-auto">
                <Copy>
                  <div className={`text-xl font-light text-white`}>Let&apos;s Book an Intro Call</div>
                  <span className="block  border-b border-dashed border-[#fff]/30 mt-[0.5rem]" />
                </Copy>
              </div>
      <div className={`w-full h-screen  absolute top-0 left-0 `}>
        <Spline scene="https://prod.spline.design/KFyma-ncjVfLXpGq/scene.splinecode" />
        <div className={`absolute right-0 bottom-3 bg-[#1a1a1a] w-40 h-11`} />



       
      </div>
        <div className={`z-20 flex flex-col items-center justify-center w-[80vw] bg-white/5 backdrop-blur-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl md:px-10 px-4 md:py-20 py-10  `}>

     <Copy>
      <h2 className={`md:text-[64px]  text-2xl text-left font-semibold font-inter`}>Let&apos;s build the kind of site people never forget.</h2>
      </Copy>
      <Copy>
      <h6 className={`text-left w-full pt-4 md:text-[25px] text-xs text-normal text-white/80`}>Because average doesn&apos;t inspire action — unforgettable does.</h6>
     </Copy>
        <div className="flex pt-8 flex-row items-center justify-start w-full gap-2 mt-8 md:mt-4 ">
          <Link
            href={"#book"}
            className="md:px-[.8rem]   px-[1.4rem] no-underline font-spacemono py-[0.95rem] border-none rounded-[0.375rem] bg-orange-400 text-white cursor-pointer   md:text-[1rem] text-[.6rem] leading-[1.2] tracking-[0.01em] transition-colors hover:bg-orange-400"
          >
            Book an Intro Call
          </Link>
          <Link
            href={"#samplework"}
            className=" scroll-smooth  md:px-[2.5rem] px-[2.6rem] font-spacemono py-[0.95rem] border-dashed border-[#fff]/20 no-underline bg-black/5 backdrop-blur-custom rounded-[0.375rem] cursor-pointer  text-white  md:text-[1rem] text-[.6rem] leading-[1.2] tracking-[0.01em] transition-colors hover:bg-[#181818]"
          >
            Recent Work
          </Link>
        </div>
      </div>
     
         {/* <h2 className={`text-[35px] z-20   font-light text-[#ffeafd] absolute right-20 bottom-4`}>Transform your business <br/> with our export design <br/> solution</h2> */}
    </main>
  );
}
