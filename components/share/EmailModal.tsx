"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import ContactUsForm from "@/app/emails/ContactusForm";
import Image from "next/image";
import Logo from "@/public/assets/images/LogoEZ990.svg";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-amber-600-50 mb-12 grid place-content-center px-5 py-3">
      <button
        onClick={() => setIsOpen(true)}
        className="hovr:shadow-lg mb-12 rounded bg-gradient-to-b from-zenseSignal2 to-yellow-600 px-4 py-2 text-4xl font-medium text-white shadow-sm shadow-black transition-opacity hover:opacity-90"
      >
        sende e-mail Nachricht
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/30 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="from-slade-500 relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br to-neutral-600 p-6 text-white shadow-xl"
          >
            {/*<FiAlertCircle className="text-white/ rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />*/}
            <div className="relative z-10">
              <div className="mx-auto grid h-52 w-52 place-items-center rounded-xl bg-slate-600 text-3xl text-indigo-600">
                <Image src={Logo} sizes="100vw " alt="Logo" />
              </div>
              <h3 className="mb-5 mt-3 py-3 text-center text-4xl font-bold text-slate-500">
                Send email to 8zense.com
              </h3>

              <ContactUsForm />
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-3 w-36 rounded bg-zenseSignal2 py-2 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  zurück
                </button>
                {/*<button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
      </button>*/}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
