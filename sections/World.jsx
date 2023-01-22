"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      className={`${styles.innerWidth} mx-auto flex items-center flex-col gap-8`}
    >
      <TypingText title="People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles={"text-center"}
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px]  w-full h-[550px] md:flex hidden"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <motion.div
          variants={zoomIn(1, 0.6)}
          className="glow absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
        >
          <img src="/people-01.png" alt="people-01" className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={zoomIn(1.2, 0.6)}
          className="glow absolute top-[7rem] right-[33rem] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
        >
          <img src="/people-02.png" alt="people-02" className="w-full h-full" />
        </motion.div>

        <motion.div
          variants={zoomIn(1.4, 0.6)}
          className="glow absolute bottom-40 left-[10rem] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]"
        >
          <img src="/people-03.png" alt="people-03" className="w-full h-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
