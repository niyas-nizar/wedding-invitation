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
      className="paper-grain w-full py-24 px-6 text-center"
      data-testid="footer-section"
    >
      <div className="max-w-xl mx-auto">
        <motion.div {...fade} className="mb-6">
          <Ornament className="w-28 h-8 mx-auto opacity-80" />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="font-serif-el italic text-[#4A4A4A] text-base sm:text-lg leading-relaxed"
        >
          Your blessings and presence
          <br />
          would make our day complete.
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          className="font-script text-[#7A1B28] text-4xl sm:text-5xl mt-8"
        >
          With love,
          <br />
          Hanna &amp; Niyas
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.3 }}
          className="mt-10 space-y-2"
        >
          <p className="font-serif-el tracking-[0.3em] uppercase text-[10px] text-[#A88842]">
            Sharing the happiness
          </p>
          <p className="font-sans-el text-[#4A4A4A] text-xs tracking-wide">
            Nihal · Haya · Haifa · Nijas &amp; Jumana · Nooh · Nasim &amp;
            Nazia · Ebrahim · Hajira · Zainab
          </p>
          <p className="font-sans-el text-[#888] text-xs mt-4">
            Ph: 9447421033 &nbsp;·&nbsp; 9895538868 &nbsp;·&nbsp; 9447163540
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.45 }}
          className="gold-divider my-10"
        >
          <span className="font-script text-xl text-[#C5A059]">◆</span>
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.55 }}
          className="font-arabic text-[#7A1B28] text-xl"
        >
          جزاكم الله خيرا
        </motion.p>
      </div>
    </footer>
  );
}
