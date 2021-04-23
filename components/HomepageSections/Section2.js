import React from "react";
import { motion } from "framer-motion";

const SANS_BIG =
  "text-softWhite leading-10 font-black text-5xl sm:text-7xl mx-8 md:text-8xl flex flex-col gap-1 mt-2 z-10";

const SERIF =
  "font-hand text-3xl sm:text-4xl md:text-5xl mt-4 sm:mt-7 mx-24 text-softWhite";
const Section2 = () => {
  return (
    <div className="section2 stacking-slide text-center w-full h-screen flex flex-col justify-center relative overflow-hidden">
      <p className={`${SERIF}`}>We are a</p>
      <p className={`${SANS_BIG}`}>Next Generation</p>
      <p className={`${SANS_BIG} leading-12`}>Digital Media Agency</p>
      <p className={`${SERIF}`}>Understanding your business culture.</p>

      {/* Round Decorations */}
      {/* Left */}
      <motion.div
        className={`w-256 h-256 circ1200:w-96 circ1200:h-96 circ1400:w-128 circ1400:h-128 circ1600:w-192 circ1600:h-192  rounded-full bg-gradientStart
              absolute -left-52 -top-40 shadow-gradientLeft`}
        animate={{
          rotate: 360,
        }}
        whileHover={{ scale: 1.6 }}
        transition={{
          scale: { duration: 0.4, ease: "anticipate" },
          rotate: { duration: 5, repeat: "Infinity", ease: "anticipate" },
        }}
      ></motion.div>

      {/* Right */}
      <motion.div
        className={`w-256 h-256 circ1200:w-96 circ1200:h-96 circ1400:w-128 circ1400:h-128 circ1600:w-192 circ1600:h-192 rounded-full rightBottomRoundDecor rotate-180 
  absolute -right-52 -bottom-40 shadow-gradientRight`}
        animate={{
          rotate: 360,
        }}
        whileHover={{ scale: 1.6 }}
        transition={{
          scale: { duration: 0.4, ease: "anticipate" },
          rotate: { duration: 5, repeat: "Infinity", ease: "anticipate" },
        }}
      ></motion.div>
    </div>
  );
};

export default Section2;
