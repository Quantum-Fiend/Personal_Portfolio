"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="w-full flex justify-center lg:translate-x-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Image
          src="/Banner.png"
          alt="hero banner"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="
            w-full 
            h-auto 
			rounded-full
            object-contain 
            scale-110 
            md:scale-125 
            lg:scale-150
            drop-shadow-2xl
          "
        />
      </motion.div>
    </div>
  );
}
