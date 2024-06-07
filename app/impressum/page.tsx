import Image from "next/image";
import LogoEZ from "../../public/assets/images/LogoEZ3.svg";
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo01 from "@/public/assets/images/LogoEZ990.svg";
import Portrait from "@/public/assets/images/CorInterno1.jpg";
import ArchGrafik from "@/public/assets/images/grafik70.png";
import "./impressum.module.css";
import Tools from "@/components/Illustrationen/Tools";
import Hook from "@/components/Illustrationen/Hackchen";
import Arrow from "@/public/assets/images/arrow05.svg";
import { transform } from "next/dist/build/swc";
import Signature from "@/public/assets/images/arrow02.png";
import styles from "./impressum.module.css";
import Projekt from "@/public/assets/images/Hotel-SaoPaulo.png";
import Button from "@/components/share/Button";
import SpringModal from "@/components/share/SpringModal";
import Portrait01 from "@/public/assets/images/Portrait01.jpeg";

const page = () => {
  return (
    <>
      <main>
        <section className="mx-auto min-h-screen w-[100vw] bg-zenseGrey">
          <div className="container flex flex-col items-center justify-center">
            <h1 className="w-full bg-slate-900 p-1 py-1 text-center text-xs font-bold uppercase text-white md:text-sm lg:text-xl">
              Impressum
            </h1>

            <div className="relative h-28 w-28">
              <Image src={Logo01} alt="Logo 8zense" sizes="100vw" fill />
            </div>

            {/*<h1 className='text-3xl font-bold text-zenseGrey md:mt-72'>8zense.com</h1>*/}

            <div className="relative mt-3 h-44 w-44 md:h-96 md:w-96">
              <Image
                src={Portrait01}
                alt="Portrait"
                sizes="100vw"
                className="rounded-full"
                fill
              />
            </div>

            <div className="lg:w-20vw relative h-60 w-full translate-y-10 scale-110 transform lg:text-6xl">
              <Image src={Arrow} fill sizes="100vw" alt="pfeil" />
            </div>

            <section className="mt-32"></section>

            <section className=""></section>
            <section className=""></section>
            <h1 className="mb-4 mt-24 w-full bg-slate-900 p-1 text-center text-xs font-bold text-white md:text-sm lg:py-5">
              über Fernanda
            </h1>

            <h1 className="text-2-xl mt-5 rounded-xl bg-slate-800 px-3 py-2 text-center text-white">
              betrachten Sie Referenzprojekte von Fernanda Pereira
            </h1>
            <div className="mx-auto">
              <SpringModal />
            </div>

            <h1 className="lg:text-[2.33rem]font-bold mb-7 mt-5 bg-neutral-500 px-2 py-3 text-left text-[2.45rem] uppercase leading-5 text-white sm:text-[1.36rem] md:text-7xl md:text-[1.92rem] lg:leading-9">
              Curriculum
            </h1>
            <h1 className="lg:text-[2.33rem mb-7 mt-5 px-2 py-3 text-center text-[1.145rem] font-bold uppercase leading-5 text-zenseGrey sm:text-[1.36rem] md:text-7xl md:text-[1.92rem] lg:leading-9">
              M. Fernanda Pereira
              <br /> PhD Architectura+Design interiore
            </h1>

            <div className="grid h-1/3 w-[100vw] grid-cols-[5vw_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] items-stretch gap-0 bg-zenseGrey/30">
              <div className="col-span-4 col-start-7 row-span-6 row-start-1 bg-grey-500"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default page;
