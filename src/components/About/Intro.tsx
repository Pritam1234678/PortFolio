"use client";
import React, { useRef } from "react";
import { spectralBridgeRegular } from "@/fonts/font";
import Image from "next/image";
import Paragraph from "../Paragraph";
import AboutMain from "../../../public/images/general/about/aboutIntro3.jpg";
import { easeInOut, motion } from "framer-motion";

function Intro() {
  const line1 = "Hi Welcome to";
  const line2 = "My About Section";

  const imageRef = useRef(null);

  const EASING = [0.83, 0, 0.17, 1];

  const rise1 = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.3,
      },
    },
  };
  
  const reveal = {
    initial: {
      height: "0%",
    },
    animate: {
      height: "auto",
      transition: {
        duration: 1,
        ease: EASING,
        delay: 0.45,
      },
    },
  };

  const appear = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="">
      <div className="flex justify-center mt-[8vh]">
        <div className="w-[85%] sm:w-[70%] lg:w-[65%] flex justify-center items-center flex-col">
          <div className="z-[10] dark:mix-blend-exclusion">
            <div className="overflow-hidden">
              <motion.h1
                variants={rise1}
                initial="initial"
                animate="animate"
                className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion text-[12vw] xs:text-[9vw] sm:text-[8vw] lg:text-[6.5vw] text-center leading-[1]`}
              >
                {line1}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={rise1}
                initial="initial"
                animate="animate"
                className={`${spectralBridgeRegular.className} dark:mix-blend-exclusion text-[12vw] xs:text-[9vw] sm:text-[8vw] lg:text-[6.5vw] text-center leading-[1]`}
              >
                {line2}
              </motion.h1>
            </div>
          </div>
          <div className="min-h-[30vh] lg:min-h-[65vh] w-full sm:w-[80%] lg:w-[60%] mt-[-3.3vh] md:mt-[-5vh] lg:mt-[-6vh]">
            <motion.div
              variants={reveal}
              initial="initial"
              animate="animate"
              className="overflow-hidden object-cover object-top z-[0]"
            >
              <motion.div
                className=""
              >
                <Image
                  src={AboutMain}
                  alt="a cocktail with a quote around it"
                  className="w-full"
                  placeholder="blur"
                  ref={imageRef}
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={appear}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="sm:w-[65%] lg:w-[50%] mt-8"
          >
            <Paragraph
              text="कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥"
              className="text-center w-[50%]"
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
