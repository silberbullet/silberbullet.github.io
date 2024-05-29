'use client'

import { motion } from 'framer-motion'
import Introduce from './Introduce'

const AboutMe = ({ aboutMeData }) => {
  return (
    <>
      <motion.div whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.2 }}>
        <button className="border-1 container flex w-full flex-wrap rounded-xl border-solid border-[#414af2]">
          <Introduce introduce={aboutMeData.introduce} />
        </button>
      </motion.div>
    </>
  )
}

export default AboutMe
