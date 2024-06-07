import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function ModernCarousel() {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const imageIndex = Math.abs(idx % images.length);

  return (
    <div className="relative h-[50vw] max-h-[600px] min-h-[400px] overflow-hidden bg-black">
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className="absolute bottom-0 left-0 top-0 z-10 bg-black/50 p-2 text-white transition-colors hover:bg-black/60"
      >
        <FiChevronLeft />
      </button>

      <div className="absolute inset-0 z-[5] backdrop-blur-xl">
        <AnimatePresence initial={false} custom={trend}>
          <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[imageIndex].id}
            src={images[imageIndex].src}
            alt={images[imageIndex].title}
            style={{ y: "-50%", x: "-50%" }}
            className="absolute left-1/2 top-1/2 mx-auto aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] bg-black object-cover shadow-2xl"
          />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className="absolute bottom-0 right-0 top-0 z-10 bg-black/50 p-2 text-white transition-colors hover:bg-black/60"
      >
        <FiChevronRight />
      </button>

      <AnimatePresence initial={false} custom={trend}>
        <motion.span
          custom={trend}
          variants={titleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={images[imageIndex].id}
          className="absolute bottom-4 left-10 z-20 rounded-lg bg-white/10 p-2 text-xl font-semibold text-white shadow-lg backdrop-blur-lg md:text-2xl"
        >
          {images[imageIndex].title}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence initial={false}>
        <motion.div
          key={images[imageIndex].id + images.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-0 object-fill"
          style={{
            backgroundImage: `url(${images[imageIndex].src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </AnimatePresence>
    </div>
  );
}

const imgVariants = {
  initial: (trend: 1 | 0) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend: 1 | 0) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend: 1 | 0) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend: 1 | 0) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};

const images = [
  {
    src: "/assets/images/projekt10.jpg",
    title: "A Title",
    id: 1,
  },
  {
    src: "/assets/images/projekt11.jpg",
    title: "Another Title",
    id: 2,
  },
  {
    src: "/assets/images/projekt12.jpg",
    title: "And Another",
    id: 3,
  },
  {
    src: "/assets/images/projekt14.jpg",
    title: "Another Title",
    id: 4,
  },
  {
    src: "/assets/images/projekt16.jpg",
    title: "Another Title",
    id: 5,
  },
  {
    src: "/assets/images/projekt30.jpg",
    title: "Another Title",
    id: 6,
  },
  {
    src: "/assets/images/projekt40.jpg",
    title: "Another Title",
    id: 7,
  },
];
