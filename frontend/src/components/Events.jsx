import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Ornament, CrescentStar } from "./Ornaments";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const EVENTS = [
  {
    id: "nikkah",
    label: "The Nikkah",
    date: "Sunday, 10 May 2026",
    time: "12:00 Noon",
    venue: "Century Staples Convention Centre",
    city: "Erattupetta",
    maps: "https://maps.google.com/?q=Century+Staples+Convention+Centre+Erattupetta",
    cal:
      "https://www.google.com/calendar/render?action=TEMPLATE" +
      "&text=Nikkah%20%E2%80%94%20Hanna%20and%20Niyas" +
      "&dates=20260510T063000Z/20260510T083000Z" +
      "&details=Nikkah%20ceremony%20of%20Hanna%20and%20Niyas" +
      "&location=Century%20Staples%20Convention%20Centre%2C%20Erattupetta",
  },
  {
    id: "reception",
    label: "The Reception",
    date: "Monday, 11 May 2026",
    time: "7:00 p.m. onwards",
    venue: "Nehru Memorial Town Hall",
    city: "Mattanchery",
    maps: "https://maps.google.com/?q=Nehru+Memorial+Town+Hall+Mattanchery",
    cal:
      "https://www.google.com/calendar/render?action=TEMPLATE" +
      "&text=Reception%20%E2%80%94%20Hanna%20and%20Niyas" +
      "&dates=20260511T133000Z/20260511T170000Z" +
      "&details=Reception%20of%20Hanna%20and%20Niyas" +
      "&location=Nehru%20Memorial%20Town%20Hall%2C%20Mattanchery",
  },
];

function EventCard({ e, delay }) {
  return (
    <motion.article
      {...fade}
      transition={{ ...fade.transition, delay }}
      className="relative bg-white/55 backdrop-blur-[3px] border border-[rgba(197,160,89,0.4)] px-7 sm:px-10 py-12 text-center"
      data-testid={`event-card-${e.id}`}
    >
      <p className="font-serif-el tracking-[0.35em] uppercase text-[11px] text-[#A88842]">
        {e.label}
      </p>
      <p
        className="font-serif-el text-[#2C2A29] text-xl sm:text-2xl mt-5"
        data-testid={`${e.id}-date`}
      >
        {e.date}
      </p>
      <div className="gold-divider gold-divider-solid my-4">
        <span className="font-script text-xl text-[#C5A059]">◆</span>
      </div>
      <p
        className="font-serif-el text-[#7A1B28] text-lg sm:text-xl"
        data-testid={`${e.id}-time`}
      >
        {e.time}
      </p>
      <p
        className="font-sans-el text-[#4A4A4A] text-sm mt-4 tracking-wide"
        data-testid={`${e.id}-venue`}
      >
        {e.venue}
        <br />
        <span className="text-[#888] text-[11px] tracking-[0.2em] uppercase">
          {e.city}
        </span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        <a
          href={e.maps}
          target="_blank"
          rel="noreferrer"
          className="btn-el"
          data-testid={`${e.id}-maps-btn`}
        >
          <MapPin size={14} strokeWidth={1.4} /> View Map
        </a>
        <a
          href={e.cal}
          target="_blank"
          rel="noreferrer"
          className="btn-el"
          data-testid={`${e.id}-calendar-btn`}
        >
          <Calendar size={14} strokeWidth={1.4} /> Add to Calendar
        </a>
      </div>
    </motion.article>
  );
}

export default function Events() {
  return (
    <section
      id="events"
      className="relative w-full py-10 sm:py-14 px-6"
      data-testid="events-section"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div {...fade} className="flex justify-center mb-6">
            <CrescentStar className="w-8 h-8" />
          </motion.div>

          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
            className="font-arabic text-[#7A1B28] text-3xl sm:text-4xl"
            data-testid="insha-allah-arabic"
          >
            إن شاء الله
          </motion.p>

          <motion.h2
            {...fade}
            transition={{ ...fade.transition, delay: 0.2 }}
            className="font-serif-el tracking-[0.4em] uppercase text-[12px] text-[#A88842] mt-5"
          >
            Save the Date
          </motion.h2>

          <motion.div
            {...fade}
            transition={{ ...fade.transition, delay: 0.3 }}
            className="my-8"
          >
            <Ornament className="w-32 h-8 mx-auto opacity-80" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
          {EVENTS.map((e, i) => (
            <EventCard key={e.id} e={e} delay={0.15 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
