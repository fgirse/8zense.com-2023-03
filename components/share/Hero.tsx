import React from "react";
import Image from "next/image";
import Animation from "@/components/share/Lotticreator";
import styles from "@/components/share//Hero.module.css";

const Hero = () => {
  return (
    <section id="section-Hero" className="">
      <div className="relative h-screen w-full">
        <Image
          alt="Hero"
          src="/assets/images/interiore14.jpg"
          fill
          sizes="100vw"
        />
        <div className="flex flex-col items-center justify-between bg-black/30">
          <h1 className="sm-leading-3 relative mt-36 text-2xl font-black uppercase text-zenseWhite sm:py-12 sm:text-4xl md:text-5xl lg:relative lg:py-6 lg:text-left lg:text-[4.33rem] lg:font-black lg:uppercase lg:leading-9 lg:text-zenseWhite xl:text-[4.66rem] 2xl:text-[7.166rem]">
            design interiore
          </h1>
          <h1 className="relative py-3 text-5xl font-black uppercase leading-3 text-lime-200 sm:mt-2 sm:text-8xl md:-mt-[6vh] md:text-9xl lg:-mt-3 lg:text-[7.33rem] lg:font-black lg:leading-3 xl:text-[11.33rem]">
            8zenSe.com
          </h1>
          <p className="relative px-3 py-2 text-center text-[1.33rem] leading-3 leading-5 text-zenseWhite sm:text-4xl lg:text-left lg:text-4xl lg:font-black">
            Timeless Design rund um den Werkstoff Beton
          </p>
          <div className="sd:h-72 relative top-8 mx-auto h-60 w-60 sm:w-72 sm:py-12 md:h-80 md:w-80">
            <Animation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
