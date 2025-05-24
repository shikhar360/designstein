import Copy from "./Copy";
import SparkleSVG from "./SparkleSVG";

export default function Footer() {
  return (
    <footer className="relative min-h-[50vh] font-inter w-full bg-orange-400 flex flex-col justify-between py-10 ">
      {/* Centered Logo and Title */}
      <div className="flex flex-col items-center mt-[3.5vw] mb-[2.5vw]">
        {/* Star Logo */}
        <SparkleSVG size={"h-[120px] w-[120px] "} color="#000" />
        {/* Title */}

        <h1 className="md:text-[4rem] text-4xl font-bold tracking-[0.08em] text-black select-none">
          Designstein
        </h1>
      </div>

      {/* Newsletter Row */}
      <div className="flex items-center justify-between w-[88vw] mx-auto mt-[2vw] mb-[2vw]">
        {/* Left: Text */}
        <Copy>
          <span className="md:text-[2rem] text-xl font-normal text-black leading-[1.1]">
            Get more updates here !
          </span>
        </Copy>
        {/* Dotted line */}
        <div className="flex-1 mx-[2vw] border-b border-dashed border-black/80 h-0" />
        {/* Social Icons */}
        <div className="flex items-center gap-[2.5vw]">
          {/* Twitter */}
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios/50/twitterx--v2.png"
            alt="twitterx--v2"
          />
          {/* YouTube */}
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/youtube-play--v1.png"
            alt="youtube-play--v1"
          />
          {/* LinkedIn */}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between w-[88vw] mx-auto mb-[1.5vw] mt-[2vw] text-[1rem] text-black/90">
        {/* Copyright */}
        <Copy>
          <span className="text-xs font-normal text-black/40">
            Copyright <span className="align-middle">©</span> 2025 Designstein
            <span className="align-middle">.</span> All rights reserved.
          </span>
          {/* Policy Links */}
          <div className="flex gap-[2vw] ">
            <a href="/" className="text-xs text-black/40 hover:underline">
              Privacy Policy
            </a>
            <a href="/" className="text-xs text-black/40 hover:underline">
              Term of Use
            </a>
          </div>
        </Copy>
      </div>
    </footer>
  );
}
