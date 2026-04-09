"use client";

import { FaInstagram, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialBar() {
  return (
    <>
      {/* Desktop (Right Side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5 z-50">
        <div className="w-px h-16 bg-white/30"></div>

        <a href="#" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="#" className="icon linkedin">
          <FaLinkedinIn />
        </a>
        <a href="#" className="icon github">
          <FaGithub />
        </a>
        <a href="#" className="icon email">
          <MdEmail />
        </a>
        <a href="#" className="icon discord">
          <FaDiscord />
        </a>

        <div className="w-px h-16 bg-white/30"></div>
      </div>

      {/* Mobile (Bottom Bar) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex md:hidden gap-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 z-50">
        <a href="#" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="#" className="icon linkedin">
          <FaLinkedinIn />
        </a>
        <a href="#" className="icon github">
          <FaGithub />
        </a>
        <a href="#" className="icon email">
          <MdEmail />
        </a>
        <a href="#" className="icon discord">
          <FaDiscord />
        </a>
      </div>
    </>
  );
}
