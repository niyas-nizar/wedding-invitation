import React, { useEffect, useState } from "react";

const target = new Date("2026-05-10T12:00:00+05:30").getTime();

function getRemaining() {
  const diff = target - new Date().getTime();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function Countdown() {
  const [t, setT] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    { label: "Days", v: t.d },
    { label: "Hours", v: t.h },
    { label: "Minutes", v: t.m },
    { label: "Seconds", v: t.s },
  ];

  return (
    <div
      className="flex justify-center gap-3 sm:gap-4 flex-wrap"
      data-testid="countdown-timer"
    >
      {cells.map((c) => (
        <div key={c.label} className="count-cell">
          <span
            className="font-serif-el text-3xl sm:text-4xl text-[#7A1B28] leading-none"
            data-testid={`countdown-${c.label.toLowerCase()}`}
          >
            {String(c.v).padStart(2, "0")}
          </span>
          <span className="font-sans-el text-[9px] tracking-[0.25em] uppercase text-[#A88842] mt-2">
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}
