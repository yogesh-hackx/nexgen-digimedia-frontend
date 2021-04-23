import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

/** eslint-ignore react/react-in-jsx-scope */
export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Nexgen Digimedia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <main>
        {/* hero section */}
        <div className="heroContainer text-center bg-softBlack w-full h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="text-lightViolet font-bold text-md sm:text-lg md:text-xl z-10">
            The Next-Gen Digital Media Agency
          </div>

          <div className="headline text-softWhite font-black text-5xl sm:text-7xl md:text-8xl flex flex-col gap-1 mt-4 z-10">
            <div>Media,</div>
            <div>
              Marketing{" "}
              <span className="font-hand text-3xl sm:text-5xl md:text-6xl">
                &
              </span>
            </div>
            <div>Managerial.</div>
          </div>

          <div className="text-softWhite font-bold text-xl sm:text-2xl md:text-3xl mt-6 md:mt-8 z-10">
            Innovating the way your business communicates.
          </div>

          <div className="z-10">
            <button className="bg-gradient-to-br from-gradientStart to-gradientEnd px-6 py-2 mt-8 text-xl font-bold text-white rounded-full">
              Connect with us
            </button>
          </div>
          {/* Round Decorations */}
          {/* Left */}
          <motion.div
            className={`roundDecorBlack w-256 h-256 circ1200:w-96 circ1200:h-96 circ1400:w-128 circ1400:h-128 circ1600:w-192 circ1600:h-192  rounded-full bg-softBlack
              absolute -left-60 -bottom-40 shadow-blackLeft`}
            initial={{ scale: 4, zIndex: 30 }}
            animate={{
              scale: 1.5,
              zIndex: 0,
              rotate: 180,
            }}
            transition={{ delay: 0.7, duration: 2, ease: "anticipate" }}
          ></motion.div>

          {/* Right */}
          <motion.div
            className={`roundDecorBlack w-256 h-256 circ1200:w-96 circ1200:h-96 circ1400:w-128 circ1400:h-128 circ1600:w-192 circ1600:h-192 rounded-full bg-softBlack 
              absolute -right-60 -top-40 shadow-blackLeft`}
            initial={{ scale: 4, zIndex: 30 }}
            animate={{
              scale: 1.5,
              zIndex: 0,
            }}
            transition={{ delay: 0.7, duration: 2, ease: "anticipate" }}
          ></motion.div>
        </div>
      </main>
    </div>
  );
}
