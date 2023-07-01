'use client';
import { motion } from "framer-motion";
import {TypingText, TitleText, NewFeatures } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer,planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}
      className={`${styles.innerWidth} mx-auto
      flex lg:flex-row flex-col gap-8`}
    >
     
      
      <motion.div variants={fadeIn('left','tween',0.2,1)}
      className="flex-[0.75] flex justify-center flex-col"
      >

        <TypingText title="| What's New"/>
        <TitleText title={<>What's new about metaverse</>}/>
            <div className="mt-[31px] flex flex-row max-w-[370px] gap-[24px] ">

              {newFeatures.map((feature)=>(
                <NewFeatures title={feature.title} {...feature}/>
              ))}

            </div>
      </motion.div>

      <motion.div variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}      
      >
        <img alt="get-started" src="/whats-new.png" className="w-[90%] h-[90%] object-contain"/>
        
      </motion.div>



    </motion.div>
   
  </section>
);

export default WhatsNew;
