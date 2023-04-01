import React from 'react'
import { stats } from "../constants";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="flex-row flex-wrap">
      {stats.map((stat) => (
        <div 
         key={stat.id} 
         className={`flex flex-row justify-start items-center md:mr-14`}
        >
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{  delay: 0.25, duration: 0.5 }}
           variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
           }} 
          >
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-[#14213D]'>{stat.value}</h4>
          </motion.div>

          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.5, duration: 0.5 }}
           variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
           }} 
          >
            <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-[#14213D] uppercase ml-3'>{stat.title}</p>
          </motion.div>
        </div>
      ))}
    </section>
  )
}

export default Stats;
