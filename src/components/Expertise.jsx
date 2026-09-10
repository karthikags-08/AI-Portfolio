import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent
} from 'framer-motion';

const TagCard = ({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer =
      cardRect.top - containerRect.top;

    const containerHeight = containerRect.height;

    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || 'fade-up'}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-[2px] relative flex flex-col items-center transition-all duration-700 z-10 ${className} ${
        isActive
          ? 'bg-[#8ECAE6] shadow-[0_18px_45px_rgba(142,202,230,0.35)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >

      {/* Hole Punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      {/* Inner Card */}
      <div
        className={`w-full h-full rounded-[1.8rem] mt-8 p-8 flex flex-col min-h-[220px] transition-all duration-700 ${
          isActive ? 'bg-white' : 'bg-[#f7f9fa]'
        }`}
      >

        {/* Number + Indicator */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-xl font-bold font-serif italic transition-colors duration-700 ${
              isActive ? 'text-[#219EBC]' : 'text-gray-400'
            }`}
          >
            {number}
          </span>

          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${
              isActive
                ? 'bg-[#8ECAE6] shadow-[0_0_12px_rgba(142,202,230,0.9)]'
                : 'bg-gray-200'
            }`}
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-black mb-3 tracking-tight text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed font-medium text-gray-500">
          {text}
        </p>

        {/* Bottom Accent */}
        <div
          className={`mt-auto pt-5 transition-all duration-700 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-[3px] w-12 rounded-full bg-[#8ECAE6]" />
        </div>

      </div>
    </div>
  );
};


const Expertise = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >

      <div className="max-w-6xl mx-auto relative md:h-[1450px]">

        {/* ================= HEADER ================= */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[500px] z-20 mb-16 md:mb-0"
        >

          {/* Label */}
          <div className="inline-flex items-center border border-[#8ECAE6] rounded-full px-5 py-1.5 text-sm text-[#219EBC] font-bold mb-8 bg-[#8ECAE6]/10">
            My Expertise
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Learning &
            <br />
            Building with Technology
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-base md:text-lg max-w-md font-medium leading-relaxed">
            Exploring software development, web application architecture,
            and AI/ML while building practical applications and continuously
            developing my technical skills.
          </p>

        </div>


        {/* ================= DESKTOP LINE ================= */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1450px] pointer-events-none z-0"
          viewBox="0 0 1000 1450"
          preserveAspectRatio="none"
        >

          {/* Background Dashed Path */}
          <path
            d="
              M 700,280
              C 480,330 220,420 300,620
              C 390,820 760,760 700,980
              C 650,1180 430,1200 350,1320
            "
            fill="none"
            stroke="#dbeafe"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          {/* Animation Mask */}
          <mask id="path-mask">
            <motion.path
              d="
                M 700,280
                C 480,330 220,420 300,620
                C 390,820 760,760 700,980
                C 650,1180 430,1200 350,1320
              "
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          {/* Animated Sky Blue Path */}
          <path
            d="
              M 700,280
              C 480,330 220,420 300,620
              C 390,820 760,760 700,980
              C 650,1180 430,1200 350,1320
            "
            fill="none"
            stroke="#8ECAE6"
            strokeWidth="3"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-[0_0_4px_rgba(142,202,230,0.5)]"
          />

        </svg>


        {/* ================= MOBILE LINE ================= */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >

          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#dbeafe"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>

          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#8ECAE6"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />

        </svg>


        {/* ================= CARDS ================= */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

          {/* CARD 01 */}
          <TagCard
            number="01"
            title="Software Development"
            text="Interested in software development with a focus on building practical applications, solving problems, and continuously improving technical skills."
            className="md:absolute md:top-[180px] md:right-[5%] lg:right-[8%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />


          {/* CARD 02 */}
          <TagCard
            number="02"
            title="Web Application Architecture"
            text="Interested in designing and developing web applications using programming, frontend technologies, databases, and application architecture concepts."
            className="md:absolute md:top-[540px] md:left-[5%] lg:left-[8%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />


          {/* CARD 03 */}
          <TagCard
            number="03"
            title="AI / Machine Learning"
            text="Exploring AI and machine learning through projects involving LSTM and Transformer models, data processing, prediction, and model performance comparison."
            className="md:absolute md:top-[820px] md:right-[5%] lg:right-[12%] rotate-1 md:rotate-3"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />


          {/* CARD 04 */}
          <TagCard
            number="04"
            title="Problem Solving & Learning"
            text="Focused on solving problems, building practical solutions, and continuously learning new technologies as a Computer Science and Engineering student."
            className="md:absolute md:top-[1150px] md:left-[15%] lg:left-[22%] -rotate-1 md:-rotate-3"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />


          {/* ================= END TEXT ================= */}
          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1370px] left-[60%] font-['Caveat',cursive] text-3xl text-[#219EBC] rotate-6"
          >
            Learning. Building. Growing!
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;