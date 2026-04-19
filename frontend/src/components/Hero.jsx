import React from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import { Ornament } from "./Ornaments";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

export default function Hero() {
  return (
    <section
      className="paper-grain relative w-full min-h-[100svh] flex items-center justify-center px-6 py-20"
      data-testid="hero-section"
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        <motion.p
          {...fade}
          className="font-arabic text-[#7A1B28] text-3xl sm:text-4xl leading-loose"
          data-testid="hero-bismillah"
        >
          بسم الله الرحمن الرحيم
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="font-serif-el uppercase tracking-[0.35em] text-[11px] text-[#A88842] mt-4"
        >
          In the name of Allah, the Most Beneficent, the Most Merciful
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
          transition={{ ...fade.transition, delay: 0.3 }}
          className="font-serif-el uppercase tracking-[0.3em] text-xs text-[#4A4A4A]"
        >
          Together with their families
        </motion.p>

        <motion.h1
          {...fade}
          transition={{ ...fade.transition, delay: 0.45 }}
          className="font-script text-[#7A1B28] text-[68px] sm:text-[88px] lg:text-[112px] leading-[0.95] mt-4"
          data-testid="hero-couple-names"
        >
          Hanna
          <span className="block font-serif-el text-[#C5A059] tracking-[0.35em] text-xs sm:text-sm uppercase my-2">
            &mdash; & &mdash;
          </span>
          Niyas
        </motion.h1>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.6 }}
          className="font-serif-el text-[#4A4A4A] text-lg sm:text-xl italic mt-6"
        >
          invite you to celebrate their Nikkah
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.7 }}
          className="gold-divider my-10"
        >
          <span className="font-serif-el tracking-[0.4em] text-[10px] uppercase">
            Sunday &middot; 10 May 2026
          </span>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.8 }}
        >
          <Countdown />
        </motion.div>

        <motion.a
          {...fade}
          transition={{ ...fade.transition, delay: 0.9 }}
          href="#nikkah"
          className="inline-block mt-14 font-serif-el tracking-[0.35em] text-[10px] uppercase text-[#A88842]"
          data-testid="scroll-indicator"
        >
          Scroll to details ↓
        </motion.a>
      </div>
    </section>
  );
}
