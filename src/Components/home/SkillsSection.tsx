"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 95 },
  { name: "React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS", level: 96 },
  { name: "Framer Motion", level: 85 },
  { name: "UI/UX Design", level: 80 },
];

export default function Skills() {
  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      {/* 🌌 Background Glow */}
      <div className="absolute -top-37.5 -left-30 w-125 h-125 bg-white/10 blur-[140px] rounded-full"></div>
      <div className="absolute -bottom-45 -right-30 w-112.5 h-112.5 bg-gray-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ✨ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-5xl font-bold">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="w-24 h-0.5 bg-linear-to-r from-gray-300 to-transparent mx-auto mt-3"></div>
        </motion.div>

        {/* 📦 Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group bg-white/5 border border-gray-800 backdrop-blur-xl rounded-2xl p-6 overflow-hidden"
            >
              {/* Glow hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/5 via-gray-500/10 to-transparent"></div>

              {/* Skill Header */}
              <div className="flex justify-between items-center mb-4 relative z-10">
                <h3 className="text-lg font-semibold text-gray-200">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden relative z-10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-linear-to-r from-gray-300 via-gray-400 to-white rounded-full"
                />
              </div>

              {/* Floating dot */}
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full blur-[1px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
