
import SparkleSVG from "./SparkleSVG";

export default function Navbar() {
  return (
    <div className="fixed left-1/2 top-4 rounded-full -translate-x-1/2 px-4 py-0.5  z-50 flex items-center justify-center  text-white backdrop-blur-md">
      <div className="flex justify-center gap-1  rounded-xl  w-max backdrop-blur-custom ">
        {/* <img src="/logo.png" alt="Logo" className="" /> */}
        <SparkleSVG size={'w-[25px] h-[25px]'}  />
        <span className="text-lg font-spacemono">Designstein</span>
      </div>
    </div>
  );
}
