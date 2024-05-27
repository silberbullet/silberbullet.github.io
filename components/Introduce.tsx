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
        <div className="title-image-container">
          <div className="title">
            <h1>안녕하세요,</h1>
            <h1>백엔드 개발자</h1>
            <h1>박경우입니다.</h1>
            <div>
              <p className="subtitle">방문해 주셔서 감사합니다.</p>
            </div>
          </div>
          <div className="content">
            <h3>사용자 경험을 중요하게 생각합니다.</h3>
            <p>차별화된 서비스 제공을 위해 성장하는 것을 좋아합니다.</p>
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
