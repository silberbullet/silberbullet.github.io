'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keyup', handleKeyUp)
    } else {
      window.removeEventListener('keyup', handleKeyUp)
    }

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return null
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => {
          if (overlayRef.current !== e.target) return
          handleClose()
        }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 max-h-[80vh] w-full -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-gray-700 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2"
          initial={{ scale: 0.9, opacity: 0, y: '-50%', x: '-50%' }}
          animate={{ scale: 1, opacity: 1, y: '-50%', x: '-50%' }}
          exit={{ scale: 0.9, opacity: 0, y: '-50%', x: '-50%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-end">
            <button className="text-xl hover:text-zinc-700" onClick={handleClose}>
              닫기
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById('modal-root')!
  )
}

export default Modal
