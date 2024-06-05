"use client";

import classes from "./kontakt.module.css";
import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/images/LogoEZ990.svg";
import Phone from "@/components/Illustrationen/phone";
import Email from "@/components/Illustrationen/email";
import QRCode from "@/public/assets/images/QRCode2.png";
import { Separator } from "@/components/ui/separator";
const Contact = () => {
  return (
    <>
    <main className={classes.main}>
      <section className=" min-h-screen">
        <h1 className="mt-2 bg-zenseGrey w-full mx-auto text-center uppercase font-black text-xl text-zenseWhite">
          contact
        </h1>
        <div className="{classes.section} flex flex-col items-center bg-zenserSignal">
          <div className="{styles.image-container} py-8 w-full flex flex-col items-center">
            <Image
              src={Logo}
              alt="Logo 8zense"
              sizes="100vw"
              className=""
              style={{ width: "40%", height: "auto" }}
            />
          </div>
          <div className="text-zenseCreme text-center text-xl">
            <Separator></Separator>
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-2 md:first-letter:gap-2 items-centers">
            <div className="row-span-2">
              <h1 className="mt-20 text-center text-2xl font-semibold text-zenseCreme md:mt-52">
                MarÃ­a Fernanda Pereira Campos
              </h1>
              <h1 className="text-center text-2xl font-extralight text-zenseCreme">
                Architecte et Designer Interieur{" "}
              </h1>
              <h1 className="text-center text-2xl font-extralight text-zenseCreme">
                3 Rue de Blotzheim
              </h1>
              <h1 className="text-center text-2xl font-normal text-zenseCreme">
                F-68128-Village-Neuf{" "}
              </h1>
              <div className="flex flex-row items-center justify-evenly gap-x-2">
            <Phone className={classes.phone}/>
                <h1 className="text-2xl font-normal text-zenseCreme">
                  {" "}
                  +33 (0) 671463942
                </h1>
              </div>
              <div className=" flex flex-row items-baseline justify-evenly gap-x-2">
                <Email className={classes.emailIcon}/>
                <h1 className="text-2xl text-zenseCreme font-normal">
                  mf.pereira@8zense.com
                </h1>
              </div>
            </div>
            <div className="row-span-2">
              <div className="mt-12 flex flex-col items-center">
                <Image
                  src="/assets/images/QRCode2.svg"
                  alt="QRCOde"
                  height={233}
                  width={233}
                />
                <p className=" text-zenseCreme">8zense.com</p>
              </div>
            </div>
          </div>
        </div>
        <Separator style={{ position: "relative", top: 50 }}></Separator>
      </section>
    </main>
    </>                                                                      
  );
};

export default Contact;
