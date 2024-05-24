'use client'

import { motion } from 'framer-motion'

export default function Introduce() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="container">
          <div className="content">
            <h1>
              안녕하세요,
              <br />
              백엔드 개발자
              <br />
              박경우입니다.
            </h1>
            <p className="thanks">방문해 주셔서 감사합니다.</p>
            <div className="links">
              <a href="https://github.com/silberbullet" className="link">
                GitHub
              </a>
            </div>
          </div>
          <div className="image">
            <img src="static/images/mimoticon.png" alt="Profile" />
          </div>
        </div>
        <div className="scroll-indicator">
          <p>&#8595;</p>
        </div>
      </motion.div>
    </>
  )
}
