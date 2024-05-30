'use client'

import { useModal } from '@/components/modal/useModal'
import { motion } from 'framer-motion'
import Introduce from './Introduce'

const AboutMe = ({ aboutMeData }) => {
  const { isModalOpen, openModal, ModalContent, Modal, setIsModalOpen } = useModal()

  const handleOpenModal = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    openModal(() => import('@/app/portfolio/client/page'))
  }

  return (
    <>
      <motion.div whileHover={{ scale: [null, 1.2, 1.1] }} transition={{ duration: 0.2 }}>
        <button
          className="border-1 container flex w-full flex-wrap rounded-xl border-solid border-[#414af2]"
          onClick={handleOpenModal}
        >
          <Introduce introduce={aboutMeData.introduce} />
        </button>
      </motion.div>
      {isModalOpen && ModalContent && (
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <ModalContent />
        </Modal>
      )}
    </>
  )
}

export default AboutMe
