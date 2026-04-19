import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Envelope({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => onOpen && onOpen(), 1400);
  };

  return (
    <AnimatePresence>
      {!opening || opening ? (
        <motion.div
          className="envelope-wrap"
          initial={{ opacity: 1 }}
          animate={opening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.9, delay: opening ? 0.6 : 0 }}
          data-testid="envelope-overlay"
        >
          <motion.div
            className="env-card"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Back content — revealed only as flap begins to open */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              initial={{ opacity: 0 }}
              animate={opening ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: opening ? 0.5 : 0 }}
            >
              <p className="font-arabic text-2xl text-[#7A1B28] mb-4">
                بسم الله الرحمن الرحيم
              </p>
              <p className="font-script text-[#7A1B28] text-5xl leading-none">
                Hanna
              </p>
              <p className="font-serif-el text-xs tracking-[0.35em] uppercase text-[#C5A059] my-2">
                &mdash; & &mdash;
              </p>
              <p className="font-script text-[#7A1B28] text-5xl leading-none">
                Niyas
              </p>
              <p className="font-serif-el text-[#4A4A4A] text-xs tracking-[0.3em] uppercase mt-6">
                10 · 05 · 2026
              </p>
            </motion.div>

            {/* Bottom pocket (covers bottom half of card, closed envelope look) */}
            <div
              className="absolute left-0 right-0 bottom-0 h-[45%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, #FAF9F6 0%, #F4F1EA 100%)",
                borderTop: "1px solid rgba(197,160,89,0.35)",
              }}
            />

            {/* Flap */}
            <motion.div
              className="env-flap"
              initial={{ rotateX: 0 }}
              animate={opening ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            />

            {/* Seal */}
            <motion.button
              onClick={handleOpen}
              className="env-seal float-slow"
              aria-label="Open invitation"
              data-testid="open-invitation-btn"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              animate={opening ? { opacity: 0, scale: 0.7 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span style={{ fontSize: 30, lineHeight: 1 }}>H&amp;N</span>
            </motion.button>
          </motion.div>

          {/* Tap hint */}
          <motion.p
            className="absolute bottom-14 left-0 right-0 text-center font-serif-el tracking-[0.4em] uppercase text-[#7A1B28] text-[10px]"
            animate={opening ? { opacity: 0 } : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            Tap the seal to open
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
