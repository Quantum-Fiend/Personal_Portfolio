"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroImage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="md:w-1/2 flex justify-center relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* Glow */}
      <motion.div
        className="absolute pointer-events-none z-0"
        animate={{
          left: position.x - 150,
          top: position.y - 150,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
        style={{
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Main Image */}
      <div
        className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 overflow-hidden border border-gray-200"
        style={{ borderRadius: "2rem 0 2rem 0" }}
      >
        <Image
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt="profile"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating image */}
      <div
        className="absolute z-20 top-0 right-0 w-40 h-40 overflow-hidden border"
        style={{
          borderRadius: "0 4rem 0 4rem",
          transform: "translate(40%, -40%)",
        }}
      >
        <Image
          src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          alt="overlay"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
