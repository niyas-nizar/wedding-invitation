import React from "react";

export const Ornament = ({ className = "", color = "#C5A059" }) => (
  <svg
    viewBox="0 0 120 40"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M2 20 L40 20" stroke={color} strokeWidth="1" />
    <path d="M80 20 L118 20" stroke={color} strokeWidth="1" />
    <path
      d="M45 20 C50 10, 55 10, 60 20 C65 30, 70 30, 75 20"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <circle cx="42" cy="20" r="1.5" fill={color} />
    <circle cx="78" cy="20" r="1.5" fill={color} />
    <circle cx="60" cy="20" r="2" fill={color} />
  </svg>
);

export const CornerVine = ({ className = "", color = "#C5A059" }) => (
  <svg
    viewBox="0 0 80 80"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 4 C 30 8, 40 18, 48 36 M 4 4 C 8 30, 18 40, 36 48 M 20 6 C 30 12, 36 22, 40 34 M 6 20 C 12 30, 22 36, 34 40"
      stroke={color}
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    <circle cx="48" cy="36" r="2" fill={color} />
    <circle cx="36" cy="48" r="2" fill={color} />
    <circle cx="40" cy="34" r="1.2" fill={color} />
    <circle cx="34" cy="40" r="1.2" fill={color} />
    <path d="M24 24 C 30 22, 36 28, 34 34" stroke={color} strokeWidth="0.8" fill="none" />
  </svg>
);

export const CrescentStar = ({ className = "", color = "#C5A059" }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M28 20 A10 10 0 1 1 20 10 A7.5 7.5 0 1 0 28 20 Z"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M30 9 L30.8 11 L33 11.3 L31.4 12.8 L31.8 15 L30 13.9 L28.2 15 L28.6 12.8 L27 11.3 L29.2 11 Z"
      fill={color}
    />
  </svg>
);
