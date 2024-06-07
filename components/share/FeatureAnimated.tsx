"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";

interface Step {
  id: number;
  text: string;
  animation: string;
}
const HowItWorks: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: 1,
      text: "Erstellen Sie einen Account auf unserer Website  von 8zense.com!",
      animation:
        "https://lottie.host/d7cbbe0f-2e7c-4b4c-993e-249e072151bd/0Qz7Pnm5TN.json",
    },
    {
      id: 2,
      text: "Vereinbaren Sie ein Zielgespräch mit Fernanda zur Definition Ihrer Wünsche, Vorstellungen und Ideen!",
      animation:
        "https://lottie.host/57443a3d-e280-4f39-9134-86d96cd8f28f/ohtp2XVGjS.json",
    },
    {
      id: 3,
      text: "Dank unsers ausgezeichnetes Networking finden wir für Sie genau das Team dass unter der Leitung von Fernanda ihren Designtraum erfüllt.",
      animation:
        "https://lottie.host/78373cd4-e991-482b-8f25-e897acb9bbb8/V0IaYYRt3A.json",
    },
    {
      id: 4,
      text: "Das Projekt wird in viele Einzelprojekte herunter gebrochen - nach und nach fügt sich Ihr Design-Traum wie ein Puzzel zu etwas aussergewöhlichen wundervollem zusammnen",
      animation:
        "https://assets3.lottiefiles.com/private_files/lf30_p9it5a2a.json",
    },
    {
      id: 5,
      text: "In allen Phasen des Projektes wird in einem Analyze-Evaluate-Synthesyze-Circuit kontenuierlich fortentwickelt, bis Ihre Ziele und Vorgaben erreicht sind!",
      animation:
        "https://lottie.host/d969d744-bf03-4aa4-90ac-50f9c5dda9b5/P36NGczhaX.json",
    },

    {
      id: 6,
      text: "Ist Ihr Design-Projekt dann umgesetzt, erfolgt der Startpfiff zur Abnahme des Projektes durch Fernanda mit allen Beteiligten gemeinsam bis alle Korrekturen und Beanstandungen aus dem Weg geräumt sind.",
      animation:
        "https://lottie.host/59703381-ed25-463c-913f-7cd163db2aa7/uF1vDxwgIZ.json",
    },
  ];

  const handleStepChange = useCallback(() => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
  }, [steps.length]);

  useEffect(() => {
    const interval = setInterval(handleStepChange, 7000);
    return () => clearInterval(interval);
  }, [handleStepChange]);

  return (
    <motion.div
      className="flex h-full flex-col sm:min-h-screen"
      key={steps[step].id} // Add a unique key to trigger motion animation on step change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        duration: 1, // Adjust the duration as desired
      }}
    >
      <div className="ss:p-10 flex h-[100%] flex-col items-center justify-center p-5">
        <div className="grid0-cols-2 grid gap-4">
          <p className="mt-2 text-center text-sm font-light leading-relaxed text-slate-800 md:text-base">
            HOW IT WORKS
          </p>
          <h2 className="mb-4 text-center text-3xl font-semibold text-[#1A2238] md:text-4xl">
            {`so funktioniert 8zense.com`}
          </h2>
          <Player
            autoplay
            loop
            src={steps[step].animation}
            style={{ height: "40vh", width: "100%" }}
          />
        </div>
        <p className="relative mb-4 h-24 w-96 bg-[url('/assets/images/brushOrange.svg')] bg-cover text-center text-xl font-light text-slate-900">
          {steps[step].text}
        </p>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
