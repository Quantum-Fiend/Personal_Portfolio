"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroText() {
  const textRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const text = "MY NAME IS";
    const name = "TUSHAR SINGH";

    let i = 0;

    // TYPE TEXT
    const typeText = () => {
      if (textRef.current && i < text.length) {
        textRef.current.textContent += text[i];
        i++;
        setTimeout(typeText, 60);
      } else {
        setTimeout(typeName, 400);
      }
    };

    let j = 0;

    // TYPE NAME
    const typeName = () => {
      if (nameRef.current && j < name.length) {
        nameRef.current.textContent += name[j];
        j++;
        setTimeout(typeName, 70);
      } else {
        setDone(true);
      }
    };

    typeText();
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="
        text-4xl sm:text-5xl lg:text-7xl font-bold
        bg-linear-to-r from-white via-gray-300 to-gray-500
        bg-clip-text text-transparent
        leading-tight
      "
    >
      <span ref={textRef} className="block min-h-[1.2em]"></span>

      <span className="block min-h-[1.2em]">
        <span ref={nameRef}></span>
        <span className={done ? "opacity-0" : "animate-pulse"}>|</span>
      </span>
    </motion.h1>
  );
}
