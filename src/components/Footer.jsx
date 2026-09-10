import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">

        {/* Left */}
        <div className="flex flex-col gap-1">
          <p>Computer Science Undergraduate</p>
          <p>AI Product Engineering</p>
          <p>Software Development</p>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-1 md:items-center">
          <p>B.E. Computer Science & Engineering</p>
          <p>Graduating 2027</p>

          <a
            href="#projects"
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            View Projects
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-1 md:items-end">
          <p>Velalar College of Engineering</p>
          <p>Technology, Erode</p>
        </div>

      </div>

      {/* Huge Name */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">

        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          Karthika
        </h2>

      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">

        {/* Left */}
        <div className="flex flex-col gap-6">

          <a
            href="#contact"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold"
          >
            Get In Touch
          </a>

          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Karthika G S
          </p>

        </div>

        {/* Center */}
        <div className="flex flex-col gap-1 md:items-center">

          <p className="text-white/70">
            Java • SQL • Web • AI/ML
          </p>

          <p className="text-white/70">
            Learning • Building • Growing
          </p>

        </div>

        {/* Right */}
        <div className="flex flex-col gap-1 md:items-end">

          <a
            href="#home"
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1"
          >
            Back to Top
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;