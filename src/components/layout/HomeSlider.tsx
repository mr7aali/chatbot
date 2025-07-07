import { Button, Image, Link } from "@nextui-org/react";
import SlideBackground from "./SlideBackground";
import { SectionProps } from "@/types/SectionProps";

const HomeSlider = ({ className }: SectionProps) => {
  return (
    <section className={className}>
      <div
        data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}'
        className="relative h-[420px] sm:h-[630px] lg:h-[850px] z-0"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-full">
          <div className="hs-carousel-body w-full absolute top-0 bottom-0 start-0 flex flex-nowrap duration-700 ease-in-out delay-200 opacity-0">
            {/* First Slide */}
            <SlideBackground bgImage="/assets/slider_bg_1.jpg">
              <div className="w-full flex flex-col justify-center text-center h-full absolute z-10 px-4">
                <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4 drop-shadow-lg animate-fade-in">
                  Welcome
                </span>
                <h1 className="mb-4 text-2xl sm:text-[44px] font-bold text-white drop-shadow-xl animate-slide-up">
                  We cooked your desired
                </h1>
                <p className="mb-2 sm:mb-8 text-2xl sm:text-[44px] font-extrabold text-primary drop-shadow-xl animate-slide-up">
                  Pizza Recipe
                </p>
                <h3 className="mb-16 text-base sm:text-xl text-gray-200/90 max-w-2xl mx-auto animate-fade-in">
                  A small river named Duden flows by their place and supplies it
                  with the <span className="block">necessary regelialia.</span>
                </h3>
                <p className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Button
                    as={Link}
                    href="/menu"
                    color="primary"
                    radius="full"
                    size="lg"
                    className="py-4 px-8 text-dark font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                  >
                    Order Now
                  </Button>
                  <Button
                    as={Link}
                    href="/menu"
                    radius="full"
                    size="lg"
                    className="bg-transparent border-2 border-primary text-primary py-4 px-8 font-bold shadow-lg hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                  >
                    View Menu
                  </Button>
                </p>
              </div>
            </SlideBackground>

            {/* Second Slide */}
            <SlideBackground bgImage="/assets/slider_bg_2.jpg">
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10 px-4">
                <div className="hidden sm:flex w-1/4 animate-zoom-in">
                  <Image
                    src="/assets/slider_pizza_1.png"
                    alt="Pizza"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="max-w-xl ml-6 text-left animate-slide-up">
                  <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4 drop-shadow-lg">
                    Crunchy
                  </span>
                  <h1 className="mb-8 text-[40px] font-bold text-white drop-shadow-xl">
                    Italian Pizza
                  </h1>
                  <h3 className="mb-16 text-gray-200/90">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </h3>
                  <p className="flex gap-4 animate-fade-in">
                    <Button
                      as={Link}
                      href="/menu"
                      color="primary"
                      radius="full"
                      size="lg"
                      className="py-4 px-8 text-dark font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                      Order Now
                    </Button>
                    <Button
                      as={Link}
                      href="/menu"
                      radius="full"
                      size="lg"
                      className="bg-transparent border-2 border-primary text-primary py-4 px-8 font-bold shadow-lg hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                    >
                      View Menu
                    </Button>
                  </p>
                </div>
              </div>
            </SlideBackground>

            {/* Third Slide */}
            <SlideBackground bgImage="/assets/slider_bg_2.jpg">
              <div className="w-full flex flex-row gap-6 justify-center items-center h-full absolute z-10 px-4">
                <div className="max-w-xl text-end mr-6 animate-slide-up">
                  <span className="font-nothingYouCouldDo text-primary text-[40px] mb-4 drop-shadow-lg">
                    Delicious
                  </span>
                  <h1 className="mb-8 text-[40px] font-bold text-white drop-shadow-xl">
                    Italian Cuizine
                  </h1>
                  <h3 className="mb-16 text-gray-200/90">
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </h3>
                  <p className="flex gap-4 justify-end animate-fade-in">
                    <Button
                      as={Link}
                      href="/menu"
                      color="primary"
                      radius="full"
                      size="lg"
                      className="py-4 px-8 text-dark font-bold shadow-lg hover:scale-105 transition-transform duration-200"
                    >
                      Order Now
                    </Button>
                    <Button
                      as={Link}
                      href="/menu"
                      radius="full"
                      size="lg"
                      className="bg-transparent border-2 border-primary text-primary py-4 px-8 font-bold shadow-lg hover:bg-primary/10 hover:scale-105 transition-all duration-200"
                    >
                      View Menu
                    </Button>
                  </p>
                </div>
                <div className="hidden sm:flex w-1/4 animate-zoom-in">
                  <Image
                    src="/assets/slider_pizza_2.png"
                    alt="Pizza"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </SlideBackground>
          </div>
        </div>

        {/* Indicator buttons */}
        <div
          data-hs-carousel-indicators
          className="hs-carousel-pagination flex justify-center absolute bottom-6 start-0 end-0 space-x-4 z-20"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="hs-carousel-active:bg-primary hs-carousel-active:border-primary w-6 h-6 border-2 border-gray-400 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 shadow-md"
            >
              <span className="hs-carousel-active:bg-primary hs-carousel-active:border-primary w-3 h-3 border border-gray-400 rounded-full cursor-pointer transition-all duration-300"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSlider;
