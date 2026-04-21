import React from "react";
import { motion } from "framer-motion";
import { Ornament } from "./Ornaments";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

export default function Footer() {
  return (
    <footer
      className="relative w-full py-24 px-6 text-center"
      data-testid="footer-section"
    >
      <div className="max-w-xl mx-auto relative z-10">
        <motion.div {...fade} className="mb-6">
          <Ornament className="w-28 h-8 mx-auto opacity-80" />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="font-serif-el italic text-[#4A4A4A] text-base sm:text-lg leading-relaxed"
        >
          Your presence and blessings
          <br />
          would make our day complete.
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.25 }}
          className="font-serif-el italic text-[#A88842] tracking-[0.15em] text-sm mt-10"
        >
          with love,
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.35 }}
          className="font-script text-[#7A1B28] text-5xl sm:text-6xl mt-2"
        >
          Hanna
          <span className="font-serif-el italic text-[#A88842] text-xl tracking-[0.08em] mx-4">
            and
          </span>
          Niyas
        </motion.p>
      </div>
    </footer>
  );
}
