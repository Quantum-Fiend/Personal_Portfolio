"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Project } from "./projects.data";

const IMAGE =
  "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 15 }}
        className="group relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl 
        p-5 sm:p-6 md:p-7 
        rounded-3xl border border-white/10 
        bg-white/5 backdrop-blur-xl 
        overflow-hidden shadow-lg hover:shadow-2xl 
        transition-all duration-500"
      >
        {/* Glow Background */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 via-transparent to-transparent blur-2xl pointer-events-none" />

        {/* Image */}
        <div className="relative z-10 overflow-hidden rounded-2xl mb-5 border border-white/10">
          <Image
            src={p.image || IMAGE}
            alt={p.title}
            width={900}
            height={500}
            className="w-full h-40 sm:h-48 md:h-52 object-cover 
            group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white tracking-wide">
          {p.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3 text-center leading-relaxed px-2">
          {p.desc}
        </p>

        {/* Features */}
        <div className="mt-4 sm:mt-5 space-y-1 text-center">
          {p.features.map((f, i) => (
            <p
              key={i}
              className="text-[11px] sm:text-xs text-gray-400 flex items-center justify-center gap-2"
            >
              <span className="text-white">•</span> {f}
            </p>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {p.tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full 
              border border-white/10 text-gray-300 
              bg-white/5 hover:bg-white/10 transition"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {p.live && (
            <button
              onClick={() =>
                window.open(p.live, "_blank", "noopener,noreferrer")
              }
              className="text-xs px-4 py-2 sm:px-5 sm:py-2.5 
              bg-gradient-to-r from-white via-gray-300 to-gray-400 
              text-black font-semibold rounded-full 
              hover:scale-105 active:scale-95 
              transition-all duration-300 
              flex items-center gap-2 shadow-md"
            >
              <FiExternalLink /> Live
            </button>
          )}

          {p.github && (
            <button
              onClick={() =>
                window.open(p.github, "_blank", "noopener,noreferrer")
              }
              className="text-xs px-4 py-2 sm:px-5 sm:py-2.5 
              rounded-full border border-white/20 
              hover:bg-white/10 hover:scale-105 active:scale-95
              transition-all duration-300 
              flex items-center gap-2"
            >
              <FiGithub /> Code
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
