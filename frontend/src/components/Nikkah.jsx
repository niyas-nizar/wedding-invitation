import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Ornament, CrescentStar } from "./Ornaments";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const NIKKAH = {
  date: "Sunday, 10 May 2026",
  time: "Nikkah at 12:00 Noon",
  venue: "Century Staples Convention Centre",
  city: "Erattupetta",
  maps: "https://maps.google.com/?q=Century+Staples+Convention+Centre+Erattupetta",
  cal:
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    "&text=Nikkah%20%E2%80%94%20Hanna%20%26%20Niyas" +
    "&dates=20260510T063000Z/20260510T083000Z" +
    "&details=Nikkah%20ceremony%20of%20Hanna%20Hashim%20%26%20Mohamed%20Niyas" +
    "&location=Century%20Staples%20Convention%20Centre%2C%20Erattupetta",
};

export default function Nikkah() {
  return (
    <section
      id="nikkah"
      className="relative paper-grain w-full py-24 sm:py-32 px-6"
      data-testid="nikkah-section"
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.div {...fade} className="flex justify-center mb-6">
          <CrescentStar className="w-8 h-8" />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="font-serif-el uppercase tracking-[0.4em] text-[11px] text-[#A88842]"
        >
          The Nikkah Ceremony
        </motion.p>

        <motion.h2
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          className="font-script text-[#7A1B28] text-5xl sm:text-6xl mt-4"
          data-testid="nikkah-title"
        >
          In Sha Allah
        </motion.h2>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.3 }}
          className="my-10"
        >
          <Ornament className="w-32 h-8 mx-auto opacity-80" />
        </motion.div>

        {/* Families — bride side for Nikkah card */}
        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.35 }}
          className="space-y-2"
        >
          <p className="font-serif-el text-[#2C2A29] text-xl sm:text-2xl tracking-wide">
            Hashim P. S. &amp; Shinu Hashim
          </p>
          <p className="font-sans-el text-[#4A4A4A] text-xs tracking-[0.15em]">
            Pazhayampallil House, Nadackal, Erattupetta
          </p>
          <p className="font-serif-el italic text-[#4A4A4A] text-sm mt-3">
            cordially invite your presence with family on the auspicious
            occasion of the marriage of their beloved daughter
          </p>
          <p className="font-sans-el text-[11px] text-[#888] tracking-wide italic">
            (Granddaughter of Late V. M. Sayed Mohamed &amp; Late M. K.
            Kochupathumma and Late K. A. Muhammed &amp; Suhura V. M.)
          </p>
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.45 }}
          className="font-script text-[#7A1B28] text-5xl sm:text-6xl mt-8"
        >
          Hanna Hashim
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.55 }}
          className="font-serif-el tracking-[0.4em] uppercase text-xs text-[#C5A059] my-3"
        >
          with
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.6 }}
          className="font-script text-[#7A1B28] text-5xl sm:text-6xl"
        >
          Mohamed Niyas
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.65 }}
          className="space-y-1 mt-4"
        >
          <p className="font-serif-el text-[#2C2A29] text-sm sm:text-base tracking-wide">
            S/o. Mr. Nizar Mohammed &amp; Mrs. Najuma Nizar
          </p>
          <p className="font-sans-el text-[#4A4A4A] text-xs tracking-[0.15em]">
            New Road, Mattanchery
          </p>
          <p className="font-sans-el text-[11px] text-[#888] tracking-wide italic">
            (Grandson of Late Mohammed Ayoob Sait &amp; Amina Bai and Late
            Younus Sait &amp; Late Subaida Bai)
          </p>
        </motion.div>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.75 }}
          className="mt-14 border border-[rgba(197,160,89,0.4)] px-6 sm:px-10 py-10 bg-white/40 backdrop-blur-[2px]"
        >
          <p className="font-serif-el tracking-[0.35em] uppercase text-[11px] text-[#A88842]">
            Save the Date
          </p>
          <p
            className="font-serif-el text-[#2C2A29] text-2xl sm:text-3xl mt-4"
            data-testid="nikkah-date"
          >
            {NIKKAH.date}
          </p>
          <div className="gold-divider gold-divider-solid my-4">
            <span className="font-script text-2xl text-[#C5A059]">◆</span>
          </div>
          <p
            className="font-serif-el text-[#7A1B28] text-xl sm:text-2xl"
            data-testid="nikkah-time"
          >
            {NIKKAH.time}
          </p>
          <p
            className="font-sans-el text-[#4A4A4A] text-sm mt-4 tracking-wide"
            data-testid="nikkah-venue"
          >
            {NIKKAH.venue}
            <br />
            <span className="text-[#888] text-xs tracking-[0.2em] uppercase">
              {NIKKAH.city}
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              href={NIKKAH.maps}
              target="_blank"
              rel="noreferrer"
              className="btn-el"
              data-testid="nikkah-maps-btn"
            >
              <MapPin size={14} strokeWidth={1.4} /> View Map
            </a>
            <a
              href={NIKKAH.cal}
              target="_blank"
              rel="noreferrer"
              className="btn-el"
              data-testid="nikkah-calendar-btn"
            >
              <Calendar size={14} strokeWidth={1.4} /> Add to Calendar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
