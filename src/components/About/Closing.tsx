"use client";
import React from "react";
import Header3 from "../Header3";
import { easeInOut, motion } from "framer-motion";

function Closing() {
  const line1 = "Welcome to my Spotify Playlist";
  const line2 = "Just Listen this Bangers";

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
    <section className="mt-[8vh] mb-[4vh] sm:my-[5vh] md:my-[8vh]">
      <Header3 phrase={line1} className="indent-[10%]" />
      <Header3 phrase={line2} />

      <motion.div
        variants={appear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="flex mt-10"
      >
        <div className="flex-1  md:block"></div>
        <div className="flex-[2]">
          <iframe
            title="Pritam Playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/2ZZ5sjkNSP6OTNJbDezpWI"
            width="100%"
            height="152"
            // frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}

export default Closing;
