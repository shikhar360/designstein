// components/SparkleSVG.tsx
import React from "react";

interface SparkleSVGProps {
  size?: string;
  color?: string;
}

const SparkleSVG: React.FC<SparkleSVGProps> = ({
  size = '200',
  color = "#EC5A34",
}) => {
  return (
    <svg
      
      viewBox="0 0 200 200"
      className={` ${size} `}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Large Sparkle with fatter middle */}
      <path
        d="M100,10 L130,100 L100,190 L70,100 Z"
        fill={color}
        id="large-sparkle-top"
      />
      <path
        d="M20,100 L100,130 L180,100 L100,70 Z"
        fill={color}
        id="large-sparkle-bottom"
      />

      {/* Small Sparkle with fatter middle */}
      <path
        d="M160,30 L165,50 L160,70 L155,50 Z"
        fill={color}
        id="small-sparkle-top"
      />
      <path
        d="M140,50 L160,54 L178,50 L160,46 Z"
        fill={color}
        id="small-sparkle-bottom"
      />
    </svg>
  );
};

export default SparkleSVG;
