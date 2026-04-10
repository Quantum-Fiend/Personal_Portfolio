"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
      {/* 🌌 Animated Glow Background */}
      <div className="absolute top-[-200px] left-[-150px] w-[600px] h-[600px] bg-white/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-250px] right-[-200px] w-[550px] h-[550px] bg-gray-500/10 blur-[180px] rounded-full"></div>

      {/* 🧠 Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:35px_35px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ✨ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center lg:text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>

          <div className="w-24 h-[2px] bg-gradient-to-r from-gray-300 to-transparent mt-3 mx-auto lg:mx-0"></div>
        </motion.div>

        {/* 📦 GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 🖼️ IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Glow behind image */}
            <div className="absolute w-[420px] h-[420px] bg-white/10 blur-[130px] rounded-full"></div>

            {/* MAIN IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-[260px] sm:w-[340px] md:w-[450px] lg:w-[520px]
              overflow-hidden rounded-[2.5rem_0_2.5rem_0] border border-gray-700"
            >
              <Image
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="about"
                width={1000}
                height={1000}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            {/* 🧊 FLOATING ELEMENT 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-[-20px] right-[-10px] w-24 h-24 sm:w-32 sm:h-32
              bg-white/5 border border-gray-700 backdrop-blur-xl rounded-[0_2rem_0_2rem]
              flex items-center justify-center text-xs sm:text-sm text-gray-300"
            >
              UI/UX
            </motion.div>

            {/* 🧊 FLOATING ELEMENT 2 */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-[-30px] left-[-20px] w-28 h-28 sm:w-36 sm:h-36
              bg-white/5 border border-gray-700 backdrop-blur-xl rounded-[2rem_0_2rem_0]
              flex items-center justify-center text-xs sm:text-sm text-gray-300"
            >
              Next.js
            </motion.div>

            {/* 🧊 FLOATING DOTS */}
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-[-40px] w-3 h-3 bg-white rounded-full blur-[1px]"
            />

            <motion.div
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 right-[-40px] w-2 h-2 bg-gray-400 rounded-full"
            />
          </motion.div>

          {/* 🧠 TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-10">
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                I’m a Full Stack Developer passionate about crafting futuristic,
                high-performance digital experiences with modern UI systems.
              </p>

              <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
                I specialize in building scalable applications using Next.js,
                TypeScript, Tailwind CSS, and motion-driven interfaces that feel
                alive.
              </p>

              {/* 🧬 SKILLS */}
              <div className="flex flex-wrap gap-3 mt-8">
                {["Next.js", "React", "TypeScript", "UI/UX", "Motion UI"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1 text-sm border border-gray-700 rounded-full text-gray-300
                    hover:bg-white/10 transition duration-300"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>

              {/* 🚀 BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full 
                hover:bg-linear-to-r hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 
                hover:text-white transition-all duration-300 text-lg w-full sm:w-auto"
              >
                Explore More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
