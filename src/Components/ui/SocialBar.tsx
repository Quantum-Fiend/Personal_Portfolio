"use client";

import { FaInstagram, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialBar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-50">
      <div className="w-px h-16 bg-white/30"></div>

      <a href="#" className="icon">
        <FaInstagram />
      </a>
      <a href="#" className="icon">
        <FaLinkedinIn />
      </a>
      <a href="#" className="icon">
        <FaGithub />
      </a>
      <a href="#" className="icon">
        <MdEmail />
      </a>
      <a href="#" className="icon">
        <FaDiscord />
      </a>

      <div className="w-px h-16 bg-white/30"></div>
    </div>
  );
}
