'use client'

import { motion } from 'framer-motion'
import { Children, ReactNode, isValidElement } from 'react'

interface Props {
  children: ReactNode
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function PortfolioLayout({ children }: Props) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-300 p-5">
      {Children.map(children, (child, index) =>
        isValidElement(child) ? (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={itemVariants}
            className="my-2 w-full  p-5 text-center text-xl"
          >
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </div>
  )
}
