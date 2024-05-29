'use client'

import { motion } from 'framer-motion'
import Link from '../Link'
import Introduce from './Introduce'

const AboutMe = ({ aboutMeData }) => {
  return (
    <>
      <motion.div whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.2 }}>
        <Link
          href={`/portfolio`}
          className="border-1 container flex w-full flex-wrap rounded-xl border-solid border-[#414af2]"
        >
          <Introduce introduce={aboutMeData.introduce} />
        </Link>
      </motion.div>
      {/* <Modal>
        <h1 className="text-black">안녕하신가</h1>
      </Modal> */}
    </>
  )
}

export default AboutMe
