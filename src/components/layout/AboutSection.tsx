import { SectionProps } from "@/types/SectionProps";
import React from "react";

const AboutSection = ({ className }: SectionProps) => {
  return (
    <section id="about" className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-dark/80">
        {/* Image Side with Glassmorphism Overlay */}
        <div
          className="relative h-[300px] lg:h-auto bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/assets/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-[#fac564]/20 backdrop-blur-sm" />
        </div>
        {/* Text Side as Card */}
        <div className="p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-white/5 backdrop-blur-md rounded-none lg:rounded-r-2xl shadow-lg animate-fade-in">
          <h1 className="mb-4 text-3xl sm:text-4xl font-extrabold text-white drop-shadow-lg">
            Welcome to <span className="text-primary">Slice Savvy</span>
          </h1>
          <div className="text-gray-300 text-lg leading-relaxed">
            <p className="mb-4">
              At <span className="text-primary font-semibold">Slice Savvy</span>
              , our story is a delightful journey of passion and flavor. It all
              began with a love for crafting the perfect pizza, blending
              tradition with innovation. Our chefs, inspired by the rich
              culinary heritage of Italy, handpick the finest ingredients to
              create mouthwatering masterpieces. From our artisanal crusts to
              the delectable toppings, each pizza tells a tale of dedication and
              quality.
            </p>
            <p>
              With a commitment to excellence, we&apos;ve built a community that
              cherishes every slice. Join us on this gastronomic adventure,
              where every order is a chapter in our story—a story of taste,
              tradition, and the joy of sharing exceptional food.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
