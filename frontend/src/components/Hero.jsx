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
      className="relative w-full min-h-[92svh] flex items-center justify-center px-6 pt-20 pb-10"
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
          className="my-8"
        >
          <Ornament className="w-36 h-8 mx-auto opacity-80" />
        </motion.div>

        {/* Couple illustration (transparent PNG, full-body portrait) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-5 flex justify-center"
          data-testid="couple-illustration"
        >
          <div
            className="absolute left-1/2 top-1/2 w-[min(100%,220px)] h-[min(200px,30vh)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 50% 65%, rgba(197,160,89,0.18), transparent 72%)",
              filter: "blur(18px)",
            }}
            aria-hidden
          />
          <motion.img
            src="/assets/couple.png"
            alt="Hanna and Niyas illustration"
            className="relative z-[1] h-[clamp(128px,26vh,200px)] sm:h-[clamp(150px,30vh,230px)] w-auto max-w-[min(92vw,220px)] object-contain object-bottom select-none opacity-[0.94] drop-shadow-[0_4px_20px_rgba(57,20,30,0.12)]"
            draggable="false"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.45 }}
          className="font-serif-el italic uppercase tracking-[0.3em] text-sm sm:text-base text-[#A88842]"
        >
          Together with our families
        </motion.p>

        <motion.h1
          {...fade}
          transition={{ ...fade.transition, delay: 0.6 }}
          className="font-names text-[#7A1B28] text-[48px] sm:text-[64px] lg:text-[76px] leading-[0.86] mt-8 sm:mt-10"
          data-testid="hero-couple-names"
        >
          <span className="block">Hanna</span>
          <span className="block font-serif-el italic text-[#A88842] text-xl sm:text-2xl my-1 leading-none">
            &amp;
          </span>
          <span className="block">Niyas</span>
        </motion.h1>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.75 }}
          className="font-serif-el italic text-[#4A4A4A] text-base sm:text-lg mt-6"
        >
          we invite you to celebrate our wedding
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.85 }}
          className="mt-8"
        >
          <p className="font-serif-el text-[#7A1B28] text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em]">
            10 <span className="text-[#C5A059]">·</span> 05 <span className="text-[#C5A059]">·</span> 2026
          </p>
          <p className="font-serif-el italic tracking-[0.4em] text-[11px] uppercase text-[#A88842] mt-3">
            Sunday
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.95 }}
          className="mt-8"
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
