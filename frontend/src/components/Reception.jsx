import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { CornerVine, Ornament } from "./Ornaments";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const RECEPTION = {
  date: "Monday, 11 May 2026",
  time: "From 7:00 p.m. onwards",
  venue: "Nehru Memorial Town Hall",
  city: "Mattanchery",
  maps: "https://maps.google.com/?q=Nehru+Memorial+Town+Hall+Mattanchery",
  cal:
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    "&text=Reception%20%E2%80%94%20Hanna%20%26%20Niyas" +
    "&dates=20260511T133000Z/20260511T170000Z" +
    "&details=Wedding%20reception%20of%20Hanna%20Hashim%20%26%20Mohamed%20Niyas" +
    "&location=Nehru%20Memorial%20Town%20Hall%2C%20Mattanchery",
};

export default function Reception() {
  return (
    <section
      id="reception"
      className="relative maroon-velvet w-full py-24 sm:py-32 px-6 text-[#FDFBF7] overflow-hidden"
      data-testid="reception-section"
    >
      {/* Corner vines */}
      <CornerVine
        className="absolute top-6 left-6 w-14 h-14 opacity-80"
        color="#E6C06A"
      />
      <CornerVine
        className="absolute top-6 right-6 w-14 h-14 opacity-80 [transform:scaleX(-1)]"
        color="#E6C06A"
      />
      <CornerVine
        className="absolute bottom-6 left-6 w-14 h-14 opacity-80 [transform:scaleY(-1)]"
        color="#E6C06A"
      />
      <CornerVine
        className="absolute bottom-6 right-6 w-14 h-14 opacity-80 [transform:scale(-1,-1)]"
        color="#E6C06A"
      />

      <div className="max-w-xl mx-auto text-center relative">
        <motion.p
          {...fade}
          className="font-arabic text-[#F0D78C] text-2xl sm:text-3xl"
        >
          السلام عليكم
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.1 }}
          className="font-serif-el uppercase tracking-[0.4em] text-[11px] text-[#E6C06A] mt-4"
        >
          The Reception
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.2 }}
          className="my-8"
        >
          <Ornament className="w-32 h-8 mx-auto opacity-90" color="#E6C06A" />
        </motion.div>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.3 }}
          className="font-serif-el italic text-[#F6E8C6] text-base sm:text-lg leading-relaxed"
        >
          Nizar Mohammed &amp; Najuma Nizar
          <br />
          <span className="text-xs tracking-[0.25em] text-[#D8C487] not-italic">
            New Road, Mattanchery
          </span>
          <br />
          <br />
          cordially invite your esteemed presence with family on the occasion
          of the marriage reception of their beloved son
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.45 }}
          className="font-script text-[#F0D78C] text-5xl sm:text-6xl mt-8 shimmer-gold"
        >
          Mohamed Niyas N.
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.55 }}
          className="font-serif-el tracking-[0.35em] uppercase text-[11px] text-[#E6C06A] my-4"
        >
          &mdash; and &mdash;
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.6 }}
          className="font-script text-[#F0D78C] text-5xl sm:text-6xl shimmer-gold"
        >
          Hanna Hashim
        </motion.p>

        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.7 }}
          className="font-serif-el italic text-[#F6E8C6] text-sm mt-3"
        >
          D/o. Mr. Hashim P. S. &amp; Mrs. Shinu Hashim
          <br />
          <span className="text-xs tracking-[0.2em] not-italic text-[#D8C487]">
            Pazhayampallil House, Nadackal, Erattupetta
          </span>
        </motion.p>

        <motion.div
          {...fade}
          transition={{ ...fade.transition, delay: 0.8 }}
          className="mt-14 border border-[#E6C06A]/40 px-6 sm:px-10 py-10 bg-[#5C101D]/40 backdrop-blur-[2px]"
        >
          <p className="font-serif-el tracking-[0.35em] uppercase text-[11px] text-[#E6C06A]">
            Insha Allah
          </p>
          <p
            className="font-serif-el text-[#FDFBF7] text-2xl sm:text-3xl mt-4"
            data-testid="reception-date"
          >
            {RECEPTION.date}
          </p>
          <div className="gold-divider gold-divider-solid my-4">
            <span className="font-script text-2xl text-[#E6C06A]">◆</span>
          </div>
          <p
            className="font-serif-el text-[#F0D78C] text-xl sm:text-2xl"
            data-testid="reception-time"
          >
            {RECEPTION.time}
          </p>
          <p
            className="font-sans-el text-[#F6E8C6] text-sm mt-4 tracking-wide"
            data-testid="reception-venue"
          >
            {RECEPTION.venue}
            <br />
            <span className="text-[#D8C487] text-xs tracking-[0.2em] uppercase">
              {RECEPTION.city}
            </span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              href={RECEPTION.maps}
              target="_blank"
              rel="noreferrer"
              className="btn-el btn-el-dark"
              data-testid="reception-maps-btn"
            >
              <MapPin size={14} strokeWidth={1.4} /> View Map
            </a>
            <a
              href={RECEPTION.cal}
              target="_blank"
              rel="noreferrer"
              className="btn-el btn-el-dark"
              data-testid="reception-calendar-btn"
            >
              <Calendar size={14} strokeWidth={1.4} /> Add to Calendar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
