import { motion } from "framer-motion";
import herobg from "../../assets/herobg.png";
import mobileView from "../../assets/mobile-view.png";

const Hero = () => {
  return (
    <section className="relative mx-auto min-h-screen md:min-h-[110vh] w-full overflow-hidden pb-16">
      <picture className="pointer-events-none absolute inset-0 -z-10 h-full w-full">
        <source media="(max-width: 640px)" srcSet={mobileView} />
        <img
          src={herobg}
          alt="Hero background"
          className="max-h-full w-full object-contain object-center"
        />
      </picture>

      {/* subtle gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

      {/* left-corner scroll arrow only (no visible text) */}
      <div className="absolute left-8 bottom-14 sm:left-10 sm:bottom-14">
        <a href="#about" aria-label="Scroll down" title="Scroll down" className="flex items-center justify-center rounded-full border border-white/40 p-3 bg-transparent">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 text-white"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: "loop" }}
          >
            <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
