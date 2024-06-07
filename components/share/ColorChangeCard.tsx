"use client";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ColorChangeCards = () => {
  return (
    <div className="bg-slate-100 p-4 md:p-8">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2">
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="assets/images/interiore11.jpg"
        />
        <Card
          heading="Projekt"
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          }
          imgSrc="assets/images/interiore13.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem.jpg"
          imgSrc="/assets/images/interiore14.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/assets/images/interiore16.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/assets/images/interiore17.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/assets/images/interiore20.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/assets/images/interiore21.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/assets/images/interiore27.jpg"
        />
        <Card
          heading="Projekt"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, exercitationem."
          imgSrc="/assets/images/interiore30.jpg"
        />
      </div>
    </div>
  );
};

const Card = ({
  heading,
  description,
  imgSrc,
}: {
  heading: string;
  description: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="group relative h-64 w-full cursor-pointer overflow-hidden bg-zenseGrey text-white"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-20 flex h-full flex-col justify-between p-4 text-slate-300 transition-colors duration-500 group-hover:text-white">
        <FiArrowRight className="ml-auto text-3xl transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }: { letter: string }) => {
  return (
    <div className="inline-block h-[36px] overflow-hidden text-3xl font-semibold">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default ColorChangeCards;

const items = [
  {
    id: 1,
    title: "Concrete Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "assets/images/matthew-moloney-f8JVGPcTmYg-unsplash.jpg",
  },
  {
    id: 2,
    title: "Beistelltisch Beton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "assets/images/stories-AhhZor-1G1M-unsplash.jpg",
  },
  {
    id: 3,
    title: "Sideboard Beton ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    img: "assets/images/cocarinne-qMI4XmgTST8-unsplash.jpg",
  },
  {
    id: 4,
    title: "BETON-KERZENGEFÄSS",
    description: "Betonkerze",
    img: "/assets/images/stephanie-harvey-OKEmv8AKLLY-unsplash.jpg",
  },
];
