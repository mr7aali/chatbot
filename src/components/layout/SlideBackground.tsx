import React from "react";
import Image from "next/image";

interface SlideBackgroundProps {
  bgImage: string;
  children: React.ReactNode;
}

const SlideBackground = ({ bgImage, children }: SlideBackgroundProps) => {
  return (
    <div className="hs-carousel-slide relative bg-center bg-no-repeat bg-cover z-0 overflow-hidden">
      <Image
        src={bgImage}
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-[#fac564]/20 backdrop-blur-sm z-10" />
      <div className="relative z-20 flex items-center justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default SlideBackground;
