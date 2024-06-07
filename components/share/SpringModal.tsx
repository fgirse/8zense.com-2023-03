"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import Carousel from "@/components/share/Carousel";

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="grid place-content-center bg-transparent px-4 py-12">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-gradient-to-b from-zenseSignal2 to-zenseSignal2/50 px-4 py-2 text-3xl font-medium text-white transition-opacity hover:opacity-90"
      >
        Open Projekte
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
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/50 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-slate-900 to-grey-600 p-6 text-white shadow-xl"
          >
            <FiAlertCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
            <div className="relative z-10">
              <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-zenseSignal2">
                <FiAlertCircle />
              </div>
              <h3 className="mb-2 text-center text-3xl font-bold">
                Projekt Sao Paulo!
              </h3>
              <p className="mb-6 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <Carousel />
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded bg-white/10 py-2 font-semibold text-white transition-colors hover:bg-white/40"
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
