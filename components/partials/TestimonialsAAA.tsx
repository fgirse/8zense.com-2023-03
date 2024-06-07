"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card01 from "@/components/share/Card01";
// Our custom button component
import SliderButtons from "@/components/BV                                                                            £/SliderButtons";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="h-[10vh] w-full">
      <div className="h-screen">
        <ul className="h-96 w-full">
          <Swiper
            className="h-[55vw] w-full"
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, image, tagline, title, buttons }) => (
              <SwiperSlide key={id}>
                {/* <div
                  className="h-screen w-full absolute left-0 top-0"
                  style={{
                    background: `url(${image}) center center / cover scroll no-repeat`,
                  }}
                ></div>*/}
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
                <div className="relative z-10 flex h-[85vh] items-center justify-center">
                  <div className="text-center">
                    {tagline && (
                      <p className="text-md font-semibold text-white sm:text-xl lg:text-3xl">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl font-bold text-white sm:text-6xl lg:text-8xl">
                      {title}
                    </p>
                    {buttons.length > 0 ? (
                      <p className="mt-10 inline-block rounded-full bg-gray-800 px-9 py-2 text-white lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                  </div>
                </div>
                <Card01 />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;
