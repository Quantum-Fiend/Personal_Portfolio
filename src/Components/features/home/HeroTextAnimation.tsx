"use client";

import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export default function HeroText() {
  const text = "MY NAME IS ";
  const name = "TUSHAR SINGH";

  const typedText = useTypingEffect(text);
  const typedName = useTypingEffect(name);

  const done = typedName === name;

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-linear-to-r from-white via-gray-400 to-gray-500 bg-clip-text text-transparent"
    >
      {typedText}
      <br />
      {typedName}
      <span className={done ? "opacity-0" : "animate-pulse"}>|</span>
    </motion.h1>
  );
}
