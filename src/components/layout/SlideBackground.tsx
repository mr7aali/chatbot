import React from "react";
interface SlideBackgroundProps {
  bgImage: string;
  children: React.ReactNode;
}

const SlideBackground = ({ bgImage, children }: SlideBackgroundProps) => {
  return (
    <div
      className="hs-carousel-slide relative bg-center bg-no-repeat bg-cover z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Glassmorphism overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-[#fac564]/20 backdrop-blur-sm rounded-2xl" />
      <div className="relative z-10 flex items-center justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default SlideBackground;
