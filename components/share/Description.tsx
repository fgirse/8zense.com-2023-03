import React from "react";
import { images } from "@/constants/constants";
import left from "@/public/assets/images/left.svg";
import right from "@/public/assets/images/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="relative grid w-full place-items-start bg-[#e7dfd9] md:rounded-br-3xl md:rounded-tr-3xl">
      <div className="absolute right-4 top-2 text-sm uppercase underline underline-offset-4">
        Testimonials
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "py-12md:px-20 block h-full w-full px-10 text-left md:h-[33vh]"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="flex-1"
          >
            <div className="py-7 text-5xl font-extrabold">{elem.title}</div>
            <div className="py-3 text-2xl font-extrabold">{elem.subtitle}</div>
            <div className="h-60 text-base font-medium italic leading-relaxed tracking-wide text-gray-600 md:h-40">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <button className="my-10 rounded-md bg-[#ecae7e] px-4 py-2 uppercase text-white">
            order now
          </button>
          <div className="absolute bottom-10 right-10 flex w-full items-center justify-center md:bottom-1 md:right-0">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
