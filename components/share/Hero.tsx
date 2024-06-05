import React from 'react'
import Image from 'next/image'
import Animation from "@/components/share/Lotticreator";
import styles from "@/components/share//Hero.module.css"  

const Hero = () => {
  return (
    <section id="section-Hero" className="">
    <div  className="relative w-full  h-screen "  >
      <Image
        alt="Hero"
        src="/assets/images/interiore14.jpg"
        fill
        sizes="100vw"
      
      />
    <div className=" bg-black/30   flex flex-col justify-between items-center">
      <h1 className="relative text-2xl top-2 text-zenseWhite font-black  uppercase sm:text-4xl sm:py-12 sm-leading-3  lg:py-6 lg:relative lg:text-zenseWhite lg:text-[4.33rem] lg:leading-9 lg:font-black  lg:uppercase lg:text-left xl:text-[4.66rem] 2xl:text-[7.166rem]">
        design interiore
      </h1>
      <h1 className="relative -top-3 font-black leading-3 text-5xl text-lime-200 uppercase sm:text-8xl sm:mt-2 md:text-8xl>0><sht lg:-mt-3 lg:text-[7.33rem] lg:font-black xl:text-[11.33rem] lg:leading-3">
        8zenSe.com
      </h1>
      <p className="relative  px-3 text-zenseWhite text-center text-[1rem] leading-0 sm:text-4xl lg:text-4xl lg:font-black lg:text-left">
        Timeless Design rund um den Werkstoff Beton
      </p>
      <div className='mx-auto relative top-8  w-60 h-60 sm:py-12 sd:h-72 sm:w-72  md:w-80 md:h-80'>
      <Animation />
    </div>
    </div>
    </div>
  </section>
  )
}

export default Hero