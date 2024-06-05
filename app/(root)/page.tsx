import Image from "next/image";
import Hero from "@/components/share/Hero";
import HeroImage from "@/public/assets/images/interiore14.jpg";

import { getListPage } from "@/lib/contentParser";

import link from "next/link";

import { ClientAnimationWrapper } from "@/components/share/ClientAnimationWrapper";

import LogoEZ from "@/public/assets/images/Logo990.svg";

//import Diagramm from "@/public/assets/images/diagramm.svg";

//import { any, array } from "zod";

//import dataSlider from "@/constants/sliderData.json";

//import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

//import SlightShow2 from "@/components/share/SlightShow2";

import styles from "./styles.module.css";

//import HorizontalSrollCarousel from "@/components/share/HorizontalScrollCarousel";

//import { StaggerTestimonials } from "@/components/share/Testimonial";

//import ColCardFeature from "@/components/share/CollapsCardFeature";

//import { VanishText } from "@/components/share/VanishText";

//import Space from "@/public/assets/images/space.png";

//import ColorChangeCards from "@/components/share/ColorChangeCard";

//import FeatureAnimation from "@/components/share/FeatureAnimated";

//import LottiAnimation from "@/components/share/LottiAnimation";

import IlluTestimonial from "@/public/assets/images/illustration.png";

//import Image from "next/image";

//import Skizze from "@/public/assets/images/skizze.png";

//import Button from "@/components/share/Button";

import Animation from "@/components/share/Lotticreator";

//import Animation2 from "@/components/share/Lottiwalking";

//import Email from "@/components/share/contact-us";

//import EmailModal from "@/components/share/EmailModal";
import IntroWebside from "@/components/share/IntroWebside";

export default function Home() {
  return (
    <>
      {/*====================================================grid start ===============*/}

      <section className={styles.section}>
                <div className=" top-5vh">
        
            <Hero/>
        </div> 
        <section className="">
            <IntroWebside/>

        </section>                                                                      
      </section>
    </>
  );
}
