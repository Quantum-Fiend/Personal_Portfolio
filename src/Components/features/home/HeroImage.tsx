"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="relative w-full md:w-1/2 flex items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* cursor light (soft) */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{
          left: position.x - 250,
          top: position.y - 250,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.12 }}
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ================= MAIN IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-80 sm:w-112.5 md:w-130 lg:w-6xl aspect-square"
      >
        {/* PREMIUM BORDER WRAPPER */}
        <div className="relative w-full flex justify-center">
          {/* MAIN WRAPPER */}
          <div className="relative top-4 w-full sm:w-80 md:w-96 lg:w-120 xl:w-130 aspect-square">
            {/* BORDER WRAPPER */}
            <div className="relative w-full h-full p-0.5 bg-linear-to-tr from-gray-50 via-gray/5 to-transparent">
              {/* IMAGE CARD */}
              <div className="relative w-full h-full overflow-hidden rounded-[3rem_1rem_3rem_1rem]">
                <Image
                  src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                  alt="profile"
                  priority
                  fill
                  className="object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* TOP LEFT BORDER */}
            <div className="absolute top-0 left-0 w-14 h-14 sm:w-16 sm:h-16 border-t border-l border-gray-400/50 rounded-tl-3xl pointer-events-none" />

            {/* BOTTOM RIGHT BORDER */}
            <div className="absolute bottom-0 right-0 w-14 h-14 sm:w-16 sm:h-16 border-b border-r border-gray-400/50 rounded-br-3xl pointer-events-none" />
          </div>
        </div>

        {/* SECONDARY IMAGE */}
        <div className="absolute top-6 right-2 lg:top-0 lg:right-0 translate-x-1/3 -translate-y-1/3">
          <div className="relative w-16 h-16 sm:w-15 sm:h-15 md:w-20 md:h-24 lg:w-28 lg:h-28">
            {/* ===== OUTER ENERGY RING ===== */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />
            <div className="absolute inset-2 rounded-full border border-gray-400/10 animate-[spin_12s_linear_infinite]" />

            {/* ===== SVG CORE ===== */}
            <svg
              viewBox="0 0 128 128"
              className="relative z-10 w-full h-full text-white drop-shadow-xl"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* LEFT BRACKET { */}
              <path
                d="M52 18
           C34 18, 34 36, 34 46
           C34 56, 26 60, 18 64
           C26 68, 34 72, 34 82
           C34 92, 34 110, 52 110"
              />

              {/* RIGHT BRACKET } */}
              <path
                d="M76 18
           C94 18, 94 36, 94 46
           C94 56, 102 60, 110 64
           C102 68, 94 72, 94 82
           C94 92, 94 110, 76 110"
              />

              {/* CORE ENGINE NODE */}
              <circle cx="64" cy="64" r="5" />

              {/* CONNECTION LINES (SYSTEM THINKING) */}
              <path d="M44 64 H56" />
              <path d="M72 64 H84" />
            </svg>

            {/* ===== GLOW FIELD ===== */}
            <div className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/5 blur-2xl rounded-full opacity-60" />

            {/* ===== FLOATING DATA DOTS ===== */}
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            <div className="absolute bottom-4 left-3 w-1 h-1 bg-gray-300 rounded-full opacity-70 animate-pulse" />
          </div>
        </div>
        {/* ================= GLOW DOTS ================= */}

        {/* dot 1 */}
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-8 w-2 h-2 bg-white rounded-full blur-[20px]"
        />

        {/* dot 2 */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-12 right-10 w-1.5 h-1.5 bg-gray-300 rounded-full"
        />
      </motion.div>
    </div>
  );
}