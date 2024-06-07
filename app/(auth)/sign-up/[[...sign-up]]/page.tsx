import { SignUp } from "@clerk/nextjs";
import { IncomingMessage } from "http";
import Image from "next/image";
import React from "react";
import Locked from "../../../../public/assets/images/locked.png";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-12">
        <Image src={Locked} alt="Illustration Schloss" />
        <h1 className="text-center text-2xl text-slate-100 md:text-3xl lg:text-5xl">
          Hier erfolgt Ihre Anmeldung/ Registrierung...
        </h1>

        <SignUp />
      </div>
    </>
  );
}
