import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Make sure this path is correct
import { staggerContainer } from "../utils/motion"; // Ensure this is defined

const SectionWrapper = (Component, idName) => {
  return function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}></span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;