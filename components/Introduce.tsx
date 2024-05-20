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
        <div className="flex items-center  justify-center rounded-3xl bg-gray-400 py-10">
          <div className="w-3/10 mb-4 max-h-[100px] max-w-[100px] flex-shrink-0">
            <img
              src="https://em-content.zobj.net/source/apple/391/man-technologist_1f468-200d-1f4bb.png"
              loading="lazy"
              alt="iOS 17.4"
              className="h-full w-auto"
            ></img>
            {/* <img
            src="https://em-content.zobj.net/source/telegram/386/man-technologist_1f468-200d-1f4bb.webp"
            loading="lazy"
            alt="Telemoji (November 2023)"
            className="h-full w-auto"
          /> */}
          </div>

          <div className="w-7/10 pl-10">
            <h1 className="mb-4 text-2xl font-bold">BE 경우 (Kevin)</h1>
            <p className="text-base">반갑습니다! 👋</p>
            <p className="text-base">
              차별화된 금융 서비스를 세상 밖에 내보내고 싶은 개발자 입니다. 🔥
            </p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
