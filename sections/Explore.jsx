"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText, TitleText, ExploreCard } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
const Explore = () => {

  const [Active, setActive] = useState('world-2')

  return(
  <section className={`${styles.innerWidth}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Choose the World you want <br className="md:block hidden" /> to
            explore
          </>
        }
        textStyles="text-center"
      />

      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 px-[30px] ">

        {exploreWorlds.map((world,index)=>(
          <ExploreCard 
            key={world.id}
            {...world}
            index={index}
            Active={Active}
            handleClick={setActive}
          />
        ))}

      </div>
    </motion.div>
  </section>
  )
};

export default Explore;
