export default function Benefits() {
  return (
    <section className="relative flex flex-col items-start justify-start max-w-full min-h-screen px-10 md:py-40 py-20 overflow-x-hidden md:px-32 font-inter bg-[#1c1c1c]">
      <div className="z-20 w-full ">
        <h2 className={`text-xl font-light `}> The exceptional way of working</h2> 
        <span className="block max-w-[80vw] border-b border-dashed border-[#fff]/30 mt-[0.5rem]" />
      </div>

      
        <div className="absolute w-48 h-48 delay-1000 bg-gradient-to-tl from-orange-800 from-0% via-orange-500 via-50% to-orange-600 to-100% rounded-full sm:w-60 sm:h-60 animate-move md:top-72 md:left-40  top-56 left-8 "></div>
      <div className=" absolute sm:w-60 w-48 h-48 sm:h-60 animate-move rounded-full bg-gradient-to-tl from-orange-800 from-0% via-orange-500 via-50% to-orange-600 to-100%  md:bottom-40 md:right-40 sm:bottom-24 sm:right-28 bottom-20 right-12 z-0"></div>


      {/* Top left caption */}


      {/* Card grid */}
      <div className="grid w-full grid-cols-1 gap-4 py-32 mt-20 md:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-between py-8 px-6 bg-transparent rounded-xl  backdrop-blur-custom shadow-white  min-h-[420px] z-20  ">
          <div >
            <h2 className="">
              Subscribe or Request
            </h2>
            <div className="text-white text-[1.05rem] leading-[1.6]">
              <div className={`gap-2 flex flex-col`}>
                <span className="font-semibold">Subscription</span>
                <ul className=" text-white/70 mt-[0.1em] mb-[0.7em] text-sm">
                  <li>For ongoing design work</li>
                  <li>Longer Projects</li>
                </ul>
              </div>
              <div className={`gap-2 flex flex-col`}>
                <span className="font-semibold">One-Off Project</span>
                <ul className=" text-white/70 mt-[0.1em] text-sm">
                  <li>High Conversion deliverable</li>
                  <li>Full Competitor Analysis</li>
                  <li>Usually Short term projects</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Star Icon */}
          <div className="flex justify-center mt-[2.5vw]">
           <img src="/asset/hero/pc.png"  alt="pc" className={`w-28`}/>
          </div>
        </div>

        {/* Card 2 */}
        <div className=" flex flex-col justify-between py-8 px-6 bg-transparent rounded-xl  backdrop-blur-custom shadow-white   min-h-[420px] z-20 ">
          <div>
            <h2 className="text-[1.55rem]   mb-[1.1vw] text-white tracking-[0.01em]">
              48-Hour Updates
            </h2>
            <div className="text-white  text-[1.05rem] leading-[1.6]">
              <div className={`gap-2 flex flex-col`}>
                <span>We work at fast pace (within 48 hrs)</span>
                <ul className=" text-white/70 mt-[0.1em] text-sm">
                  <li>Tri-weekly updates</li>
                  <li>Final assets</li>
                  <li>Revisions</li>
                  <li>Drafts</li>
                  <li>System Design </li>
                  <li>Wireframe</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Clock Icon */}
          <div className="flex justify-center mt-[2.5vw]">
            <img src="/asset/hero/up.png"  alt="pc" className={`w-28`}/>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between py-8 px-6 bg-transparent rounded-xl  backdrop-blur-custom shadow-white   min-h-[420px] z-20 ">
          <div>
            <h2 className="text-[1.55rem]  mb-[1.1vw] text-white tracking-[0.01em]">
              Approval and Repeat
            </h2>
            <div className="text-white  text-[1.05rem]  leading-[1.6]">
              <div className={`gap-2 flex flex-col`}>
                <span className={``}>Your satisfaction matters to Us</span>
                <ul className="text-white/70 mt-[0.1em] text-sm">
                  <li>Iteration until approval</li>
                  <li>Repeating until task completed</li>
                  <li>NO hidden fees till free limits per day</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Repeat Icon */}
          <div className="flex justify-center mt-[2.5vw]">
             <img src="/asset/hero/ok.png"  alt="pc" className={`w-28`}/>
          </div>
        </div>
      </div>
    </section>
  );
}
