'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'

const StackProgress = () => {
  const width = 42
  const height = 42

  // 프로그레스 바의 초기값을 설정 (0에서 1 사이의 값)
  const progress = useMotionValue(0.5) // 50% 채워진 상태

  const scaleX = useSpring(progress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <div className="flex items-center rounded-3xl bg-white p-5">
        <div className="mr-4">
          <img
            width={width}
            height={height}
            src="https://img.icons8.com/fluency/42/vuejs.png"
            alt="Vue.js"
          />
        </div>
        <div className="relative flex-1">
          <div
            className="absolute left-0 right-0 top-0 flex justify-between px-2"
            style={{ top: '-1rem' }}
          >
            <span className="text-xs text-black">초급</span>
            <span className="text-xs text-black">중급</span>
            <span className="text-xs text-black">고급</span>
          </div>
          <div className="relative h-4 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="h-full bg-blue-500"
              style={{ scaleX, transformOrigin: '0% 50%' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
            >
              <div className="absolute inset-0 flex justify-between">
                <span className="text-xs text-white">|</span>

                <span className="text-xs text-white">|</span>
                <span className="text-xs text-white">|</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StackProgress
