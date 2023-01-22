"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText, InsightCard } from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.24,
      }}
      className={`${styles.innerWidth} mx-auto flex items-center flex-col gap-8`}
    >
      <TypingText title="Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" />

      <div className="mt-[15px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
