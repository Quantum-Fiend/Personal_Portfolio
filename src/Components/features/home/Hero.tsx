import HeroText from "./HeroTextAnimation";

import HeroImage from "./HeroImage";
import HeroActions from "@/components/features/home/HeroAction";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center px-6 sm:px-12 md:px-24 lg:px-32">
      <div className="w-full max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-400 tracking-[0.2em] mb-6 text-4xl md:text-5xl lg:text-7xl">
              ✦ HELLO...!
              <div className="w-32 h-0.5 bg-linear-to-r from-white/70 to-transparent mt-4 mx-auto md:mx-0" />
            </p>

            <HeroText />

            <h2 className="mt-3 text-white font-semibold border border-white/20 px-6 py-3 rounded-full w-fit">
              Software Engineer | Full Stack Engineer
            </h2>

            <p className="mt-6 text-gray-400 max-w-md">
              I’m a Full Stack Developer building scalable applications.
            </p>
            <p className="mt-6 sm:mt-8 text-gray-400 max-w-md sm:text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
              I’m a Full Stack Software Developer and Engineer passionate about
              building scalable, efficient Software | web applications. I focus
              on clean code and creating seamless user experiences using modern
              technologies.
            </p>

            <HeroActions />
          </div>

          {/* RIGHT */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
