import React from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import { Ornament } from "./Ornaments";

const fade = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
};

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] flex items-center justify-center px-6 py-24"
      data-testid="hero-section"
    >
      <div className="max-w-2xl w-full mx-auto text-center relative z-10">
        <motion.p
          {...fade}
          className="font-arabic text-[#7A1B28] text-3xl sm:text-4xl leading-loose"
          data-testid="hero-bismillah"
        >
          بسم الله الرحمن الرحيم
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          className="my-10"
        >
          <Ornament className="w-36 h-8 mx-auto opacity-80" />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.25 }}
          className="font-serif-el italic uppercase tracking-[0.35em] text-[11px] text-[#A88842]"
        >
          Together with our families
        </motion.p>

        <motion.h1
          {...fade}
          transition={{ ...fade.transition, delay: 0.4 }}
          className="font-script text-[#7A1B28] text-[56px] sm:text-[80px] lg:text-[100px] leading-[1.05] mt-6 tracking-[0.04em]"
          data-testid="hero-couple-names"
        >
          Hanna
          <span className="block font-serif-el italic text-[#A88842] tracking-[0.12em] text-lg sm:text-xl normal-case my-4">
            and
          </span>
          Niyas
        </motion.h1>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.55 }}
          className="font-serif-el italic text-[#4A4A4A] text-base sm:text-lg mt-8"
        >
          we invite you to celebrate our wedding
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.7 }}
          className="gold-divider my-10"
        >
          <span className="font-serif-el tracking-[0.4em] text-[10px] uppercase">
            10 · 05 · 2026
          </span>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.85 }}
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
